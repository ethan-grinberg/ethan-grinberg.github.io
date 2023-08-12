import markdown_to_json
import frontmatter
import os
from os.path import isfile, join
import re

dir_path = "../../../working/knowledge/resume"


def parse_link(raw_link):
    name_regex = "[^]]+"
    url_regex = "[^)]+"
    markup_regex = "\[({0})]\(\s*({1})\s*\)".format(name_regex, url_regex)
    matches = re.findall(markup_regex, raw_link)
    return matches[0]


def parse_tag(tag):
    result = tag.split("#resume/")
    return result[1]


def main():
    md_files = []
    meta_datas = []

    work = []
    for name in os.listdir(dir_path):
        file_name = join(dir_path, name)
        if isfile(file_name):
            with open(file_name, "r") as f:
                f_str = f.read()
                f.close()
                md_file = markdown_to_json.dictify(f_str)
                meta_data = frontmatter.loads(f_str)
                resume_type = parse_tag(meta_data["tags"])

                md_files.append(md_file)
                meta_datas.append(meta_data)

    print(md_files[0])
    print(parse_tag(meta_datas[0]["tags"]))


main()
