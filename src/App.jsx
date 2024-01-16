import { useState } from 'react';
import './App.css';
import { Helmet } from 'react-helmet';

function App() {
  const [value, setValue] = useState("")
// value is old value 
function sendValue(e){
setValue(value + e.target.value)
}
function clear(){
  setValue("")
}

function clac(){
  setValue(eval(value))

}
function deleteItem(){
  setValue(value.slice(0, -1));
}




  return<>
              <Helmet>
                <meta name="description"content=''/>
                <title>Calculator App</title>
              </Helmet>
  <div className="container ">
    <div className="calculator">

    <form action="">
    <div className='display m-3'>
      <input type="text" className='form-control' value={value} />
      
    </div>
{/* first row  */}
    <div>
          <input type="button"className="btn btn-outline-primary" value="AC"onClick={clear} />

          <input type="button"className="btn btn-outline-primary" value="DE"onClick={deleteItem} />
          <input type="button"className="btn btn-outline-primary" value="."onClick={sendValue} />
          <input type="button"className="btn btn-outline-primary" value="/"onClick={sendValue} />
    </div>


{/* second row  */}
<div >

          <input type="button"className="btn btn-outline-primary" value="7"onClick={sendValue} />
    
  
          <input type="button"className="btn btn-outline-primary" value="8"onClick={sendValue} />
  
          <input type="button"className="btn btn-outline-primary" value="9"onClick={sendValue} />
          <input type="button"className="btn btn-outline-primary" value="*" onClick={sendValue}/>
    </div>

    {/* third row  */}
    <div>

          <input type="button"className="btn btn-outline-primary" value="4"onClick={sendValue} />
  
          <input type="button"className="btn btn-outline-primary" value="5"onClick={sendValue} />
  
          <input type="button"className="btn btn-outline-primary" value="6"onClick={sendValue} />
  
          <input type="button"className="btn btn-outline-primary" value="+"onClick={sendValue} />
    </div>



    {/* fourth row  */}

    <div>

          <input type="button"className="btn btn-outline-primary" value="1"onClick={sendValue} />
  
          <input type="button"className="btn btn-outline-primary" value="2"onClick={sendValue} />
  
          <input type="button"className="btn btn-outline-primary" value="3"onClick={sendValue} />
      
  
          <input type="button"className="btn btn-outline-primary" value=" - "onClick={sendValue} />
    </div>

    {/* fifth row  */}
    <div>

          <input type="button"className="btn btn-outline-primary" value="00"onClick={sendValue} />
  
          <input type="button"className="btn btn-outline-primary" value="0"onClick={sendValue} />
  
          <input type="button"className="btn btn-outline-primary" style={{width:"109px"}}value="="onClick={clac} />
    </div>
    </form>      
    </div>


  </div>
  
  
  </> 
}

export default App;
