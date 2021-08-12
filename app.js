

console.log("validate")

const Horsepic = document.getElementById('horse');
const Neigh = document.getElementById('neigh');
const Animalclick = document.getElementById('animalclick')

console.log(Horsepic);
console.log(Neigh);

Horsepic.addEventListener('click', () => {
  Neigh.play() 
  Animalclick.textContent = "The sound a horse makes..."
  console.log(Animalclick.textContent);
});



const Catpic = document.getElementById('cat');
const Meow = document.getElementById('meow');

Catpic.addEventListener('click', () => {
  Meow.play();
  Animalclick.textContent = "The sound a cat makes..."
});

const Dogpic = document.getElementById('dog');
const Bark = document.getElementById('bark');

Dogpic.addEventListener('click', () => {
  Bark.play();
  Animalclick.textContent = "The sound a dog makes..."
  
});

document.addEventListener('keydown', (event) => {

    if (event.key === 'd') {
      Bark.play();
      Animalclick.textContent = "The sound a dog makes..."
    }

    if (event.key === 'h') {
      Neigh.play();
      Animalclick.textContent = "The sound a horse makes..."
    }

    if (event.key === 'c') {
      Meow.play();
      Animalclick.textContent = "The sound a cat makes..."
    }
});
