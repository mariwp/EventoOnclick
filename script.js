function toggleLogin() {
    const loginButton = document.getElementById('loginButton');
    if (loginButton.innerText === 'Login') {
        loginButton.innerText = 'Logout';
    } else {
        loginButton.innerText = 'Login';
    }
}

function removeDefinition() {
    const definitionButton = document.getElementById('add-definition-button');
    definitionButton.remove();
}


function alertLike() {
    alert("Ninja was liked");

}