let peixes = [
    {
        id: 1,
        nome: "Nemo",
        especie: "Peixe-palhaço",
        habitat: "Oceano"
    },
    {
        id: 2,
        nome: "Dory",
        especie: "Peixe-cirurgião",
        habitat: "Oceano"
    },
    {
        id: 3,
        nome: "Beta",
        especie: "Betta",
        habitat: "Água doce"
    }
];


// CADASTRAR
function cadastrar() {

    const nome = document.getElementById("nome").value;
    const especie = document.getElementById("especie").value;
    const habitat = document.getElementById("habitat").value;

    if (nome === "" || especie === "" || habitat === "") {
        alert("Preencha todos os campos!");
        return;
    }

    const novoPeixe = {
        id: peixes.length + 1,
        nome: nome,
        especie: especie,
        habitat: habitat
    };

    peixes.push(novoPeixe);

    document.getElementById("nome").value = "";
    document.getElementById("especie").value = "";
    document.getElementById("habitat").value = "";

    listar();
}


// LISTAR TODOS
function listar() {

    const lista = document.getElementById("lista");

    lista.innerHTML = "";

    if (peixes.length === 0) {

        lista.innerHTML = `
            <p class="vazio">
                Nenhum item cadastrado.
            </p>
        `;

        document.getElementById("total").textContent = 0;

        return;
    }

    peixes.forEach(function(peixe) {

        lista.innerHTML += `
            <div class="peixe-item">
                <h3>🐟 ${peixe.nome}</h3>
                <p><strong>ID:</strong> ${peixe.id}</p>
                <p><strong>Espécie:</strong> ${peixe.especie}</p>
                <p><strong>Habitat:</strong> ${peixe.habitat}</p>
            </div>
        `;

    });

    document.getElementById("total").textContent = peixes.length;
}


// 🔎 BUSCAR
function buscar() {

    const texto = document
        .getElementById("busca")
        .value
        .trim()
        .toLowerCase();

    const lista = document.getElementById("lista");

    // Se o campo estiver vazio
    if (texto === "") {
        listar();
        return;
    }

    // Procura pelo nome
    const encontrados = peixes.filter(function(peixe) {

        return peixe.nome
            .toLowerCase()
            .includes(texto);

    });


    lista.innerHTML = "";


    // Se não encontrou
    if (encontrados.length === 0) {

        lista.innerHTML = `
            <p class="vazio">
                🐟 Peixe não encontrado.
            </p>
        `;

        document.getElementById("total").textContent = 0;

        return;
    }


    // Mostra os encontrados
    encontrados.forEach(function(peixe) {

        lista.innerHTML += `
            <div class="peixe-item">
                <h3>🐟 ${peixe.nome}</h3>
                <p><strong>ID:</strong> ${peixe.id}</p>
                <p><strong>Espécie:</strong> ${peixe.especie}</p>
                <p><strong>Habitat:</strong> ${peixe.habitat}</p>
            </div>
        `;

    });


    document.getElementById("total").textContent =
        encontrados.length;
}


// DELETAR POR ID
function deletar() {

    const id = Number(document.getElementById("id").value);

    if (!id) {
        alert("Digite um ID!");
        return;
    }

    const tamanhoAntes = peixes.length;

    peixes = peixes.filter(function(peixe) {
        return peixe.id !== id;
    });

    if (peixes.length === tamanhoAntes) {
        alert("Peixe não encontrado!");
        return;
    }

    document.getElementById("id").value = "";

    listar();
}


// REMOVER ÚLTIMO
function removerUltimo() {

    if (peixes.length === 0) {
        alert("Não há peixes para remover!");
        return;
    }

    peixes.pop();

    listar();
}


// LIMPAR TUDO
function limparTudo() {

    if (peixes.length === 0) {
        return;
    }

    const confirmar = confirm(
        "Tem certeza que deseja limpar todos os peixes?"
    );

    if (confirmar) {

        peixes = [];

        listar();
    }
}


// Mostra os peixes quando abrir a página
listar();