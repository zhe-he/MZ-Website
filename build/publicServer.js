/* 
 * 此文件为模拟线上服务器，可删除
 */

const express=require('express');
const fs = require('fs');
var opn = require('opn');
var port = 1111;
var app=express();
app.listen(port);
app.use('/js',express.static(__dirname+'/js'));
app.use('/images',express.static(__dirname+'/images'));
app.use('/css',express.static(__dirname+'/css'));
app.use('/favicon.ico',express.static(__dirname+'/favicon.ico'));

app.use((req,res)=>{
    console.log(req.url);
    fs.readFile(__dirname+'/index.html', 'utf-8',(err,content) => {
        if (err) {
            content = 'We cannot open \'index.html\' file.'
            console.log(content);
        }
        res.send(content);
    });
});
opn('http://localhost:'+port);