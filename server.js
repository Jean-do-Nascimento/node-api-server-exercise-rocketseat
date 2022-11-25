const http = require('http')
const fs = require('fs')
const path = require('path')

http.createServer((req,res)=> {
 
   const file= req.url === '/' ? 'index.html': req.url
   const filepath=  path.join(__dirname, 'public', file) 
   const extname=   path.extname(filepath)

   const AllowedFileTypes = ['.html', '.css', '.js']
   const allowed = AllowedFileTypes.find(item=> item == extname)
      if(!allowed) return
      
   fs.readFile(
      filepath,
            (err, content)=> {
             if(err) throw err

             return res.end(content)
            }
        )
}).listen(5000, ()=> console.log('Server is running...'))