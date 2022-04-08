import { Story } from 'components/atoms'
import styles from './styles.module.scss'

export const Stories = () : JSX.Element => {

    const storiesList = [
        {"createdAt":"2022-04-05T07:18:53.675Z","title":"Xbox Live Gold pode estar chegando ao fim","image":"https://static.gamevicio.com/imagens_up/big/71/xbox-live-gold-pode-estar-chegando-ao-fim-070100.jpg","id":"1"},
        {"createdAt":"2022-04-04T13:01:07.934Z","title":"Quando chega a parte final de Shingeki no Kyojin?","image":"https://static.gamevicio.com/imagens_up/big/71/quando-chega-a-parte-final-de-shingeki-no-kyojin-070099.png","id":"2"},
        {"createdAt":"2022-04-04T13:37:24.381Z","title":"Abandoned foi cancelado?","image":"https://static.gamevicio.com/imagens_up/big/71/abandoned-foi-cancelado-070020.jpg","id":"3"},
        {"createdAt":"2022-04-05T01:50:13.913Z","title":"Novo operador de Call of Duty é brasileiro","image":"https://static.gamevicio.com/imagens_up/big/71/novo-operador-de-call-of-duty-e-brasileiro-070017.jpg","id":"4"},
        {"createdAt":"2022-04-05T04:39:11.873Z","title":"E3 2022 é oficialmente cancelada","image":"https://static.gamevicio.com/imagens_up/big/70/e3-2022-e-oficialmente-cancelada-069989.jpg","id":"5"},
        {"createdAt":"2022-04-05T05:45:21.397Z","title":"O público gostou de Cavaleiro da Lua","image":"https://static.gamevicio.com/imagens_up/big/70/o-publico-gostou-de-cavaleiro-da-lua-069987.jpg","id":"6"},
        {"createdAt":"2022-04-04T15:56:00.932Z","title":"House of the Dragon recebe data de estreia","image":"https://static.gamevicio.com/imagens_up/big/70/https-www-gamevicio-com-midia-web-stories-house-of-the-dragon-recebe-data-de-estreia-069918.png","id":"7"},
        {"createdAt":"2022-04-05T00:30:22.751Z","title":"Conheça Project AK, um novo RPG Soulslike","image":"https://static.gamevicio.com/imagens_up/big/70/conheca-project-ak-um-novo-rpg-soulslike-069917.jpg","id":"8"},
        {"createdAt":"2022-04-04T16:21:23.941Z","title":"Will Smith e Chris Rock se enfrentam em God of War","image":"https://static.gamevicio.com/imagens_up/big/70/will-smith-e-chris-rock-se-enfrentam-em-god-of-war-069858.jpg","id":"9"}
    ]

    return (
        <div className={styles.storiesBox}>
            {storiesList.map((el) => (
                < Story
                    storyTitle={el.title}
                    storyPic={el.image}
                />
            ))}
        </div>
    )
}