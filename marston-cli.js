#!/usr/bin/env node

const { program } = require('commander');
const version = require('./package.json').version;
const fs = require('fs');
const path = require('path');

const chalk = require('chalk');

const createFn = require('./create');
const deleteFn = require('./delete');

program.version(version, "-v, --version");
// 创建子项目
program
    .command("create <app-name>")
    .description("使用 my-cli 创建新项目")
    .action(createFn);
// 删除子项目
program
    .command('delete <app-name>')
    .description("删除子项目")
    .action(deleteFn);
program.parse(process.argv);
