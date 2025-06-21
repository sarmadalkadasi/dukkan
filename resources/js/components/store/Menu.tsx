"use client"

import { useState,useEffect } from "react"

const Menu = () => {
    const [open,setOpen]=useState(false);
    useEffect(() => {
        const body = document.body;
        const btn = document.getElementById("menu-btn");
        const nav = document.getElementById("menu");

        const handleMenuClick = () => {
            btn?.classList.toggle("open");
            nav?.classList.toggle("flex");
            nav?.classList.toggle("hidden");
            body.classList.toggle("nav-open");
        };

        btn?.addEventListener("click", handleMenuClick);

        return () => {
            btn?.removeEventListener("click", handleMenuClick);
        };
    }, []);
  return (
      <div>
          <button id="menu-btn" className="z-[90] text-black block hamburger md:hidden focus:outline-none" onClick={()=>setOpen((prev)=>!prev)}>
            <span className="hamburger-top block w-6 h-0.5 bg-current mb-1 transition-all duration-300"></span>
            <span className="hamburger-middle block w-6 h-0.5 bg-current mb-1 transition-all duration-300"></span>
            <span className="hamburger-bottom block w-6 h-0.5 bg-current transition-all duration-300"></span>
          </button>
          {
            open &&(
                <div className="fixed left-0 top-0 bg-black text-white w-full h-screen flex flex-col items-center justify-center gap-6 text-lg z-10">
                    <button
  id="menu-btn"
  className="absolute right-4 top-8 z-[90] block w-6 h-6 md:hidden focus:outline-none"
  onClick={() => setOpen((prev) => !prev)}
>
  <span className="absolute top-1/2 left-0 w-6 h-0.5 bg-current transition-all duration-300 transform -translate-y-1/2 -rotate-45"></span>
  <span className="absolute top-1/2 left-0 w-6 h-0.5 bg-current transition-all duration-300 transform -translate-y-1/2 rotate-45"></span>
</button>

                <a href="/">Home</a>
                <a href="/">Shop</a>
                <a href="/">Deals</a>
                <a href="/">About</a>
                <a href="/">Contact</a>
                <a href="/">Logout</a>
                <a href="/">Cart</a>
                
                </div>
            )
          }
      </div>
  )
}

export default Menu