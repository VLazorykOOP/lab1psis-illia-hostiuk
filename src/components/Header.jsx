import {NavLink} from 'react-router-dom'


const linkClass = ({isActive}) =>
    `px-3 py-2 rounded-lg transition hover:bg-gray-100 ${isActive ? 'bg-gray-100 font-semibold' : ''}`


export default function Header() {
    return (
        <header className="border-b bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
            <div className="container mx-auto px-4 py-3 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-indigo-500 to-blue-500"/>
                    <span className="text-lg font-bold">Гостюк І.В.</span>
                </div>


                <nav className="flex gap-1">
                    <NavLink to="/" className={linkClass} end>Головна</NavLink>
                    <NavLink to="/users" className={linkClass}>Користувачі</NavLink>
                    <NavLink to="/about" className={linkClass}>Про проект</NavLink>
                    <NavLink to="/contact" className={linkClass}>Контакти</NavLink>
                </nav>
            </div>
        </header>
    )
}