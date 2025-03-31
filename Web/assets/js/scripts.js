function toggleMenu() {
    let menuShow = document.getElementById("menuShow");
    let menuList = document.getElementById("menuList");

    if (menuShow.style.display === "none" || menuShow.style.display === "") {
        menuShow.style.display = "block";
        menuList.style.display = "none";
    } else {
        menuShow.style.display = "none";
        menuList.style.display = "block";
    }
}

function copyCode(button) {
    const targetId = button.dataset.target;
    const codeBlock = document.getElementById(targetId).innerText;

    navigator.clipboard.writeText(codeBlock).then(() => {
        let toast = new bootstrap.Toast(document.getElementById('liveToast'));
        toast.show();
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
