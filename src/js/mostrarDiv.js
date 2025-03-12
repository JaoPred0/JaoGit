function mostrarDiv(id) {
    let divs = document.querySelectorAll('.container.mt-3');
    
    divs.forEach(div => {
        div.classList.add('oculto');
        div.classList.remove('fade-in');
    });

    let divAtiva = document.getElementById(id);
    divAtiva.classList.remove('oculto');
    divAtiva.classList.add('fade-in');
}