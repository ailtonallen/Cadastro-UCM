
let visivel = false;

const iconMenu = document.getElementById('open');
const menu = document.getElementById('menu');

iconMenu.addEventListener('click', function() {
    visivel = !visivel;
    menu.style.display = visivel ? 'block' : 'none';
});

const ArrayCadeira = [
    "Matemática",
    "Programação",
    "Redes de Computadores",
    "Inglês",
    "Tecnologias da Informação",
    "Fundamentos de Redes",
    "Programação Avançada",
    "Páginas Web",
    "Fundamentos de Páginas Web",
    "Implementação de Banco de Dados",
    "Implementação de Redes",
    "Habilidades para a Vida",
    "Inglês II",
    "Constituição",
    "Direito Civil",
    "Direito Penal",
    "Administração Hospitalar",
    "Saúde Pública",
    "Gestão de Hospitais",
    "Contabilidade Básica",
    "Auditoria Contábil",
    "Finanças Corporativas"
  ];

  const listaCadeira = document.getElementById("nome-cadeiras");
  const searchInput = document.getElementById("searchInput");
  const mostrarTudoButton = document.getElementById("mostrarTudo");

  ArrayCadeira.forEach(cadeira => {
    const li = document.createElement("li");
    li.textContent = cadeira;
    const span = document.createElement("span");
    const i = document.createElement("i");
    i.className = "fa fa-lock";
    span.appendChild(i);
    li.appendChild(span);
    listaCadeira.appendChild(li);
  });

  mostrarTudoButton.addEventListener("click", function () {
    const lis = listaCadeira.getElementsByTagName("li");
    const showAll = mostrarTudoButton.textContent === "Mostrar Tudo";

    for (let i = 0; i < lis.length; i++) {
      if (showAll || i < lis.length / 2) {
        lis[i].style.display = "list-item";
      } else {
        lis[i].style.display = "none";
      }
    }

    mostrarTudoButton.textContent = showAll ? "Mostrar Metade" : "Mostrar Tudo";
  });

  searchInput.addEventListener("keyup", function () {
    const searchTerm = searchInput.value.toLowerCase();
    let found = false;

    const lis = listaCadeira.getElementsByTagName("li");

    for (let i = 0; i < lis.length; i++) {
      const text = lis[i].textContent.toLowerCase();
      if (text.includes(searchTerm)) {
        lis[i].style.display = "list-item";
        mostrarTudoButton.style.display = "block";
        found = true;
      } else {
        lis[i].style.display = "none";
      }
    }

    if (found) {
      mostrarTudoButton.textContent = "Mostrar Tudo";
    } else {
      mostrarTudoButton.style.display = "none";
      noResultsMessage.style.display = "block";
    }
  });