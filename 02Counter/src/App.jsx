import { useState } from 'react';

function App() {

  // let counter = 15
  const [counter,setCounter] = useState(15)
  // console.log(useState())
  // console.log(counter,setCounter)

  const addValue = () => {
    // console.log("hello from my side")
    // counter = counter + 1;
    // console.log(counter)
    // if (counter < 20) setCounter(counter + 1)

    // Interview que
    // setCounter(counter + 1)
    // setCounter(counter + 1)
    // setCounter(counter + 1)
    // setCounter(counter + 1)
    // setCounter(counter + 1)// batch mein same kaam hoga

    // right way if you want to do that
    setCounter((prevCount) => prevCount + 1)
    // setCounter((prevCount) => prevCount + 1)
    // setCounter((prevCount) => prevCount + 1)
    // setCounter((prevCount) => prevCount + 1)
  }

  const removeValue = () => {
    // if(counter > 0) setCounter(counter - 1)
    setCounter(counter - 1)
    setCounter(counter - 1)
    setCounter(counter - 1)
    setCounter(counter - 1)
  }

  // React react karti hai variables ke updation pe isliye use react kehete hai , badi hi reactive hai
  
  // console.log(addValue) - just function as it is as a refrence pass
  // console.log(addValue()) - actually execute

  return (
    <>
      <h1>This is shivam signing of.</h1>
      <h2>Counter Value : {counter}</h2>
      <button
        onClick={addValue}// just passing refrence becuse refrence pass karne ke vajah se ab onclick isse jab click hoga button par tab use call karsakta hai turant call nahi hoga
      >Add Value</button>
      <br />
      <button
      onClick={removeValue}
      >Remove Value</button>
    </>
  )
}

export default App
