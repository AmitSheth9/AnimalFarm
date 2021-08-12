

console.log("validate")

const Horsepic = document.getElementById('horse');
const Neigh = document.getElementById('neigh');

console.log(Horsepic);
console.log(Neigh);

Horsepic.addEventListener('click', () => {
  Neigh.play() 
});


const Catpic = document.getElementById('cat');
const Meow = document.getElementById('meow');

Catpic.addEventListener('click', () => {
  Meow.play();
});

const Dogpic = document.getElementById('dog');
const Bark = document.getElementById('bark');

Dogpic.addEventListener('click', () => {
  Bark.play();
});