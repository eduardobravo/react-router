import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import Loadable from 'react-loadable';
import './App.css';

const Loader = x => Loadable({
    loading: () => 'cargando...',
    loader: x
})
// import dinámico por petición de ajax, me evita importar arriba el componente
const Prueba = Loader(() => import ('./component/Prueba'))
const Invoices = Loader(() => import ('./component/Invoices'))
class App extends Component {
    render() {
        return (
            <div className="App">
            <Route exact path="/" component={Prueba}></Route>
            <Route exact path="/invoices" component={Invoices}></Route>
            </div>
        );
    }
}

export default App;
