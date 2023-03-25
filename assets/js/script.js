const url = "https://api.adviceslip.com/advice"; //URL da API

// Variáveis 
const idMessage = document.querySelector("#id-message");
const randomMessage = document.querySelector("#random-message");


//função retorna um JSON 
async function getRandomMessage() {
    const response = await fetch(url);
    const data = await response.json();  //Objeto Json
    
    idMessage.innerHTML = data.slip.id;
    randomMessage.innerHTML = data.slip.advice;
      
}