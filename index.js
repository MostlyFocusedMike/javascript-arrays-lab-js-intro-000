const app = "I don't do much.";

var kittens = ["Milo", "Otis", "Garfield"];

function destructivelyAppendKitten(name) {
  kittens.push(name);
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name);
}

function destructivelyRemoveLastKitten(name) {
  kittens.pop();
}


function appendKitten(name) {
  new_kittens = kittens.slice();
  new_kittens.push(name);
  return new_kittens;
}

function destructivelyRemoveFirstKitten() {
  kittens.shift();
}