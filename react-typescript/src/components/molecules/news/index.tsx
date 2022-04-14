/* eslint-disable @typescript-eslint/typedef */
/* eslint-disable @typescript-eslint/naming-convention */
import { NewsLine } from 'components/molecules'
import styles from './styles.module.scss'
import { NewsList } from 'app/core/services'
interface dataInterface {
    title: string
    description: string
    author: string
    createdAt: string
    comments: number
    tags: string[]
    image: string
    type: string
    id: string
}

export interface newsProps {
    newsList: dataInterface[]
}

export const News = ({newsList} : newsProps) : JSX.Element => {
    
    newsList.sort(function(a,b) {
        return a.createdAt > b.createdAt ? -1 : a.createdAt < b.createdAt ? 1 : 0;
    });

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
