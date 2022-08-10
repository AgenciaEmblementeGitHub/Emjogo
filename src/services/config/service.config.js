let tipo_desenvolvimento = false;

const develop = "http://localhost/api/";
const production = "http://agenciaemblemente.com/api/";

if(tipo_desenvolvimento == false){
    host = develop; 
}

if(tipo_desenvolvimento == true){
    host = production; 
}

export let host = "";