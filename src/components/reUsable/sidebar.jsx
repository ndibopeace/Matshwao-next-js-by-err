"use client";

import styles from "@components/reUsable/styles/sidebar.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";


export default function Aside() {

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












  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  function closeMenu(e) {
    if (e.target.closest('a')){
      setIsMenuOpen(false)
      console.log('heyyy5yy')
    }
  }


  const pathName = usePathname(); //gets the current url
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // console.log(isMenuOpen);

  return (
    <div>
      {/* <MdKeyboardArrowRight /> */}
      <button
        onClick={toggleMenu}
        className={`${styles.menu} `}
        type="button"
        aria-controls="lessons"
        aria-expanded={isMenuOpen}
        aria-label={isMenuOpen ? "close lessons menu" : "open lessons menu"}
      >
        <MdKeyboardArrowRight
          size={20}
          className={`${styles.menu_icon} ${isMenuOpen ? styles.menu_btn_open : ""}`}
        />
        lessons
      </button>

      <aside
        onClick={isMobile ? closeMenu: undefined}
        className={`${styles.side_container_desktop} ${isMenuOpen ? styles.side_container_mobile : ""}`}
      >
        <h2>Lessons</h2>

        <nav id="lessons" aria-label="lessons navigation">
          <ul >
            <li>
              <Link
                aria-current={
                  pathName === "/theory/personal-requirements"
                    ? "page"
                    : undefined
                }
                href="/theory/personal-requirements"
                className={
                  pathName === "/theory/personal-requirements"
                    ? styles.active_topic
                    : ""
                }
              >
                {" "}
                Personal requirements
              </Link>
            </li>
            <li>
              <Link
                aria-current={
                  pathName === "/theory/driver-personality" ? "page" : undefined
                }
                href="/theory/driver-personality"
                className={
                  pathName === "/theory/driver-personality"
                    ? styles.active_topic
                    : ""
                }
              >
                {" "}
                Driver personality
              </Link>
            </li>
            <li>
              <Link
                aria-current={
                  pathName === "/theory/statutory-regulations"
                    ? "page"
                    : undefined
                }
                href="/theory/statutory-regulations"
                className={
                  pathName === "/theory/statutory-regulations"
                    ? styles.active_topic
                    : ""
                }
              >
                {" "}
                Statutory regulations
              </Link>
            </li>
            <li>
              <Link
                aria-current={
                  pathName === "/theory/traffic-routes" ? "page" : undefined
                }
                href="/theory/traffic-routes"
                className={
                  pathName === "/theory/traffic-routes"
                    ? styles.active_topic
                    : ""
                }
              >
                {" "}
                Traffic routes
              </Link>
            </li>
            <li>
              <Link
                aria-current={
                  pathName === "/theory/speed-distance-and-warning-signals"
                    ? "page"
                    : undefined
                }
                href="/theory/speed-distance-and-warning-signals"
                className={
                  pathName === "/theory/speed-distance-and-warning-signals"
                    ? styles.active_topic
                    : ""
                }
              >
                {" "}
                Speed, distance and warning signals
              </Link>
            </li>
            <li>
              <Link
                aria-current={
                  pathName === "/theory/right-of-way" ? "page" : undefined
                }
                href="/theory/right-of-way"
                className={
                  pathName === "/theory/right-of-way" ? styles.active_topic : ""
                }
              >
                {" "}
                Right of way
              </Link>
            </li>
            <li>
              <Link
                aria-current={
                  pathName === "/theory/road-signs" ? "page" : undefined
                }
                href="/theory/road-signs"
                className={
                  pathName === "/theory/road-signs" ? styles.active_topic : ""
                }
              >
                {" "}
                Road signs/Level crossing
              </Link>
            </li>
            <li>
              <Link
                aria-current={
                  pathName === "/theory/different-road-users"
                    ? "page"
                    : undefined
                }
                href="/theory/different-road-users"
                className={
                  pathName === "/theory/different-road-users"
                    ? styles.active_topic
                    : ""
                }
              >
                {" "}
                Different road users
              </Link>
            </li>
            <li>
              <Link
                aria-current={
                  pathName === "/theory/driving-manoeuvres" ? "page" : undefined
                }
                href="/theory/driving-manoeuvres"
                className={
                  pathName === "/theory/driving-manoeuvres"
                    ? styles.active_topic
                    : ""
                }
              >
                {" "}
                Driving manoeuvres
              </Link>
            </li>
            <li>
              <Link
                aria-current={
                  pathName === "/theory/parked-vehicles-securing-towing"
                    ? "page"
                    : undefined
                }
                href="/theory/parked-vehicles-securing-towing"
                className={
                  pathName === "/theory/parked-vehicles-securing-towing"
                    ? styles.active_topic
                    : ""
                }
              >
                {" "}
                Parked vehicles/ Securing & Towing
              </Link>
            </li>
            <li>
              <Link
                aria-current={
                  pathName === "/theory/special-situations" ? "page" : undefined
                }
                href="/theory/special-situations"
                className={
                  pathName === "/theory/special-situations"
                    ? styles.active_topic
                    : ""
                }
              >
                {" "}
                Special situations / traffic regulations{" "}
              </Link>
            </li>
            <li>
              <Link
                aria-current={
                  pathName === "/theory/after-the-driving-test"
                    ? "page"
                    : undefined
                }
                href="/theory/after-the-driving-test"
                className={
                  pathName === "/theory/after-the-driving-test"
                    ? styles.active_topic
                    : ""
                }
              >
                {" "}
                After the driving test
              </Link>
            </li>
            <li>
              <Link
                aria-current={
                  pathName === "/theory/technical-conditions-and-transport"
                    ? "page"
                    : undefined
                }
                href="/theory/technical-conditions-and-transport"
                className={
                  pathName === "/theory/technical-conditions-and-transport"
                    ? styles.active_topic
                    : ""
                }
              >
                {" "}
                Technical conditions/Passenger and goods transport
              </Link>
            </li>
            <li>
              <Link
                aria-current={
                  pathName === "/theory/good-use-of-vehicles"
                    ? "page"
                    : undefined
                }
                href="/theory/good-use-of-vehicles"
                className={
                  pathName === "/theory/good-use-of-vehicles"
                    ? styles.active_topic
                    : ""
                }
              >
                {" "}
                Good use of vehicles{" "}
              </Link>
            </li>
          </ul>
        </nav>
      </aside>
    </div>
  );
}
