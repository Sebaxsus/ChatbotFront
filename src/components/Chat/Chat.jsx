import { useEffect } from 'react'
import './Chat.css'
import ChatMap from './ChatMap'

export default function Chat(props) {
    const handleKeyDown = (e) => {
        if(e.key === 'Enter'){
            props.in()
        }
    }

    useEffect(() => {
        const chat = document.getElementById('chatBoxtext')
        chat.scrollTo({ top: chat.scrollHeight - chat.clientHeight, behavior: "smooth"})
    }, [props.res])

    return(
        <main className={`${props.view} chat fixed bg-[#d4eeff] rounded-lg h-[50%] w-[22%] ml-1 mt-4 rounded-t-md`}>
            <header className='title bg-[#FF6600] text-white rounded-t-md'>
                <h2 className='text-center font-semibold border-b-2 border-solid border-zinc-200 pt-2'>Asistente Virtual!</h2>
            </header>
            <div className='chatBox px-1 overflow-y-scroll text-clip' id='chatBoxtext'>
                <ChatMap mes={props.res}/>
            </div>
            <footer>
                <div className='chatMsg rounded-md'>
                    <input type="text" className='campoTexto' name='input' id='input' onChange={(e) => {props.mes(e.target.input)}} onKeyDown={handleKeyDown}/>
                    <button type='submit' className='botonEnviar ' onClick={() => {props.in()}}><img src="enter.svg" alt="imagen de Enviar" className='w-6 px-1'/></button>
                </div>
            </footer>
        </main>
    )
}