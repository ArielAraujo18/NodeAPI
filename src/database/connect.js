const mongoose = require("mongoose");

async function connectToDatabase() {
    try{
        await mongoose.connect(`mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cursonode.ndzmntx.mongodb.net/?appName=CursoNode`);
        console.log("Banco de dados conectado com sucesso");
    }
    catch(error){
        console.log("Erro ao se conectar com o bd", error);
    }
}

module.exports = connectToDatabase