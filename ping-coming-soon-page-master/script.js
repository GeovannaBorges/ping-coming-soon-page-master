function submitEmail() {
    let emailInput = document.getElementById("txt-box")
    let errorArea = document.getElementById("error-msg")
    const pattern = /^[^ ]+@[^ ]+\.[a-z]{3}$/

    if (emailInput.value.length == 0) {
        errorArea.innerHTML = "Whoops! It looks like you forgot to add your email"
        emailInput.style.borderColor = "hsl(354, 100%, 66%)"
    }

    else if (!emailInput.value.match(pattern)) {
        errorArea.innerHTML = "Please provide a valid email address"
        emailInput.style.borderColor = "hsl(354, 100%, 66%)"
    }
}

function removeStyles() {
    let emailInput = document.getElementById("txt-box")
    let errorArea = document.getElementById("error-msg")

    emailInput.style.borderColor = ""
    errorArea.innerHTML = ""
}
