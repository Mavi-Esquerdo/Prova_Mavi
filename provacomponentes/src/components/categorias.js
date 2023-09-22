import Noticia from './componentes/Noticia'

function Categoria(props){
    return(
        <div classname="categoria">
           <p> Categoria {props.Categoria}</p>
        </div>
    )
}

export default Categoria