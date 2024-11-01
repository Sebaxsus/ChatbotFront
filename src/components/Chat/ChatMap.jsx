export default function ChatMap(props) {
    
    return props.mes.map((item, index) => (
        <>
            <div key={index} className={item.agente === 'bot' ? 'botMsg' : 'userMsg'}><h1>{item.msg}</h1></div>
        </>
    ))
}