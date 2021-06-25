import { Link } from 'react-router-dom';

const NotFound = () => {
  return ( 
    <div className="not-found">
      <p className="number">404</p>
      <p className="text">Page not found</p>
      <Link to="/">Ir al inicio</Link>
    </div>
   );
}
 
export default NotFound;