// Human to dog years

function calculateHumanYears (insertedNumber) {
    dogYears = (insertedNumber * 7);
    console.log (`You will be ${dogYears} years in dog years`);
    return dogYears;
}
calculateHumanYears(5);

// Dog to human years
function calculateDogYears (insertedNumber) {
    humanYears = (Math.floor(insertedNumber / 7));
    console.log (`The dog will be ${humanYears} in human years`)
    return humanYears;
}
calculateDogYears(26);
