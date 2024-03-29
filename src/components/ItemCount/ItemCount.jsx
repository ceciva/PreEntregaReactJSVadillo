import {useState} from 'react'
import Button from 'react-bootstrap/Button';

const ItemCount = ({inicial,stock, funcionAgregar}) => {
    const [contador, setContador]= useState(inicial);
    
    const incrementar=()=>{
        if (contador < stock){
            setContador(contador + 1)
        }
    }

    const decrementar=()=>{
        if (contador > inicial){
            setContador(contador - 1)
        }
    }

  return (
    <>
        <div className = "d-flex justify-content-center ">
            <Button variant= "outline-info" onClick = {decrementar}> - </Button>
            <p> { contador} </p>
            <Button variant= "outline-info" onClick = {incrementar}> + </Button>
            
        </div> 
        <br></br>
        <div className="d-flex justify-content-center" >
            <Button  variant= "outline-info" onClick  ={() => funcionAgregar (contador)}>Agregar al Carrito</Button>
        </div>
    </>
  )
}

export default ItemCount