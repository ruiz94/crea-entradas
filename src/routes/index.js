import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Entradas from '../containers/Entradas';
import NotFound from '../containers/NotFound';
import NuevaEntrada from '../containers/NuevaEntrada';
import DetallesEntrada from '../containers/DetallesEntrada';

const Routes = () => {
  return ( 
    <Router>
      <Switch>
        <Route exact path="/" component={Entradas}/>
        <Route exact path="/nueva-entrada" component={NuevaEntrada}/>
        <Route exact path="/detalle-entrada/:id" component={DetallesEntrada}/>
        <Route component={NotFound}/>
      </Switch>
    </Router>
   );
}
 
export default Routes;