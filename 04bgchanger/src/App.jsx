import { useState } from "react"

function App() {
  const [color, setColor] = useState('olive')

  return (
    <div className="w-full h-screen duration-200" style={{ backgroundColor: color }}>
      <div className="fixed flex inset-x-0 px-2 flex-wrap bottom-12 justify-center">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white text-white px-3 py-2 rounded-3xl">
          <button
            onClick={() => setColor('Red')}
            className="outline-none px-4 rounded-3xl shadow-lg"
            style={{ backgroundColor: "red" }}
          >Red</button>
          <button
            onClick={() => setColor('Blue')}
            className="outline-non px-4 rounded-3xl shadow-lg"
            style={{ backgroundColor: "blue" }}
          >blue</button>
          <button
            onClick={() => setColor('Green')}
            className="outline-none px-4 rounded-3xl shadow-lg"
            style={{ backgroundColor: "green" }}
          >Green</button>
          <button
            onClick={() => setColor('violet')}
            className="outline-none px-4 rounded-3xl shadow-lg"
            style={{ backgroundColor: "violet" }}
          >Voilet</button>
          <button
            onClick={() => setColor('orangered')}
            className="outline-none px-4 rounded-3xl shadow-lg"
            style={{ backgroundColor: "orangered" }}
          >OrangeRed</button>
          <button
            onClick={() => setColor('darkcyan')}
            className="outline-none px-4 rounded-3xl shadow-lg"
            style={{ backgroundColor: "darkcyan" }}
          >Darkcyan</button>
        </div>
      </div>
    </div>
  )
}

export default App
