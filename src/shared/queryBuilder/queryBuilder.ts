interface IProps<T> {
    baseQuery: string
    queryObject?: T | string
}

const queryBuilder = <T>({ baseQuery, queryObject }: IProps<T>) => {
    const query = new URLSearchParams(baseQuery)

    if (queryObject) {
        Object.entries(queryObject).forEach(([key, value]) => {
            if (!key || !value) return

            query.append(key, String(value))
        })
    }

    const decodedQueryString = decodeURIComponent(query.toString())

    return decodedQueryString.replace('=&', '?')
}

export default queryBuilder
