import {useState, useEffect} from "react"
const Contador = ({stock, inicial}) => {
    const [contador, setContador] = useState(inicial);
    const [color,setColor] = useState("black")
    useEffect(() =>{
        document.title = `contador: ${contador}`;
    }, [contador])

    useEffect(()=>{
        contador>=5? setColor("red") : setColor("black");
    },[contador])
 

    const incrementar = () => {
        if(contador < stock) {
            setContador(contador +1);
        }
    }
    const decrementar = () => {
        if(contador > inicial) {
            setContador(contador -1);
        }
    }
    const agregarAlCarrito =()=>{
        console.log (`Agregado ${contador} items`);
    }
  return (
    <div>
        <h3>Mi contador</h3>
        <button onClick = {decrementar}> - </button>
        <strong> {contador}</strong>
        <button onClick = {incrementar}> + </button>
        
        <button onClick = {agregarAlCarrito}style={{color:color}}>Agregar al carrito </button>
    </div>
  )
}

export default Contador