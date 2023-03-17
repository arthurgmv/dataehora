// Script separado para quem quiser só vê-lo
var dataElement = document.getElementById('data');
var horaElement = document.getElementById('hora');

setInterval(function() {
    var data = new Date();
    var dataFormatada = (data.getDate() < 10 ? '0' : '') + data.getDate() + '/'
    + ((data.getMonth() + 1) < 10 ? '0' : '') + (data.getMonth() + 1) + '/'
    + data.getFullYear();
var horaFormatada = (data.getHours() < 10 ? '0' : '') + data.getHours() + ':'
    + (data.getMinutes() < 10 ? '0' : '') + data.getMinutes() + ':'
    + (data.getSeconds() < 10 ? '0' : '') + data.getSeconds();
    dataElement.innerHTML = dataFormatada;
    horaElement.innerHTML = horaFormatada;
    }, 1000); 