import React, { Component } from 'react'

export class NewsItem extends Component {

  render() {
    let {title, description, imageUrl, newsUrl} = this.props;
    return (
      <div className='my-2'>
       <div className="card" style={{width: "300px"}}>
        <img src={imageUrl} className="card-img-top" alt="image not available"/>
        <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description.length > 65 ? `${description.substring(0, 65)}...` : description}</p>
            <a href={newsUrl} target="_blank" className="btn btn-sm btn-primary">Read more</a>
        </div>
        </div>
      </div>
    )
  }
}

export default NewsItem
