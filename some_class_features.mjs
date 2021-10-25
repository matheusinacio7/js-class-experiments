class Vegetable {
  #sizeEnum;
  size;

  constructor({
    name,
    mainNutrient,
  }) {
    this.name = name;
    this.mainNutrient = mainNutrient;
    this.#sizeEnum = 0;

    Object.defineProperty(this, 'size', { get: this.#getSize });
  }

  #getSize() {
    return {
      0: 'small',
      1: 'medium',
      2: 'large',
      3: 'huge',
      4: 'giant'
    }[this.#sizeEnum];
  }

  grow() {
    this.#sizeEnum = Math.min(this.#sizeEnum + 1, 4);
  }
}

class Potato extends Vegetable {
  constructor() {
    super({ name: 'potato', mainNutrient: 'carbohydrates' });
  }

  grow() {
    super.grow();
    super.grow();
  }
}

const cenoura = new Vegetable({ name: 'carrot', mainNutrient: 'fibers' });

console.log('Tamanho de CENOURA antes de crescer:', cenoura.size);
cenoura.grow();
console.log('Tamanho de CENOURA depois de crescer:', cenoura.size);

const batata = new Potato();
console.log('Tamanho de BATATA antes de crescer:', batata.size);
batata.grow();
console.log('Tamanho de BATATA depois de crescer:', batata.size);
