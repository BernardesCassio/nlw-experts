const perguntas = [
    {
      pergunta: "Qual foi o primeiro musical a estrear na Broadway?",
      respostas: [
        "A) Cats",
        "B) Show Boat",
        "C) Les Misérables"
      ],
      correta: 1
    },
    {
      pergunta: "Quem compôs a música de 'O Fantasma da Ópera'?",
      respostas: [
        "A) Andrew Lloyd Webber",
        "B) Stephen Sondheim",
        "C) Lin-Manuel Miranda"
      ],
      correta: 0
    },
    {
      pergunta: "Em que ano estreou o musical 'Chicago' na Broadway?",
      respostas: [
        "A) 1975",
        "B) 1982",
        "C) 1996"
      ],
      correta: 1
    },
    {
      pergunta: "Qual é o teatro mais antigo em operação na Broadway?",
      respostas: [
        "A) Winter Garden Theatre",
        "B) Lyceum Theatre",
        "C) New Amsterdam Theatre"
      ],
      correta: 1
    },
    {
      pergunta: "Quantos prêmios Tony ganhou o musical 'Hamilton' em 2016?",
      respostas: [
        "A) 7",
        "B) 11",
        "C) 16"
      ],
      correta: 2
    },
    {
      pergunta: "Quem escreveu o roteiro de 'West Side Story'?",
      respostas: [
        "A) Stephen Sondheim",
        "B) Leonard Bernstein",
        "C) Arthur Laurents"
      ],
      correta: 2
    },
    {
      pergunta: "Qual é a rua mais famosa da Broadway?",
      respostas: [
        "A) Wall Street",
        "B) 42nd Street",
        "C) Madison Avenue"
      ],
      correta: 1
    },
    {
        pergunta: "Qual musical ganhou o prêmio Pulitzer de Drama em 2016?",
      respostas: [
        "A) Hamilton",
        "B) Dear Evan Hansen",
        "C) The Book of Mormon"
      ],
      correta: 1
    },
    {
      pergunta: "Qual é o musical há mais tempo em cartaz na história da Broadway?",
      respostas: [
        "A) O Rei Leão",
        "B) O Fantasma da Ópera",
        "C) Chicago"
      ],
      correta: 1
    },
    {
      pergunta: "Em que ano estreou o musical 'The Lion King' na Broadway?",
      respostas: [
        "A) 1994",
        "B) 1997",
        "C) 2000"
      ],
      correta: 1
    }
  ];
  
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  const corretas  = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
  for(const item of perguntas){
  
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta
  
    for(let resposta of item.respostas){
      const dt =  quizItem.querySelector('dl dt').cloneNode(true)
      dt.querySelector('span').textContent = resposta
      dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
      dt.querySelector('input').value = item.respostas.indexOf(resposta)
      dt.querySelector('input').onchange = (event) => {
          const estaCorreta = event.target.value == item.correta
  
          corretas.delete(item)
          if(estaCorreta){
            corretas.add(item)
  
          } 
  
          mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
      
      }
  
      quizItem.querySelector('dl').appendChild(dt)
    }
  
    quizItem.querySelector('dl dt').remove()
  
    quiz.appendChild(quizItem)
  
  }