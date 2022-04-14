import { AxiosResponse } from 'axios'
import { http } from 'interfaces/http'

const STORIES_URL = '/v1/stories/'

const getStories = async (): Promise<AxiosResponse> => {
  return http.get(STORIES_URL)
}

const StoriesList = {
  getStories,
}

export { StoriesList }