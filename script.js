// Variables
const phrases = [
  "Se alguém está sem forças para continuar, seja a mão que o apoia.",
  "Quando alguém se sentir sozinho, compartilhe a sua companhia.",
  "Se alguém está sem esperanças, ofereça a sua confiança.",
  "Quando alguém estiver em silêncio, ouça o que o coração dele diz.",
  "Se alguém não pode ver o caminho, seja a luz que o guia.",
  "Quando alguém está confuso, ajude-o a encontrar clareza.",
  "Se alguém perdeu a fé, compartilhe a sua crença.",
  "Quando alguém está no escuro, ofereça-lhe a luz da sua alma.",
  "Se alguém está em dúvida, ofereça-lhe certeza.",
  "Quando alguém não consegue ver a beleza ao redor, mostre-lhe o que você vê.",
  "Se alguém perdeu o ânimo, compartilhe o seu entusiasmo.",
  "Quando alguém está com medo, seja a coragem que ele precisa.",
  "Se alguém está sem um objetivo, ajude-o a encontrar um propósito.",
  "Quando alguém está sem palavras, seja a voz que expressa o que ele sente.",
  "Se alguém está com o coração pesado, ajude a aliviar a carga.",
  "Quando alguém está sem direção, mostre-lhe o caminho certo.",
  "Se alguém perdeu o rumo, seja a bússola que o guia.",
  "Quando alguém está em desespero, ofereça o seu apoio e consolo.",
  "Se alguém está sem inspiração, seja a faísca que acende a chama.",
  "Quando alguém está sem fé na humanidade, mostre-lhe a sua bondade.",
  "Se alguém está sem esperança no futuro, compartilhe a sua visão positiva.",
  "Quando alguém está sem forças para sorrir, ofereça-lhe o seu riso.",
  "Se alguém está sem coragem para enfrentar os desafios, seja o exemplo de bravura.",
  "Quando alguém está sem amor no coração, ofereça-lhe o seu carinho.",
  "Se alguém está sem alegria, compartilhe a sua felicidade.",
  "Quando alguém está sem paz, ofereça-lhe a sua serenidade.",
  "Se alguém está sem direção, ajude-o a traçar um novo caminho.",
  "Quando alguém está sem sonhos, inspire-o com os seus.",
  "Se alguém está sem luz na vida, seja a estrela que brilha em seu caminho.",
  "Quando alguém está sem motivação, seja a energia que o impulsiona.",
  "Se alguém está sem perspectiva, ajude-o a enxergar novas possibilidades.",
  "Quando alguém está sem ânimo, ofereça-lhe o seu entusiasmo contagiante.",
  "Se alguém está sem um ombro amigo, seja o apoio que ele precisa.",
  "Quando alguém está sem fé na vida, mostre-lhe o poder da esperança.",
  "Se alguém está sem inspiração, compartilhe o que te move.",
  "Quando alguém está sem segurança, ofereça-lhe a sua confiança.",
  "Se alguém está sem forças para lutar, seja o encorajamento que ele precisa.",
  "Quando alguém está sem um sorriso, ilumine seu rosto com o seu.",
  "Se alguém está sem paz de espírito, ofereça-lhe a sua tranquilidade.",
  "Quando alguém está sem coragem para seguir em frente, mostre-lhe que ele não está sozinho.",
  "Se alguém está sem fé na humanidade, seja o exemplo de bondade que ele precisa ver.",
  "Quando alguém está sem apoio, seja a mão firme que o sustenta.",
  "Se alguém está sem paciência, ofereça-lhe a sua calma.",
  "Quando alguém está sem foco, ajude-o a reencontrar a concentração.",
  "Se alguém está sem esperança, seja a luz no fim do túnel.",
  "Quando alguém está sem vontade de continuar, inspire-o com a sua determinação.",
  "Se alguém está sem alegria de viver, compartilhe os pequenos momentos que te fazem sorrir.",
  "Quando alguém está sem amor-próprio, lembre-o do seu valor.",
  "Se alguém está sem fé no amanhã, ofereça-lhe o seu otimismo.",
  "Quando alguém está sem confiança, seja o suporte que ele precisa para acreditar em si mesmo.",
  "Se alguém está sem sonhos, compartilhe as suas aspirações.",
  "Quando alguém está sem energia, ofereça-lhe o seu vigor.",
  "Se alguém está sem esperança no futuro, mostre-lhe que ainda há luz à frente.",
  "Quando alguém está sem um propósito, ajude-o a descobrir o que lhe dá sentido.",
  "Se alguém está sem forças para levantar, ofereça-lhe o seu apoio.",
  "Quando alguém está sem um sorriso, aqueça-o com o seu carinho.",
  "Se alguém está sem direção na vida, seja o guia que ele precisa.",
  "Quando alguém está sem vontade de continuar, mostre-lhe o valor da persistência.",
  "Se alguém está sem fé no bem, seja o exemplo de bondade que ele precisa.",
  "Quando alguém está sem um amigo, seja o companheiro que ele precisa.",
  "Se alguém está sem coragem para seguir em frente, inspire-o com a sua própria jornada.",
  "Quando alguém está sem esperança no amanhã, ofereça-lhe o seu otimismo contagiante.",
  "Se alguém está sem forças para lutar, mostre-lhe que a batalha vale a pena.",
  "Quando alguém está sem fé em si mesmo, seja a voz que o lembra de seu valor.",
  "Se alguém está sem vontade de continuar, inspire-o com sua determinação.",
  "Quando alguém está sem amor na vida, ofereça-lhe o seu afeto.",
  "Se alguém está sem alegria, mostre-lhe o lado positivo das coisas.",
  "Quando alguém está sem esperança, compartilhe a sua fé no futuro.",
  "Se alguém está sem um caminho, ajude-o a traçar uma nova rota.",
  "Quando alguém está sem forças, seja a energia que o move.",
  "Se alguém está sem paciência, compartilhe a sua calma.",
  "Quando alguém está sem paz, ofereça-lhe a sua serenidade.",
  "Se alguém está sem perspectiva, ajude-o a ver novas oportunidades.",
  "Quando alguém está sem rumo, mostre-lhe o caminho certo.",
  "Se alguém está sem coragem, inspire-o com a sua determinação.",
  "Quando alguém está sem fé, compartilhe a sua crença.",
  "Se alguém está sem amor-próprio, lembre-o de seu valor.",
  "Quando alguém está sem alegria de viver, compartilhe os pequenos prazeres da vida.",
  "Se alguém está sem forças para continuar, ofereça-lhe o seu suporte.",
  "Quando alguém está sem esperança, seja a luz que ele precisa.",
  "Se alguém está sem confiança, ajude-o a acreditar em si mesmo.",
  "Quando alguém está sem inspiração, compartilhe o que te motiva.",
  "Se alguém está sem direção, ajude-o a encontrar o caminho.",
  "Quando alguém está sem energia, seja a força que ele precisa.",
  "Se alguém está sem fé no futuro, mostre-lhe que ainda há esperança.",
  "Quando alguém está sem amor no coração, ofereça-lhe o seu carinho.",
  "Se alguém está sem alegria, seja o sorriso que ele precisa ver.",
  "Quando alguém está sem coragem para enfrentar os desafios, mostre-lhe o valor da determinação.",
  "Se alguém está sem um objetivo, ajude-o a encontrar um propósito.",
  "Quando alguém está sem forças para continuar, seja o apoio que ele precisa.",
  "Se alguém está sem esperança, seja a luz que o guia para fora da escuridão."
];
const screen1 = document.getElementById("screen1")
const screen2 = document.getElementById("screen2")
const openBiscuit = document.getElementById("open-bis")
const button = document.getElementById("button")
const yourDailyPhrase = document.getElementById("new-message")

let indexPhrase = Math.round(Math.random() * 10)
console.log(phrases[indexPhrase])

// Events

openBiscuit.addEventListener("click", choosePhrase)
button.addEventListener("click", turnBackToStart)

// Callback Function

function choosePhrase(event) {
  event.preventDefault()

  yourDailyPhrase.textContent = phrases[indexPhrase]

  switchScreens()
}

function turnBackToStart() {
  switchScreens()
  window.location.reload(true)
}

function switchScreens() {
  screen1.classList.toggle("hide")
  screen2.classList.toggle("hide")
}