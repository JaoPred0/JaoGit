document.addEventListener("DOMContentLoaded", () => {
    function carregarConteudo(arquivo, container) {
        const caminho = `base/${arquivo}.html`; // Adiciona automaticamente 'base/' e '.html'
        const caminhoCode = `base/code/${arquivo}.html`
        fetch(caminho)
            .then(response => {
                if (!response.ok) throw new Error(`Erro HTTP! Status: ${response.status}`);
                return response.text();
            })
            .then(html => {
                const elemento = document.getElementById(container);
                if (elemento) {
                    elemento.innerHTML = html;
                } else {
                    console.warn(`Elemento com ID "${container}" não encontrado.`);
                }
            })
            .catch(error => console.error(`Erro ao carregar ${caminho}:`, error));
        fetch(caminhoCode)
            .then(response => {
                if (!response.ok) throw new Error(`Erro HTTP! Status: ${response.status}`);
                return response.text();
            })
            .then(html => {
                const elemento = document.getElementById(container);
                if (elemento) {
                    elemento.innerHTML = html;
                } else {
                    console.warn(`Elemento com ID "${container}" não encontrado.`);
                }
            })
            .catch(error => console.error(`Erro ao carregar ${caminhoCode}:`, error));
    }


    const elementos = [
        { arquivo: 'navbar', container: 'container-navbar' },
        { arquivo: 'offcanvas_show', container: 'container-offcanvas_show' },
        { arquivo: 'conteudo_docs', container: 'container-conteudo_docs' },
        { arquivo: 'code', container: 'container-conteudo_docs' },
    ]
    const elementosCode = [
        { arquivo: 'code1', container: 'container-code1' },
        { arquivo: 'code2', container: 'container-code2' },
        { arquivo: 'code3', container: 'container-code3' },
        { arquivo: 'code4', container: 'container-code4' },
        { arquivo: 'code5', container: 'container-code5' },
        { arquivo: 'code6', container: 'container-code6' },
        { arquivo: 'code7', container: 'container-code7' },
        { arquivo: 'code8', container: 'container-code8' },
        { arquivo: 'code9', container: 'container-code9' },
        { arquivo: 'code10', container: 'container-code10' },
    ]
    elementos.forEach(item => carregarConteudo(item.arquivo, item.container));
    elementosCode.forEach(item => carregarConteudo(item.arquivo, item.container));
});