import { useState } from 'react'
import { BsFillSunFill } from 'react-icons/bs'
import { IoMoon } from 'react-icons/io5'

const Navbar = () => {
    const [isdark, setDark] = useState(false)
    const toggleDark = () => {
        document.querySelector('body')?.classList.toggle('dark')
        setDark(!isdark);
    }
    return (
        <nav className='bg-white shadow-md sticky top-0 z-50'>
            <div className="container flex items-center justify-between py-4">
                <div>
                    <h3 className='text-lg md:text-2xl font-bold'>Where in the world?</h3>
                </div>
                <button className="dark-control flex items-center gap-1 text-sm py-2 px-4 md:py-4 md:px-8 md:text-base rounded-md bg-white" onClick={toggleDark}>
                    {isdark ? <BsFillSunFill /> : <IoMoon />}
                    {isdark ? "Light Mode" : "Dark Mode"}
                </button>
            </div>
        </nav>
    )
}

export default Navbar