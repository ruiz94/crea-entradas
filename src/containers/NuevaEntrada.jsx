import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { connect } from 'react-redux';

import '../assets/css/nuevaEntrada.scss';
import flechaIzquierda from '../assets/img/flecha-izquierda.png';

const NuevaEntrada = ({agregarEntrada}) => {
  const [titulo, setTitulo] = useState('');
  const [autor, setAutor] = useState('');
  const [cuerpo, setCuerpo] = useState('');

  const history = useHistory();

  const guardarEntrada = (e) => {

    e.preventDefault();

    let fecha = new Date();
    const nuevo = {
      titulo,
      autor,
      cuerpo,
      fecha: fecha.toLocaleDateString(),
      hora: fecha.toLocaleTimeString()
    }
    console.log(nuevo);
    agregarEntrada(nuevo);
    history.push('/');
  }

  return ( 
    <div className="form-nueva-entrada">
      
      <form onSubmit={guardarEntrada}>
        <Link className="return" to="/"><img src={flechaIzquierda} alt="flecha izquierda" /></Link>
        <div className="titulo">Nueva Entrada</div>
        <label>
          <input 
            type="text" 
            name="titulo" 
            value={titulo} 
            onChange={(e) => setTitulo(e.target.value)} 
          />
          <span>Titulo</span>
        </label>
        <label>
          <input 
            type="text" 
            name="autor" 
            value={autor} 
            onChange={(e) => setAutor(e.target.value)}
          />
          <span>Autor</span>
        </label>
        <label>
          <textarea 
            col="3" 
            row="4" 
            value={cuerpo} 
            onChange={(e) => setCuerpo(e.target.value)}
          ></textarea>
          <span>Cuerpo</span>
        </label>
        <button className="btn-guardar">Guardar</button>
      </form>
    </div>
   );
}

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({
  agregarEntrada(entrada){
    dispatch({
      type: "AGREGAR_ENTRADA",
      payload: entrada
    })
  }
})
 
export default connect(mapStateToProps, mapDispatchToProps)(NuevaEntrada);