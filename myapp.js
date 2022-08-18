const star1Value = document.getElementById('star1');
const star2Value = document.getElementById('star2');
const star3Value = document.getElementById('star3');
const star4Value = document.getElementById('star4');
const star5Value = document.getElementById('star5');
let value;

document.getElementById('submit').addEventListener('click', starSubmit);

function starSubmit() {
    if(star1Value.checked) {
        value = star1Value.value;
        sessionStorage.setItem("star", value);
    } 
    else if(star2Value.checked) {
        value = star2Value.value;
        sessionStorage.setItem("star", value);
    } 
    else if(star3Value.checked) {
        value = star3Value.value;
        sessionStorage.setItem("star", value);
    } 
    else if(star4Value.checked) {
        value = star4Value.value;
        sessionStorage.setItem("star", value);
    } 
    else if(star5Value.checked) {
        value = star5Value.value;
        sessionStorage.setItem("star", value);
    } 
    else {
        value = 0;
        // localStorage.setItem("star", value);
        sessionStorage.setItem("star", value);
    }
}


