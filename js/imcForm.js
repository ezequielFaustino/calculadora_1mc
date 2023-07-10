export const getValuesFromTheForm = () => {
  const form = document.querySelector('[data-js="form"]')

  form.addEventListener('submit', (e) => {
    e.preventDefault()

    const inputName = document.querySelector('[data-js="name"]')
    const inputHeight = document.querySelector('[data-js="height"]')
    const inputWeight = document.querySelector('[data-js="weight"]')
    console.log(inputWeight.value)

  })
}