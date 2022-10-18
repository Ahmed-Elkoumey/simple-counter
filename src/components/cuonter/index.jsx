import {useSelector,useDispatch} from "react-redux"
import { deCrementCounter, incrementCounter } from "../../store/counterSlice";


function Cuonter() {

 const myGlobalStore= useSelector((state) =>state.counter.counter);
const dispatche = useDispatch();


const inCrement=()=>{
  dispatche(incrementCounter(1))
  console.log(myGlobalStore);
}


const deCrement=()=>{
  dispatche(deCrementCounter(1))
  console.log(myGlobalStore);
}


// 
  return (
    <div className="container">
    <div className="row w-50 m-auto mt-5 rounded-5 bg-success p-5">

     <div className="col-6 m-auto">
    <h1 className="text-center fs-1 p-3 rounded-5 bg-light">Donate To Us</h1>
    <h2 className="text-center fs-1 p-1 rounded-5 bg-light">{myGlobalStore}</h2>
     </div>

<div className="col-md-12 mb-5">
<div className="row">

<div className=" d-flex  justify-content-between">
<button onClick={deCrement} className="btn btn-secondary fs-1 w-25 text-light">
-
</button>


<button onClick={inCrement}  className="btn btn-primary w-25 fs-1 text-light">
+
</button>
</div>



</div>
</div>

<div className="col-md-6 m-auto">

<button  className="btn btn-warning text-danger fw-bold fs-4 w-100">
Reset
</button>

</div>

    </div>
   </div>
  )
}

export default Cuonter