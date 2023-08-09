import { readdirSync, readFileSync, writeFileSync } from 'fs';
import path from 'path';
import matter from 'gray-matter';
import {unified} from 'unified';
import remarkParse from 'remark-parse';
import remarkGfm from "remark-gfm";
import remarkFrontmatter from 'remark-frontmatter';

import mdjs from "@moox/markdown-to-json";

async function main() {
    const dirPath = '../../../working/knowledge/resume';

    const dirEntries = readdirSync(dirPath, { withFileTypes: true });

    const files = [];
    for (const f of dirEntries) {
        const filePath = path.join(dirPath, f.name);
        const rawMd = readFileSync(filePath, "utf8");

        // const frontmatter = matter(rawMd);
        // const metaData = frontmatter.data;
        // const content = frontmatter.content;

        // const file = unified()
        //             .use(remarkParse)
        //             .use(remarkGfm)
        //             .use(remarkFrontmatter, ['yaml'])
        //             .parse(rawMd);
        const file = mdjs.markdownAsJsTree(rawMd);
        console.log(file.body.children.length);
        files.push(file);
    }
    const file = files[0];
    const wFile = JSON.stringify(file);
    writeFileSync("test.json", wFile);

    // // console.log(file);
    // const children = file.body.children;
    // console.log(children[4].children)
    // for (const child of children) {
    //     console.log(child);
    // }
    
}

main();
