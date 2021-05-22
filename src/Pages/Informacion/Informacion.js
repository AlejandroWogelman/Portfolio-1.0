import {useReducer, useState, useEffect} from 'react'

import {  Container, Row } from "react-bootstrap";
import { Link } from 'react-router-dom';
import { ESTUDIOS, GENERAL, HOBBIES } from "../../components/Reducers/actions/informacion";
import { infReducer, initialState } from "../../components/Reducers/informacion";
import {NormalizeInfo} from './Normalize'

const Informacion = () => {

    const initialBackground = {
        general: false,
        estudios: false,
        hobbies: false
    }

    const [back, setback] = useState(initialBackground) 
    


    const [state, dispatch] = useReducer(infReducer, initialState)
    
    

    const handlerInformacion=(action)=>{
        
       
        //Actualizamos stateReducer
        dispatch({type: action, payload: []})

        //Nueva const para el background
        
        setback({
            ...initialBackground, [action.toLowerCase()]: true
        })
    }
    
    useEffect(() => {
        setback({
            ...initialBackground, general: true
        })
        dispatch({type: GENERAL, payload: []})
    }, [])
    
    
    return ( 
        <Container className=" p-3 justify-content-center d-flex caja-general-info">
            
            <Row className="caja-informacion">
                
                <div className="p-1 border-end col-md-4 col-lg-5 col-sm-12" >
                   

                        <h4>Información</h4>
                        
                        <Link to="#" onClick={()=>handlerInformacion(GENERAL)} className={back.general? 'general':"div-categorias"}><h6>General</h6></Link>
                        <Link to="#" onClick={()=>handlerInformacion(ESTUDIOS)} className={back.estudios? 'estudios':"div-categorias"}><h6>Estudios</h6></Link>
                        <Link to="#"  onClick={()=>handlerInformacion(HOBBIES)} className={back.hobbies? 'hobbies':"div-categorias"}><h6>Hobbies</h6></Link>
                        
                  
                    
                </div>

                <div className="col-lg-7 col-md-6 ">
                    
                    {
                       
                    state.map((data) =>  <NormalizeInfo key={Math.random()} {...data}/>)}
                </div>
            </Row>

        </Container>
     );
}
 


export default Informacion;