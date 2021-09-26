import React, {useState} from 'react'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
    const [showSidebar, setShowSidebar] = useState("")

    const toggleSidebar = (e) => {
        console.log('menu button clicked');
        if (showSidebar === "") {
            setShowSidebar("-translate-x-full")
        } else {
            setShowSidebar("")
        }
    }

    return (
        <>
            <div className="bg-primary-700 text-primary-200 flex justify-between md:hidden">
                <a href="#" className="block p-4 text-white-text-bold">SchoolX</a>

                <button className="p-4" onClick={toggleSidebar}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                    </svg>
                </button>
            </div>
            <div className={`bg-primary-700 sm:w-44 md:w-64 space-y-24 px-2 py-4 text-primary-200 absolute inset-y-0 left-0 transform ${showSidebar} md:relative md:translate-x-0 transition duration-200 ease-in-out`}>
                {/* logo */}
                <a href="#" className="flex items-center space-x-2 px-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M12 14l9-5-9-5-9 5 9 5z" />
                        <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                    </svg>
                    <span className="text-2xl font-extrabold">SchoolX</span>
                </a>
                

                {/* nav */}
                <nav className="space-y-6">
                    <NavLink to="/dashboard" className="flex space-x-2 py-2.5 px-4 rounded hover:text-white hover:bg-primary-400 transition duration-200">
                        <span>Dashboard</span> 
                        <svg className="h-6 w-6" fill="currentColor" version="1.1" viewBox="0 0 512 512" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg">
                            <path d="m435.14 129.36c-6.796-6.795-17.463-7.797-25.407-2.384-29.926 20.398-180.03 122.97-196.16 139.1-23.394 23.395-23.394 61.459 0 84.854 11.697 11.696 27.063 17.545 42.427 17.545s30.729-5.849 42.427-17.545c16.131-16.132 118.7-166.24 139.1-196.16 5.411-7.943 4.41-18.611-2.385-25.408zm-165 193.28c-7.797 7.799-20.486 7.799-28.283 0-7.798-7.797-7.799-20.482-4e-3 -28.28 6.268-6.194 48.885-36.588 101.32-73.035-36.446 52.434-66.84 95.049-73.032 101.32z"/>
                            <path d="m92.231 401.52-24.69 12.044c-18.066-32.242-27.541-68.229-27.541-105.07 0-26.991 4.977-52.842 14.06-76.683l28.291 13.57c2.79 1.338 5.735 1.972 8.636 1.972 7.453 0 14.608-4.185 18.047-11.355 4.776-9.959 0.576-21.906-9.384-26.683l-27.932-13.398c34.717-56.62 94.784-96.095 164.28-102.5v30.081c0 11.046 8.954 20 20 20s20-8.954 20-20v-30.096c23.828 2.169 46.884 8.237 68.771 18.117 10.065 4.545 21.912 0.066 26.457-9.999 4.545-10.068 0.068-21.913-10-26.458-33.166-14.971-68.57-22.563-105.23-22.563-68.38 0-132.67 26.628-181.02 74.98-48.351 48.353-74.98 112.64-74.98 181.02 0 50.53 14.998 99.674 43.373 142.12 3.822 5.715 10.141 8.886 16.639 8.886 2.954 0 5.946-0.655 8.757-2.026l41-20c9.928-4.843 14.05-16.816 9.207-26.744-4.843-9.927-16.817-14.048-26.745-9.207z"/>
                            <path d="m489.44 203.27c-4.544-10.067-16.387-14.547-26.458-10-10.067 4.545-14.544 16.39-9.999 26.457 12.622 27.958 19.021 57.825 19.021 88.771 0 36.894-9.506 72.939-27.625 105.22l-25.777-12.275c-9.971-4.748-21.906-0.515-26.656 9.459-4.749 9.972-0.514 21.907 9.459 26.656l42 20c2.763 1.315 5.692 1.944 8.588 1.944 6.5 0 12.82-3.175 16.637-8.886 28.376-42.442 43.374-91.586 43.374-142.12 0-36.659-7.592-72.063-22.564-105.23z"/>
                        </svg>
                    </NavLink>
                    <NavLink to="/marks" className="flex space-x-2 py-2.5 px-4 rounded hover:text-white hover:bg-primary-400 transition duration-200">
                        <span>Marks</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                        </svg>
                    </NavLink>
                    <NavLink to="/student-registration" className="flex space-x-2 py-2.5 px-4 rounded hover:text-white hover:bg-primary-400 transition duration-200">
                        <span>Student Registration</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                        </svg>
                    </NavLink>
                    <NavLink to="/teacher-registration" className="flex space-x-2 py-2.5 px-4 rounded hover:text-white hover:bg-primary-400 transition duration-200">
                        <span>Teacher Registration</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z" />
                        </svg>
                    </NavLink>
                </nav>

        </div>
        </>
    )
}

export default Sidebar
