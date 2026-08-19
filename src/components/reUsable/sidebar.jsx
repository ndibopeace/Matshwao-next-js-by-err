"use client"

import styles from "@components/reUsable/styles/sidebar.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";

export default function Aside() {

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen)
  }



  const pathName = usePathname() //gets the current url
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  console.log(isMenuOpen)


  return (
    <div>
      {/* <MdKeyboardArrowRight /> */}
      <button onClick={toggleMenu} className={`${styles.menu} ` }>
        <MdKeyboardArrowRight 
          size={20} 
          className={`${styles.menu_icon} ${isMenuOpen ? styles.menu_btn_open : '' }` }
        />
        lessons
      </button>
      
      <aside className={`${styles.side_container_desktop} ${isMenuOpen ? styles.side_container_mobile : ''}`}>

        <h2>Lessons</h2>

        <nav>
          <ul>
                <li><Link href='/theory/personal-requirements'              className= {pathName === "/theory/personal-requirements" ? styles.active_topic : ""} > Personal requirements</Link></li>
                <li><Link href='/theory/driver-personality'                 className= {pathName === "/theory/driver-personality" ? styles.active_topic : ""}> Driver personality</Link></li>
                <li><Link href='/theory/statutory-regulations'              className= {pathName === "/theory/statutory-regulations" ? styles.active_topic : ""}> Statutory regulations</Link></li>
                <li><Link href='/theory/traffic-routes'                     className= {pathName === "/theory/traffic-routes" ? styles.active_topic : ""}> Traffic routes</Link></li>
                <li><Link href='/theory/speed-distance-and-warning-signals' className= {pathName === "/theory/speed-distance-and-warning-signals" ? styles.active_topic : ""}> Speed, distance and warning signals</Link></li>
                <li><Link href='/theory/right-of-way'                       className= {pathName === "/theory/right-of-way" ? styles.active_topic : ""}> Right of way</Link></li>
                <li><Link href='/theory/road-signs'                         className= {pathName === "/theory/road-signs" ? styles.active_topic : ""}> Road signs/Level crossing</Link></li>
                <li><Link href='/theory/different-road-users'               className= {pathName === "/theory/different-road-users" ? styles.active_topic : ""}> Different road users</Link></li>
                <li><Link href='/theory/driving-manoeuvres'                 className= {pathName === "/theory/driving-manoeuvres" ? styles.active_topic : ""}> Driving manoeuvres</Link></li>                
                <li><Link href='/theory/parked-vehicles-securing-towing'    className= {pathName === "/theory/parked-vehicles-securing-towing" ? styles.active_topic : ""}> Parked vehicles/ Securing & Towing</Link></li>
                <li><Link href='/theory/special-situations'                 className= {pathName === "/theory/special-situations" ? styles.active_topic : ""}> Special situations / traffic regulations </Link></li>
                <li><Link href='/theory/after-the-driving-test'             className= {pathName === "/theory/after-the-driving-test" ? styles.active_topic : ""}> After the driving test</Link></li>
                <li><Link href='/theory/technical-conditions-and-transport' className= {pathName === "/theory/technical-conditions-and-transport" ? styles.active_topic : ""}> Technical conditions/Passenger and goods transport</Link></li>
                <li><Link href='/theory/good-use-of-vehicles'               className= {pathName === "/theory/good-use-of-vehicles" ? styles.active_topic : ""}> Good use of vehicles </Link></li>
          </ul>
        </nav>

      </aside>
    </div>
  );
}
 