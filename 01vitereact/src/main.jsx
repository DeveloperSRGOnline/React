import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import React from 'react'

function MyApp() {
  return (
    <div>
      <h1>Custom app function</h1>
    </div>
  )
}

const anotherElement = (
    <a href="https://google.com">Visit Google</a>
)

const anotherUser =   "chai aur react"

const reactElement = React.createElement(
  'a',
  {href:'https://google.com',target:'_blank'},
  'I am custom react element',
  anotherUser // and agar yaha koi let say if syntax likhoge to vo kaise chalega
)

createRoot(document.getElementById('root')).render(
  // anotherElement
  // reactElement
  // <MyApp />
  // MyApp()
  <App />
)
