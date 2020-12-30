import React from 'react';

const PaginationButton = (props) => {
    const changePage = (e) => {
        // e.stopPropagation();
        props.changePage(e.target.textContent);
    }

    return (
        <span className="btn" onClick={changePage}>{props.pageNumber}</span>
    )
}

class Pagination extends React.Component{
    render(){
        let pageList = new Array(this.props.pages).fill(0);
        pageList = pageList.map((item, i) => {
            return <PaginationButton key={i} pageNumber={i+1} changePage={this.props.changePage}/>
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