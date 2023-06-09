import {Link} from 'react-router-dom'
export function Menu(){
    return (
        <div className="menu">
            <ul>
                <li><Link to="med" className='link'>Medicamentos</Link></li>
                <li><Link to="vs" className='link'>Saúde e Bem Estar</Link></li>
                <li><Link to="mb" className='link'>Mamãe e Bebê</Link></li>
            </ul>
        </div>
    )
}