//File System module
const fs = require('fs')
const path = require('path')

// create folder 'test'
fs.mkdir(path.join(__dirname, 'test'), (err)=> {
    if (err) {
        throw err
    }
    console.log('Папка создана');
})
const filePath = path.join(__dirname, 'test', 'text.txt');

//create file 'text.txt'
fs.writeFile(filePath, 'Hello NodeJS', (err)=>{
    if (err) {
        throw err
    }
    // add text in file 'text.txt'
    fs.appendFile(filePath, '\nHello again', (err)=>{
        if (err) {
            throw err
        }
        console.log('Файл перезаписан')
    });
    console.log('Файл создан')
});

//read file
fs.readFile(filePath, 'utf-8', (err, content)=>{
    if (err) {
        throw err
    }
    console.log(content);
})
