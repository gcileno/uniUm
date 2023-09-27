// biblioteca para funções

const CriarTabela = (data, div = document.getElementById("mostrarTabela")) => {
    if (typeof data !== "object" || data === null) {
        console.error("O argumento 'data' deve ser um objeto.");
        return;
    }

    const keys = Object.keys(data[0]);

    const tableHtml = `
        <table class="table is-hoverable">
            <thead>
                <tr>
                ${keys.map(key => `<th>${key}</th>`).join("")}
                </tr>
            </thead>
            <tbody>
                ${data.map(obj => `
                <tr>
                    ${keys.map(key => `<td>${obj[key]}</td>`).join("")}
                </tr>
                `).join("")}
            </tbody>
        </table>
    `;

    div.innerHTML = tableHtml;
}

const OrdenarDiv = cs =>{
    const div = document.getElementById("cervejasDiv")
    const itensHtml = cs.map( item => 
        `<tr>
        <td>${item['name']}</td>
        <td>${item['alcohol']}</td>
        <td>${item['tipo']}</td>
        <td>${item['preco']}</td>
        </tr>`).sort()

    div.innerHTML = `<table class="table">${itensHtml.join("\n")}</table>`
}