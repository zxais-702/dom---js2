let elems = document.querySelectorAll(".box")
let images = document.querySelectorAll(".img")


elems.forEach((elem) => {
    elem.onclick = () => {
        elems.forEach((item) => {
            item.classList.remove("active")
            item.lastElementChild.classList.remove("rotated")
        })
        elem.classList.toggle("active")
        
        let arrow  = elem.lastElementChild

        arrow.classList.add("rotated")
    }
})
