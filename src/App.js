import React from 'react';
import newsAPI from './api/newsAPI';
import NewsList from './components/NewsList';
import Pagination from './components/Pagination';
// import FilterBar from './components/FilterBar';

class App extends React.Component{
    state = {
        news: [],
        postPerPage: 2,
        pages: 1,
        currentPage: 1,
        newsInRange: []
    }

    componentDidUpdate(){
        this.postsToDisplay();
    }

    componentDidMount = async () => {
        await newsAPI.get('/top-headlines?country=us')
        .then((res) => {
            let pages = Math.ceil(res.data.articles.length/this.state.postPerPage);
            
            this.setState({news: res.data.articles, pages: pages});
        })
        .catch((err) => {
            console.log(err);
        });
    }

    handleSubmit = (postPerPage) => {
        this.setState({postPerPage: Number(postPerPage)});
    }

    postsToDisplay = () => {
        const {currentPage, postPerPage} = this.state;
        let rangeStart = (currentPage - 1) * postPerPage;
        const postInRange = (this.state.news.slice(rangeStart, rangeStart + postPerPage));
        this.setState({ newsInRange: postInRange});
    }

    changePage = (pageNo) => {
        console.log(pageNo);
        this.postsToDisplay();
        this.setState({currentPage: pageNo});
    }

    render(){
        return (
            <>
                {/* <FilterBar onSubmit={this.handleSubmit} /> */}
                <NewsList news={this.state.newsInRange}/>
                <Pagination pages={this.state.pages} currentPage={this.state.currentPage} changePage={this.changePage}/>
            </>
        )
    }
}

export default App;