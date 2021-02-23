const path = require('path');
const mkdirp = require('mkdirp');
const fs = require('fs');
const chalk = require('chalk');
const inquirer = require('inquirer');

module.exports = function (name) {
    // 创建子项目
    if (fs.existsSync(path.join(process.cwd(), name))) {
        console.log(chalk.blue('目录已经存在，请重新输入(或者按回车取消创建)'));
        inquirer
            .prompt([
                {
                    type: 'string',
                    name: 'subObjectName',
                    message: `子项目名称：`
                }
            ])
            .then((res) => {
                if (res.subObjectName) {
                    createObj(res.subObjectName);
                } else {
                    return
                }
            })
    } else {
        createObj(name);
    }
}

async function createObj(name) {
    let subProjectDir = path.join(process.cwd(), name);
    // 创建项目根目录
    await mkdirp(subProjectDir);
    // 创建项目下的子目录
    console.log(chalk.blue('开始创建目录结构......'));
    let jsDir = await mkdirp(path.join(subProjectDir, 'js'));
    let cssDir = await mkdirp(path.join(subProjectDir, 'css'));
    await mkdirp(path.join(subProjectDir, 'images'));
    console.log(chalk.green('目录结构创建完成!'));
    console.log(chalk.blue('开始创建模板文件......'));
    // 在子目录下创建文件
    await writeFile(path.join(subProjectDir, 'index.html'), require('./templete').htmlTemp);
    await writeFile(path.join(jsDir, 'index.js'), require('./templete').jsTemp);
    await writeFile(path.join(cssDir, 'index.less'), '');
    console.log(chalk.green('模板文件创建完成!'));
}

function writeFile(filePath, data) {
    return new Promise((resolved, rejected) => {
        fs.writeFile(filePath, data, (err) => {
            if (err) {
                rejected(err)
            } else {
                resolved('written complited')
            }
        })
    })
}