import React, { useEffect, memo, useState } from 'react';
import axios from 'axios'
import { Row } from 'react-bootstrap';


const url = 'https://api.github.com/users/AlejandroWogelman/repos'

const Proyectos = memo(() => {
    
    
    const [state, setstate] = useState([])
    
   
    const fetching = async ()=>{
        const {data} = await  axios(url)
        setstate(data)
        
    }
   
   useEffect(()=>{
        fetching()  
    },[])

    return ( 
        <>
            <Row className="caja-cards mt-2 p-0" >
                {state.length>1 && 
                
                    state.map(({name, html_url, description, id, homepage })=>{
                        return(
                        <div className="cartas row" key={id}>
                            
                                <h3 className="title-card">{name} </h3>
                            
                            <div className="col-12">
                            <p>{description}</p>
                            <a href={homepage} rel="noopener noreferrer" target="_blank"> <i className="fab fa-google"></i></a> 
                            <a href={html_url} rel="noopener noreferrer" target="_blank"><i className="fab fa-github"></i></a>  
                            </div>
                        </div>
                        )
                    }
                    )
                
                }
            </Row>

        </>
        
     );
    })
 
export default Proyectos;