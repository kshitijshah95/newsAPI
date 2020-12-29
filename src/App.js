import React from 'react';
import newsAPI from './api/newsAPI';
import NewsPage from './components/NewsPage';
import FilterBar from './components/FilterBar';

class App extends React.Component{
    state = {
        news: [],
        postPerPage: 5
    }

    componentDidMount = async () => {
        await newsAPI.get('/top-headlines?country=us')
        .then((res) => {
            this.setState({news: res.data.articles})
        })
        .catch((err) => {
            console.log(err);
        });
    }

    handleSubmit = (postPerPage) => {
        this.setState({postPerPage: Number(postPerPage)});
    }

    render(){
        return (
            <>
                <FilterBar onSubmit={this.handleSubmit} />
                <NewsPage news={this.state.news} />
            </>
        )
    }
}

export default App;