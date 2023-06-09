import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css'
import { Home } from './pgs/Home'
import { Menu } from './pgs/Menu'
import { Topo } from './pgs/Topo'
import { Med } from './pgs/Med'
import { Mb } from './pgs/Mb'
import { Vsaude } from './pgs/Vsaude'
import { Footer } from './pgs/Footer'
import { MenuMobile } from './pgs/MenuMobile'
function App() {
  function abre (){
    document.querySelector('.menuMobile')
    .style.display = 'block'
 }

  return (
      <Router>
        <Topo/>
        <Menu/>
        <box-icon onClick={abre}  name='menu' size="lg" color="#00afef" class="icon"></box-icon>
        <MenuMobile/>        
        <Routes>
            <Route path='/' exact element={<Home/>}/>
            <Route path='/med' exact element={<Med/>}/>
            <Route path='/vs' exact element={<Vsaude/>}/>
            <Route path='/mb' exact element={<Mb/>}/>
        </Routes>
        <Footer/>
    </Router>
  
    
  )
}

export default App
