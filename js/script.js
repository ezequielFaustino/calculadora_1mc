// Elementos

class Imc {
  constructor() {
    this.valueImc = 0;
    this.rate;
    this.fieldsArray = [];
  }

  calcImc(height, weight) {
    this.valueImc = (weight / (Math.pow(height, 2)));

    return this.valueImc;
  }

  rateImc(value) {
    this.rate = '';

    if (value < 18.5) {
      this.rate = `e é classificado como obesidade grau 0 (magreza).`;
    } else if (value < 24.9) {
      this.rate = `e é classificado como obesidade grau 0 (normal).`;
    } else if (value < 29.9) {
      this.rate = `e é classificado como obesidade grau 1 (sobrepeso).`;
    } else if (value < 39.9) {
      this.rate = 'e é classificado como obesidade grau 2 (obesidade).';
    } else {
      this.rate = `e é classificado como obesidade grau 3 (obesidade grave).`;
    }

    return this.rate;
  }

  save() {
    let field = this.readData();

    if (this.validateInputs(field)) {
      this.add(field);
    }

    this.list();
  }

  list() {
    this.fieldsArray.forEach((field) => {
      showResult.innerHTML = `<p><span>${field.name}</span> seu IMC é <span>${field.valueImc.toFixed(2)}</span> ${field.rate}</p>`;
    })
  }

  add(field) {
    this.fieldsArray.push(field)
  }

  readData() {
    let field = {};

    field.name = document.querySelector("#name").value;
    field.height = document.querySelector("#height").value;
    field.weight = document.querySelector("#weight").value;

    this.calcImc(field.height, field.weight);
    field.valueImc = this.valueImc;

    this.rateImc(field.valueImc);
    field.rate = this.rate;

    return field;
  }

  validateInputs(field) {
    let msg = '';

    if (field.name == '') {
      msg += `[informe nome] `;
    }
    if (field.height == '') {
      msg += '[informe altura] ';
    }
    if (field.weight == '') {
      msg += '[informe peso]';
    }

    if (msg !== '') {
      showResult.innerHTML = `<p>${msg}</p>`;
      return false;
    }

    return true;
  }

}

// Eventos
