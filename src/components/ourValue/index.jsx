import {useSelector} from "react-redux"




function Home() {

  const myGlobalStore= useSelector((state) =>state.counter.counter);

  return (
  <div className="container">
    <h1 className="text-center text-success">People Donate To Us With {myGlobalStore} $</h1>
  </div>
  )
}

export default Home