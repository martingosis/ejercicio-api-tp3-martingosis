/*  PRUEBA DE CONEXION CON LA API POR MEDIO DE AXIOS

const axios = require("axios")

axios.get("http://dog-api.kinduff.com/api/facts")

    .then(function (response){
    
        let frase = response.data.facts;

        console.log(frase)
})
.catch(function(error){

    console.log(error);

});  */


//PRUEBA DE CONEXION CON LA API POR MEDIO DE AXIOS

const axios = require("axios")

axios.get("https://hp-api.herokuapp.com/api/characters") //API HARRY POTER

    .then(function (response){
        
        console.log(response.data);
        
})