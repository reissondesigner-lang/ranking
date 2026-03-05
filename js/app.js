function mostrarDashboard(){

document.getElementById("loginScreen").classList.add("hidden")
document.getElementById("dashboard").classList.remove("hidden")

}

function abrirRanking(){

document.getElementById("dashboard").classList.add("hidden")
document.getElementById("rankingScreen").classList.remove("hidden")

loadRanking("week")

}

function abrirRegistrarVenda(){

document.getElementById("dashboard").classList.add("hidden")
document.getElementById("registrarVenda").classList.remove("hidden")

}

document.getElementById("darkToggle").onclick = () => {

document.body.classList.toggle("dark")

}

if ('serviceWorker' in navigator) {

navigator.serviceWorker.register('/service-worker.js')

}