import create from 'zustand'
import { devtools } from 'zustand/middleware'
import { immer } from 'zustand/middleware/immer'
import { getListOfNews } from '../services/newsService'
import { IParams } from '../typescript/interfaces/IParams'
import { NewsModel } from '../typescript/models/NewsModel'

interface IState {
    news: {
        listOfNews: NewsModel[]
        getListOfNews: (dto: { id: IParams }) => void
    }
}

const useNewsStore = create<IState>()(
    immer(
        devtools((set) => ({
            news: {
                listOfNews: [],
                getListOfNews: async (dto: { id: IParams }) => {
                    const response = await getListOfNews(dto)

                    set((state) => {
                        state.news.listOfNews = response.data.modules
                    })
                },
            },
        }))
    )
)
export default useNewsStore
