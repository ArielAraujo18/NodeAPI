const { error } = require('console')
const fs = require('fs')
const path = require('path')

//criar uma pasta
fs.mkdir(path.join(__dirname, '/teste'), (error) => {
   if (error){
   return   console.log('Erro: ', error);
   }

   console.log("Pasta criada com sucesso!")
});

//criar um arquivo
fs.writeFile(path.join(__dirname, 'teste', 'test.html'), 'hello, World!', (error) =>{
    if (error) {
        return console.log('Erro: ', error);
    }

    console.log('Arquivo criado com sucesso!')

});

fs.appendFile(path.join(__dirname, "/teste", "test.html"), "Hello, node!", (error) => {
    if (error){
        return console.log("Erro: ", error);
    }

    console.log("Arquivo modificado com sucesso!")
});