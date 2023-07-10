import * as imcForm from './imcForm.js'


export const createParagraph = ( ) => {
  const resultDiv = document.querySelector('[data-js="show-result"]')
  
  resultDiv.innerHTML = `<p>Nome seu IMC é de <span class="highlight">23.4</span> e você está no grupo de classicação normal!</p>`

}

createParagraph()