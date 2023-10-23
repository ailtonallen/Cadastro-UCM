// Adicione esse código no seu script JavaScript
var firebaseConfig = {
  apiKey: "AIzaSyCQ9gGfIGGANpHSviYBn6YjnffiRFFKmUE",
  authDomain: "programa-df149.firebaseapp.com",
  databaseURL: "https://programa-df149-default-rtdb.firebaseio.com",
  projectId: "programa-df149",
  storageBucket: "programa-df149.appspot.com",
  messagingSenderId: "962397813368",
  appId: "1:962397813368:web:67d44a40f13ba8f628cb8d",
  measurementId: "G-QZV28E23NR"
  };
firebase.initializeApp(firebaseConfig);
var database = firebase.database().ref("/");
var databaseL = firebase.database();
var login = document.getElementById("login");
var load = document.getElementById("load");
var home = document.getElementById("home");
var footer = document.getElementById("footer");
var formLogin = document.getElementById("form-login");
var header = document.getElementById("header");
login.addEventListener("click", function(e) {
  login.style.display = "none";
  load.style.display = "flex";
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  if (email.trim() === "" || password.trim() === "") {
      alert("Por favor, preencha todos os campos.");
      login.style.display = "block";
      load.style.display = "none";
      return; 
  }
  databaseL.ref("/").orderByChild("login/email").equalTo(email).once("value")
      .then(function(snapshot) {
          if (snapshot.exists()) {
              snapshot.forEach(function(userSnapshot) {
                  var userData = userSnapshot.val();
                  if (userData.login.password === password) {
                    setTimeout(() => {
                      alert("Login bem-sucedido!");
                      login.style.display = "none";
                      load.style.display = "block";
                      home.style.display = "block";
                      footer.style.display = "block";
                      formLogin.style.display = "none";
                      header.style.display = "block";
                    }, 4000);
                      database.on("child_added", function(data) {
                        var dados = data.val();
                        var listItem = document.getElementById("list-container");
                        var title_ucm = document.getElementById("title");
                        title_ucm.textContent = dados.dadosUsuario.Email;
                        listItem.innerHTML = `
                        <li><strong class="id">Nome: </strong>${dados.dadosUsuario.Nome} ${dados.dadosUsuario.Apelido}</li>
                        <li><strong class="id">Data de nascimento: </strong>${dados.dadosUsuario.Data_nascimento}</li>
                        <li><strong class="id">Genero: </strong>${dados.dadosUsuario.Genero}</li>
                        <li><strong class="id">Provincia: </strong>${dados.dadosUsuario.Provincia}</li>
                        <li><strong class="id">Nacionalidade: </strong>${dados.dadosUsuario.Nacionalidade}</li>
                        <li><strong class="id">Endereco: </strong>${dados.dadosUsuario.Endereco}</li>
                        <li><strong class="id">B.I: </strong>${dados.dadosUsuario.numero_id}</li>
                        <li><strong class="id">E-mail: </strong>${dados.dadosUsuario.Email}</li>
                        <li><strong class="id">Extensao: </strong>${dados.dadosUsuario.faculdade}</li>
                        <li><strong class="id">Curso: </strong>${dados.dadosUsuario.curso}</li>
                        <li><strong class="id">Frequencia: </strong>${dados.dadosUsuario.ano} ano</li>
                        `;
                        var table_note = document.getElementById("table_nota");             
                        table_nota.innerHTML = `
                        <tr id="matematica">
                        <td>${dados.notas.matematica.Nome}</td>
                        <td>${dados.notas.matematica.Nota_1}</td>
                        <td>${dados.notas.matematica.Nota_2}</td>
                        <td>${dados.notas.matematica.Nota_3}</td>
                        <td>${dados.notas.matematica.Media}</td>
                        </tr>
                        <tr id="fundamentosPW">
                        <td>${dados.notas.fundamentosPaginaWeb.Nome}</td>
                        <td>${dados.notas.fundamentosPaginaWeb.Nota_1}</td>
                        <td>${dados.notas.fundamentosPaginaWeb.Nota_2}</td>
                        <td>${dados.notas.fundamentosPaginaWeb.Nota_3}</td>
                        <td>${dados.notas.fundamentosPaginaWeb.Media}</td>                       
                        </tr>
                        <tr id="tecnologiasInformacao">
                        <td>${dados.notas.tecnologiasInformacao.Nome}</td>
                        <td>${dados.notas.tecnologiasInformacao.Nota_1}</td>
                        <td>${dados.notas.tecnologiasInformacao.Nota_2}</td>
                        <td>${dados.notas.tecnologiasInformacao.Nota_3}</td>
                        <td>${dados.notas.tecnologiasInformacao.Media}</td>                       
                        </tr>
                        <tr>
                        <td>${dados.notas.redes.Nome}</td>
                        <td>${dados.notas.redes.Nota_1}</td>
                        <td>${dados.notas.redes.Nota_2}</td>
                        <td>${dados.notas.redes.Nota_3}</td>
                        <td>${dados.notas.redes.Media}</td>                       
                        </tr>
                        <tr>
                        <td>${dados.notas.programacaoAvancada.Nome}</td>
                        <td>${dados.notas.programacaoAvancada.Nota_1}</td>
                        <td>${dados.notas.programacaoAvancada.Nota_2}</td>
                        <td>${dados.notas.programacaoAvancada.Nota_3}</td>
                        <td>${dados.notas.programacaoAvancada.Media}</td>                       
                        </tr>
                        <tr>
                        <td>${dados.notas.programacao.Nome}</td>
                        <td>${dados.notas.programacao.Nota_1}</td>
                        <td>${dados.notas.programacao.Nota_2}</td>
                        <td>${dados.notas.programacao.Nota_3}</td>
                        <td>${dados.notas.programacao.Media}</td>                       
                        </tr>
                        <tr>
                        <td>${dados.notas.implementacaoRede.Nome}</td>
                        <td>${dados.notas.implementacaoRede.Nota_1}</td>
                        <td>${dados.notas.implementacaoRede.Nota_2}</td>
                        <td>${dados.notas.implementacaoRede.Nota_3}</td>
                        <td>${dados.notas.implementacaoRede.Media}</td>                       
                        </tr>
                        <tr>
                        <td>${dados.notas.implementacaoBaseDados.Nome}</td>
                        <td>${dados.notas.implementacaoBaseDados.Nota_1}</td>
                        <td>${dados.notas.implementacaoBaseDados.Nota_2}</td>
                        <td>${dados.notas.implementacaoBaseDados.Nota_3}</td>
                        <td>${dados.notas.implementacaoBaseDados.Media}</td>                       
                        </tr>
                        <tr>
                        <td>${dados.notas.habilidade.Nome}</td>
                        <td>${dados.notas.habilidade.Nota_1}</td>
                        <td>${dados.notas.habilidade.Nota_2}</td>
                        <td>${dados.notas.habilidade.Nota_3}</td>
                        <td>${dados.notas.habilidade.Media}</td>                       
                        </tr>
                        <tr>
                        <td>${dados.notas.ingles.Nome}</td>
                        <td>${dados.notas.ingles.Nota_1}</td>
                        <td>${dados.notas.ingles.Nota_2}</td>
                        <td>${dados.notas.ingles.Nota_3}</td>
                        <td>${dados.notas.ingles.Media}</td>                       
                        </tr>
                        <tr>
                        <td>${dados.notas.inglesII.Nome}</td>
                        <td>${dados.notas.inglesII.Nota_1}</td>
                        <td>${dados.notas.inglesII.Nota_2}</td>
                        <td>${dados.notas.inglesII.Nota_3}</td>
                        <td>${dados.notas.inglesII.Media}</td>                       
                        </tr>
                        <tr>
                        <td>${dados.notas.auditoria.Nome}</td>
                        <td>${dados.notas.auditoria.Nota_1}</td>
                        <td>${dados.notas.auditoria.Nota_2}</td>
                        <td>${dados.notas.auditoria.Nota_3}</td>
                        <td>${dados.notas.auditoria.Media}</td>                       
                        </tr>
                        <tr>
                        <td>${dados.notas.financas.Nome}</td>
                        <td>${dados.notas.financas.Nota_1}</td>
                        <td>${dados.notas.financas.Nota_2}</td>
                        <td>${dados.notas.financas.Nota_3}</td>
                        <td>${dados.notas.financas.Media}</td>                       
                        </tr>
                        <tr>
                        <td>${dados.notas.gestao.Nome}</td>
                        <td>${dados.notas.gestao.Nota_1}</td>
                        <td>${dados.notas.gestao.Nota_2}</td>
                        <td>${dados.notas.gestao.Nota_3}</td>
                        <td>${dados.notas.gestao.Media}</td>                       
                        </tr>
                        <tr>
                        <td>${dados.notas.basica.Nome}</td>
                        <td>${dados.notas.basica.Nota_1}</td>
                        <td>${dados.notas.basica.Nota_2}</td>
                        <td>${dados.notas.basica.Nota_3}</td>
                        <td>${dados.notas.basica.Media}</td>                       
                        </tr>
                        <tr>
                        <td>${dados.notas.civil.Nome}</td>
                        <td>${dados.notas.civil.Nota_1}</td>
                        <td>${dados.notas.civil.Nota_2}</td>
                        <td>${dados.notas.civil.Nota_3}</td>
                        <td>${dados.notas.civil.Media}</td>                       
                        </tr>
                        <tr>
                        <td>${dados.notas.continuicao.Nome}</td>
                        <td>${dados.notas.continuicao.Nota_1}</td>
                        <td>${dados.notas.continuicao.Nota_2}</td>
                        <td>${dados.notas.continuicao.Nota_3}</td>
                        <td>${dados.notas.continuicao.Media}</td>                       
                        </tr>
                        <tr>
                        <td>${dados.notas.penal.Nome}</td>
                        <td>${dados.notas.penal.Nota_1}</td>
                        <td>${dados.notas.penal.Nota_2}</td>
                        <td>${dados.notas.penal.Nota_3}</td>
                        <td>${dados.notas.penal.Media}</td>                       
                        </tr>
                        <tr>
                        <td>${dados.notas.saude.Nome}</td>
                        <td>${dados.notas.saude.Nota_1}</td>
                        <td>${dados.notas.saude.Nota_2}</td>
                        <td>${dados.notas.saude.Nota_3}</td>
                        <td>${dados.notas.saude.Media}</td>                       
                        </tr>
                        `;
                        var notaDoBancoDeDados = dados.frequencia.Nota;
                        var notaMinima = 0.0;
                        var notaMaxima = 10.0;
                        var notaPercentual = (notaDoBancoDeDados / notaMaxima) * 100;
                        var progressNota = document.getElementById("id_nota");
                        progressNota.style.width = notaPercentual + "%";
                        var progressFrequencia = document.getElementById("id_frequencia");
                        progressFrequencia.style.width = dados.frequencia.Frequencia;
                        var progressPresenca = document.getElementById("id_presenca");
                        progressPresenca.style.width = dados.frequencia.Presenca;
                        var progressFalta = document.getElementById("id_falta");
                        progressFalta.style.width = dados.frequencia.Faltas;                 
                        var pagamentosTB = document.getElementById("pagamentos-tb");
                        pagamentosTB.innerHTML = `
                          <tr>
                            <td>${dados.pagamentos.matricula.Data_Pagamento}</td>
                            <td>${dados.pagamentos.matricula.Valor_Pagamento}</td>
                            <td>${dados.pagamentos.matricula.Status_Pagamento}</td>
                          </tr>
                          <tr>
                            <td>${dados.pagamentos.janeiro.Data_Pagamento}</td>
                            <td>${dados.pagamentos.janeiro.Valor_Pagamento}</td>
                            <td>${dados.pagamentos.janeiro.Status_Pagamento}</td>
                          </tr>
                          <tr>
                            <td>${dados.pagamentos.fevereiro.Data_Pagamento}</td>
                            <td>${dados.pagamentos.fevereiro.Valor_Pagamento}</td>
                            <td>${dados.pagamentos.fevereiro.Status_Pagamento}</td>
                          </tr>
                          <tr>
                            <td>${dados.pagamentos.abril.Data_Pagamento}</td>
                            <td>${dados.pagamentos.abril.Valor_Pagamento}</td>
                            <td>${dados.pagamentos.abril.Status_Pagamento}</td>
                          </tr>
                          <tr>
                            <td>${dados.pagamentos.maio.Data_Pagamento}</td>
                            <td>${dados.pagamentos.maio.Valor_Pagamento}</td>
                            <td>${dados.pagamentos.maio.Status_Pagamento}</td>
                          </tr>
                          <tr>
                            <td>${dados.pagamentos.marco.Data_Pagamento}</td>
                            <td>${dados.pagamentos.marco.Valor_Pagamento}</td>
                            <td>${dados.pagamentos.marco.Status_Pagamento}</td>
                          </tr>
                          <tr>
                            <td>${dados.pagamentos.junho.Data_Pagamento}</td>
                            <td>${dados.pagamentos.junho.Valor_Pagamento}</td>
                            <td>${dados.pagamentos.junho.Status_Pagamento}</td>
                          </tr>
                          <tr>
                            <td>${dados.pagamentos.julho.Data_Pagamento}</td>
                            <td>${dados.pagamentos.julho.Valor_Pagamento}</td>
                            <td>${dados.pagamentos.julho.Status_Pagamento}</td>
                          </tr>
                          <tr>
                            <td>${dados.pagamentos.agosto.Data_Pagamento}</td>
                            <td>${dados.pagamentos.agosto.Valor_Pagamento}</td>
                            <td>${dados.pagamentos.agosto.Status_Pagamento}</td>
                          </tr>
                          <tr>
                            <td>${dados.pagamentos.setembro.Data_Pagamento}</td>
                            <td>${dados.pagamentos.setembro.Valor_Pagamento}</td>
                            <td>${dados.pagamentos.setembro.Status_Pagamento}</td>
                          </tr>
                          <tr>
                            <td>${dados.pagamentos.outubro.Data_Pagamento}</td>
                            <td>${dados.pagamentos.outubro.Valor_Pagamento}</td>
                            <td>${dados.pagamentos.outubro.Status_Pagamento}</td>
                          </tr>
                  
                          <tr>
                            <td>${dados.pagamentos.novembro.Data_Pagamento}</td>
                            <td>${dados.pagamentos.novembro.Valor_Pagamento}</td>
                            <td>${dados.pagamentos.novembro.Status_Pagamento}</td>
                          </tr>
                          <tr>
                            <td>${dados.pagamentos.dezembro.Data_Pagamento}</td>
                            <td>${dados.pagamentos.dezembro.Valor_Pagamento}</td>
                            <td>${dados.pagamentos.dezembro.Status_Pagamento}</td>
                          </tr>
                        `;
                    });
                  } else {
                      alert("Senha incorreta. Tente novamente.");
                      login.style.display = "block";
                      load.style.display = "none";
                  }
              });
          } else {
            setTimeout(() => {
              alert("E-mail não encontrado. Não é possível fazer o login.");
              login.style.display = "block";
              load.style.display = "none"; 
            }, 3000);
          }
      })
      .catch(function(error) {
          alert("Erro na consulta ao banco de dados: " + error.message);
          login.style.display = "block";
          load.style.display = "none";
      });
});
