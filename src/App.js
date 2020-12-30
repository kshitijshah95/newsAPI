import React from 'react';
import newsAPI from './api/newsAPI';
import NewsList from './components/NewsList';
import Pagination from './components/Pagination';
// import FilterBar from './components/FilterBar';

class App extends React.Component{
    state = {
        news: [],
        postPerPage: 5,
        pages: 1,
        currentPage: 1,
        newsInRange: []
    }

    componentDidMount = async () => {
        await newsAPI.get('/top-headlines?country=us')
        .then((res) => {
            let pages = Math.ceil(res.data.articles.length / this.state.postPerPage);
            this.setState({news: res.data.articles, pages: pages});
        })
        .then((res => {
            this.postsToDisplay(0);
        }))
        .catch((err) => {
            console.log(err);
        });
    }

    handleSubmit = (postPerPage) => {
        console.log(postPerPage);
        this.setState({postPerPage: Number(postPerPage)});
    }

    postsToDisplay = (pageNo) => {
        console.log(`Before: ${this.state.currentPage}`);
        const {currentPage, postPerPage} = this.state;
        let rangeStart = (currentPage) * postPerPage;
        const postInRange = (this.state.news.slice(rangeStart, rangeStart + postPerPage));
        this.setState({currentPage: pageNo, newsInRange: postInRange});
        console.log(`After: ${this.state.currentPage}`);
    }

    render(){

        return (
            <>
                {/* <FilterBar onSubmit={this.handleSubmit} postPerPage={this.state.postPerPage}/> */}
                <Pagination pages={this.state.pages} currentPage={this.state.currentPage} changePage={this.postsToDisplay}/>
                <NewsList news={this.state.newsInRange}/>
            </>
        )
    }
}

export default App;