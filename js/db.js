document.addEventListener('DOMContentLoaded', function() {
    iniciarApp();
});

function iniciarApp() {
    consultarAPI(); // Consulta el API del backend PHP    
}

async function consultarAPI() {
    try {
        const url = 'http://198.251.74.213:10012/api/equipos';
        const resultado = await fetch(url);
        const equipos = await resultado.json();
        mostrarEquipos(equipos);          

    } catch (error){
        console.log(error);
    }
}
