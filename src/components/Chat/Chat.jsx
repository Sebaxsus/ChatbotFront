import './Chat.css'
import ChatMap from './ChatMap'

export default function Chat(props) {
    console.log(props.mes)
    return(
        <main className={`${props.view} chat fixed bg-[#d4eeff] rounded-lg h-[50%] w-[22%] ml-1 mt-4 rounded-t-md`}>
            <header className='title bg-[#FF6600] text-white rounded-t-md'>
                <h2 className='text-center font-semibold border-b-2 border-solid border-zinc-200 pt-2'>Asistente Virtual!</h2>
            </header>
            <div className='chatBox px-1 overflow-auto text-clip'>
                <ChatMap mes={props.mes}/>
            </div>
            <footer>
                <div className='chatMsg rounded-md'>
                    <input type="text" className='campoTexto '/>
                    <button type='submit' className='botonEnviar '><img src="enter.svg" alt="imagen de Enviar" className='w-6 px-1'/></button>
                </div>
            </footer>
        </main>
    )
}