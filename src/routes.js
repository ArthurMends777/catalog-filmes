import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Filme from './pages/Filme';
import Favoritos from './pages/Favoritos';
import Populares from './pages/Populares';
import Breve from './pages/Breve';

import Error from './pages/Erro';
import Header from './components/Header';

function RoutesApp(){
  return(
    <BrowserRouter>
      <Header />  
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/filme/:id" element={ <Filme/> } />
        <Route path='/favoritos' element={ <Favoritos />} />
        <Route path='/popular' element={ <Populares /> }/>
        <Route path='/em_breve' element={ <Breve /> }/>

        <Route path='*' element={ <Error />} />
      </Routes>
    </BrowserRouter>
  )
}

export default RoutesApp;