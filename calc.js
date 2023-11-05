const body = document.querySelector("body");
const button = document.querySelectorAll('button');
const submit = document.querySelector('.submit');
const operationTab = document.querySelector('.operation');
const result = document.querySelector(".result");
const backspace = document.querySelector(".backspace");
const expand = document.querySelector(".expand");
const hidden = document.querySelector(".hidden");
const contract = document.querySelector(".contract");
const main = document.querySelector("main");
const power = document.querySelector(".power");

expand.addEventListener("click", () => {
    if (expand.innerText === "S") {
        expand.innerHTML = "M"

    }
    

    else { expand.innerHTML = "S" }
    hidden.classList.toggle("appear");
    main.classList.toggle("shift")


})




// test for future purpose
// let ops = [];
// for (const item of special) {
//     ops.push(item.innerHTML);
// }
// console.log(ops);
// spsFuncArr = [];

// const spsFuncReplace = (val)=>{
//     for(const item in ops){
//         if(item in operationTab.innerHTML){

//         }
//     }
// }
function compute(val){
    eval(val).toFixed(2);
}
function del(text, i) {
    return text.slice(0, (operationTab.value.length - i))
}
//will add keybindings later
let keyBind = ""
let evalText = ""
window.addEventListener("keydown", (e) => {
    keyBind = e.key;
    evalText += keyBind
    console.log(evalText)
    const replObj = {
        Shift: "",
        CapsLock: "",
        Backspace: "",
        Enter: "",
    }
    evalText = evalText.replace(/Shift|CapsLock|Backspace|Enter/gi, function (obj) {
        return replObj[obj];
    
    })
    if(keyBind==="=" | "=" in evalText){
        result.value = compute(operationTab.value);
    }
    operationTab.value += evalText;
})


result.value = "0";
button.forEach(singleButton => {

    singleButton.addEventListener("click", () => {

        if (singleButton.innerText !== "=" & singleButton.innerText !== "S" & singleButton.innerText !== "M") {

            operationTab.value += singleButton.innerText;





            if (singleButton.innerText === "AC") {
                operationTab.value = ""
                result.value = "0";
            }
            if (singleButton.innerHTML === backspace.innerText ) {
                operationTab.value = del(operationTab.value, 2);
            }

            if (singleButton.innerText === power.innerText) {

                operationTab.value = del(operationTab.value, 1) + "**"
            }

        }

        if (singleButton.innerText === "=") {
            

            try {
                result.value = compute(operationTab.value);
                
                

            } catch (error) {

                operationTab.value = "";
                result.value = "0";
                alert("Error Try Again!!")

            }
        }
    })
});





