import { useCallback, useEffect, useRef, useState } from 'react'

function App() {
  const [length, setLength] = useState(8)
  const [num, setNum] = useState(false)
  const [char, setChar] = useState(false)
  const [pass, setPassword] = useState("")

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (num) str += "0123456789"
    if (char) str += "!@#$%^&*(){}[]~`"

    // the number of times we want to select random charecters from the str is governed by the setLengt

    for (let i = 1; i < length; i++) {
      // jitni lenght hai 0 se vaha tak koi bhi random chracters pic karege and 0 na aaya isliye + 1 kar diye and math.floor for making it in integrs not float values
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }

    setPassword(pass)
  }, [length, char, num, setPassword])// This is for optimization using caching. 

  const copyPasswordToClipboard = useCallback(()=>{
    passwordRef.current?.select()
    // passwordRef.current?.setSelectionRange(0,20)
    window.navigator.clipboard.writeText(pass)
  },[pass])

  // The reason we don't put `password` instead of `set password` is because when `password` updates, it reruns, and that will render. That's not what we want. 

  useEffect(()=>{
    passwordGenerator()
  },[length,num,char,passwordGenerator]) // This is for efficient rerunning and re-rendering.

  const passwordRef = useRef(null) 
  // Used when we want to reference anything 

  return (
    <div className='w-full select-none min-h-screen bg-gray-900 flex justify-center items-start pt-12 px-4'>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500'>
        <h1 className='text-white text-center text-xl font-medium my-3'>Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={pass}
            className='outline-none w-full py-1 px-3 bg-white text-gray-800'
            placeholder='Password'
            readOnly
            ref={passwordRef}
          />
          <button
            className='outline-none bg-[#7B61D6] hover:bg-[#6240df] text-white px-3 py-0.5 shrink-0 transition-colors'
            onClick={copyPasswordToClipboard}
          >Copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          {/* length  */}
          <div className="flex items-center gap-x-1">
            <input 
            type="range"
            min={6}
            max={100}
            value={length}
            className='cursor-pointer'
            onChange={(e) => {setLength(e.target.value)}}
            />
            <label>Length : {length}</label>
          </div>
          {/* number */}
          <div className="flex items-center gap-x-1">
            <input 
            type="checkbox"
            defaultChecked={num}
            id='numberInput'
            onChange={()=>{
              setNum((prev) => !prev)
            }}
             />
             <label htmlFor='numberInput'>Number</label>
          </div>
          {/* character */}
          <div className="flex items-center gap-x-1">
            <input 
            type="checkbox"
            defaultChecked={char}
            id='charInput'
            onChange={()=>{
              setChar((prev) => !prev)
            }}
             />
             <label htmlFor='charInput'>Character</label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
