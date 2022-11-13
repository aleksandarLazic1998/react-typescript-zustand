import React, { useEffect } from 'react'
import useNewsStore from '../../store/newsStore'

function Dashboard() {
    const { getListOfNews, listOfNews } = useNewsStore((store) => store.news)

    useEffect(() => {
        getListOfNews({ id: 'markets' })
        // eslint-disable-next-line
    }, [])

    return (
        <section data-testId="news-section">
            {listOfNews.map((story) => (
                <div key={story.id}>{story.title}</div>
            ))}
        </section>
    )
}

export default Dashboard
