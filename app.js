function Pesquisar() {
    // Obtém a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value.toLowerCase();

    if (!campoPesquisa) {
        section.innerHTML = "<p>Nenhum resultado correspondente</p>";
        return; // Sai da função se o campo de pesquisa estiver vazio
    }

    // Criando a Base de Dados
    let dados = [
        
    {
        titulo: "Estados Federados da Micronésia",
        descricao: "Um país insular da Micronésia, composto por mais de 600 ilhas. É conhecido por suas belas lagoas e recifes de coral.",
        curiosidade: "A cultura tradicional micronésia é rica em mitos e lendas sobre deuses e espíritos.",
        link: "https://www.youtube.com/watch?v=BH8-w-yC37s", 
        capital: "Palikir",
        populacao: "115.000 (estimativa 2023)"
    },
    {
        titulo: "Fiji",
        descricao: "Um arquipélago no Pacífico Sul, famoso por suas ilhas tropicais, resorts de luxo e cultura vibrante.",
        curiosidade: "O kava, uma bebida tradicional feita da raiz de uma planta local, é muito popular em Fiji.",
        link: "https://www.youtube.com/watch?v=FL0U4tJ0Ezk",
        capital: "Suva",
        populacao: "924.000 (estimativa 2023)"
    },
    {
        titulo: " Ilhas Marshall",
        descricao: "Um país insular no Oceano Pacífico, formado por 29 atóis e cinco ilhas isoladas.",
        curiosidade: "As Ilhas Marshall foram o local de testes nucleares dos Estados Unidos durante a Guerra Fria.",
        link: "https://www.youtube.com/watch?v=BDdGG3c2zyo", 
        capital: "Majuro",
        populacao: "59.000 (estimativa 2023)"
    },
    {
        titulo: "Ilhas Salomão",
        descricao: "Um arquipélago no Oceano Pacífico, conhecido por sua rica biodiversidade e cultura melanésia.",
        curiosidade: "As Ilhas Salomão foram o cenário de uma importante campanha da Segunda Guerra Mundial.",
        link: "https://www.youtube.com/watch?v=mcuEYNhDoLQ",
        capital: "Honiara",
        populacao: "700.000 (estimativa 2023)"
    },
    {
        titulo: "Kiribati",
        descricao: "Um país insular no Oceano Pacífico, formado por 33 atóis e uma ilha isolada.",
        curiosidade: "Kiribati é um dos países mais ameaçados pela elevação do nível do mar.",
        link: "https://www.youtube.com/watch?v=0CQ7rdxTc8c", 
        capital: "Tarawa do Sul",
        populacao: "123.000 (estimativa 2023)"
    },
    {
        titulo: "Nauru",
        descricao: "A menor república do mundo, localizada no Oceano Pacífico. É conhecida por suas vastas reservas de fosfato.",
        curiosidade: "Nauru foi um importante centro de mineração de fosfato durante o século XX, mas a exploração intensa deixou marcas significativas no ambiente.",
        link: "https://www.youtube.com/watch?v=kbA197thuno&t=172s", 
        capital: "Yaren",
        populacao: "12.000 (estimativa 2023)"
    },
    {
        titulo: "Nova Zelândia",
        descricao: "Um país insular da Oceania, conhecido por suas paisagens montanhosas, lagos cristalinos e rica cultura maori. Sua capital é Wellington e sua maior cidade é Auckland.",
        curiosidade: "A Nova Zelândia foi um dos últimos grandes territórios a ser habitado por seres humanos.",
        link: "https://www.youtube.com/watch?v=wP48qcz1qgM",
        capital: "Wellington",
        maior_cidade: "Auckland",
        populacao: "5.1 milhões (estimativa 2023)"
    },
    {
        titulo: "Palau",
        descricao: "Um arquipélago no Oceano Pacífico, famoso por suas lagoas cristalinas e recifes de coral.",
        curiosidade: "Palau abriga uma das maiores lagoas marinhas do mundo, o Lago Jellyfish, habitado por milhões de medusas.",
        link: "https://www.youtube.com/watch?v=7X4OgK9mVcQ", 
        capital: "Ngerulmud",
         populacao: "18.000 (estimativa 2023)"
    },
    {
        titulo: "Papua-Nova Guiné",
        descricao: "Um país insular na Oceania, com uma rica diversidade cultural e linguística. É conhecido por suas florestas tropicais e tribos isoladas.",
        curiosidade: "Papua-Nova Guiné possui uma das maiores biodiversidades do mundo, com muitas espécies endêmicas.",
        link: "https://www.youtube.com/watch?v=VF-Cx4DjcCQ", 
        capital: "Port Moresby",
        populacao: "9 milhões (estimativa 2023)"
    },
    {
        titulo: "Samoa",
        descricao: "Um país insular na Polinésia, conhecido por suas praias, cultura polinésia e tradições. Apia é sua capital.",
        curiosidade: "O fale, uma reunião comunitária tradicional, é uma parte importante da vida samoana.",
        link: "https://www.youtube.com/watch?v=XPNECGxrJVA", // Substitua por um link real sobre Samoa
        capital: "Apia",
        populacao: "200.000 (estimativa 2023)"
    },
    {
        titulo: "Tonga",
        descricao: "Um reino polinésio composto por 176 ilhas. É conhecido por suas tradições e cultura polinésia.",
        curiosidade: "A Tonga é uma das últimas monarquias absolutas do mundo.",
        link: "https://www.youtube.com/watch?v=X-FSLSeC_U0", 
        capital: "Nuku alofa",
        populacao: "100.000 (estimativa 2023)"
    },
    {
        titulo: "Tuvalu",
        descricao: "Um pequeno país insular no Pacífico, composto por três atóis e seis ilhas isoladas.",
        curiosidade: "Tuvalu é um dos países mais vulneráveis à elevação do nível do mar.",
        link: "https://www.youtube.com/watch?v=aKdU7PxyKkc", 
        capital: "Funafuti",
        populacao: "12.000 (estimativa 2023)"
    },
    {
        titulo: "Vanuatu",
        descricao: "Um arquipélago no Pacífico Sul, conhecido por seus vulcões ativos, cultura rica e belas praias.",
        curiosidade: "O bungee jumping originou-se em Vanuatu.",
        link: "hhttps://www.youtube.com/watch?v=d6hXnYW_2ac", 
        capital: "Port Vila",
        populacao:"330.000 (estimativa 2023)"
    },

    {   titulo: "Australia",
        descricao: "A Austrália é a menor das massas continentais, conhecida por sua rica biodiversidade, paisagens deslumbrantes e cultura vibrante. Com uma área vasta e clima diversificado, a Austrália abriga desde desertos áridos até exuberantes florestas tropicais.",
        curiosidade: "Sabia que a Austrália abriga a maior população de camelos selvagens do mundo?",
        link: "https://www.youtube.com/watch?v=Ks7vvSI4-1U",
        capital: "Canberra",
        maior_cidade: "Sydney",
        populacao: "26 milhões (estimativa 2023)"},
];


    // Adicionando as formas de encontrar os resultados dentro da base de dados
    let resultados = "";

    for (let dado of dados) {
        if (dado.titulo.toLowerCase().includes(campoPesquisa) ||
            dado.descricao.toLowerCase().includes(campoPesquisa) ||
            dado.curiosidade.toLowerCase().includes(campoPesquisa) ||
            dado.capital.toLowerCase().includes(campoPesquisa) ||
            dado.link.toLowerCase().includes(campoPesquisa)) {
            resultados += `
                <div class="item-resultado">
                    <h2>
                        <a href="#" target="_blank">${dado.titulo}</a>
                    </h2>
                    <p class="descricao-meta">${dado.descricao}</p>
                    <p class="categoria"><strong>Capital:</strong> ${dado.capital}</p>
                    <p class="categoria"><strong>População:</strong> ${dado.populacao}</p>
                    <p class="curiosidade"><strong>Curiosidade:</strong> ${dado.curiosidade}</p>
                    <a href="${dado.link}" target="_blank">Mais informações</a>
                </div>
            `;
        }
    }
    if (!resultados) {
        resultados = "Nenhum resultado correspondente"
    }
    section.innerHTML = resultados;
}
