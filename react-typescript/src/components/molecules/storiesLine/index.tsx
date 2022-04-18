import { Story } from 'components/atoms'

import styles from './styles.module.scss'

interface IDataInterface {
  createdAt: string
  title: string
  image: string
  id: string
}

export interface IStoriesProps {
  storiesList: IDataInterface[]
}

export const Stories = ({ storiesList }: IStoriesProps): JSX.Element => {
  return (
    <div className={styles.storiesBox}>
      {storiesList.map(el => (
        <Story storyTitle={el.title} storyPic={el.image} />
      ))}
    </div>
  )
}
