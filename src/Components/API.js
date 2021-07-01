
import { useState, useEffect } from 'react';
import '../styles/API.css'
import axios from 'axios'






function API() {
  const [product, setProduct] = useState()
  const [url, seturl] = useState(`https://newsapi.org/v2/top-headlines?country=fr&apiKey=f935ef97b74e4d9db8cd9f7425d7663d`)

  function btn(cat){
    seturl(`https://newsapi.org/v2/top-headlines?country=fr&${cat}apiKey=f935ef97b74e4d9db8cd9f7425d7663d`)
    };


  useEffect(() => {
    
    axios.get(url)
      .then(res => {
        setProduct(res.data.articles)
      })
  }, [url])
  
  return (
    <div>
      <div className='divbtn'>
          <button onClick={() => {btn('')}}>Toutes les catégories</button>
          <button onClick={() => {btn('category=business&')}}>Actualités gouvernementale</button>
          <button onClick={() => {btn('category=entertainment&')}}>Divertissements</button>
          <button onClick={() => {btn('category=health&')}}>Santé</button>
          <button onClick={() => {btn('category=science&')}}>Science</button>
          <button onClick={() => {btn('category=sports&')}}>Sports</button>
          <button onClick={() => {btn('category=technology&')}}>Technologie</button>
      </div>
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
  </div>  
  );
}



export default API;