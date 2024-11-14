const usuarios = [
    { nome: 'Ana', idade: 25, cpf: '123' },
    { nome: 'Carla', idade: 30, cpf: '456' },
    { nome: 'Trísia', idade: 28, cpf: '789' }
  ];
  
  const listaUsuariosElement = document.createElement('ul');
  document.body.appendChild(listaUsuariosElement);
  
  for (let usuario of usuarios) {
      inserirUsuarioNaLista(usuario);
  }
  
  function inserirUsuario() {
      const nome = document.querySelector('#nome').value;
      const idade = document.querySelector('#idade').value;
      const cpf = document.querySelector('#cpf').value;
  
      const novoUsuario = { nome, idade, cpf };
      inserirUsuarioNaLista(novoUsuario);
  }
  
  function inserirUsuarioNaLista(usuario) {
      const liElement = document.createElement('li');
  
      const nomeElement = document.createElement('span');
      nomeElement.textContent = `Nome: ${usuario.nome}`;
      
      const idadeElement = document.createElement('span');
      idadeElement.textContent = `Idade: ${usuario.idade}`;
      
      const cpfElement = document.createElement('span');
      cpfElement.textContent = `CPF: ${usuario.cpf}`;
  
      const botaoRemoverElement = document.createElement('button');
      botaoRemoverElement.textContent = 'X';
      botaoRemoverElement.addEventListener('click', (event) => {
          liElement.remove();
      });
  
      liElement.appendChild(nomeElement);
      liElement.appendChild(document.createElement('br'));
      liElement.appendChild(idadeElement);
      liElement.appendChild(document.createElement('br'));
      liElement.appendChild(cpfElement);
      liElement.appendChild(document.createElement('br'));
      liElement.appendChild(botaoRemoverElement);
  
      listaUsuariosElement.appendChild(liElement);
  }
  