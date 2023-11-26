import React  from 'react';


const NewsItem = (props) => {
  
  let { title, description, imageUrl, newsUrl, publishedAt, author, source } = props;
  return (
    <div className='my-2'>
      <div className="card" style={{ width: "350px" }}>
        <span className="position-absolute top-0 start-100 translate-middle badge bg-success" style={{ zIndex: "1", marginLeft: "-30px" }}>
          {source ? source : ""}
          <span className="visually-hidden">unread messages</span>
        </span>
        <img src={imageUrl ? imageUrl : "https://media.cnn.com/api/v1/images/stellar/prod/220629101158-dolly-parton-file.jpg?c=16x9&q=w_800,c_fill"} className="card-img-top" alt="https://media.cnn.com/api/v1/images/stellar/prod/220629101158-dolly-parton-file.jpg?c=16x9&q=w_800,c_fill" />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description && description.length > 65 ? `${description.substring(0, 65)}...` : description}</p>
          <p className="card-text"><small className="text-muted">By {author ? author : "unknown"} on {new Date(publishedAt).toGMTString()}</small></p>
          <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-info">Read more</a>
        </div>
      </div>
    </div>
  )
}

export default NewsItem
