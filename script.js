
function greetUser() {
    let name = document.getElementById("username").value.trim();

    if (name === "") {
        alert("Please enter your name!");
    } else {
        localStorage.setItem("username", name);

        document.getElementById("message").innerText =
            "Welcome, " + name + "!";
    }
}

function clearForm() {
    document.getElementById("username").value = "";
    document.getElementById("message").innerText = "";

    localStorage.removeItem("username");
}
window.onload = function() {
    let savedName = localStorage.getItem("username");

    if (savedName) {
        document.getElementById("username").value = savedName;
        document.getElementById("message").innerText =
            "Welcome back, " + savedName + "!";
    }
};