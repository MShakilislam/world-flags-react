
import { Suspense } from 'react'
import './App.css'
import Countres from './assets/components/countres/countres'


const fetchPromis = fetch('https://openapi.programming-hero.com/api/all')
  .then(res => res.json())
function App() {

  return (
    <>
      <Suspense fallback={<h2>Data Loading.........</h2>}>
        <Countres fetchPromis={fetchPromis}></Countres>
      </Suspense>
      
    </>
  )
}

export default App
