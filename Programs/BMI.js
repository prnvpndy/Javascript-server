massJoe = 64; //kg
heightJoe = 1.69; //mtr

massStiffy = 72; //kg
heightStiffy = 1.72; //mtr

BMIJoe = massJoe / (heightJoe * heightJoe);
BMIStiffy = massStiffy / (heightStiffy * heightStiffy);
console.log(BMIJoe, BMIStiffy);

BMI = BMIJoe > BMIStiffy;

console.log("Is Joe \'s BMI higher than Stiffy \'s ?"+BMI);