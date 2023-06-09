import {Link} from 'react-router-dom'

export function MenuMobile(){
   function fecha(){
        document.querySelector('.menuMobile')
        .style.display = 'none'
     }
      
    return (
        <div className="menuMobile">
            <ul>
                <li><Link to="med" onClick={fecha} className='link'>Medicamentos</Link></li>
                <li><Link to="vs" onClick={fecha} className='link'>Saúde e Bem Estar</Link></li>
                <li><Link to="mb" onClick={fecha} className='link'>Mamãe e Bebê</Link></li>
            </ul>
        </div>
    )
    
}