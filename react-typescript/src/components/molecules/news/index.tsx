import { NewsLine } from 'components/molecules'
import styles from './styles.module.scss'

export const News = () : JSX.Element => {

    const newsList = [
        {"title":"Sonic the Hedgehog 2 gerou US$ 25,5 milhões em seu final de semana internacional","description":"Um aumento de 2% em comparação com a estreia do primeiro filme","author":"Elta_Dickens12","createdAt":"2022-04-05T09:00:46.272Z","comments":44,"tags":["Games","Entretenimento"],"type":"Cinema","image":"https://static.gamevicio.com/imagens_up/big/71/sonic-the-hedgehog-2-gerou-us-25-5-milhoes-em-seu-final-de-semana-internacional-070121.jpg","id":"1"},
        {"title":"Vaza lista com próximos jogos chegando ao catálogo do Xbox Game Pass","description":"Vários jogos estão entrando nessa primeira quinzena de abril","author":"Russel45","createdAt":"2022-04-04T12:04:33.624Z","comments":18,"tags":["Xbox Series","PC","Xbox One"],"type":"Games","image":"https://static.gamevicio.com/imagens_up/big/71/vaza-lista-com-proximos-jogos-chegando-ao-catalogo-do-xbox-game-pass-070119.jpg","id":"2"},
        {"title":"Encare as profundezas amaldiçoadas de um pesadelo em Nightmare Reaper","description":"FPS de inspiração retrô que mistura loot-shooter com rogue-lite rompe a parede entre a jogabilidade clássica e moderna.","author":"Emerson.Hegmann65","createdAt":"2022-04-03T19:19:27.623Z","comments":88,"tags":["Steam","PC","Games"],"type":"Indie","image":"https://static.gamevicio.com/imagens_up/big/71/encare-as-profundezas-amaldicoadas-de-um-pesadelo-em-nightmare-reaper-070117.jpg","id":"3"},
        {"title":"Activision Blizzard atualiza número de estúdios trabalhando em jogos de Call of Duty","description":"Digital Legends e Solid State Studios foram acrescentadas ao já enorme número de estúdios trabalhando na franquia","author":"Cristian19","createdAt":"2022-04-03T19:22:54.794Z","comments":14,"tags":[],"type":"Games","image":"https://static.gamevicio.com/imagens_up/big/71/activision-blizzard-atualiza-numero-de-estudios-trabalhando-em-jogos-de-call-of-duty-070115.jpg","id":"4"},
        {"title":"Xbox estaria preparando um evento para junho nos moldes da E3, afirma Jeff Grubb","description":"Com o cancelamento da E3 2022, Microsoft estaria preparando evento próprio.","author":"Dayna_Hessel","createdAt":"2022-04-04T16:54:57.713Z","comments":88,"tags":["Xbox Series","Xbox One"],"type":"Games","image":"https://static.gamevicio.com/imagens_up/big/71/xbox-estaria-preparando-um-evento-para-junho-nos-moldes-da-e3-afirma-jeff-grubb-070112.jpg","id":"5"},
        {"title":"Conheça todos detalhes da Placa de vídeo GTX 1650","description":"Uma placa com excelente custo benefício.","author":"Natalia7","createdAt":"2022-04-04T14:52:25.242Z","comments":37,"tags":["Games","PC"],"type":"Games","image":"https://s2.glbimg.com/tg8Dimrd-vCvWvmz48f5EaOZMC0=/0x0:1199x800/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2019/z/z/6sVseMQbmjuhy4ADPAgw/geforce-1650-evga-3qtr-front-left-100794190-large.jpg","id":"6"},
        {"title":"Loja Hype Games fecha parceria com o Player’s Game, o banco gamer do Itaú","description":"Clientes da conta digital terão descontos exclusivos em jogos para PC e assinaturas para Xbox e PlayStation.","author":"Werner91","createdAt":"2022-04-05T10:25:16.597Z","comments":64,"tags":[],"type":"Games","image":"https://static.gamevicio.com/imagens_up/big/71/loja-hype-games-fecha-parceria-com-o-player-s-game-o-banco-gamer-do-itau-070113.jpg","id":"7"},
        {"title":"Bandai Namco diz não ter qualquer planos de criar sequências ou lançar DLCs para Tales of Arise","description":"Apesar do sucesso crítico e comercial do JRPG, a empresa não planeja expandi-lo","author":"Arely_Hermiston69","createdAt":"2022-04-02T07:45:17.436Z","comments":18,"tags":["PS5","PC","PS4"],"type":"Games","image":"https://static.gamevicio.com/imagens_up/big/71/bandai-namco-diz-nao-ter-qualquer-planos-de-criar-sequencias-ou-lancar-dlcs-para-tales-of-arise-070109.jpg","id":"8"},
        {"title":"Microsoft adiciona novos jogos da Xbox Game Studios ao catálogo de compatibilidade do Steam Deck","description":"O portátil da Valve fica cada vez mais recheado de jogos em seu catálogo","author":"Brendan41","createdAt":"2022-04-05T03:33:50.247Z","comments":53,"tags":["Steam"],"type":"Games","image":"https://static.gamevicio.com/imagens_up/big/71/microsoft-adiciona-novos-jogos-da-xbox-game-studios-ao-catalogo-de-compatibilidade-do-steam-deck-070105.jpg","id":"9"},
        {"title":"Mangá de Golden Kamuy vai acabar em breve","description":"Segundo leaker, serão somente mais 3 capítulos","author":"Palma.Harris","createdAt":"2022-04-04T15:38:34.860Z","comments":71,"tags":["Animes"],"type":"Mangás","image":"https://static.gamevicio.com/imagens_up/big/71/manga-de-golden-kamuy-vai-acabar-em-breve-070098.jpg","id":"10"},
        {"title":"David Jaffe diz que nova PS Plus não possui o mesmo apelo que o Game Pass","description":"Quantidade x Qualidade","author":"Harrison.Jast95","createdAt":"2022-04-02T07:11:35.037Z","comments":15,"tags":["Xbox One","Xbox Series","PS4"],"type":"Games","image":"https://static.gamevicio.com/imagens_up/big/71/david-jaffe-diz-que-nova-ps-plus-nao-possui-o-mesmo-apelo-que-o-game-pass-070093.jpg","id":"11"},
        {"title":"Microsoft pode estar planejando em fundir o Xbox Live Gold com o Xbox Game Pass Ultimate","description":"Será o fim do Xbox Live Gold?","author":"Freda.Murphy6","createdAt":"2022-04-05T06:54:20.484Z","comments":13,"tags":["Xbox Series","Xbox One"],"type":"Games","image":"https://static.gamevicio.com/imagens_up/big/71/microsoft-pode-estar-planejando-em-fundir-o-xbox-live-gold-com-o-xbox-game-pass-ultimate-070096.jpg","id":"12"},
        {"title":"title 13","description":"description 13","author":"Baby.Gorczany","createdAt":"2022-04-05T09:21:45.132Z","comments":62,"tags":[],"type":"type 13","image":"image 13","id":"13"},
        {"title":"Segundo informações, Eivor, o protagonista de Assassin's Creed Valhalla, será o mais novo personagem chegando em Fortnite","description":"Mais uma colaboração da Ubisoft com a Epic Games?","author":"Wanda53","createdAt":"2022-03-04T19:31:54.405Z","comments":6,"tags":[],"type":"Games","image":"https://static.gamevicio.com/imagens_up/big/71/eivor-protagonista-de-assassin-s-creed-valhalla-sera-o-mais-novo-personagem-chegando-em-fortnite-sugere-informacoes-070091.jpg","id":"14"},
        {"title":"Elon Musk compra 9% do Twitter, a rede social","description":"A aquisição acontece em meio a reclamações sobre liberdade de expressão","author":"Madge_Batz","createdAt":"2022-03-20T05:53:18.074Z","comments":84,"tags":[],"type":"Tecnologia","image":"https://static.gamevicio.com/imagens_rz/post/665x400/32/32318-70070-elon-musk-compra-9-do-twitter-a-rede-social.webp","id":"15"}
    ]

    return (
        <div className={styles.homeNewsContent} >
            {newsList.map((el) => (
                < NewsLine
                    newsTitle = { el.title }
                    newsDescription = { el.description }
                    newsAuthor = { el.author }
                    newsCreatedAt = { el.createdAt }
                    newsComments = { el.comments }
                    newsTags = { el.tags }
                    newsType = { el.type }
                    newsImage = { el.image }
                />
            ))}
            
        </div>
    )
}
