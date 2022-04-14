import { useCallback, useEffect, useState } from 'react'
import styles from './styles.module.scss'
import { Header, Footer } from 'components/atoms'
import { Stories, News, Slideshow } from 'components/molecules'
import { NewsList, StoriesList } from 'app/core/services'



const Home = (): JSX.Element => {
  const [newsData, setNewsData] = useState([])
  const [storiesData, setStoriesData] = useState([])

  const getApiNews = useCallback(async () => {
    await NewsList.getNews().then(response => {
      setNewsData(response.data)
    })
  }, [])

  const getApiStories = useCallback(async () => {
    await StoriesList.getStories().then(response => {
      setStoriesData(response.data)
    })
  }, [])

  useEffect(() => {
    getApiNews()
    getApiStories()
  }, [getApiNews, getApiStories])

  return (
    <main>
      <Header />
      <div className={styles.mainContainer}>
        <Slideshow newsList={newsData}/>
        <Stories storiesList={storiesData}/>
        <News newsList={newsData}/>
      </div>
      <Footer />
    </main>
  )
}

export default Home
