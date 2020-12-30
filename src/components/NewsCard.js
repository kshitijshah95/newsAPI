import React from 'react';

class NewsCard extends React.Component{
    render(){
        const {url, title, urlToImage, publishedAt, source, description} = this.props.newsItem;
        // console.log(author);
        // const publishedDate = Date.parse(publishedAt).getDate().toLocaleString();
        return (
            <div className="m-4 card p-3">
                <div  className="row">
                    <div className="col-md-4">
                        <img style={{width: '100%'}} src={urlToImage} alt={title}/>
                    </div>
                    <div className="col-md-8">
                        <a href={url}>
                            <h4>{title}</h4>
                        </a>
                        <div>{description}</div>
                        {/* <div>Author: {typeof(author) === 'string' ? author : "" }</div> */}
                        {/* <div>Published On: {publishedAt}</div> */}
                        <div className="mt-3">Published by: {source.name} on: {publishedAt}</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsCard;