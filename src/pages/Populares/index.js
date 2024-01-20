import { useEffect, useState } from "react";
import api from "../../services/api";
import { Link } from "react-router-dom";
import './style.css';

function Populares(){
    const [filmes, setFilmes] = useState([])
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadFilmes(){
      const response = await api.get('movie/popular', {
        params:{
          api_key: '735d6bf2bb7b5a30fefd06b59c244267',
          language: 'pt-BR',
          
        }
      });

      //console.log("teste",response.data.results);
      setFilmes(response.data.results);
      setLoading(false);
    }

    loadFilmes();
  }, [])

  if(loading){
    return(
      <div className="loading">
        <h2> Carregando Filmes... </h2>
      </div>
    )
  }

  return(
    <div className="container">
      <h2> Filmes mais populares </h2>
      <div className="listFilme">
        {filmes.map((item) => {
          return(
            <div className="cardFilme" key={item.id}>
              <Link className="card" to={`/filme/${item.id}`}>
                <img className="poster" src={`https://image.tmdb.org/t/p/original/${item.poster_path}`} alt={item.title}/>
                <span className="link" >{item.title}</span>
              </Link>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Populares;