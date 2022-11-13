import React, { Component } from 'react'
import { json } from 'react-router-dom';
import NewsItem from './NewsItem'

export class News extends Component {
  constructor(){
    super();
    this.state = {
      articles : [],
      loading : false,
      page : 1,
    }
  }

  async componentDidMount(){
    let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey="
    let response = await fetch(url);
    let parsedResponse = await response.json();
    this.setState({articles:parsedResponse.articles});
  }

  render() {
    return (
      <div className='container my-5'>
        <h2>News Daily - Top Headlines</h2>
        <div className='row'>
        {this.state.articles.map((element)=>{
          return <div className='col-md-4' key={element.url}>
          <NewsItem title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url}/>
        </div>
        })}
        </div>
        <div className='container'>
          <button className='btn'>&#8249;</button>
          <button className='btn'>&#8250;</button>
        </div>
      </div>
    )
  }
}

export default News
