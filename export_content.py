import markdown_to_json
import frontmatter
import os
from os.path import isfile, join
import re
import json

dir_path = "../../../working/knowledge/resume"
out_file_name = "resume.json"


def parse_link(raw_link):
    name_regex = "[^]]+"
    url_regex = "[^)]+"
    markup_regex = "\[({0})]\(\s*({1})\s*\)".format(name_regex, url_regex)
    matches = re.findall(markup_regex, raw_link)
    link = matches[0]

    return {"text": link[0], "url": link[1]}


def parse_tag(tag):
    result = tag.split("#resume/")
    return result[1]


def parse_bio(md_file, meta_data):
    return None


def parse_file(dir_path, name):
    file_name = join(dir_path, name)
    if isfile(file_name):
        with open(file_name, "r") as f:
            f_str = f.read()
            f.close()
            md_file = markdown_to_json.dictify(f_str)
            meta_data = frontmatter.loads(f_str)

            public = meta_data["public"]
            if not public:
                return None

            resume_type = parse_tag(meta_data["tags"])
            if resume_type == "bio":
                return parse_bio(md_file, meta_data)

            data_obj = {}

            if not meta_data["category"] == None:
                data_obj["type"] = meta_data["category"]

            data_obj["name"] = meta_data["name"]

            start = str(meta_data["start"])
            end = str(meta_data["end"]) if not meta_data["end"] == None else "Present"
            date = start + " - " + end

            data_obj["date"] = date
            data_obj["skills"] = (
                meta_data["skills"] if not meta_data["skills"] == None else []
            )
            data_obj["images"] = (
                meta_data["images"] if not meta_data["images"] == None else []
            )
            data_obj["description"] = md_file["Description"]
            data_obj["contributions"] = md_file["Contributions"]
            data_obj["links"] = links = [parse_link(link) for link in md_file["Links"]]

            return data_obj, resume_type


def main():
    full_data = {}
    for name in os.listdir(dir_path):
        if name == "product cupid - resume.md":
            parsed_f = parse_file(dir_path, name)
            if not parsed_f:
                continue

            obj = parsed_f[0]
            res_type = parsed_f[1]

            if res_type == "bio":
                full_data["bio"] = obj
            else:
                existing_data = full_data.get(res_type, [])
                existing_data.append(obj)
                full_data[res_type] = existing_data

    with open(out_file_name, "w") as outfile:
        json.dump(full_data, outfile)


main()
