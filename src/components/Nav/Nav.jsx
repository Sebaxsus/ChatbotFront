import './Nav.css'

export default function Nav() {
    return (
        <>
            <header>
                <div className='top-nav'>
                    <nav className='top-nav-list-left [&>ul>li]:justify-center'>
                        <ul>
                            <li className='w-40 [&:hover]:bg-white'><a href="https://www.openenglish.com/">Adultos</a></li>
                            <li><a href="https://www.openenglish.com/junior/">Niños</a></li>
                            <li><a href="https://www.openenglish.com/para-empresas">Empresas</a></li>
                            <li><a href="https://www.openenglish.com/para-empresas/open-mundo/">Más idiomas</a></li>
                        </ul>
                    </nav>
                    <nav className='top-nav-list-right mr-14 [&>ul>li>a:hover]:orange-300'>
                        <ul>
                            <li className='border-r-2 border-slate-300'><a href="https://www.openenglish.com/#">Acceso Estudiantes</a></li>
                            <li><a href="https://www.openenglish.com/investors/">Investors</a></li>
                        </ul>
                    </nav>
                </div>
                <div className='mid-nav'>
                    <nav className='mid-nav-list-left'>
                        <ul>
                            <li><a href=""><img src="https://www.openenglish.com/wp-content/themes/oe-wpcontent/wpbootstrap/img/oe-latam-logo.png" alt="Logo de Open English" className='Logo'/></a></li>
                            <li><a href="">El Curso</a></li>
                            <li><a href="">Cómo Funciona</a></li>
                            <li><a href="">Comenzar</a></li>
                        </ul>
                    </nav>
                    <nav className='mid-nav-list-right flex justify-center px-2 py-4'>
                        <div className='buttonContact flex justify-center items-center border-green-400 border-solid border-2 px-2 rounded-lg ml-14'>
                            <img src="/phone.svg" alt="Icono de un telefono" className='p-4'/>
                            <button className='pl-4'>(300) 912 1099</button>
                        </div>
                    </nav>
                </div>
                <div className='bottom-nav flex justify-center items-center gap-1 bg-[#FF6600] py-2'>
                    <p className='text-white flex gap-1 [&>strong]:text-[#FFFF00] [&>strong]:font-bold'> <strong>¡Por pocos días!</strong> Aprovecha una <strong>OFERTA ESPECIAL</strong> en tu curso. ¡Aún estás a tiempo!</p>
                    <button className='bg-[#0078FF] rounded-full text-white px-8 py-2'>Comienza hoy</button>
                </div>
            </header>
        </>
    )
}