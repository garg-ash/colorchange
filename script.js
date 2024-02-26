const btn = document.querySelector("button")
const para = document.querySelector("p")
const body = document.querySelector("body")


// btn.addEventListener("click",()=>{
//    let randomColor = Math.floor(Math.random()*167456)
//    let getcode = "#" + randomColor
//    para.innerText = getcode
//    body.style.backgroundColor = getcode 
//    console.log(getcode)
// })

const allowedValues = "abcdef1234567890"
btn.addEventListener("click", ()=>{
   let randomColor = "#";
for (let i=0; i<=6; i++){
   randomColor +=
   allowedValues[Math.floor(Math.random()*allowedValues.length)]
   para.innerHTML = randomColor
   document.body.style.backgroundColor = randomColor

}
})
