const fs = require("fs")
fs.writeFile('sample.txt','This is a simple text',(err)=>{
    if(err){
        console.log(err);
    }else{
        console.log("file created and text writtern");  
    }
})
fs.readFile('read.txt','utf8',(err,data)=>{
    if(err){
        console.log(err);    
    }else{
        console.log('File Content:',data);
        
    }
});