import {useState, useEffect} from 'react'
import { Container } from 'react-bootstrap'

import { Link, useHistory } from "react-router-dom"

const Navbars = () => {
   
    const history = useHistory()
    
    const initialState={
        proyectos: false,
        informacion: false,
        contacto: false
    }
    
    
    const [state, setState] = useState(initialState)
    
    const handleBack=(e)=>{
        setState({
            ...initialState, [e]:true
        })
    }
    
    useEffect(() => {
        //actual palabra de history que está seleccionada de lo contrario al recargar se subrayaba informacion
        //y se mostraba la ultima pestaña vista (proyecto, contacto, informacion)
        //anterior -> setState({informacion}:true})
        
        if(history.location.pathname.length>1){
            const newString=history.location.pathname.substring(1)
            
            setState({[newString]:true})
        }
          
        
    }, [history])
    
    return (
        <Container>
        <ul className="nav justify-content-center p-0">

            <li className="p-3"><Link   to="/proyectos" 
                                        onClick={()=>handleBack('proyectos')} 
                                        className={state.proyectos? "proyectos":"navSuperior"}>
                                    <span className="span-nav">Proyectos</span>
                                </Link>
            </li>

            <li className="p-3 order"><Link   to="/informacion"
                                        onClick={()=>handleBack('informacion')} 
                                        className={state.informacion? "informacion": "navSuperior"}>
                                    <span className="span-nav">Informacion</span>
                                </Link>
            </li>
            
            <li className="p-3"><Link   to="/contacto"
                                        onClick={()=>handleBack('contacto')} 
                                        className={state.contacto? "contacto": "navSuperior"}>
                                    <span className="span-nav">Contacto </span> 
                                </Link>
            </li>
        </ul>

        </Container>
     );
}
 
export default Navbars;