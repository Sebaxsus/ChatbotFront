import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './components/Nav/Nav'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <main className='flex flex-col'>
        <section className='Header'>
          <Nav />
        </section>
        <section className='container grid grid-cols-3 justify-center bg-[#ebf7ff67]'>
          <div className='img mt-16 ml-10'>
            <img src="https://www.openenglish.com/wp-content/uploads/2024/07/1440-andres-hero_1x.png" alt="Foto de Andres Open English" />
          </div>
          <div className='info flex flex-col justify-center'>
            <div className='infoIa flex text-white font-bold w-9/12 h-12  justify-center rounded-lg'>
              <div className='border-r-2 border-solid border-white pr-4'>
                <h1 className='text-lg text-center'>Jenny</h1>
                <h3 className='text-[8px]'>tutor <strong>IA</strong></h3>
              </div>
              <div className='w-3/4 pl-4'>
                <p>El poder de la IA, ahora en el curso lider de ingles</p>
              </div>
            </div>
            <h3>Curso 100% online</h3>
            <h1 className='text-5xl font-normal'>Aprende inglés más fácil y rápido con Open English</h1>
            <ul className='flex flex-col'>
              <li>Clases en vivo ILIMITADAS 24/7</li>
              <li>Profesores nativos</li>
              <li>Preparación para exámenes internacionales</li>
            </ul>
          </div>
          <form>
            <h1>HOla</h1>
          </form>
        </section>
      </main>
    </>
  )
}

export default App
