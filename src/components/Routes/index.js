import {BrowserRouter as Router, Redirect, Route, Switch, useHistory } from 'react-router-dom'
import Contacto from '../../Pages/Contacto';
import Informacion from '../../Pages/Informacion';
import Proyectos from '../../Pages/Proyectos';
import { Headers } from '../Headers'

const Routes =()=>{
    
    const history = useHistory()
    console.log(history)
    
    return(
        <Router  basename={process.env.PUBLIC_URL}>
                <Route path={process.env.PUBLIC_URL + '/'} component={Headers}/>
            <Switch>
                <Route path={process.env.PUBLIC_URL + "/informacion"} component={Informacion}/>
                
                <Route path={process.env.PUBLIC_URL + "/proyectos"} component={Proyectos}/>
                <Route path={process.env.PUBLIC_URL + "/contacto"} component={Contacto}/>
            </Switch>
                <Redirect exact to="/"/>

        </Router>


    )

}

export default Routes;