function copyToClipboard() {
    const input = document.getElementById("gitCloneCmd");
    input.select();
    input.setSelectionRange(0, 99999); // Para dispositivos móveis
    document.execCommand("copy");

    // Mensagem de confirmação
    const copyMsg = document.getElementById("copyMsg");
    copyMsg.style.display = "block";

    // Esconde a mensagem após 3 segundos
    setTimeout(() => {
        copyMsg.style.display = "none";
    }, 3000);
}