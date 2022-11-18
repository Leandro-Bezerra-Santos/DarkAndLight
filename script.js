document.querySelectorAll("input[type='radio']").forEach(input => {
    input.onclick = () =>{
        let element= document.documentElement;
        element.classList.add(input.id);
    }
})