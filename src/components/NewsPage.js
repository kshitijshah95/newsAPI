import React from 'react';
// import NewsList from './NewsList';

class NewsPage extends React.Component{
    state = {
        pages: 1
    }

    render(){
        // const newsList = this.props.news.map((newsItem, i) => {
        //     return <NewsList key={i} newsItem={newsItem}/>
        // })

        return (
            <>
                <h1>NEWS HEADLINES</h1>
                <div className="container">
                    {/* {newsList} */}
                    {
                        this.state.pages
                    }
                </div>
            </>
        )
    }
}

export default NewsPage;