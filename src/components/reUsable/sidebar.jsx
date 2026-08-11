"use client"

import "@components/theory/sidebar.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Aside() {

  const pathName = usePathname()


  return (
    <>
      
      <aside className="side-container">

        <h2>Lessons</h2>

        <nav>
          <ul>
            


                <li><Link href='/theory/personal-requirements'              className= {pathName === "/theory/personal-requirements" ? "active-topic" : ""} > Personal requirements</Link></li>
                <li><Link href='/theory/driver-personality'                 className= {pathName === "/theory/driver-personality" ? "active-topic" : ""}> Driver personality</Link></li>
                <li><Link href='/theory/statutory-regulations'              className= {pathName === "/theory/statutory-regulations" ? "active-topic" : ""}> Statutory regulations</Link></li>
                <li><Link href='/theory/traffic-routes'                     className= {pathName === "/theory/traffic-routes" ? "active-topic" : ""}> Traffic routes</Link></li>
                <li><Link href='/theory/speed-distance-and-warning-signals' className= {pathName === "/theory/speed-distance-and-warning-signals" ? "active-topic" : ""}> Speed, distance and warning signals</Link></li>
                <li><Link href='/theory/right-of-way'                       className= {pathName === "/theory/right-of-way" ? "active-topic" : ""}> Right of way</Link></li>
                <li><Link href='/theory/road-signs'                         className= {pathName === "/theory/road-signs" ? "active-topic" : ""}> Road signs/Level crossing</Link></li>
                <li><Link href='/theory/different-road-users'               className= {pathName === "/theory/different-road-users" ? "active-topic" : ""}> Different road users</Link></li>
                <li><Link href='/theory/driving-manoeuvres'                 className= {pathName === "/theory/driving-manoeuvres" ? "active-topic" : ""}> Driving manoeuvres</Link></li>                
                <li><Link href='/theory/parked-vehicles-securing-towing'    className= {pathName === "/theory/parked-vehicles-securing-towing" ? "active-topic" : ""}> Parked vehicles/ Securing & Towing</Link></li>
                <li><Link href='/theory/special-situations'                 className= {pathName === "/theory/special-situations" ? "active-topic" : ""}> Special situations / traffic regulations </Link></li>
                <li><Link href='/theory/after-the-driving-test'             className= {pathName === "/theory/after-the-driving-test" ? "active-topic" : ""}> After the driving test</Link></li>
                <li><Link href='/theory/technical-conditions-and-transport' className= {pathName === "/theory/technical-conditions-and-transport" ? "active-topic" : ""}> Technical conditions/Passenger and goods transport</Link></li>
                <li><Link href='/theory/good-use-of-vehicles'               className= {pathName === "/theory/good-use-of-vehicles" ? "active-topic" : ""}> Using motor vehicles in an environmentall sensitive manner </Link></li>






          </ul>
        </nav>


                
                {/* <div><Link href='/theory/personal-requirements'              className= {pathName === "/theory/personal-requirements" ? "active-topic" : ""} > Personal requirements</Link></div>
                <div><Link href='/theory/driver-personality'                 className= {pathName === "/theory/driver-personality" ? "active-topic" : ""}> Driver personality</Link></div>
                <div><Link href='/theory/statutory-regulations'              className= {pathName === "/theory/statutory-regulations" ? "active-topic" : ""}> Statutory regulations</Link></div>
                <div><Link href='/theory/traffic-routes'                     className= {pathName === "/theory/traffic-routes" ? "active-topic" : ""}> Traffic routes</Link></div>
                <div><Link href='/theory/speed-distance-and-warning-signals' className= {pathName === "/theory/speed-distance-and-warning-signals" ? "active-topic" : ""}> Speed, distance and warning signals</Link></div>
                <div><Link href='/theory/right-of-way'                       className= {pathName === "/theory/right-of-way" ? "active-topic" : ""}> Right of way</Link></div>
                <div><Link href='/theory/road-signs'                         className= {pathName === "/theory/road-signs" ? "active-topic" : ""}> Road signs/Level crossing</Link></div>
                <div><Link href='/theory/different-road-users'               className= {pathName === "/theory/different-road-users" ? "active-topic" : ""}> Different road users</Link></div>
                <div><Link href='/theory/driving-manoeuvres'                 className= {pathName === "/theory/driving-manoeuvres" ? "active-topic" : ""}> Driving manoeuvres</Link></div>                
                <div><Link href='/theory/parked-vehicles-securing-towing'    className= {pathName === "/theory/parked-vehicles-securing-towing" ? "active-topic" : ""}> Parked vehicles/ Securing & Towing</Link></div>
                <div><Link href='/theory/special-situations'                 className= {pathName === "/theory/special-situations" ? "active-topic" : ""}> Special situations / traffic regulations </Link></div>
                <div><Link href='/theory/after-the-driving-test'             className= {pathName === "/theory/after-the-driving-test" ? "active-topic" : ""}> After the driving test</Link></div>
                <div><Link href='/theory/technical-conditions-and-transport' className= {pathName === "/theory/technical-conditions-and-transport" ? "active-topic" : ""}> Technical conditions/Passenger and goods transport</Link></div>
                <div><Link href='/theory/good-use-of-vehicles'               className= {pathName === "/theory/good-use-of-vehicles" ? "active-topic" : ""}> Using motor vehicles in an environmentall sensitive manner </Link></div> */}
      </aside>
    </>
  );
}
 