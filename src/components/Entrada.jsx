const Entrada = ({titulo, fecha, hora, autor, cuerpo}) => {
  return ( 
    <div className="entrada">
      <div className="titulo--entrada">{titulo}</div>
      <span className="line"></span>
      <p className="fecha--entrada">{fecha} {hora}</p>
      <div className="cuerpo--entrada">{cuerpo.slice(0, 200)}...</div>
      <p className="autor--entrada">{autor}</p>
    </div>
   );
}
 
export default Entrada;