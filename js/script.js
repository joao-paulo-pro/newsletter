const inputEmail = document.querySelector("#email");
const btn = document.querySelector("#btn")

const text_error = document.querySelector("#text_error")



btn.addEventListener("click", (e) => {
    e.preventDefault();
    var regex = /@.*\.com/;
    const email = inputEmail.value;
    
    if(regex.test(email) ) {
        console.log("deu certo !!!")
        text_error.textContent = "";
        inputEmail.classList.remove("input_required")

        localStorage.setItem("valorInpit", inputEmail.value)
        window.location.href = "../page/success-active.html"

    } else {
        text_error.textContent = "Valid email required";
        inputEmail.classList.add("input_required")
    }

})
