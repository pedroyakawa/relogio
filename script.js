function atualizarTempo() {
 let hrs = new Date()
 let horas = hrs.getHours().toString().padStart(2,'0')
 let minutos = hrs.getMinutes().toString().padStart(2, '0')
 let segundos = hrs.getSeconds().toString().padStart(2, '0')
document.querySelector('.time').textContent = `${horas}:${minutos}:${segundos}`
}

setInterval(atualizarTempo, 1000)
atualizarTempo()