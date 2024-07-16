import React, { Component } from 'react'

export class Cards extends Component {
    render() {
        let {title,description,urlToImage,url,publishedAt,author} = this.props
        return (
            <div>
                <div className="card" style= {{width: "18rem"}}>
                <span class="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left: '90%', zIndex: '1'}}>{author?author:'Unknown'}
                        </span>
                    <img src={urlToImage} className="card-img-top" alt="Image"/>
                        <div className="card-body">
                            <h5 className="card-title">{title}</h5>
                            <p className="card-text">{description}</p>
                            <a href={url} target='_blank' className="btn btn-primary">Read More</a>
                        </div>
                        <p className='mx-3'><strong>Published At: </strong>{publishedAt.slice(0,10)}</p>
                </div>
            </div>
        )
    }
}

export default Cards
