import styles from './styles.module.scss'
import Icon from '@mdi/react'
import { mdiMessage } from '@mdi/js';
import { Tag,  LabelType } from 'components/atoms'

interface NewsProps {
    newsTitle: string
    newsDescription: string
    newsAuthor: string
    newsCreatedAt: string
    newsComments: number
    newsTags?: string[]
    newsType: string
    newsImage: string
  }

export const NewsLine = ({newsTitle, newsDescription, newsAuthor, newsCreatedAt, newsComments, newsTags, newsType, newsImage}: NewsProps) : JSX.Element => {
    return (
        <div className={ styles.itemList }>
            <div className={ styles.itemListImage }>
                <div className={ styles.ilImageType }>
                    <LabelType labelTitle={newsType}/>
                </div>
                <a title={ newsTitle } >
                    <img id="img-lz-32402_8615" alt={newsTitle} width="360px" height="217px" src={ newsImage } />
                </a>
            </div>
            <div className={ styles.itemlListContent }>
                <div className={ styles.ilcTitle }>
                    <h3> <a title={ newsTitle } > { newsTitle } </a> </h3>
                </div>
                <div className={ styles.ilcMessage }>
                    <a title={ newsTitle } > { newsDescription } </a>
                </div>
                <div className={ styles.ilcDetails }>
                    {newsTags?.map((el) => (
                        < Tag tagTitle={el}/>
                    ))}
                    <div className={ styles.ilcChip }>
                        <span className={ styles.userSpan }>Por <strong>{ newsAuthor }</strong>, em {newsCreatedAt}</span>
                    </div>
                    <div className={ styles.ilcChipComment }>
                        <span className={ styles.icon }>
                            <Icon path={ mdiMessage } size={1} />
                        </span>
                        <a href="#" >{ newsComments }</a>
                    </div>
                </div>
            </div>
        </div>
    )
}