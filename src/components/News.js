import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props)=>{
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(false)
  const [page, setPage] = useState(1)
  const [totalResults, setTotalResults] = useState(0)
  
  const capitalizeFirstLetter = (word)=>{
    return word.charAt(0).toUpperCase() + word.slice(1);
  }
  

  const updateNews = async()=> {
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&apiKey=${props.api_key}&page=${page}&category=${props.category}&pageSize=${props.pageSize}`;
    setLoading(true);
    let response = await fetch(url);
    let parsedResponse = await response.json();
    setArticles(parsedResponse.articles);
    setTotalResults(parsedResponse.totalResults);
    setLoading(false);
  }

  useEffect(() => {
    updateNews();
    document.title = "News Daily - " + capitalizeFirstLetter(props.category);
    // eslint-disable-next-line
  }, [])
  

  const fetchMoreData = async() => {
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&apiKey=${props.api_key}&page=${page+1}&category=${props.category}&pageSize=${props.pageSize}`;
    let response = await fetch(url);
    let parsedResponse = await response.json();
    setPage(page+1);
    setArticles(articles.concat(parsedResponse.articles))
    setTotalResults(parsedResponse.totalResults);
  };


    return (
      <InfiniteScroll key="infiniteScroll" dataLength={articles.length} next={fetchMoreData} hasMore={articles.length !== totalResults} loader={<Spinner key="spinner"/>} >
      <div className='container my-5 mx-5'>
        <h2 style={{marginTop:"60px"}}>News Daily - Top {capitalizeFirstLetter(props.category)} Headlines</h2>
        {loading && <Spinner key="spinner"/>}
        <div className='row'>
        {articles.map((element)=>{
          return <div className='col-md-4' key={element.url}>
          <NewsItem key="newsItem" title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url} publishedAt={element.publishedAt} author={element.author} source={element.source.name}/>
        </div>
        })}
        </div>
      </div>
      </InfiniteScroll>
    )
  } 

News.defaultProps = {
  country: "in",
  pageSize : 12,
  category: "general",
}
News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
}

export default News
