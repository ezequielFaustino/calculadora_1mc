export const imc = (weight, height) => weight / (Math.pow(height, 2))

export const rateImc = (imc) => {
  let rate

  if (imc < 18.5) {
    rate = `e é classificado como obesidade grau 0 (magreza).`
  } else if (imc < 24.9) {
    rate = `e é classificado como obesidade grau 0 (normal).`
  } else if (imc < 29.9) {
    rate = `e é classificado como obesidade grau 1 (sobrepeso).`
  } else if (imc < 39.9) {
    rate = `e é classificado como obesidade grau 2 (obesidade).`
  } else {
    rate = `e é classificado como obesidade grau 3 (obesidade grave).`
  }

  return rate
}
