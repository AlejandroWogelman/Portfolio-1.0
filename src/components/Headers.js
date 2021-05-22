import React, { useRef } from 'react'

import perfil from '../assets/perfil.jpg'
import { Container, Row, Col } from 'react-bootstrap'
import Navbars from './Navbars'
import { Link } from 'react-router-dom'

export const Headers =({history}) => {

    let refPresentacion=useRef()
    let refLink=useRef()

    const handlePresent=(e)=>{
        if(refLink.current.textContent=== "ver presentacion"){
            refLink.current.textContent='cerrar'
            refPresentacion.current.style.display="block"
        }else{
            refLink.current.textContent='ver presentacion'
            refPresentacion.current.style.display="none"
        }
    }
 
    return (
        <Container fluid className="background-superior">
            

            <header  className="d-flex justify-content-center header">
                
                    <Row className="background-header justify-content-center">
                        <Col md={12}> 
                        <div className="developer">
                            <h1 >Web developer</h1>
                            <h2 className="titulo-2">Desarrollador web</h2>
                        </div>
                        </Col>
                        <Col className="caja-perfil">
                        <img src={perfil} alt="perfil" />
                        </Col>
                        
                    </Row>
                
            </header>
            <div className="text-center">
                <h2 className="name">Alejandro Wogelman</h2>
                <Link to="#" onClick={handlePresent} ref={refLink} className="presentacion">ver presentacion</Link>
                    <span ref={refPresentacion} className="DisplayPresentacion"><p>Hola! Soy alejandro, actualmente me encuentro cada vez mas metido en el aprendizaje sobre el desarrollo web. Aprendiendo a través de cursos y por cuenta propia. Manejo HTML-CSS-Javascript y encantado con React! Sin lugar a dudas lo que quiero seguir haciendo de acá en adelante, practicando y aprendiendo. 😁</p></span>
                <hr className="mb-1"/>

            </div>
            <Navbars history={history}/>


            
        </Container>
    )
}
