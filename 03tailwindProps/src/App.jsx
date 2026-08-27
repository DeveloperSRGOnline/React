import { useState } from 'react'
import Card from './components/Card';

function App() {
  const [count, setCount] = useState(0)

  const newArray = [1,2,3,4,5]
  return (
    <div className="flex flex-col gap-10 items-center justify-center h-screen w-screen bg-gray-700">
      <Card 
      username="Shivam Garade" 
      btnText="Connect"
      desc="This is me hey there."
      />
      <Card 
      username="DevSRGOnline" 
      btnText="Subscribe"
      desc="Subscribe to my channel"
      />
    </div>
  )
}

export default App;