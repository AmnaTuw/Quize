//Q1

let Amnah = [1, 13, 14, 1, 8];

let sum = 0;

for (let i = 0; i < Amnah.length; i++) {
  sum += Amnah[i];
}

let reminder = sum % 4;
console.log("The sum is: " + sum);
console.log("The reminder is: " + reminder);

//Q2

fetch("https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=25")
  .then((res) => {
    return res.json();
  })
  .catch((err) => {
    console.error(err);
  });
