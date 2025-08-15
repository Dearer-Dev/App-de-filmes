const dados =[
    {
        "id" : "1",
        "nome" : "O Poderoso Chefão",
        "nota" : 4.8,
        "img" : "https://mid-noticias.curitiba.pr.gov.br/2022/00337449.jpg",
        "desc" : "A história acompanha a poderosa família mafiosa Corleone, liderada por Don Vito Corleone, enquanto seu filho mais novo, Michael, reluta em se envolver nos negócios da família mas acaba se transformando em um implacável chefe do crime."
    },
    {
        "id" : "2",
        "nome" : "Good Fellas",
        "nota" : 4.6,
        "img" : "https://upload.wikimedia.org/wikipedia/pt/7/7c/GoodfellasPoster.jpg",
        "desc" : "Retrata a ascensão e queda de Henry Hill, desde seu ingresso na máfia em 1955 até seu envolvimento com violência, traição e dependência de drogas, culminando em sua cooperação com o FBI."
    },
    {
        "id" : "3",
        "nome" : "Tropa de Elite",
        "nota" : 4.6,
        "img" : "https://image.tmdb.org/t/p/original/atl4a9VFVP7JYvk4GeSgqhLOfjC.jpg",
        "desc" : "O Capitão Nascimento, líder do BOPE no Rio de Janeiro, tenta conciliar sua vida pessoal com as demandas do dia a dia no batalhão. Ao mesmo tempo, prepara sua saída e busca um substituto. O filme começa com uma operação intensa em uma favela durante um baile funk."   
    },
    {
        "id" : "4",
        "nome" : "Atirador",
        "nota" : 4.3,
        "img" : "https://m.media-amazon.com/images/M/MV5BNGYxZTY0ZGYtODBhNC00ZWVjLTgzMDktYWMzYmY4MmM1NTdiXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        "desc" : "Bob Lee Swagger, um habilidoso atirador de elite que vive isolado, é recrutado para impedir um atentado contra o presidente dos EUA. Ao perceber que foi enganado e incriminado, ele precisa expor a conspiração para limpar seu nome."
    },
    {
        "id" : "5",
        "nome" : "Maze Runner",
        "nota" : 4.4,
        "img" : "https://a-static.mlcdn.com.br/1500x1500/maze-runner-correr-ou-morrer-fox-sony-dadc/cultmidia/7780987a476c11efbf8f4201ac18501b/4f547174dd380478e097fad8ce78c2b0.jpeg",
        "desc" : "Thomas acorda sem memórias em um elevador que o deixa em uma área chamada ''Glade'', cercada por um labirinto mortal. Ele e outros jovens tentam sobreviver e desvendar os segredos desse lugar."
    },
    {
        "id" : "6",
        "nome" : "Creed",
        "nota" : 4.4,
        "img" : "https://upload.wikimedia.org/wikipedia/pt/3/30/Creed_%28filme%29.jpg",
        "desc" : "Adonis Creed, filho de Apollo Creed, busca viver além do legado do pai. Ele encontra Rocky Balboa, que se torna seu treinador e mentor, guiando-o rumo ao ringue e a realização pessoal."
    },
    {
        "id" : "7",
        "nome" : "Clube Da Luta",
        "nota" : 4.6,
        "img" : "https://s2-ug.ap4r.com/image-aigc-article/seoPic/origin/1a30e1c8a2c5701c40a10bdd4720a78543c62eb2.jpg",
        "desc" : "Um narrador insone e entediado forma um clube de lutas clandestinas com o carismático Tyler Durden. À medida que o grupo cresce, conflitos emocionais e existenciais se intensificam, junto com críticas à sociedade consumista."
    },
    {
        "id" : "8",
        "nome" : "O Telefone Preto",
        "nota" : 4.7,
        "img" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCleYjEYmF2z4AudJ-964KNE_Wc0Q-YjPPPQ&s",
        "desc" : "Em 1978, Finney Blake, um garoto de 13 anos, é sequestrado por um serial killer chamado ''The Grabber'' e preso em um porão. Ele encontra um telefone preto desconectado que toca — são as vozes dos mortos tentando ajudá-lo a escapar."
    },
    {
        "id" : "9",
        "nome" : "Invocação Do Mal",
        "nota" : 4.5,
        "img" : "https://m.media-amazon.com/images/I/91UQCBxB+cL._AC_UF894,1000_QL80_.jpg",
        "desc" : "O casal de investigadores paranormais Ed e Lorraine Warren é chamado para ajudar uma família atormentada por eventos cada vez mais assustadores em sua nova casa; ao desvendar a origem da presença maligna, eles precisam confrontar a entidade para salvar todos."
    },
    {
        "id" : "10",
        "nome" : "Annabelle",
        "nota" : 3.4,
        "img" : "https://m.media-amazon.com/images/M/MV5BNjkyMDU5ZWQtZDhkOC00ZWFjLWIyM2MtZWFhMDUzNjdlNzU2XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        "desc" : "Depois que cultistas invadem a casa de um jovem casal, uma boneca antiga passa a agir como um condutor para forças demoníacas, desencadeando uma série de ocorrências sobrenaturais que colocam mãe, pai e bebê em risco."
    },
    {
        "id" : "11",
        "nome" : "A Freira",
        "nota" : 3.2,
        "img" : "https://br.web.img3.acsta.net/pictures/18/07/18/21/53/1348208.jpg",
        "desc" : "Após o suicídio de uma freira em uma abadia na Romênia, o Vaticano envia um padre atormentado e uma noviça para investigar. Lá, eles descobrem um segredo profano e enfrentam uma força malévola que assume a forma de uma freira demoníaca."
    },
    {
        "id" : "12",
        "nome" : "Ted",
        "nota" : 3.7,
        "img" : "https://upload.wikimedia.org/wikipedia/pt/1/11/Ted-poster.jpg",
        "desc" : "John Bennett, que quando criança desejou que seu ursinho de pelúcia Ted ganhasse vida, agora vive com ele como um adulto. Ted é grosseiro, engraçado e ainda seu melhor amigo, mas este relacionamento causa tensão com a namorada de John."
    },
    {
        "id" : "13",
        "nome" : "Até Que a Sorte Nos Separe",
        "nota" : 3.3,
        "img" : "https://upload.wikimedia.org/wikipedia/pt/a/ad/Cartaz_AQASNS.jpg",
        "desc" : "Tino ganha na loteria e leva uma vida de luxo com a família, mas após 10 a 15 anos, ele está falido. Para não contrariar sua esposa grávida, ele aceita ajuda do vizinho consultor financeiro e tenta manter as aparências, criando várias confusões."
    },
    {
        "id" : "14",
        "nome" : "As Branquelas",
        "nota" : 4.4,
        "img" : "https://br.web.img3.acsta.net/medias/nmedia/18/97/52/82/20534159.jpg",
        "desc" : "Dois agentes do FBI, Marcus e Kevin Copeland, que falham em uma missão, recebem uma nova tarefa: proteger herdeiras sociais. Quando as jovens se recusam a participar, os agentes decidem se disfarçar como elas para assumir a missão — e causam altas confusões."
    },
    {
        "id" : "15",
        "nome" : "Kung Fu Panda",
        "nota" : 4.8,
        "img" : "https://upload.wikimedia.org/wikipedia/pt/7/76/Kungfupanda.jpg",
        "desc" : "Po, um panda desajeitado que trabalha na loja de macarrão da família, sonha ser mestre de kung fu. Inesperadamente escolhido como o “Guerreiro Dragão”, ele treina com o mestre Shifu e os Cinco Furiosos para deter o temível Tai Lung."
    }
]

export default dados