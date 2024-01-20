import { Link } from "react-router-dom";
import './style.css';

function Error() {
    return(
        <div className="container">
            <div className="message">
                <h1> Ops... parece que está página não existe </h1>
                <span> Considere voltar para a página inical </span>
                <Link to='/'> Clique aqui! </Link>
            </div>
        </div>
    )
}

export default Error;