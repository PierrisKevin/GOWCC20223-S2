const allBoxes = document.querySelectorAll("#container .all-data .list-contain .box")
for(let i=0; i<allBoxes.length;i++){
    allBoxes[i].addEventListener("click", (e)=>{
        for(let j=0;j<allBoxes.length;j++){
            allBoxes[j].classList.remove("active")
        }
        e.target.classList.add("active")
    })
}

const btn_control = document.querySelector(".option img")
const list_contain = document.querySelector("#container .all-data .list-contain")
btn_control.addEventListener("click", ()=>{
    list_contain.classList.toggle("hidden")
})