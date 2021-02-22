const path = require('path');
const mkdirp = require('mkdirp');
const fs = require('fs');

module.exports = async function (name) {
    let subProjectDir = path.join(process.cwd(), name);
    // 创建项目根目录
    await mkdirp(subProjectDir);
    // 创建项目下的子目录
    let jsDir = await mkdirp(path.join(subProjectDir, 'js'));
    let cssDir = await mkdirp(path.join(subProjectDir, 'css'));
    await mkdirp(path.join(subProjectDir, 'images'));
    // 在子目录下创建文件
    await writeFile(path.join(subProjectDir, 'index.html'), require('./templete').htmlTemp);
    await writeFile(path.join(jsDir, 'index.js'), require('./templete').jsTemp);
    await writeFile(path.join(cssDir, 'index.less'), '');
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