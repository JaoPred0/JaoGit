function mostrarDiv(id) {
    let divs = document.querySelectorAll('.dm');

    divs.forEach(div => {
        div.classList.add('oculto');
        div.classList.remove('fade-in');
    });

    let divAtiva = document.getElementById(id);
    divAtiva.classList.remove('oculto');

    setTimeout(() => {
        divAtiva.classList.add('fade-in');
    }, 10);
}
