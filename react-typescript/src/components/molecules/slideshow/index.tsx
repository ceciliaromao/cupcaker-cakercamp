import { Splide, SplideSlide } from '@splidejs/react-splide'

import '@splidejs/splide/dist/css/themes/splide-default.min.css'

import { LabelType } from 'components/atoms'

import './styles.css'
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

export interface ICarouselProps {
  newsList: IDataInterface[]
}

export const Slideshow = ({ newsList }: ICarouselProps): JSX.Element => {
  newsList
    .sort((a, b) =>
      a.createdAt > b.createdAt ? -1 : a.createdAt < b.createdAt ? 1 : 0
    )

  const setSlides = (): JSX.Element[] => {
    return newsList.map(el => (
      <SplideSlide className={styles.slideItem}>
        <a className={styles.slideImg} title={el.title}>
          <img
            src={el.image}
            title={el.title}
            alt={el.title}
            width="665px"
            height="400px"
          />
        </a>
        <div className={styles.labelType}>
          <LabelType labelTitle={el.type} />
        </div>
        <div className={styles.slideMessage}>
          <a className={styles.slideMessageTitle} title={el.title}>
            {' '}
            {el.title}{' '}
          </a>
          <a className={styles.slideMessageMsg} title={el.title}>
            {' '}
            {el.description}{' '}
          </a>
        </div>
      </SplideSlide>
    ))
  }

  return (
    <Splide
      options={{ type: 'fade', rewind: true, autoplay: true, interval: 5000 }}
      className={styles.slideContainer}
    >
      {setSlides()}
    </Splide>
  )
}
