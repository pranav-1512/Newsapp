import React, { Component } from 'react'
import Cards from './Cards';
import Spinner from './Spinner';

export class Newsbox extends Component {
    static defaultProps={
        country : 'in',
        pageSize : 12,
        category : 'general'
    }
    constructor() {
        super();
        this.state = {
            articles: [],
            loading: false,
            page: 1
        }
    }
    async componentDidMount() {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=517409d6fc0e4e1ca3ac4441827fe9cd&page=1&pageSize=${this.props.pageSize}`
        this.setState({loading:true})
        let data = await fetch(url);
        let parsedata = await data.json()
        console.log(parsedata)
        this.setState({ articles: parsedata.articles, loading:false })
    }
    handleprev = async ()=>{
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=517409d6fc0e4e1ca3ac4441827fe9cd&page=${this.state.page-1}&pageSize=${this.props.pageSize}`
        this.setState({loading:true})
        let data = await fetch(url);
        let parsedata = await data.json()
        console.log(parsedata)
        this.setState({ articles: parsedata.articles, loading:false, page: this.state.page-1 })
    }
    handlenext = async ()=>{
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=517409d6fc0e4e1ca3ac4441827fe9cd&page=${this.state.page+1}&pageSize=${this.props.pageSize}`
        this.setState({loading:true})
        let data = await fetch(url);
        let parsedata = await data.json()
        console.log(parsedata)
        this.setState({ articles: parsedata.articles, loading:false, page: this.state.page+ 1 })
    }
    render() {
        return (
            <div className="container my-3">
                <h1 className='text-center'> My News App</h1>
                {this.state.loading && <Spinner/>}
                <div className='row'>
                {!this.state.loading && this.state.articles.map((element)=>{
            return <div className='col md-4 my-3' key={element.url}>
                        <Cards title={element.title} description={element.description} urlToImage={element.urlToImage?element.urlToImage:"https://th.bing.com/th/id/OIP.92jBVgcISgseGngCJZ2InQHaCO?w=288&h=105&c=7&r=0&o=5&dpr=1.3&pid=1.7"} url={element.url} publishedAt={element.publishedAt} author={element.author}/>
                    </div>
        }
        )
    }
    </div>
    <div className="container d-flex justify-content-between my-3">
        <button type="button" disabled={this.state.page<=1} className="btn btn-dark" onClick={this.handleprev}>&larr; Previous</button>
        <button type="button" disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)} className="btn btn-dark" onClick={this.handlenext}>Next &rarr;</button>
    </div>
    </div>
        )
}
}

export default Newsbox
