import {useState} from 'react'

function Counter (){
    const [count, setCount] = useState(0)
    
    function increment() {
        setCount(count => count + 1)
    }
    function decrement(){
        setCount(count => count - 1)
    }

    function handleInputChange(event) {
        const newValue = parseInt(event.target.value, 10); // Convertir le texte en nombre entier
        if (!isNaN(newValue)) {
            setCount(newValue);
        }
    }
    
    return(
        <div className="counter">
            <button onClick={()=> increment()}>+</button>
            <button onClick={()=> decrement()}>-</button>
            <p>Count: {count}</p>
            <input type="text" value={count} onChange={handleInputChange} />
        </div>
    )
}
export default Counter