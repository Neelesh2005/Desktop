
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
    if (expand.innerText === "Sci") {
        expand.innerHTML = "Mech"

    }

    else { expand.innerHTML = "Sci" }
    hidden.classList.toggle("appear");
    main.classList.toggle("shift")


})





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
let keyBind = ""
let evalText = ""
window.addEventListener("keydown",(e)=>{
    keyBind = e.key;
    evalText += keyBind
    operationTab.value=evalText.replace("Shift","");   
})


result.value = "0";
button.forEach(singleButton => {
    
    singleButton.addEventListener("click", () => {

        if (singleButton.innerText !== "=" & singleButton.innerText !== "Sci" & singleButton.innerText !== "Mech") {

            operationTab.value += singleButton.innerText;
            operationTab.value += keyBind;
            



            if (singleButton.innerText === "AC") {
                operationTab.value = ""
                result.value = "0";
            }
            if (singleButton.innerHTML === backspace.innerText | keyBind === "Backspace" ) {
                operationTab.value = operationTab.value.slice(0, (operationTab.value.length - 2))
            }

            if (singleButton.innerText === power.innerText) {

                operationTab.value = operationTab.value.slice(0, (operationTab.value.length - 1)) + "**"
            }

        }

        if (singleButton.innerText === "=" | keyBind==="=") {
            submit.classList.toggle("equal")
            try {
                result.value = eval(operationTab.value).toFixed(2);
                submit.addEventListener("click",function(){
                    if(!submit.classList.contains("equal")){
                        operationTab.value = result.value;
                    }
                })
           } catch (error) {

                operationTab.value = "";
                result.value = "0";
                alert("Error Try Again!!")

            }
        }
    })
});





