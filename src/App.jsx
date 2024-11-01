import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './components/Nav/Nav'
import Chat from './components/Chat/Chat'

function App() {
  const [count, setCount] = useState(0)
  const [visible, setVisible] = useState(false)
  const [View, setView] = useState('hidden')

  const handleClick = () => {
    setVisible(!visible)
    if (visible){
      setView('visible')
    } else {
      setView('hidden')
    }
  }

  return (
    <>
      <main className='flex flex-col'>
        <section className='Header'>
          <Nav />
        </section>
        <section className='container flex justify-center bg-[#ebf7ff67] w-[100%]'>
          <div className='img mt-16 ml-6 w-[33%]'>
            <img src="https://www.openenglish.com/wp-content/uploads/2024/07/1440-andres-hero_1x.png" alt="Foto de Andres Open English" />
          </div>
          <div className='info flex flex-col justify-center w-[33%] pb-2'>
            <div className='infoIa flex text-white font-bold w-9/12 h-12  justify-center rounded-lg'>
              <div className='border-r-2 border-solid border-white pr-4'>
                <h1 className='text-lg text-center'>Jenny</h1>
                <h3 className='text-[8px]'>tutor <strong>IA</strong></h3>
              </div>
              <div className='pl-4 w-[33%]'>
                <p>El poder de la IA, ahora en el curso lider de ingles</p>
              </div>
            </div>
            <h3 className='text-[#FF2846] font-bold py-2'>Curso 100% online</h3>
            <h1 className='text-5xl font-light py-2'>Aprende inglés más fácil y rápido con Open English</h1>
            <ul className='flex flex-col py-2'>
              <li><img src="chulo.svg" alt='Chulo' className='pr-2 py-2'/>Clases en vivo ILIMITADAS 24/7</li>
              <li><img src="chulo.svg" alt='Chulo' className='pr-2 py-2'/>Profesores nativos</li>
              <li><img src="chulo.svg" alt="Chulo" className='pr-2 py-2'/> Preparación para exámenes internacionales</li>
            </ul>
            <img src="https://www.openenglish.com/wp-content/uploads/2024/10/768-1440-store-app_1x.png" alt="Rating Google Play" />
          </div>
          <form>
            <Chat view={View} />
          </form>
        </section>
        <footer>
          <div className='flex justify-end'>
            <button className='bg-[#ceebff] rounded-full [&:hover]:bg-[#6fc6ff] fixed mr-280' onClick={handleClick}><img src='audioheadset.svg' alt='Logo Atencion al Cliente' className='w-16'/></button>
          </div>
        </footer>
      </main>
    </>
  )
}

export default App
