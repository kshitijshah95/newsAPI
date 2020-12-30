import React from 'react';

class NewsPage extends React.Component{
    state = {
        postPerPage: 10
    }

    handleChange = (e) => {
        e.preventDefault();
        this.setState({postCount: e.target.value});
        this.props.onSubmit(this.state.postPerPage);
    }

    render(){
        
        return (
            <>
                <div className="container">
                    <input type="text" onChange={this.handleChange} value={this.state.postPerPage}/>
                </div>
            </>
        )
    }
}

export default NewsPage;