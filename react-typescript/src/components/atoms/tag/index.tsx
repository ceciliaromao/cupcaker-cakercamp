import { Tags, setTag } from 'components/enums/tag-types'

import styles from './styles.module.scss'

interface ITagProps {
  tagTitle: string
}

const Tag = ({ tagTitle }: ITagProps): JSX.Element => {
  const type = setTag(tagTitle as Tags)
  return (
    <div
      className={styles.tagName}
      style={{ backgroundColor: type?.color || '#ef6c00' }}
    >
      {type?.name || tagTitle}
    </div>
  )
}

export { Tag }
