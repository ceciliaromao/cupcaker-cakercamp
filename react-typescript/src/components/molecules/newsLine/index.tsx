import Icon from '@mdi/react'

import { mdiMessage } from '@mdi/js'
import {
  differenceInMinutes,
  differenceInHours,
  differenceInDays,
} from 'date-fns'

import { Tag, LabelType } from 'components/atoms'

import styles from './styles.module.scss'

interface INewsProps {
  newsTitle: string
  newsDescription: string
  newsAuthor: string
  newsCreatedAt: string
  newsComments: number
  newsTags: string[]
  newsType: string
  newsImage: string
}

export const NewsLine = ({
  newsTitle,
  newsDescription,
  newsAuthor,
  newsCreatedAt,
  newsComments,
  newsTags,
  newsType,
  newsImage,
}: INewsProps): JSX.Element => {
  const dateDiff = differenceInHours(new Date(), new Date(newsCreatedAt))

  let postPeriod = ''
  if (dateDiff == 0)
    postPeriod =
      differenceInMinutes(new Date(), new Date(newsCreatedAt)) +
      ' minutos atrás'
  else if (dateDiff == 1) postPeriod = '1 hora atrás'
  else if (dateDiff < 24)
    postPeriod =
      differenceInHours(new Date(), new Date(newsCreatedAt)) + ' horas atrás'
  else if (dateDiff < 48) postPeriod = 'Ontem'
  else if (dateDiff < 72) postPeriod = 'Anteontem'
  else
    postPeriod =
      differenceInDays(new Date(), new Date(newsCreatedAt)) + ' dias atrás'

  return (
    <div className={styles.itemList}>
      <div className={styles.itemListImage}>
        <div className={styles.ilImageType}>
          <LabelType labelTitle={newsType} />
        </div>
        <a title={newsTitle}>
          <img
            id="img-lz-32402_8615"
            alt={newsTitle}
            min-width="360px"
            height="217px"
            src={newsImage}
          />
        </a>
      </div>
      <div className={styles.itemlListContent}>
        <div className={styles.ilcTitle}>
          <h3>
            {' '}
            <a title={newsTitle}> {newsTitle} </a>{' '}
          </h3>
        </div>
        <div className={styles.ilcMessage}>
          <a title={newsTitle}> {newsDescription} </a>
        </div>
        <div className={styles.ilcDetails}>
          {newsTags.map(el => (
            <Tag tagTitle={el} />
          ))}

          <span className={styles.userSpan}>
            Por <strong>{newsAuthor}</strong>, {postPeriod}
          </span>

          <div className={styles.ilcChipComment}>
            <span className={styles.icon}>
              <Icon path={mdiMessage} size={1} />
            </span>
            <a href="#">{newsComments}</a>
          </div>
        </div>
      </div>
    </div>
  )
}
