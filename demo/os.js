//Operation system - this module get data operation system.
const os = require('os')
const path = require("path");
const fs = require("fs");

console.log('Операционная система: ', os.platform())

console.log('Архитектура процессора: ', os.arch())

console.log('Информация по процессорам: ', os.cpus())

console.log('Свободная память: ', os.freemem())

console.log('Всего памяти: ', os.totalmem())

console.log('Домашняя директория: ', os.homedir())

console.log('Включен: ', os.uptime())

const data = [
    '\nОперационная система: ' + os.platform(),
    '\nАрхитектура процессора: ' + os.arch(),
    '\nСвободная память: ' + os.freemem(),
    '\nВсего памяти: ', os.totalmem(),
    '\nДомашняя директория: ' + os.homedir(),
]

const filePath = path.join(__dirname, 'test', 'text.txt');
fs.appendFile(filePath, data.toString(), (err)=>{
    if (err) {
        throw err
    }
    console.log(data)
})