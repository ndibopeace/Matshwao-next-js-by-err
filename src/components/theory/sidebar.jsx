import "./sidebar.css";
import { Link } from "react-router-dom";

export default function Aside() {
  return (
    <>
      
      <aside className="side-container">
                <h2>Lessons</h2>
                <div><Link to='personal-requirements'>Personal requirements</Link></div>
                <div><Link to='driver-personality'>Driver personality</Link></div>
                <div><Link to='statutory-regulations'>Statutory regulations</Link></div>
                <div><Link to='traffic-routes'>Traffic routes</Link></div>
                <div><Link to='speed-distance-and-warning-signals'>Speed, distance and warning signals</Link></div>
                <div><Link to='right-of-way'>Right of way</Link></div>
                <div><Link to='road-signs'>Road signs/Level crossing</Link></div>
                <div><Link to='different-road-users'>Different road users</Link></div>
                <div><Link to='driving-manoeuvres'>Driving manoeuvres</Link></div>
                <div><Link to='parked-vehicles-securing-towing'>Parked vehicles/ Securing & Towing</Link></div>
                <div><Link to='special-situations/traffic-regulation'>Special situations / traffic regulations </Link></div>
                <div><Link to='after-the-driving-test'>After the driving test</Link></div>
                <div><Link to='technical-conditions-and-transport'>Technical conditions/Passenger and goods transport</Link></div>
                <div><Link to='good-use-of-vehicles'>Using motor vehicles in an environmentall sensitive manner </Link></div>
      </aside>
    </>
  );
}
 