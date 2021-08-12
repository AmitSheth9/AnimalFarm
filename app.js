

console.log("validate")

const Horsepic = document.getElementById('horse');
const Neigh = document.getElementById('neigh');


const Catpic = document.getElementById('cat');
const Meow = document.getElementById('meow');

const Dogpic = document.getElementById('dog');
const Bark = document.getElementById('bark');

const Animalclick = document.getElementById('animalclick')

console.log(Horsepic);
console.log(Neigh);

function playSoundAndText (sound, animal) {
  sound.play();
  Animalclick.textContent = `The sound an ${animal} makes...`

}

Horsepic.addEventListener('click', () => {
  playSoundAndText(Neigh, "horse");
});


Catpic.addEventListener('click', () => {
  playSoundAndText(Meow, 'cat');
});


Dogpic.addEventListener('click', () => {
  playSoundAndText(Bark, 'dog');
  
});

document.addEventListener('keydown', (event) => {

    if (event.key === 'h') {
      playSoundAndText(Neigh, 'horse');
    }

    if (event.key === 'c') {
     playSoundAndText(Meow, 'cat');
    }

    if (event.key === 'd') {
      playSoundAndText(Bark, 'dog')
    }
});
