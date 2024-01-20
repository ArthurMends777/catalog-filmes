import './header.css';
import { Link } from 'react-router-dom';

function Header(){
    return(
        <header>
            <Link className='logo' to="/">Prime Flix</Link>
            <div className='routes'>
                <Link className='item' to="/">Destaques </Link>
                <Link className='item' to="/popular">Populares </Link>
                <Link className='item' to="/em_breve">Em breve </Link>
            </div>
            <Link className='favoritos' to='/favoritos'> Meus favoritos</Link>
        </header>
    )
}

export default Header;