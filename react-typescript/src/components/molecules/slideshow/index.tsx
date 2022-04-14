/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/typedef */
import React from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/splide/dist/css/themes/splide-default.min.css'
import { LabelType } from 'components/atoms'
import { NewsList } from 'app/core/services'
import styles from './styles.module.scss'
import './styles.css'

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

export interface carouselProps {
    newsList: dataInterface[]
}

export const Slideshow = ({newsList} : carouselProps) : JSX.Element => {

    newsList.sort(function(a,b) {
        return a.createdAt > b.createdAt ? -1 : a.createdAt < b.createdAt ? 1 : 0;
    }).splice(5);

    const setSlides = (): JSX.Element[] => {
        return newsList.map(el =>
            <SplideSlide className={styles.slideItem}>
                <a className={styles.slideImg} title={el.title}>
                    <img src={el.image} title={el.title} alt={el.title} width="665px" height="400px" />
                </a>
                <div className={styles.labelType}>
                    <LabelType labelTitle={el.type} />
                </div>
                <div className={styles.slideMessage}>
                    <a className={styles.slideMessageTitle} title={el.title}> {el.title} </a>
                    <a className={styles.slideMessageMsg} title={el.title}> {el.description} </a>
                </div>
            </SplideSlide>    
        )
    }

    return (
        <Splide options={{type: 'fade', rewind: true, autoplay: true, interval:5000}} className={styles.slideContainer}>
            {setSlides()}
        </Splide>
    )
}