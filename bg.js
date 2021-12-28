let mySwitch = document.querySelector("#mySwitch");
let whiteText1 = document.querySelector("#dark-text");
let whiteText2 = document.querySelector("#white-text");
let my_body = document.querySelector("body");

mySwitch.addEventListener("click", function changeBgColor(e) {
    if(mySwitch.checked) {
    my_body.classList.toggle("bg-dark");
    whiteText1.classList.toggle("text-light");
    whiteText2.classList.toggle("text-light")
}  

   else if(!mySwitch.checked) {
    my_body.classList.toggle("bg-white");
    whiteText1.classList.toggle("text-dark");
    whiteText2.classList.toggle("text-dark")
} 
})