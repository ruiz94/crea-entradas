import { connect } from 'react-redux';
import { useParams, useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import '../assets/css/detallesEntrada.scss';
import noEntrada from '../assets/img/no-entrada.gif';
import flechaReturn from '../assets/img/flecha-izquierda.png';

const DetallesEntrada = ({entradas, deleteEntrada}) => {
  const {id} = useParams();
  const history = useHistory();
  const entrada = entradas.filter( item => item.id === parseInt(id))[0];
  
  const handleClick = () => {
    deleteEntrada(entrada.id);
    history.push('/');
  }
  return (
    <div className="detalles-entrada">
      <div className="entrada">
        <Link to="/" className="regresar">
          <img src={flechaReturn} alt="return" />
        </Link>
        {!entrada ? 
            <div className="sin-entrada">
              <img src={noEntrada} alt="icono no entrada" />
              <p>Lo sentimos pero no hay datos para esta entrada</p>
            </div>
          :
            <>
            <div className="head">
              <div className="fecha">{entrada.fecha} - {entrada.hora}</div>
              <div className="autor">{entrada.autor}</div>
            </div>
            <div className="titulo">{entrada.titulo}</div>
            <div className="cuerpo">{entrada.cuerpo}</div>
            <button className="btn-delete" onClick={handleClick}>Eliminar</button>
            </>
          }
        </div>
      </div>
   );
}

const mapStateToProps = state => ({
  entradas: state.entradas
})

const mapDispatchToProps = dispatch => ({
  deleteEntrada(id){
    dispatch({
      type: "DELETE_ENTRADA",
      payload: id
    })
  }
})
 
export default connect(mapStateToProps, mapDispatchToProps)(DetallesEntrada);