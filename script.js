const Txt = document.querySelector('h2')
const myRequest = new Request('https://api.adviceslip.com/advice');

fetch(myRequest)
    .then(response => response.json())
    .then(json => {
      var advice = json.slip.advice;
      Txt.innerText = `"${advice}"`
  })
  
function newAdvice(){
  Txt.innerText = "";

  fetch(myRequest)
    .then(response => response.json())
    .then(json => {
      var advice = json.slip.advice;
      Txt.innerText = `"${advice}"`
  })
}