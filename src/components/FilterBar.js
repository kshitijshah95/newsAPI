import React from 'react';

class NewsPage extends React.Component{
    state = {
        postPerPage: this.props.postPerPage
    }

    handleChange = (e) => {
        e.preventDefault();
        this.setState({postPerPage: e.target.value});
    }
    
    handleSubmit = (e) =>  {
        e.preventDefault();
        this.props.onSubmit(this.state.postPerPage);
    }

    render(){
        
        return (
            <>
                <div className="container">
                    <form onSubmit={this.handleSubmit}>
                        <input type="text" onChange={this.handleChange} value={this.state.postPerPage}/>
                    </form>
                </div>
            </>
        )
    }
}

export default NewsPage;