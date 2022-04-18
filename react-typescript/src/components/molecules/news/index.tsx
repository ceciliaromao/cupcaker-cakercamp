import { NewsLine } from 'components/molecules'

import styles from './styles.module.scss'

interface IDataInterface {
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

export interface INewsProps {
  newsList: IDataInterface[]
}

export const News = ({ newsList }: INewsProps): JSX.Element => {
  newsList.sort((a, b) =>
    a.createdAt > b.createdAt ? -1 : a.createdAt < b.createdAt ? 1 : 0
  )

  return (
    <div className={styles.homeNewsContent}>
      {newsList.map(el => (
        <NewsLine
          newsTitle={el.title}
          newsDescription={el.description}
          newsAuthor={el.author}
          newsCreatedAt={el.createdAt}
          newsComments={el.comments}
          newsTags={el.tags}
          newsType={el.type}
          newsImage={el.image}
        />
      ))}
    </div>
  )
}
