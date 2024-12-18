import { useState } from 'react'
import './App.css'
import FetchApi from './FetchApi'

function App() {
  const [color, setColor] = useState("whitesmoke")

  
  return (
    <div className='w-full h-screen duration-200 ' style={{backgroundColor: color}}>
      <h1 className='' style={{fontSize: '50px', textAlign:'center', padding:'30px'}}>Background Changer</h1>
       <div className='fixed flex flex-wrap justify-center bottom-12 insert-x-0 left-0 right-0 mx-auto px-2'>

        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>

          <button onClick={() => setColor('red')} className='outline-none px-4 py-1 rounded-full text-black shadow-lg' style={{backgroundColor: 'red'}}>Red</button>

          <button onClick={() => setColor('green')} className='outline-none px-4 py-1 rounded-full text-black shadow-lg' style={{backgroundColor: 'green'}}>Green</button>

          <button onClick={() => setColor('blue')} className='outline-none px-4 py-1 rounded-full text-black shadow-lg' style={{backgroundColor: 'blue'}}>Blue</button>

          <button onClick={() => setColor('pink')} className='outline-none px-4 py-1 rounded-full text-black shadow-lg' style={{backgroundColor: 'pink'}}>Pink</button>

          <button onClick={() => setColor('yellow')} className='outline-none px-4 py-1 rounded-full text-black shadow-lg' style={{backgroundColor: 'yellow'}}>Yellow</button>

        </div>

       </div>
       <FetchApi/>
    </div>
  )
}

export default App
