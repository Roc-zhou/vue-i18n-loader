// 自动提取vue国际化配置文件 ==> 配置文件存放在input,应该是JSON文件

// import fs from 'fs'
// import path from 'path'

const fs = require('fs'), path = require('path'),
  filePath = path.resolve(__dirname,'..'), // 解析需要遍历的文件夹[获取当前目录的聚堆路径]
  info = [] // 存储处理文件的信息

fileDisplay(filePath)

function fileDisplay (filePath) { //文件遍历方法
  const newFilePath = path.resolve(__dirname, 'input') // 获取输入的文件路径
  return fs.readdir(newFilePath, function (err, files) { //根据文件路径读取文件，返回文件列表
    if (err) return console.error(err)
    else {
      return files.forEach(function (filename) { //遍历读取到的文件列表
        const filedir = path.join(newFilePath, filename) // 当前文件，携带了路径
        fs.stat(filedir /*获取到当前文件的绝对路径*/,
          function (eror, stats) { //根据文件路径获取文件信息，返回一个fs.Stats对象
            if (eror) {
              console.warn('获取文件stats失败')
            } else {
              const isFile = stats.isFile(), //是文件
                isDir = stats.isDirectory() //是文件夹
              isDir && fileDisplay(filedir) //递归，如果是文件夹，就继续遍历该文件夹下面的文件
              if (isFile && !!~filename.indexOf('.json')) { // 读取文件内容
                const content = fs.readFileSync(
                  path.resolve(filePath, filename.replace('.json', '.vue')),
                  'utf-8'),
                  res = /<i18n>([\S\s]*)<\/i18n>/.exec(content),
                  data = content.replace(res && res[1],
                    fs.readFileSync(filedir, 'utf-8'))

                fs.writeFile(
                  path.join(filePath, filename.replace('.json', '.vue')), data,
                  'utf-8', function (err) { // 输出到output文件夹对应的json
                    if (err) info.push[`filename:${filename}  status:success\n`]
                    else info.push[`filename:${filename}  status:success`]
                    return files.length === info.length &&
                      console.log(info.join(''))
                  })
              }
            }
          })
      })
    }
  })
}
