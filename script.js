const Txt = document.querySelector('h2')
const myRequest = new Request('https://api.adviceslip.com/advice');

function initialAdvice(){
  fetch(myRequest)
    .then(response => response.json())
    .then(json => {
      var advice = json.slip.advice;
      Txt.innerText = `"${advice}"`
  })
}

initialAdvice()

function newAdvice(){
  Txt.innerText = "";

  fetch(myRequest)
    .then(response => response.json())
    .then(json => {
      var advice = json.slip.advice;
      Txt.innerText = `"${advice}"`
  })
}