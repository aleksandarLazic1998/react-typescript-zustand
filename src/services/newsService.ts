import httpClient from '../shared/httpClient/httpClient'
import queryBuilder from '../shared/queryBuilder/queryBuilder'
import { IParams } from '../typescript/interfaces/IParams'
import ResponseType from '../typescript/interfaces/IResponse'
import { NewsModel } from '../typescript/models/NewsModel'

export const getListOfNews = (dto: {
    id: IParams
}): ResponseType<NewsModel[]> => {
    const query = queryBuilder({
        baseQuery: '/news/list',
        queryObject: { id: dto.id },
    })
    return httpClient.get(query)
}
