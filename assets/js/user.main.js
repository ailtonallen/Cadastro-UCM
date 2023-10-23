import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.0/firebase-app.js';
import { getAuth, onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/9.6.0/firebase-auth.js';
import { getDatabase, ref, onValue } from 'https://www.gstatic.com/firebasejs/9.6.0/firebase-database.js';

const firebaseConfig = {
    apiKey: "AIzaSyCQ9gGfIGGANpHSviYBn6YjnffiRFFKmUE",
    authDomain: "programa-df149.firebaseapp.com",
    databaseURL: "https://programa-df149-default-rtdb.firebaseio.com",
    projectId: "programa-df149",
    storageBucket: "programa-df149.appspot.com",
    messagingSenderId: "962397813368",
    appId: "1:962397813368:web:67d44a40f13ba8f628cb8d",
    measurementId: "G-QZV28E23NR" 
};

const firebaseApp = initializeApp(firebaseConfig);

const db = getDatabase(firebaseApp);

const auth = getAuth();

onAuthStateChanged(auth, (user) => {
  if (user) {
    const uid = user.uid;
    console.log('Usuário:', uid);

    const userRef = ref(db, 'users/' + uid);

    onValue(userRef, (snapshot) => {
      const userData = snapshot.val();
      if (userData) {
        document.getElementById('user-name').textContent = userData.nome;
        document.getElementById('user-email').textContent = userData.email;
        document.getElementById('user-n').value = userData.nome;
        document.getElementById('number').value = "Moz | + (258) " + userData.telefone;
        var enderecoUser = userData.endereco;
        if (enderecoUser === "undefined") {
          document.getElementById('endereco').value = "Sem dados no banco de dados.";
        } else {
          document.getElementById('endereco').value = enderecoUser;
        }
        var codigoPostal = userData.codigoPostal;
        if (codigoPostal === "undefined") {
          document.getElementById('codigoPostal').value = "Sem dados no banco de dados.";
        } else {
          document.getElementById('codigoPostal').value = codigoPostal;
        }
        var genero = userData.genero;
        if (genero === "undefined") {
          document.getElementById('civil').value = "Sem dados no banco de dados.";
        } else {
          document.getElementById('civil').value = genero;
        }
        var dataNascimento = userData.dataNascimento;
        if (dataNascimento === "undefined") {
          document.getElementById('dataNascimento').value = "Sem dados no banco de dados.";
        } else {
          document.getElementById('dataNascimento').value = dataNascimento;
        }
        var profissao = userData.profissao;
        if (profissao === "undefined") {
          document.getElementById('profissao').value = "Sem dados no banco de dados.";
        } else {
          document.getElementById('profissao').value = profissao;
        }
        var country = userData.pais;
        if (country === "undefined") {
          document.getElementById('dataNascimento').value = "Sem dados no banco de dados.";
        } else {
          document.getElementById('dataNascimento').value = country;
        }
        var province = userData.province;
        if (province === "undefined") {
          document.getElementById('provincia').value = "Sem dados no banco de dados.";
        } else {
          document.getElementById('province').value = province;
        }
        document.getElementById('cidade').value = userData.city;
      } else {
        console.log('Dados do usuário não encontrados.');
      }
    });
  } else {
    console.log('Nenhum usuário autenticado');
    alert("Falha na autenticacao de usuario, por favor faca login ou cadastro!");
  }
});