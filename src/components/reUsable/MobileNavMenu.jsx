"use client";
import { usePathname } from "next/navigation";
import MenuIcon from "./menuIcon";

// import Hamburger from "hamburger-react";
import { useState,useEffect } from "react";
import styles from "./styles/menu.module.css";
import { headerNavLinks } from "@/config";
import Link from "next/link";
import { SiFacebook, SiWhatsapp, SiTiktok, SiInstagram } from "react-icons/si";

export default function HamburgerMenu() {

   const [isMobile, setIsMobile] = useState(
    ()=>{
      if (typeof window === 'undefined') return false; // for server bcz window is client side only
      return window.matchMedia('(max-width: 480px)').matches
    }    
  )

  useEffect(()=>{

    const mediaQueryMobile = window.matchMedia('(max-width: 480px)')
    const isTrueFx = (e)=> setIsMobile(e.matches)
    mediaQueryMobile.addEventListener('change', isTrueFx)


    return ()=>mediaQueryMobile.removeEventListener('change' , isTrueFx)
  },[])





  // const [isOpen, setIsOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname()

  function closeMenu(e) {

    if (e.target.closest('a')){
      setIsMenuOpen(false)
      console.log('heyyyyy')
    }
  }

  

  return (
    <div className={styles.mainContainer}>
      <div className={styles.menuIcon}>
        <MenuIcon
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
          ariaControls="menu"
        />
      </div>

      {isMenuOpen && (
        <nav
          onClick={isMobile ? closeMenu:undefined}
          id="menu"
          className={styles.menuCon}
          aria-label="Mobile navigation"
        >
          <ul className={styles.internalNavLinks}>
            {headerNavLinks.map(({ href, label }) => {

              return (
                <li key={href} className={styles.linkIitem}>
                  <Link href={href} aria-current={pathname === href ? "page": undefined} > {label} </Link>
                </li>
              );
            })}
          </ul>

          <div className={styles.mobileMenuSocialLinks}>
            <p>Tell a friend about us</p>
            <ul>
              <li><a href="#" aria-label="Visit us on Facebook" ><SiFacebook color="#1877F2" size={19} /></a></li>
              <li><a href="#" aria-label="Visit us on Tik tok" ><SiTiktok color="#000000" size={19} /></a></li>
              <li><a href="#" aria-label="Visit us on Instagram" ><SiInstagram color="#E4405F" size={19} /></a></li>
              <li><a href="#" aria-label="Visit us on WhatsApp" ><SiWhatsapp color="#25D366" size={19} /></a></li>
            </ul>
          </div>
        </nav>
      )}
    </div>
  );

  // const [isOpen, setIsOpen] = useState(false);

  // return (
  //   <div className={styles.mainContainer}>

  //     <div className={styles.menuIcon}>
  //       <Hamburger
  //         size="16"
  //         color="black"
  //         toggled={isOpen}
  //         toggle={setIsOpen}
  //       />
  //     </div>

  //     {isOpen && (
  //       <div className={styles.menuCon}>
  //         <ul className={styles.internalNavLinks}>
  //           {headerNavLinks.map(({ href, label }) => {
  //             // logic goes here

  //             return (
  //               <li key={href} className={styles.linkIitem}>
  //                 <Link href={href}> {label} </Link>
  //               </li>
  //             );
  //           })}
  //         </ul>

  //         <div className={styles.mobileMenuSocialLinks}>
  //           <p>Tell a friend about us</p>
  //           <ul>
  //             <a href="#">
  //               <SiFacebook color="#1877F2" size={19} />
  //             </a>
  //             <a href="#">
  //               <SiTiktok color="#000000" size={19} />
  //             </a>
  //             <a href="#">
  //               <SiInstagram color="#E4405F" size={19} />
  //             </a>
  //             <a href="#">
  //               <SiWhatsapp color="#25D366" size={19} />
  //             </a>
  //           </ul>
  //         </div>
  //       </div>
  //     )}
  //   </div>
  // );
}
