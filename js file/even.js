
// some times we will used this scripts
function makered(){
    document.body.style.backgroundColor='red';
}

// make-blue button
const BlueButton = document.getElementById('Make-blue');
BlueButton.onclick=makeBlue;
function makeBlue(){
    document.body.style.backgroundColor='blue';
}

// option 5
const MakePinkButton = document.getElementById('Make-Pink');
MakePinkButton.addEventListener('click', makePink);

function makePink() {
    document.body.style.backgroundColor = 'pink';
}

// option 6====
const makeGreenButton =document.getElementById('make-green');
makeGreenButton.addEventListener('click', function greenButton(){
    document.body.style.backgroundColor='green';
})

// option final ja amra use korbo all time
document.getElementById('make-goldenrod').addEventListener('click', function(){
    document.body.style.backgroundColor = 'goldenrod';
})
