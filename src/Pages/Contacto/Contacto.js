import { useRef, useState} from "react";

import axios from "axios";
import {  Form, Row, Button, Container } from "react-bootstrap";
import { useForm } from "react-hook-form";





const Contacto = () => {

    const [sending, setSending] = useState(false)
   
    const refForm= useRef()
    
    const {handleSubmit, register,formState:{errors}}=useForm()

    const handleInputs= async(data)=>{
       
        await axios.post('https://formsubmit.co/ajax/alehellamn@gmail.com', data)
        refForm.current.reset()
        setSending(true)
    }

   
    
    
    return ( 

        <Container>
        <Row className="caja-formulario justify-content-center">

            <div  className="formulario col-md-7 col-sm-12">
            
                <Form onSubmit={handleSubmit(handleInputs)} ref={refForm}>
                
                    
                    <Form.Group>
                            <Form.Label className="m-0" htmlFor="nombre">Nombre completo</Form.Label>
                            <Form.Control {...register("nombre",{required: true, minLength: 3, maxLength:25})} type="text" id="nombre"/>
                            {errors.nombre && <span className="alert-form">caracteres min 3 / max 20</span> } 
                    </Form.Group>

                    <Form.Group>
                            <Form.Label className="m-0" htmlFor="asunto">Asunto</Form.Label>
                            <Form.Control {...register("asunto") } type="text" id="asunto"/>
                           
                    </Form.Group>

                    <Form.Group>
                            <Form.Label className="m-0" htmlFor="email"> Email</Form.Label>
                            <Form.Control {...register("email",{required:true})} type="email" id="email"/>
                            {errors.email && <span className="alert-form">email requerido</span> }
                    </Form.Group>

                    <Form.Group>
                            <Form.Label  className="m-0" htmlFor="detalles">Detalles</Form.Label>
                            <Form.Control {...register("detalles",{required: true})} as="textarea"  rows={3} id="detalles"/>
                            {errors.detalles && <span className="alert-form">Detalles :)</span> }
                            
                    </Form.Group>
                        <Button type="submit">Enviar</Button>
                </Form>
                {sending && <span className="msg-enviado">Mensaje enviado</span>} 
                
            </div>


            <div className="col-contactos col-md-2" >
                
                <div  className="caja-links">
                  <a href="https://github.com/AlejandroWogelman" target="_blank" rel="noopener noreferrer"><span><i className="fab fa-github"></i></span></a>
                </div>

                <div className="caja-links">
                    <a href="https://www.facebook.com/AlejandroWogel/" target="_blank" rel="noopener noreferrer"><span><i className="fab fa-facebook"></i></span></a>
                </div>
                
                <div className="caja-links">
                    <a href="https://www.linkedin.com/in/alejandro-wogelman-6a5a101b8/" target="_blank" rel="noopener noreferrer"><span><i className="fab fa-linkedin"></i></span></a>
                </div>

               
            
            </div>

            
        </Row>
        </Container>
     );
}

 
export default Contacto;