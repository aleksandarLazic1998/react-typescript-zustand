import { AxiosResponse } from 'axios'

interface IResponse<T = unknown> {
    modules: T
}

type ResponseType<T = unknown> = Promise<AxiosResponse<IResponse<T>>>

export default ResponseType
