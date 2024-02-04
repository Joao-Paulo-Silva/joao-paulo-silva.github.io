interface Item {
    id: number;
    title: string;
    describe: string;
    pathImg: string;
    link?: string;
}
export const projects: Item[] = [
    {
        id: 1,
        title: "AISP - Python lib",
        describe: "Este trabalho de conclusão de curso (TCC) consistiu na elaboração de uma biblioteca em Python que incorpora técnicas de sistemas imunológicos artificiais. Foi desenvolvido um módulo inicial voltado para a classificação, destacando-se a aplicação de metáforas de seleção negativa.",
        pathImg: "src/assets/imgs/aisp-docs.png",
        link: 'https://ais-package.github.io/pt-br/',
    },
    {
        id: 2,
        title: "SIFSoft Júnior",
        describe: "Na empresa júnior, contribuí em diversos projetos como desenvolvedor frontend, utilizando tecnologias como React com TypeScript. Além disso, participei ativamente no desenvolvimento tanto do frontend quanto do backend do site da empresa, utilizando HTML e CSS no frontend e Django no backend.",
        pathImg: "src/assets/imgs/sifsoft-site.png",
        link: 'https://sifsoft.com.br/',
    },
];