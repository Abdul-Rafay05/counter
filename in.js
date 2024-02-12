
let sum = 0;
document.getElementById('addbtn').addEventListener('click', () => {
    sum++;
    document.getElementById('showdiv').innerHTML = sum;

})
document.getElementById('subbtn').addEventListener('click', () => {
    if (sum > 0) {
        sum--;
    }
    document.getElementById('showdiv').innerHTML = sum;

})
document.getElementById('reset').addEventListener('click', () => {
    sum *= 0;
    document.getElementById('showdiv').innerHTML = sum;
})
document.getElementById('onbtn').addEventListener('click', () => {
    document.getElementById('showdiv').style.display = "flex";
    document.getElementById('showdiv').innerHTML = 0;

})
document.getElementById('ofbtn').addEventListener('click', () => {
    document.getElementById('showdiv').style.display = "none";

})