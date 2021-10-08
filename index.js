const API_URL = "https://jsonplaceholder.typicode.com"
const xhr = new XMLHttpRequest();
function onRequestHandler() {
    if (this.readyState == 4 && this.status == 200) {
        // 0 = UNSET, o método aberto não foi chamado. 
        // 1 = OPENED, o método foi chamado.
        // 2 = HEADERS_RECEIVED,  se está chamado o método send()
        // 3 = LOADING,  está carregando, e recebendo a resposta 
        // 4 = DONE, se há operação foi completada.

        const data = JSON.parse(this.response)
        const HTMLResponse = document.querySelector("#app");

        const tpl = data.map((user) => `<li>${user.name}   ${user.email}</li>`);
        HTMLResponse.innerHTML = `<ul>${tpl}</ul>`;


    }
}
xhr.addEventListener("load", onRequestHandler)
xhr.open("GET", `${API_URL}/users`);
xhr.send();