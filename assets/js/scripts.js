function copyCode(button) {
    const targetId = button.dataset.target;
    const codeBlock = document.getElementById(targetId).innerText;

    navigator.clipboard.writeText(codeBlock).then(() => {
        let originalToast = document.getElementById('liveToast');
        let toastContainer = document.querySelector('.toast-container');

        // Clona o toast para criar um novo
        let newToast = originalToast.cloneNode(true);
        newToast.classList.remove("show"); // Remove classe Bootstrap antiga
        newToast.classList.add("animate__animated", "animate__fadeInUp"); // Adiciona animação de entrada

        // Gera um ID único
        let uniqueId = "toast-" + new Date().getTime();
        newToast.id = uniqueId;

        // Adiciona ao container
        toastContainer.appendChild(newToast);

        // Exibe toast
        let toast = new bootstrap.Toast(newToast);
        toast.show();

        // Remove após 5s com animação de saída
        setTimeout(() => {
            newToast.classList.replace("animate__fadeInUp", "animate__fadeOutDown");
            setTimeout(() => newToast.remove(), 1000); // Espera animação antes de remover
        }, 2000);
    }).catch(err => console.error("Erro ao copiar código:", err));
}

function toggleContent() {
    let moreContent = document.getElementById("more-content");
    let dots = document.getElementById("dots");

    moreContent.classList.toggle("d-none");

    // Oculta os "dots" quando o conteúdo for exibido
    if (!moreContent.classList.contains("d-none")) {
        dots.style.display = "none";
    } else {
        dots.style.display = "block";
    }
}