import {BrowserRouter as Router, Redirect, Route, Switch, useHistory, } from 'react-router-dom'
import Contacto from '../../Pages/Contacto';
import Informacion from '../../Pages/Informacion';
import Proyectos from '../../Pages/Proyectos';
import { Headers } from '../Headers'

const Routes =()=>{
    
    
    
    return(

        <Router>
                <Route path="/" component={Headers}/>
            <Switch>
                <Route path="/informacion" component={Informacion}/>
                
                <Route path="/proyectos" component={Proyectos}/>
                <Route path="/contacto" component={Contacto}/>
                <Redirect to="/"/>
            </Switch>

        </Router>


    )

}

export default Routes;