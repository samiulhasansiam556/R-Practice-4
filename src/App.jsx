
import { useState } from 'react'
import './index.css'
function App() {

  const [count,setCount] = useState(0)


  const handleCalculate = (value) =>{

    if (!isNaN(value) || ['+', '-', '*', '/'].includes(value)) {
      setCount(count + value);
    }

  }

  function sum(){

    try{
       setCount(eval(count).toString());
    }catch(error){
       setCount("")
       alert("invalid input")

    }
   

  }
  function del(){

    setCount("")

  }

  return (
    <div className="calculator1">
      
  
              <h1 className='c-h'>Calculator</h1>

                   <input type="text" id="result" value={count} className='c-input'/>


                 <div className="calculator3">

                      <div onClick={(e)=> handleCalculate(e.target.innerText)} className="div4">1</div>
                      <div onClick={(e)=> handleCalculate(e.target.innerText)} className="div4">2</div>
                      <div onClick={(e)=> handleCalculate(e.target.innerText)} className="div4">3</div>
                      <div onClick={(e)=> handleCalculate(e.target.innerText)} className="div4">+</div>
                      <div onClick={(e)=> handleCalculate(e.target.innerText)} className="div4">4</div>
                      <div  onClick={(e)=> handleCalculate(e.target.innerText)}className="div4">5</div>
                      <div onClick={(e)=> handleCalculate(e.target.innerText)} className="div4">6</div>
                      <div onClick={(e)=> handleCalculate(e.target.innerText)} className="div4">-</div>
                      <div onClick={(e)=> handleCalculate(e.target.innerText)} className="div4">8</div>
                      <div onClick={(e)=> handleCalculate(e.target.innerText)} className="div4">9</div>
                      <div onClick={(e)=> handleCalculate(e.target.innerText)} className="div4">0</div>
                      <div onClick={(e)=> handleCalculate(e.target.innerText)} className="div4">*</div>
                      <div onClick={del} className="div4 itemc7">c</div>
                      <div onClick={sum} className="div4 itemc8">=</div>
                      <div onClick={(e)=> handleCalculate(e.target.innerText)} className="div4 itemc9">/</div>
                     
                 </div>
            
    </div>
  )
}

export default App
