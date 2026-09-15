// ========================================================
// CONFIGURAÇÃO DA ENGINE
// Edite SOMENTE este arquivo para personalizar cada evento.
// ========================================================

window.EVENTO_CONFIG = {
  nome: "Ângelo Miguel",
  idade: "3 aninhos",

  // ÁREAS CLICÁVEIS DA TELA INICIAL
  // Valores em porcentagem da largura/altura da arte.
  // Use index.html?debug=1 para visualizar as áreas em vermelho.
  botoes: {
   quiz: { x: 17.2, y: 39.5, largura: 65.6, altura: 8.3 },
   foto: { x: 16, y: 51.8, largura: 66.7, altura: 7.9 }
  },

  quiz: {
    titulo: "Quiz do Ângelo Miguel",
    subtitulo: "Será que você conhece bem o Ângelo Miguel?",

    perguntas: [
      {
        pergunta: "Qual meu super-herói favorito?",
        opcoes: ["Homem-Aranha", "Incrível Hulk", "Homem de Ferro", "Superman"],
        correta: "Homem-Aranha"
      },
      {
        pergunta: "Quais são minhas frutas favoritas?",
        opcoes: ["Morango, banana e melancia", "Melão, goiaba e uva", "Kiwi, jaca e manga", "Amora, laranja e maçã"],
        correta: "Morango, banana e melancia"
      },
      {
        pergunta: "Qual minha bebida favorita?",
        opcoes: ["Sucos", "Refrigerantes", "Chás", "Cafés"],
        correta: "Sucos"
      },
      {
        pergunta: "Qual meu time do coração?",
        opcoes: ["Flamengo", "Palmeiras", "Fluminense", "Corinthians"],
        correta: "Flamengo"
      },
      {
        pergunta: "Qual o dia certo do meu aniversário?",
        opcoes: ["15/09", "14/09", "13/09", "16/09"],
        correta: "15/09"
      },
      {
        pergunta: "Qual minha brincadeira preferida?",
        opcoes: ["Jogar bola", "Esconde-esconde", "Pega-pega", "Video-game"],
        correta: "Jogar bola"
      },
      {
        pergunta: "Qual meu hobby favorito?",
        opcoes: ["Andar de carro", "Andar de bicicleta", "Andar de moto", "Todas estão corretas"],
        correta: "Andar de carro"
      },
      {
        pergunta: "Qual o nome da minha cadelinha?",
        opcoes: ["Mel", "Amora", "Zaya", "Lessie"],
        correta: "Mel"
      },
      {
        pergunta: "Qual a minha cor favorita?",
        opcoes: ["Azul", "Vermelho", "Verde", "Preto"],
        correta: "Azul"
      },
      {
        pergunta: "Eu gosto mais de?",
        opcoes: ["Parque e algodão doce", "Praia e peixe", "Shopping e sorvete", "Praça e pipoca"],
        correta: "Parque e algodão doce"
      }
    ],

    mensagensResultado: {
      0: "😅 Opa! Parece que você ainda tem muito para descobrir sobre o Ângelo Miguel!",
      1: "😂 Foi por pouco… de acertar quase nada! Bora conhecer melhor o Ângelo Miguel!",
      2: "🤭 Você ainda tem bastante coisa para descobrir sobre o nosso aniversariante!",
      3: "😄 Tá começando! Precisa visitar mais o Ângelo Miguel!",
      4: "👀 Quase na metade! Você já sabe algumas coisinhas sobre ele!",
      5: "💙 Metade! Você conhece o Ângelo Miguel razoavelmente bem!",
      6: "✨ Mandou bem! Você já sabe bastante sobre o Ângelo Miguel!",
      7: "💫 Muito bem! Você conhece mesmo o nosso aniversariante!",
      8: "👑 Uau! Você conhece MUITO o Ângelo Miguel! Faltou pouquinho para gabaritar!",
      9: "🏆 QUASE PERFEITO! Um errinho separou você do 10/10!",
      10: "👑✨ GABARITOU! Você conhece o Ângelo Miguel melhor do que ninguém! 😂"
    }
  }
};
