import { useState, useEffect } from "react"
export default function Header(){
    const [scrolled, setScrolled] = useState(false)
    const handleScroll = () => {
        if (window.scrollY >= 250) {
          setScrolled(true);
        } else {
          setScrolled(false);
        }
      };
    
      useEffect(() => {
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
    return(
        <header className= {`header ${scrolled ? 'w-screen bg-black text-white flex items-center justify-center p-10' : 'w-screen bg-white   text-black  flex items-center justify-center p-10'} fixed top-0 `}>
            <nav className="w-[80%] flex justify-between items-center">
                <span className="text-3xl font-bold">Logo</span>
                <ul className="flex text-lg justify-between gap-3">
                    <li className="font-semibold"><a href="https://eldordev.vercel.app/">Portfolio</a></li>
                    <li className="font-semibold"><a href="https://github.com/eldor-firdavsov">Github</a></li>
                    <li className="font-semibold"><a href="https://www.linkedin.com/in/eldor-firdavsov/">Linkedin</a></li>
                </ul>

            </nav>
        </header>
    )
}