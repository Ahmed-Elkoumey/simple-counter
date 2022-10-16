import { useState } from "react";
import "./App.css";

import Decremnt from "./components/decrement/Decremnt";
import Icrement from "./components/icrement/Icrement";

function App() {
  const [counter, setCounter] = useState(0);

  const decremnt = () => {
    counter > 0 && setCounter(counter - 1);
  };

  const increment = () => {
    setCounter(counter + 1);
  };


  const reset= () =>{
    setCounter(0);
  }

  return (
    <div className="container">
     <div className="row w-50 m-auto mt-5 rounded-5 bg-success p-5">

      <div className="col-6 m-auto">
     <h1 className="text-center fs-1 p-3 rounded-5 bg-light">{counter}</h1>
      </div>

<div className="col-md-12 mb-5">
<div className="row">

 <div className=" d-flex  justify-content-between">
 <button onClick={decremnt} className="btn btn-secondary fs-1 w-25 text-light">

<Decremnt clacSign="-"></Decremnt>
</button>


<button onClick={increment} className="btn btn-primary w-25 fs-1 text-light">
<Icrement clacSign="+"></Icrement>
</button>
 </div>
 


</div>
</div>

<div className="col-md-6 m-auto">

<button onClick={reset} className="btn btn-warning text-danger fw-bold fs-4 w-100">
Reset
</button>

</div>

     </div>
    </div>
  );
}

export default App;
// props for component text & function
