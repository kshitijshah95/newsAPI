import React from 'react';
import NewsCard from './NewsCard';

class NewsList extends React.Component{
    render(){
        const newsList = this.props.news.map((newsItem, i) => {
            return <NewsCard key={i} newsItem={newsItem}/>
        })

        return (
            <>
                <h1>NEWS HEADLINES</h1>
                <div className="container">
                    {newsList}
                </div>
            </>
        )
    }
}

export default NewsList;