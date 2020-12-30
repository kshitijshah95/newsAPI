import React from 'react';

const PaginationButton = (props) => {
    const changePage = (e) => {
        props.changePage(props.pageNumber);
    }
    return <span className="btn btn-success" onClick={changePage}>{props.pageNumber}</span>
}

class Pagination extends React.Component{
    render(){
        let pageList = new Array(this.props.pages).fill(0);
        pageList = pageList.map((item, i) => {
            return <PaginationButton key={i} pageNumber={i} changePage={this.props.changePage}/>
        })

        return (
            <>
                <h5>Pagination</h5>
                {pageList}
            </>
        )
    }
}

export default Pagination;