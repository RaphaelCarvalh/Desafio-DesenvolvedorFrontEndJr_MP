const motoboys = [
    { nome: 'João Silva', placa: 'XYZ-1234', telefone: '(33) 98765-4321', email: 'joao@email.com' },
    { nome: 'Maria Oliveira', placa: 'ABC-5678', telefone: '(21) 98765-8765', email: 'maria@email.com' },
    { nome: 'Carlos Santos', placa: 'DEF-9876', telefone: '(24) 98765-9876', email: 'carlos@email.com' },
    { nome: 'Lucas Pereira', placa: 'PQR-9876', telefone: '(12) 98765-8765', email: 'lucas@email.com' },
    { nome: 'Camila Oliveira', placa: 'STU-5432', telefone: '(11) 98765-4321', email: 'camila@email.com' },
  ];
  
  function carregarMotoboys() {
    const listaMotoboys = document.getElementById('lista-motoboys');
  
    listaMotoboys.innerHTML = '';
  
    motoboys.forEach(motoboy => {
      const motoboyCard = document.createElement('div');
      motoboyCard.classList.add('motoboy-card');
      motoboyCard.onclick = () => mostrarDetalhes(motoboy);
  
      motoboyCard.innerHTML = `
        <h2>${motoboy.nome}</h2>
        <p>Placa: ${motoboy.placa}</p>
      `;
  
      listaMotoboys.appendChild(motoboyCard);
    });
  }
    
  function mostrarDetalhes(motoboy) {
    const detalhesMotoboy = document.getElementById('detalhes-motoboy');
    const detalhesMotoboyButton = document.getElementById('fechar-detalhes');
  
    if (detalhesMotoboy.style.display === 'block') {
      detalhesMotoboy.style.display = 'none';
    } else {
      detalhesMotoboy.innerHTML = `
        <h2>${motoboy.nome}</h2>
        <p>Placa: ${motoboy.placa}</p>
        <p>Telefone: ${motoboy.telefone}</p>
        <p>Email: ${motoboy.email}</p>
        <button class="acao-button editar" onclick="editarMotoboy('${motoboy.nome}')">Editar</button>
        <button class="acao-button excluir" onclick="excluirMotoboy('${motoboy.nome}')">Excluir</button>
        <button id="fechar-detalhes" class="acao-button" onclick="fecharDetalhes()">Fechar</button>
      `;
  
      detalhesMotoboy.style.display = 'block';
    }
  }
  
  function fecharDetalhes() {
    const detalhesMotoboy = document.getElementById('detalhes-motoboy');
    detalhesMotoboy.style.display = 'none';
  } 
    
  function excluirMotoboy(nome) {
    const indiceMotoboy = motoboys.findIndex(motoboy => motoboy.nome === nome);
  
    if (indiceMotoboy !== -1) {
      motoboys.splice(indiceMotoboy, 1); 
      carregarMotoboys(); 
      fecharDetalhes(); 
    }
  }
  
  carregarMotoboys();
  fecharDetalhes();