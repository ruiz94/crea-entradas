import Entrada from '../components/Entrada';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import '../assets/css/entradas.scss';

const Entradas = ({entradas}) => {

  return ( 
    <div className="entradas">
      <Link to="/nueva-entrada" className="nueva-entrada">Nueva</Link>
      <div className="titulo">Entradas</div>
      
      {entradas.length > 0 ?
        entradas.map( entrada => (
          <Link to={`/detalle-entrada/${entrada.id}`} key={entrada.id}>
            <Entrada {...entrada} />
          </Link>
        )) 
      : <div>Loading</div>}
    </div>
   );
}

const mapStateToProps = state => ({
  entradas: state.entradas
})

const mapDispatchToProps = dispatch => ({

})
 
export default connect(mapStateToProps, mapDispatchToProps)(Entradas);