import * as resultImc from './resultImc.js'

const getValuesFromTheForm = () => {
  const inputName = document.querySelector('[data-js="name"]').value
  const inputHeight = document.querySelector('[data-js="height"]').value
  const inputWeight = document.querySelector('[data-js="weight"]').value

  const inputsValues = [inputName, inputHeight, inputWeight]

  return inputsValues
}

const getResultDiv = () => {
  const resultDiv = document.querySelector('[data-js="show-result"]')
  return resultDiv
}

const clearDiv = () => {
  const div = getResultDiv()

  div.innerText = ""
}

export const eventForm = () => {

  const submitBtn = document.querySelector('[data-js="submit-btn"]')

  submitBtn.addEventListener('click', (e) => {
    // input values
    const name = getValuesFromTheForm()[0]
    const height = getValuesFromTheForm()[1]
    const weight = getValuesFromTheForm()[2]

    const resultDiv = getResultDiv()


    const weightNumber = parseFloat(weight.replace(',', '.'))
    const heightNumber = parseFloat(height.replace(',', '.'))

    const imc = resultImc.imc(+weightNumber, +heightNumber)
    const rateImc = resultImc.rateImc(imc)

    if (isNaN(imc)) { return }

    resultDiv.innerHTML = `<p>${name} seu IMC é <span class="highlight">${imc.toFixed(2)}</span> ${rateImc}</p>`

    e.preventDefault()

  })

}

export const resetEvent = () => {
  const resetBtn = document.querySelector('[data-js="reset-btn"]')

  resetBtn.addEventListener('click', () => {
    clearDiv()
  })
}

