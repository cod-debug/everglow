import { useState, useEffect } from "react";
import { Navbar } from "flowbite-react";
import { Link, NavLink, useLocation } from "react-router-dom";
import Container from "./Container";

const links = [
    {
        path: '/',
        displayName: 'HOME'
    },
    {
        path: '/gallery',
        displayName: 'EVER GLOW GALLERY'
    },
    {
        path: '/workshop',
        displayName: 'WORKSHOP'
    },
    {
        path: '/sessions',
        displayName: 'SESSIONS'
    }
];

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();
    const navLinkClassName = "w-full md:w-fit text-left";
    const navHolderClassName = "fixed w-full top-0 z-50 px-4 md:px-12";

    const handleScroll = () => {
      const scrollY = window.scrollY;
      let navHolder = document.getElementById('navHolder');
      navHolder.style = "transition: .3s ease-in;";

      if(scrollY > 50){
        navHolder.className=navHolderClassName+" bg-primary shadow-lg";
      } else {
        navHolder.className=navHolderClassName+" bg-transparent";
      }
    };

    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

    // Close the navbar when the route changes
    useEffect(() => {
      setIsOpen(false);
    }, [location]);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={navHolderClassName} id="navHolder">
            <Container>
                <Navbar fluid rounded className="bg-transparent py-0" id="mainNav">
                    <div className="flex justify-between w-full">
                        <Link to="/" className="block md:hidden">
                            <img src="./web-assets/logo.png" className="mr-3 h-16 sm:h-[53px]" alt="Flowbite React Logo" id="brandImg" />
                        </Link>
                        <Navbar.Toggle onClick={handleToggle} className="text-white" />
                    </div>
                    <Navbar.Collapse className={`w-[100%!important] ${isOpen ? 'block' : 'hidden'}`}>
                        <div className="flex flex-col md:flex-row md:items-center justify-between w-full gap-12">
                            <Link to="/" className="hidden md:block">
                                <img src="./web-assets/logo.png" className="mr-3 h-20 sm:h-[82px]" alt="Flowbite React Logo" id="brandImg2" />
                            </Link>
                            <div className="flex items-center gap-10">
                                <div className="flex flex-col md:flex-row gap-6 sm:gap-12 text-white">
                                    {
                                        links.map((i) => (
                                            <NavLink key={i.path} to={i.path} className={({ isActive }) => isActive ? navLinkClassName + ' active' : navLinkClassName}>{ i.displayName }</NavLink>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    </Navbar.Collapse>
                </Navbar>
            </Container>
        </div>
    )
}
