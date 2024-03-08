function buscarUsuario(arrayUsuarios, valorPesquisado) {
    return new Promise((resolve, reject) => {
      const usuarioEncontrado = arrayUsuarios.find(
        (usuario) =>
          usuario.nome === valorPesquisado ||         
          usuario.idade === valorPesquisado||
          usuario.email === valorPesquisado
      );
  
      usuarioEncontrado ? resolve(usuarioEncontrado) : reject(new Error("Usuário não encontrado!"));
    });
  }
  
  const usuarios = [
    { nome: "Jarru", idade: 25, email: "Jarru@email.com" },
    { nome: "Lisis", idade: 30, email: "Lisis@email.com" },
    { nome: "Roevi", idade: 22, email: "Roevi@email.com" },
    { nome: "Joge", idade: 20, email: "Joge@email.com" },
    { nome: "Matias", idade: 38, email: "Matias@email.com" },
    { nome: "Amadeu", idade: 27, email: "Amadeu@email.com" },
  ];
  
  
  
  buscarUsuario(usuarios, "Matias@email.com")
    .then((resultado) => console.log("Usuário encontrado:", resultado))
    .catch((erro) => console.error("Erro:", erro.message));