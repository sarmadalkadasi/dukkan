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
          <button id="menu-btn" className="z-[90] block hamburger md:hidden focus:outline-none mt-6" onClick={()=>setOpen((prev)=>!prev)}>
              <span className="hamburger-top"></span>
              <span className="hamburger-middle"></span>
              <span className="hamburger-bottom"></span>
          </button>
          {
            open &&(
                <div className="absolute left-0 top-20 bg-black text-white w-full h-[calc(100vh-80px)] flex flex-col items-center justify-center gap-6 text-lg z-10">
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