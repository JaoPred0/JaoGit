document.addEventListener("DOMContentLoaded", () => {
    function carregarConteudo(arquivo, container) {
        const caminho = `base/${arquivo}.html`; // Adiciona automaticamente 'base/' e '.html'
        
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
    }

    const elementos = [
        { arquivo: 'navbar', container: 'container-navbar' },
        { arquivo: 'banner', container: 'container-banner' },
        { arquivo: 'apresentacao', container: 'container-apresentacao' },
        { arquivo: 'recursos', container: 'container-recursos' },
        { arquivo: 'atualizacao', container: 'container-atualizacao' },
        { arquivo: 'repositorio', container: 'container-repositorio' },
        { arquivo: 'footer', container: 'container-footer' },
        { arquivo: 'versao', container: 'container-versao' }
    ];

    elementos.forEach(item => carregarConteudo(item.arquivo, item.container));
});
