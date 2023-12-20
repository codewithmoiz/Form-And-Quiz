// From code :)
var inp1 = document.getElementById("input1");
var inp2 = document.getElementById("input2");
var inp3 = document.getElementById("input3");
var inp4 = document.getElementById("input4");
var arr = [inp1, inp2, inp3, inp4];
function getInput(){
    for(var i = 0; i < arr.length; i++){
        console.log(arr[i].value);
    }
};



// Quiz code :)
function clicked() {
    var opt1 = document.getElementById("option1");
    var selectedText = opt1.parentElement.innerText.trim();
    opt1.parentElement.style.color = "#4C4C4C";
}

function clicked2() {
    var opt2 = document.getElementById("option2");
    var selectedText = opt2.parentElement.innerText.trim();
    opt2.parentElement.style.color = "#4C4C4C";
}
function clicked3() {
    var opt3 = document.getElementById("option3");
    var selectedText = opt3.parentElement.innerText.trim();
    opt3.parentElement.style.color = "#4C4C4C";
    Swal.fire({
        title: "Good job!",
        text: "It's correct!",
        icon: "Congrats!"
      });
}
function clicked4() {
    var opt4 = document.getElementById("option4");
    var selectedText = opt4.parentElement.innerText.trim();
    opt4.parentElement.style.color = "#4C4C4C";
}