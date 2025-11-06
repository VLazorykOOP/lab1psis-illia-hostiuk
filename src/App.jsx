import {Routes, Route} from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Users from "./pages/Users";


export default function App() {
    return (
        <div className="min-h-screen flex flex-col">
            <Header/>
            <main className="flex-1 container mx-auto px-4 py-8">
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/contact" element={<Contact/>}/>
                    <Route path="/users" element={<Users />} />
                </Routes>
            </main>
            <Footer/>
        </div>
    )
}