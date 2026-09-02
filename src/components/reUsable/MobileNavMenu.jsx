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

  const shareText = "Hey! I found this really useful website for learning the driving theory test. It has helpful notes and practice questions and I think you might find it useful too: https://matshwao.pages.dev";
  const socialLinks = {
    facebook: "https://www.facebook.com/sharer/sharer.php?u=" +
    encodeURIComponent("https://your-site.com") +
    "&quote=" + encodeURIComponent(shareText),

    whatsapp: "https://wa.me/?text=" + encodeURIComponent(shareText)
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
              <li>
                <a 
                  href= {socialLinks.facebook} 
                  aria-label="Share on Facebook" 
                  target="_blank" 
                  rel="noreferrer" 
                >
                  <SiFacebook color="#1877F2" size={19} />
                </a>
              </li>
              
              <li>
                <a 
                  href= {socialLinks.whatsapp} 
                  aria-label="Share on WhatsApp" 
                  target="_blank" 
                  rel="noreferrer" 
                >
                  <SiWhatsapp color="#25D366" size={19} />
                </a>
              </li>
            </ul>
          </div>
        </nav>
      )}
    </div>
  );
}
