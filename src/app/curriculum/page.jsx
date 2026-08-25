import styles from'./curriculum.module.css'
import Link from 'next/link'

export default function Curriculum() {

    return (
        <div className={styles.main_container}>
            {/* <title>Topics</title> */}
            <h1 id= {styles.curriculum_heading} >Curriculum: </h1>
            <div className={ styles.curriculum_container} >
                <div><Link href='/theory/personal-requirements'>Personal requirements: fitness to drive</Link></div>
                <div><Link href='/theory/driver-personality'>Driver personality(reaction to risks)</Link></div>
                <div><Link href='/theory/statutory-regulations'>Statutory regulations</Link></div>
                <div><Link href='/theory/traffic-routes'>Traffic routes: use, risks and importance</Link></div>
                <div><Link href='/theory/speed-distance-and-warning-signals'>Speed, distance and warning signals</Link></div>
                <div><Link href='/theory/right-of-way'>Right of way</Link></div>
                <div><Link href='/theory/road-signs'>Road signs</Link></div>
                <div><Link href='/theory/different-road-users'>Different road users</Link></div>
                <div><Link href='/theory/driving-manoeuvres'>Driving manoeuvres</Link></div>
                <div><Link href='/theory/parked-vehicles-securing-towing'>Parked vehicles/Getting in and out of the vehicle/ Securing the vehicle / Towing</Link></div>
                <div><Link href='/theory/special-situations'>Behaviour in special situations / Consequences of infringements of traffic regulations </Link></div>
                <div><Link href='/theory/after-the-driving-test'>After the driving test</Link></div>
                <div><Link href='/theory/technical-conditions-and-transport'>Technical conditions/Passenger and goods transport</Link></div>
                <div><Link href='/theory/good-use-of-vehicles'>Using motor vehicles in an environmentall sensitive manner/Driving with single motor vehicles and combinations of vehicles </Link></div>
            </div>
            
        </div>
    )
}