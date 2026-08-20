import styles from'./curriculum.module.css'
import Link from 'next/link'

export default function Curriculum() {

    return (
        <div className={styles.main_container}>
            {/* <title>Topics</title> */}
            <h1 id= {styles.curriculum_heading} >Curriculum: </h1>
            <div className={ styles.curriculum_container} >
                <div><Link href='/theory/personal-requirements'>Personal requirements: fitness to drive</Link></div>
                <div><Link href='#'>Driver personality(reaction to risks)</Link></div>
                <div><Link href='#'>Statutory regulations</Link></div>
                <div><Link href='#'>Traffic routes: use, risks and importance</Link></div>
                <div><Link href='#'>Speed, distance and warning signals</Link></div>
                <div><Link href='#'>Right of way</Link></div>
                <div><Link href='#'>Road signs</Link></div>
                <div><Link href='#'>Different road users</Link></div>
                <div><Link href='#'>Driving manoeuvres</Link></div>
                <div><Link href='#'>Parked vehicles/Getting in and out of the vehicle/ Securing the vehicle / Towing</Link></div>
                <div><Link href='#'>Behaviour in special situations / Consequences of infringements of traffic regulations </Link></div>
                <div><Link href='#'>After the driving test</Link></div>
                <div><Link href='#'>Technical conditions/Passenger and goods transport</Link></div>
                <div><Link href='#'>Using motor vehicles in an environmentall sensitive manner/Driving with single motor vehicles and combinations of vehicles </Link></div>
            </div>
            
        </div>
    )
}