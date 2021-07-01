//import API from './API'
import { useState, useEffect } from 'react';
import './API.css'
import axios from 'axios'

let url = "https://newsapi.org/v2/top-headlines?country=fr&apiKey=f935ef97b74e4d9db8cd9f7425d7663d"

function API() {
  const [product, setProduct] = useState()

  useEffect(() => {
    axios.get(url)
      .then(res => {
        setProduct(res.data.articles)
      })
  }, [])
  
  return (
    <div className='Main'>
        {product && product.map((a) => 
        
          <div className='Article' key={a.publishedAt}>
          <a href={a.url}>
            <div>
              <img width={"100%"} src={a.urlToImage} alt='articleimg'></img>
            </div>
            <h2>{a.title}</h2>
            <div>
                <h3>{a.source.name}</h3>
                <p>{a.description}</p>
            </div>
            </a>
          </div>
        
        )}
    </div>
  );
}

export default API;