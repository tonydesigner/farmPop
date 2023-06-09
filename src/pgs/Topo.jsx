import { Link } from 'react-router-dom'
import Logo from '../assets/logo.png'
import { Search } from './Search'

export function Topo(){
    return(
        <div className="topo margin">
           <Link to="/" className='link'>
             <img src={Logo} alt="" />
           </Link> 
            <Search/>
        </div>
    )
}