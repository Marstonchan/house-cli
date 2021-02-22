#!/usr/bin/env node

const { program } = require('commander');
const version = require('./package.json').version;
const fs = require('fs');
const path = require('path');

program.version(version, "-v, --version");

program
    .command("create <app-name>")
    .description("使用 my-cli 创建新项目")
    .option("-d -dir <dir>", "创建目录")
    .action((name) => {
        if (fs.existsSync(path.join(process.cwd(), name))) {
            console.log('目录已经存在');
        } else {
            const create = require("./create");
            create(name)
        }
    })

program.parse(process.argv)
