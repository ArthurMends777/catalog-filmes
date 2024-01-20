import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../../services/api";
import './style.css';
import { toast } from 'react-toastify';

function Filme(){
  const { id } = useParams();

  const [filme, setFilme] = useState({});
  const [loading, setLoading] = useState(true);

  const navigation = useNavigate();

  useEffect(() =>{
    async function loadFilmes(){
      await api.get(`/movie/${id}`, {
        params:{
          api_key: '735d6bf2bb7b5a30fefd06b59c244267',
          language: 'pt-BR',
        }
      })
      .then((response)=> { 
        setFilme(response.data)
        setLoading(false);

      })
      .catch(() => {
        navigation('/', { replace: true })
        return;
      });
    }

    loadFilmes();

    return () => {
      console.log('componente desmontado')
    }
  }, [id, navigation])

  function salvarFilme(){
    const myList = localStorage.getItem("@filmes");

    let filmesSalvos = JSON.parse(myList) || [];

    const hasFilmes = filmesSalvos.some( (filmesSalvos) => filmesSalvos.id === filme.id)
  
    if(hasFilmes){
      toast.warning('Ops, esse filme já está nos favoritos');
      return;
    }

    filmesSalvos.push(filme);
    localStorage.setItem('@filmes', JSON.stringify(filmesSalvos))
    toast.success("Seu filme foi salvo com sucesso!");
  }

  if(loading){
    return(
      <div className="filme-info">
        <h2> Carregando Detalhes... </h2>
      </div>
    )
  }

  return(
    <div className="filme-info">
      <h1>{filme.title}</h1>
      <img src={`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`} alt={filme.title} />

      <h3>Sinopse</h3>
      <span>{filme.overview}</span>

      <strong>Avaliação: {filme.vote_average} / 10</strong>

      <div className="area-btn">
        <button onClick={salvarFilme}> Salvar</button>
        <button>
          <a target="blank" rel="external" href={`https://www.youtube.com/results?search_query=${filme.title} trailer`}>
            Trailer
          </a>
        </button>
      </div>
    </div>
  )
}

export default Filme;