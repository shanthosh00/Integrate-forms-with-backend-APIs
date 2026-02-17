function signup() {
    fetch("http://localhost:3000/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            name: sname.value,
            email: semail.value,
            password: spassword.value
        })
    })
    .then(res => res.json())
    .then(data => signupMsg.innerText = data.message)
    .catch(() => signupMsg.innerText = "Error occurred");
}

function login() {
    fetch("http://localhost:3000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            email: lemail.value,
            password: lpassword.value
        })
    })
    .then(res => res.json())
    .then(data => loginMsg.innerText = data.message)
    .catch(() => loginMsg.innerText = "Invalid login");
}
