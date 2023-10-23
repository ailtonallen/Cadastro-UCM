document.getElementById("registion").addEventListener("submit", function (event) {
    event.preventDefault();

    const nome = document.getElementById("name").value;
    const apelido = document.getElementById("surname").value;
    const dataNascimento = document.getElementById("data").value;
    const genero = document.getElementById("genero").value;
    const endereco = document.getElementById("endereco").value;
    const identificacao = document.getElementById("identificacao").value;
    const nacionalidade = document.getElementById("nacional").value;
    const provincia = document.getElementById("provincias").value;
    const email = document.getElementById("email").value;
    const senha = document.getElementById("password").value;
    const telefone = document.getElementById("telefone").value;
    const universidade = document.getElementById("universidade").value;
    const faculdade = document.getElementById("faculdade").value;
    const curso = document.getElementById("curso").value;
    const anoFrequencia = document.getElementById("freuencia").value;
    const modalidadePagamento = document.getElementById("pagamento").value;
    const loading = document.getElementById("loading");

    loading.style.display = "block";
    const regexTelefoneMoz = /^(82|83|84|85|86|87)[0-9]{7}$/;
    if (!regexTelefoneMoz.test(telefone)) {
        alert("Por favor, insira um número de telefone válido de Moçambique começando com 82, 83, 84, 85, 86 ou 87.");
        loading.style.display = "none";
        return; 
    }
    const telefoneCompleto = "258" + telefone;

    console.log("Nome:", nome);
    console.log("Apelido:", apelido);
    console.log("Data de Nascimento:", dataNascimento);
    console.log("Gênero:", genero);
    console.log("Endereço:", endereco);
    console.log("Número de Identificação:", identificacao);
    console.log("Nacionalidade:", nacionalidade);
    console.log("Província:", provincia);
    console.log("Email:", email);
    console.log("Senha:", senha);
    console.log("Telefone:", telefoneCompleto);
    console.log("Universidade:", universidade);
    console.log("Faculdade:", faculdade);
    console.log("Curso:", curso);
    console.log("Ano de Frequência:", anoFrequencia);
    console.log("Modalidade de Pagamento:", modalidadePagamento);
    setInterval(() => {
        loading.style.display = "none";
    }, 3000);
});