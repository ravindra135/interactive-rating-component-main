document.getElementById('submit').addEventListener('click', starSubmit);

let star1Value = document.getElementById('star1');
let star2Value = document.getElementById('star2');
let star3Value = document.getElementById('star3');
let star4Value = document.getElementById('star4');
let star5Value = document.getElementById('star5');

function starSubmit() {
    if(star1Value.checked) {
        console.log(star1Value.value);
    } 
    else if(star2Value.checked) {
        console.log(star2Value.value);
    } 
    else if(star3Value.checked) {
        console.log(star3Value.value);
    } 
    else if(star4Value.checked) {
        console.log(star4Value.value);
    } 
    else if(star5Value.checked) {
        console.log(star5Value.value);
    } 
    else {
        console.log('Unchecked');
    }
}