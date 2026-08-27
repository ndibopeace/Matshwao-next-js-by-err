import styles from'./curriculum.module.css'
import Link from 'next/link'

export const metadata = {
    title: 'Curriculum',
    description:
  "Browse free Botswana driving theory lessons, including road signs, traffic rules, safe driving, and vehicle knowledge.",
}

export default function Curriculum() {

    return (
        <div className={styles.main_container}>
            {/* <title>Topics</title> */}
            <h1 id= {styles.curriculum_heading} >Curriculum </h1>
            <ul className={ styles.curriculum_container} >
                <li><Link href='/theory/personal-requirements'>Personal requirements: fitness to drive</Link></li>
                <li><Link href='/theory/driver-personality'>Driver personality (reaction to risks)</Link></li>
                <li><Link href='/theory/statutory-regulations'>Statutory regulations</Link></li>
                <li><Link href='/theory/traffic-routes'>Traffic routes: use, risks and importance</Link></li>
                <li><Link href='/theory/speed-distance-and-warning-signals'>Speed, distance and warning signals</Link></li>
                <li><Link href='/theory/right-of-way'>Right of way</Link></li>
                <li><Link href='/theory/road-signs'>Road signs</Link></li>
                <li><Link href='/theory/different-road-users'>Different road users</Link></li>
                <li><Link href='/theory/driving-manoeuvres'>Driving manoeuvres</Link></li>
                <li><Link href='/theory/parked-vehicles-securing-towing'>Parked vehicles/Getting in and out of the vehicle/ Securing the vehicle / Towing</Link></li>
                <li><Link href='/theory/special-situations'>Behaviour in special situations / Consequences of infringements of traffic regulations </Link></li>
                <li><Link href='/theory/after-the-driving-test'>After the driving test</Link></li>
                <li><Link href='/theory/technical-conditions-and-transport'>Technical conditions/Passenger and goods transport</Link></li>
                <li><Link href='/theory/good-use-of-vehicles'>Using motor vehicles in an environmentally sensitive manner/Driving with single motor vehicles and combinations of vehicles </Link></li>
            </ul>
            
        </div>
    )
}