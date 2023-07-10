export const getValuesFromTheForm = () => {
  // const form = document.querySelector('[data-js="form"]')
  const inputName = document.querySelector('[data-js="name"]').value
  const inputHeight = document.querySelector('[data-js="height"]').value
  const inputWeight = document.querySelector('[data-js="weight"]').value

  const inputsValues = [
    { name: inputName },
    { height: inputHeight },
    { weight: inputWeight }
  ]

  // form.addEventListener('submit', (e) => {
  //   e.preventDefault()

  // })

  return inputsValues
}