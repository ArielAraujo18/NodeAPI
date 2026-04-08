const path = require("path");

// Basename

//Apenas o nome do arquivo atual
console.log(path.basename(__filename));

//Nome do diretório atual
console.log(path.dirname(__filename));

//extensão do arquivo
console.log(path.extname(__filename));

//Criar o objeto path
console.log(path.parse(__filename))

//Juntar caminhos de arquivos
console.log(path.join(path.dirname))