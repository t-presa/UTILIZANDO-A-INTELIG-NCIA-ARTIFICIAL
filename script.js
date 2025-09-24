const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Assim que saiu da escola você se depara com uma nova pergunta em relação a sua vida, qual vestibular fazer?",
        alternativas: [
            {
                texto: "Isso é assustador!",
                afirmacao: "No início ficou com medo do que os vestibulares podem fazer em minha vida. "
            },
            {
                texto: "Isso é dificil!",
                afirmacao: "Quis saber como lidar com os vestibulares no dia a dia."
            }
        ]
    },
    {
        enunciado: "Uma vestibulanda decidiu fazer uma sequência de vestibulares.",
        alternativas: [
            {
                texto: "Utiliza uma ferramenta de busca na internet que ajude estudantes na escolha do vestibular ideal.",
                afirmacao: "Conseguiu utilizar sites para buscar informações úteis."
            },
            {
                texto: "Fez os vestibulares com base no que estudou durante todo o percursso de sua vida.",
                afirmacao: "Sentiu mais facilidade em fazer as provas devido ao seu conhecimento."
            }
        ]
    },
    {
        enunciado: "Após a realização do vestibular se sentiu bastante confiante por ter estudado e conseguido resolver as questões.",
        alternativas: [
            {
                texto: "Defende a ideia de que se esforçar realmente vale a pena.",
                afirmacao: "Vem impulsionando a novos estudantes irem em busca de seus sonhos."
            },
            {
                texto: "Me preocupo com as pessoas que perderão oportunidades por conta da pressão psicológica.",
                afirmacao: "Sua preocupação com as pessoas motivou a criar um grupo de estudos entre estudantes para discutir quais são suas preucupações."
            }
        ]
    },
    {
        enunciado: "Ao final do períldo escolar você precisa escolher o seu futuro, e agora?",
        alternativas: [
            {
                texto: "seguir a profissão que eu queo para minha vida.",
                afirmacao: "Notou também que muitas pessoas ainda não sabem oque seguir de profissão no futuro."
            },
            {
                texto: "seguir a profissão que as pessoas querem que eu faça.",
                afirmacao: "muitas pessoas sentem dificuldades de fazer escolhas em relação a vida profissional por conta das pessoas ao seu redor também!"
            }
        ]
    },
    {
        enunciado: "Você tem um trabalho em grupo de biologia para entregar na semana seguinte, o andamento do trabalho está um pouco atrasado e uma pessoa do seu grupo decidiu fazer com ajuda da IA. O problema é que o trabalho está totalmente igual ao do chat. O que você faz? ",
        alternativas: [
            {
                texto: "Escrever comandos para o chat é uma forma de contribuir com o trabalho, por isso não é um problema utilizar o texto inteiro.",
                afirmacao: "Infelizmente passou a utilizar a IA para fazer todas suas tarefas e agora se sente dependente da IA para tudo."
            },
            {
                texto: "O chat pode ser uma tecnologia muito avançada, mas é preciso manter a atenção pois toda máquina erra, por isso revisar o trabalho e contribuir com as perspectivas pessoais é essencial.",
                afirmacao: "Percebeu que toda IA reproduz orientações baseadas na empresa que programou e muito do que o chat escrevia não refletia o que pensava e por isso sabe que os textos gerados pela IA devem servir como auxílio e não resultado final. "
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta(){
    if (atual >=perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
    const botaoAlternativas = document.createElement("button");
    botaoAlternativas.textContent = alternativa.texto;
    botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
    caixaAlternativas.appendChild(botaoAlternativas);
   }

}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal+= afirmacoes+" " ;
    atual++;
    mostraPergunta();
}

function motraResultado(){
    caixaPerguntas.textContent = "em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();