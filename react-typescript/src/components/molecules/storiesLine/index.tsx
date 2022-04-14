/* eslint-disable @typescript-eslint/naming-convention */
import { Story } from 'components/atoms'
import styles from './styles.module.scss'
import { StoriesList } from 'app/core/services'
interface dataInterface {
    createdAt: string
    title: string
    image: string
    id: string
}

export interface storiesProps {
    storiesList: dataInterface[]
}

export const Stories = ({ storiesList } : storiesProps) : JSX.Element => {

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