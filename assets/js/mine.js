// Función para cargar el menú desde menulink.html
function loadMenu() {
    var menuContainer = document.getElementById("menu-container");
    fetch('menulink.html')
        .then(response => response.text())
        .then(data => {
            menuContainer.innerHTML = data;
        })
        .catch(error => {
            console.error('Error fetching menu:', error);
        });
}
// Función para cargar datos en el section con id datos header
function loadDatosh() {
    var datosHeader = document.getElementById("datoshead");
    fetch('datosh.html')
        .then(response => response.text())
        .then(data => {
            datosHeader.innerHTML = data; // También carga los datos en el footer
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}
// Función para cargar datos en el section con id datos footer
function loadDatos() {
    var datosFooterSection = document.getElementById("datosf");
    fetch('datos.html')
        .then(response => response.text())
        .then(data => {
            datosFooterSection.innerHTML = data; // También carga los datos en el footer
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

// Llama a las funciones loadMenu() y loadDatos() cuando se carga la página
window.onload = function() {
    loadMenu();
    loadDatosh();
    loadDatos();
};
