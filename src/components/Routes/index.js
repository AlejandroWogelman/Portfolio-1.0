import {BrowserRouter as Router, Redirect, Route, Switch, } from 'react-router-dom'
import Contacto from '../../Pages/Contacto';
import Informacion from '../../Pages/Informacion';
import Proyectos from '../../Pages/Proyectos';
import { Headers } from '../Headers'

const Routes =()=>{
    
    return(

        <Router>
            <Headers/>
            <Switch>
                
                <Route path="/proyectos" component={Proyectos}/>
                <Route path="/contacto" component={Contacto}/>
                <Route path="/informacion" component={Informacion}/>
                <Redirect to="/informacion"/>
            </Switch>

        </Router>


    )

}

export default Routes;