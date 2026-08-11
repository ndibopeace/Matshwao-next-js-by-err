import pass2 from "@assets/resultsScreen/pass2.jpeg";
import fail2 from "@assets/resultsScreen/fail2.jpeg";
import "./result_message.css";
import Image from "next/image";

//------------------------------------------------------------------------------------>
// import { lesson12Notes } from "../theory/data/data";

// const distractors = []

// let newArr = lesson12Notes.map(({ question, answers, image }, i) => {
//   console.log(i)

//   return {
//     question,
//     ...(image && { image }),
//     answers: answers.map((answer) => {
//       return answer.text;
//     }),
//     wrongChoices: distractors[i].wrongChoices,   
//   };
// });

// console.log(lesson12Notes, distractors);
// console.log(newArr);

//------------------------------------------------------------------------------------>

// let confirm = 

//------------------------------------------------------------------------------------>

export default function ResultMessage({
  score,
  shuffled,
  setShowResultScreen,
}) {
  console.log(score);
  const percentage = (score / shuffled.length) * 100;

  let hasPassed;

  if (score > 26 || percentage > 86.6) {
    hasPassed = true;
  } else {
    hasPassed = false;
  }

  function showReview() {
    setShowResultScreen(false);
  }

  return (
    <div className="overlay">
      <div className="modal">
        <Image src={hasPassed ? pass2 : fail2} width="200" alt="" />
        <h3>
          {" "}
          {hasPassed
            ? "Congragulations!! You Passed!"
            : "Ooops!! You failed"}{" "}
        </h3>

        <div className="res">
          <div className={hasPassed ? "status-pass" : "status-fail"}>
            <p> {percentage}%</p>
            <p> {hasPassed ? "Pass" : "Fail"} </p>
          </div>

          <div className={hasPassed ? "status-pass" : "status-fail"}>
            <p>Score: </p>
            <p>{`${score}/ ${shuffled.length}`}</p>
          </div>

          <div className={hasPassed ? "status-pass" : "status-fail"}>
            <p>Time Taken: </p>
            <p>25mins 59sec</p>
          </div>
        </div>

        <div>
          <button onClick={showReview} className="review-btn">
            Review
          </button>
        </div>
      </div>
    </div>
  );
}

// correct notes. Final
/*
let lesson1Notes = [
  {
    id: 1,
    question: "What can be the cause for veering off the roadway?",
    answers: ["Excessive speed", "Inattentiveness, distraction", "Fatigue"],
    wrongChoices: [
      "Driving too slowly",
      "Proper lane discipline",
      "Using mirrors correctly",
      "Adequate following distance",
      "Clear road markings",
    ],
  },
  {
    id: 2,
    question:
      "What must you do if you notice signs of fatigue when driving on open stretches of road at night (heavy eyelids, feeling chilly, sudden frights, etc.)?",
    answers: ["Interrupt your journey for an adequate break"],
    wrongChoices: [
      "Drink plenty of water",
      "Turn up the radio to stay alert",
      "Open the windows for fresh air",
      "Drive faster to reach destination sooner",
      "Talk on the phone to stay awake",
    ],
  },
  {
    id: 3,
    question: "How can fatigue be prevented on a long journey?",
    answers: [
      "By well-timed and sufficient stops for rests",
      "Gymnastic exercises during stops",
    ],
    wrongChoices: [
      "By driving at maximum speed to finish sooner",
      "By avoiding eating during the journey",
      "By drinking energy drinks continuously",
      "By keeping the windows closed",
      "By driving with loud music",
    ],
  },
  {
    id: 4,
    question: "What can diminish alertness in road traffic?",
    answers: [
      "Strong emotions (e.g. delight, annoyance, impatience)",
      "Animated conversation",
      "Engrossing programs on the car radio",
    ],
    wrongChoices: [
      "High visibility conditions",
      "Driving on familiar roads",
      "Calm and stable emotions",
      "Complete silence in the car",
      "Driving during daytime",
    ],
  },
  {
    id: 5,
    question: "What strongly distracts you while you are driving?",
    answers: [
      "Telephoning",
      "Lighting a cigarette",
      "Nagging children on the backseats",
    ],
    wrongChoices: [
      "Checking mirrors",
      "Adjusting the seat",
      "Listening to calm music",
      "Checking the speedometer",
      "Observing road signs",
    ],
  },
  {
    id: 6,
    question: "What can prevent you from hearing warning signals?",
    answers: [
      "Having the radio on too loud",
      "Using headphones",
      "The exhaust being too loud",
    ],
    wrongChoices: [
      "Driving with windows down",
      "Driving at high speed",
      "Having a conversation with passengers",
      "Using the air conditioning",
      "Wearing a seatbelt",
    ],
  },
  {
    id: 7,
    question: 'What does "power sound" in the car result in?',
    answers: [
      "Signals from other traffic - in particular sirens - are not heard",
      "There is noise pollution for others even when the windows are closed",
      "Driving errors due to the driver being diverted",
    ],
    wrongChoices: [
      "It improves fuel efficiency",
      "It helps the driver concentrate better",
      "It keeps passengers calm",
      "It reduces engine wear",
      "It improves the car's performance",
    ],
  },
  {
    id: 8,
    question:
      "A motorist has drunk too much alcohol and for this reason must not drive. How can his fitness to drive not be restored in a short time?",
    answers: [
      "By sleeping for half an hour",
      "By drinking two cups of strong coffee",
      "By going for a half hour's walk",
    ],
    wrongChoices: [
      "waiting sufficient time for the alcohol to clear",
      "Getting a full night sleep",
      "Allowing the body enough time to metabolise the alcohol",
    ],
  },
  {
    id: 9,
    question:
      "Can a motorist's fitness to drive be impaired by even relatively small quantities of alcohol?",
    answers: [
      "Yes, even small quantities of alcohol can impair fitness to drive",
    ],
    wrongChoices: [
      "No, only large quantities of alcohol impair driving",
      "No, alcohol only affects pedestrians",
      "No, experienced drivers are unaffected",
      "Sometimes alcohol improves reaction time",
      "Only illegal substances impair driving",
    ],
  },
  {
    id: 10,
    question:
      "Which substances can impair fitness to drive in a similar way to alcohol?",
    answers: ["Certain medicines and intoxicants"],
    wrongChoices: [
      "Caffeinated drinks",
      "Vitamin supplements",
      "Herbal teas",
      "Fruit juice",
      "Energy bars",
    ],
  },
  {
    id: 11,
    question: "What can impair fitness to drive?",
    answers: ["Fatigue", "Alcohol and other intoxicants", "Certain medicines"],
    wrongChoices: [
      "Drinking water",
      "Listening to music",
      "Driving on familiar roads",
      "Having a full tank of fuel",
      "Not wearing sunglasses on a sunny day",
    ],
  },
  {
    id: 12,
    question:
      "Above which alcohol level in your blood can you expect your fitness to drive to be impaired?",
    answers: ["0.3 per mille (30 mg/100 ml)"],
    wrongChoices: [
      "1.0 per mille (100 mg/100 ml)",
      "0.8 per mille (80 mg/100 ml)",
      "0.5 per mille (50 mg/100 ml)",
      "2.0 per mille (200 mg/100 ml)",
    ],
  },
  {
    id: 13,
    question:
      "In general, how long does it take before an alcohol level of 1.0 per mille (100 mg/100 ml) is cleared from the blood stream?",
    answers: ["10 hours"],
    wrongChoices: ["2 hours", "4 hours", "6 hours", "24 hours", "30 minutes"],
  },
  {
    id: 14,
    question: "What can increase the intoxicating effect of alcohol?",
    answers: [
      "Sleeping pills, pain killers or sedatives",
      'Drinking on an "empty" stomach',
      "Downing alcoholic drinks in one",
    ],
    wrongChoices: [
      "Drinking a lot of water before alcohol",
      "Eating a large meal before drinking",
      "Drinking slowly over a long period",
      "Mixing alcohol with fruit juice",
      "none of the answers",
    ],
  },
  {
    id: 15,
    question: "What can be the effects of even small quantities of alcohol?",
    answers: [
      "Delayed reactions",
      "Reckless driving",
      "Impairment of hearing and vision",
    ],
    wrongChoices: [
      "Improved night vision",
      "Faster reaction times",
      "Better lane discipline",
      "Increased concentration",
      "Improved decision making",
    ],
  },
  {
    id: 16,
    question: "What effects can drugs have?",
    answers: ["Intoxication", "Dependence, addiction"],
    wrongChoices: [
      "Improved concentration",
      "Enhanced driving ability",
      "Better reaction time",
      "Increased awareness",
      "Improved vision",
    ],
  },
  {
    id: 17,
    question:
      "Which drugs can make a person temporarily unfit to drive even when consumed on a single occasion?",
    answers: [
      "Hashish, marijuana",
      "Heroin, cocaine, amphetamines",
      "LSD, dagga",
    ],
    wrongChoices: [
      "Aspirin and ibuprofen",
      "Vitamin C supplements",
      "Antacids and digestive tablets",
      "Caffeine tablets",
      "Antihistamines taken in low doses",
    ],
  },
  {
    id: 18,
    question:
      "How long can hashish and its catabolites (decomposition products) be detected in urine?",
    answers: ["Weeks later"],
    wrongChoices: [
      "A few minutes",
      "A few hours",
      "24 hours",
      "2 days",
      "3 days",
    ],
  },
  {
    id: 19,
    question: "Which of the following are unfit to drive motor vehicles?",
    answers: [
      "Persons who regularly take drugs (e.g. hashish, heroin, cocaine), even if they are not unfit to drive at the time of the journey",
      "Persons who smoke a single hashish cigarette per day",
    ],
    wrongChoices: [
      "Persons who only drinks water",
      "Persons who have taken painkillers once",
      "Persons who drive at midnight",
      "Persons who consumed carbonated drinks",
      "Persons who ate too much before driving",
    ],
  },
  {
    id: 20,
    question:
      "May a person who has just smoked a hashish cigarette drive a motor vehicle?",
    answers: ["No, because he/she could be unfit to drive"],
    wrongChoices: [
      "Yes, as long as he/she feels fine",
      "Yes, if the cigarette was smoked more than an hour ago",
      "Yes, if it is a short distance",
      "Yes, if he/she has driven under such conditions before and has self trust",
      "Yes, only at night when roads are empty",
    ],
  },
  {
    id: 21,
    question:
      "When is a drug-dependent person fit to drive a motor vehicle again?",
    answers: [
      "After presenting a proof that he/she has not taken any drugs for a whole year and there is no likelihood of a relapse",
    ],
    wrongChoices: [
      "After a 30-day detox program",
      "After a doctor certifies them as healthy",
      "Immediately after stopping drug use",
      "After completing a driving refresher course",
      "After six months of sobriety",
    ],
  },
  {
    id: 22,
    question:
      "How is the intoxicating substance in hashish broken down by the body?",
    answers: ["Unevenly over an indeterminate period"],
    wrongChoices: [
      "Quickly and predictably within a fixed timeframe",
      "At a rate of 0.1 per mille per hour like alcohol",
      "Instantly once the person sleeps",
      "Within 2 hours regardless of quantity consumed",
      "Evenly over a fixed 8-hour period",
    ],
  },
  {
    id: 23,
    question:
      "Why are drugs (e.g. hashish, heroin, cocaine) still dangerous even if they are just taken on a single occasion?",
    answers: [
      "They can cause the person to be unfit to drive",
      "They can produce intoxication lasting several hours",
    ],
    wrongChoices: [
      "They can produce intoxication lasting a few minutes",
      "They make you alert",
      "They cause immediate unconsciousness",
      "They are not dangerous if taken occasionally",
      "They have no effect on experienced users",
    ],
  },
  {
    id: 24,
    question:
      "What are the consequences for a person driving a motor vehicle under the influence of drugs (e.g. hashish, heroin, cocaine)?",
    answers: [
      "Confiscation of driving license or driving ban",
      "Fine and/or imprisonment",
      "Compulsory medical/psychological examination",
    ],
    wrongChoices: [
      "Verbal warning from a traffic officer",
      "Mandatory community service only",
      "First offence can be forgiven",
      "Only repeat offenders face consequences",
      "Mandatory attendance of a driving awareness course only",
    ],
  },
  {
    id: 25,
    question: "What are the possible effects of hashish consumption?",
    answers: [
      "Intoxication with dangerous hallucination and reduced reaction capability",
      "Intoxication with confusion and depression",
    ],
    wrongChoices: [
      "Increased alertness and sharper focus",
      "Faster reaction times and better coordination",
      "Improved night vision",
      "Reduced anxiety and calmer driving behavior",
      "Enhanced ability to judge speed and distance",
    ],
  },
  {
    id: 26,
    question: "What are the possible effects of hashish consumption?",
    answers: [
      "Diminished awareness of danger",
      "Increased likelihood of mistakes in assimilating information",
      "Misjudgement of speed and distance",
    ],
    wrongChoices: [
      "Heightened awareness of surrounding traffic",
      "Improved ability to multitask while driving",
      "Better judgement of road conditions",
      "Reduced stopping distance perception",
      "Increased patience in traffic",
    ],
  },
  {
    id: 27,
    question: "What are the possible effects of hashish consumption?",
    answers: ["Impaired attention and concentration"],
    wrongChoices: [
      "Enhanced memory recall while driving",
      "Improved peripheral vision",
      "Better ability to follow complex routes",
      "Increased alertness in low-light conditions",
      "Faster processing of road signs",
    ],
  },
  {
    id: 28,
    question:
      "Immediately before setting off you have felt very angry and you are furious. What is right?",
    answers: ["You should not drive when you are furious"],
    wrongChoices: [
      "You should drive faster to release tension",
      "You should drive immediately to clear your head",
      "You should play loud music to calm down",
      "Anger has no effect on driving ability",
      "You should call someone while driving to vent",
    ],
  },
  {
    id: 29,
    question:
      "What do you think of drivers who travel too fast under pressure of time and do not observe speed regulations?",
    answers: [
      "Pressure of time is no justification for ignoring traffic regulations",
    ],
    wrongChoices: [
      "Pressure of time justifies moderate speeding",
      "Speed regulations can be ignored on empty roads",
      "Faster driving is acceptable when running late for work",
      "Traffic laws are flexible depending on urgency",
      "Pressure of time is only allowed when having hospital emergency",
    ],
  },
  {
    id: 30,
    question:
      "A car with a young driver has stopped next to you at a red traffic light. He is playing with his accelerator and obviously intends to start first and shake you off when the lights change. How do you react?",
    answers: [
      "You ignore the challenge, remain cool and let the other car drive off",
    ],
    wrongChoices: [
      "You rev your engine and accept the challenge",
      "You honk your horn to warn him",
      "You speed up slightly to stay ahead",
      "You flash your headlights at him",
      "You change lanes to get away from him faster",
    ],
  },
];
*/

/*
let lesson2Notes = [
  {
    question: "What makes a good driver?",
    answers: [
      "He treats others like partners, drives calmly and cooly and refrains from showing that he is superior",
    ],
    wrongChoices: [
      "He drives aggressively to show confidence and makes others move aside",
      "He ignores traffic rules when roads are empty to save time",
      "He honks loudly and flashes lights to assert his right of way",
      "He speeds slightly above the limit to keep up with traffic flow",
      "He focuses only on his own driving and doesn’t watch other cars",
    ],
  },
  {
    question:
      "A car travelling behind is urging you along on a country road. The driver is obviously annoyed that you are travelling slightly slower than is permitted. How do you react?",
    answers: [
      "You let him overtake as soon as possible and refrain from paying him back for his jostling behaviour",
    ],
    wrongChoices: [
      "You speed up to match his pace and block him from overtaking",
      "You brake suddenly to teach him a lesson about patience",
      "You gesture angrily and shout to show your frustration",
      "You maintain your speed exactly and refuse to let him pass",
      "You swerve slightly to intimidate him into backing off",
    ],
  },
  {
    question:
      "A faster car overtakes you on a country road and cuts into your lane. How do you react?",
    answers: [
      "You control your annoyance, remain cool and proceed as if you had not noticed this",
    ],
    wrongChoices: [
      "You speed up immediately to close the gap and not let him in",
      "You honk repeatedly and flash your headlights in anger",
      "You swerve toward him to push him back into his lane",
      "You brake hard and tailgate him to express your annoyance",
      "You gesture rudely to show you’re upset about his driving",
    ],
  },
  {
    question:
      "You are overtaking a queue of cars on the Highway. A car approaching very fast is pushing you. The driver flashes his headlights and sounds his horn to show that you should clear his way. What do you do?",
    answers: [
      "When you are driving fast enough to overtake, you continue at a brisk pace and back into the lane on the left after overtaking.",
      "If there is a bigger space in the queue which makes getting back into the left-hand lane possible without danger, you let the jostling driver pass",
    ],
    wrongChoices: [
      "You slow down completely and stop in the overtaking lane",
      "You ignore him and continue overtaking at the same slow speed",
      "You brake suddenly to force him to change lanes",
      "You flash your lights back and refuse to yield until he stops",
      "You speed up excessively to finish overtaking before he catches you",
    ],
  },
  {
    question: "What should you understand by defensive driving?",
    answers: [
      "Not insisting on your rights",
      "Allowing for other people's mistakes",
    ],
    wrongChoices: [
      "Always demanding your right of way no matter the situation",
      "Driving as fast as possible to avoid other cars",
      "Following other cars closely to keep a short distance",
      "Ignoring pedestrians because drivers have priority",
      "Assuming other drivers will always follow the rules perfectly",
    ],
  },
  {
    question: "What can cause unnecessary obstructions?",
    answers: [
      "Stalling the engine in the dense traffic",
      "Vehicles proceeding too slowly for no good reason",
      "Motor vehicles breaking down because they have run out of fuel",
    ],
    wrongChoices: [
      "Driving slightly over the speed limit on highways",
      "Using your phone with hands-free while driving",
      "Keeping a safe following distance from other cars",
      "Signaling clearly before every lane change",
      "Parking properly in designated areas only",
    ],
  },
  {
    question: "What can present a danger in road traffic?",
    answers: ["Worn tyres", "Headlights set too high"],
    wrongChoices: [
      "Using windshield wipers during light rain",
      "Driving with a clean windshield and mirrors",
      "Maintaining proper tire pressure",
      "Using seat belts at all times",
      "Following traffic signals and road signs",
    ],
  },
  {
    question: "What can cause a dangerous traffic situation?",
    answers: [
      "Vehicles which have broken down and not been marked safely in accordance with regulations",
      "Excessive speed",
    ],
    wrongChoices: [
      "Driving at the posted speed limit",
      "Keeping your vehicle well maintained",
      "Using turn signals before turning",
      "Driving with both hands on the wheel",
      "Checking mirrors before changing lanes",
    ],
  },
  {
    question:
      "Participating in road traffic requires caution at all times and consideration towards other road users. What does this mean for you?",
    answers: [
      "You must reckon with improper conduct on the part of others",
      "You must drive with foresight",
    ],
    wrongChoices: [
      "You must always assume other drivers are perfect and alert",
      "You must reckon with proper conduct on the part of others",
      "You should only focus on the car directly in front of you",
      "You don’t need to check blind spots if no one is visible",
      "You can trust that traffic lights will always work correctly",
    ],
  },
  {
    question: "What can cause a dangerous situation?",
    answers: ["Cutting corners", "Dipping your headlights too late"],
    wrongChoices: [
      "looking at the speedometer",
      "Maintaining a sufficient following distance",
      "Stopping completely at all stop signs",
      "Using your mirrors before every turn",
      "Keeping your windshield clean and unobstructed",
    ],
  },
  {
    question: "What can cause a dangerous situation?",
    answers: [
      "Brakes which engage heavily on one side",
      "Too much steering-wheel play",
    ],
    wrongChoices: [
      "Tires with deep tread and good grip",
      "Steering that responds immediately to input",
      "Brakes that engage smoothly and evenly",
      "Properly aligned wheels and suspension",
      "Clear, uncracked windshield glass",
    ],
  },
];
*/

/*
let lesson3Notes = [
  {
    question: "Which documents must you carry as a driver?",
    answers: ["Driving licence", "Vehicle registration certificate"],
    wrongChoices: [
      "Vehicle insurance card only",
      "Your birth certificate",
      "The car’s purchase invoice",
      "Your driver’s photo permit",
      "A handwritten note from the previous owner",
    ],
  },
  {
    question:
      "In which cases must you notify the change of location of a vehicle to the district of another registration centre?",
    answers: ["When the change of location is permanent"],
    wrongChoices: [
      "Only when you sell the vehicle",
      "Every time you park in a new city",
      "When the change of location is temporary",
      "Once every 5 years regardless of location",
      "Only if you drive more than 100km from home",
    ],
  },
  {
    question:
      "You have sold your vehicle which is still registered. The buyer has paid. What must you do?",
    answers: [
      "Inform the registration centre immediately of the buyer's name and address",
      "Hand over the vehicle registration certificate and vehicle registration book or permit for use to the buyer against receipt",
    ],
    wrongChoices: [
      "Keep the registration papers yourself for 6 months",
      "Wait for the buyer to contact the registration centre",
      "Destroy the vehicle registration certificate",
      "Transfer the plates to your new car immediately",
      "Do nothing until the next inspection is due",
    ],
  },
  {
    question:
      "What is important with regard to the official registration plates?",
    answers: [
      "They must be securely attached at the appropriate places",
      "They must always be easily legible",
      "The rear registration plate must be lit up in darkness",
    ],
    wrongChoices: [
      "They can be attached with tape if screws are missing",
      "You can swap front and rear plates for symmetry",
      "They may be covered with a clear plastic frame that dims them",
      "You can paint them to match your car color",
      "One plate is enough if the other gets damaged",
    ],
  },
  {
    question:
      "What are you allowed to change on the official registration plate?",
    answers: ["Nothing"],
    wrongChoices: [
      "You can add a decorative border around the plate",
      "You may change the font to make it more stylish",
      "You can reposition the numbers for better visibility",
      "You’re allowed to add your country flag sticker on it",
      "You can replace damaged letters with stickers",
    ],
  },
  {
    question:
      "You have bought a vehicle which is registered. What must you do?",
    answers: [
      "Have it re-registered immediately",
      "Submit proof of insurance to the registration authority",
    ],
    wrongChoices: [
      "Wait until the current registration expires",
      "Use the seller’s insurance for 30 days",
      "Drive with the old plates for up to 1 year",
      "Register it only if you move to another district",
      "No action needed if the car is second-hand",
    ],
  },
  {
    question:
      "How can you tell when you must submit your vehicle for the next official inspection?",
    answers: [
      "By the test stamp",
      "By the entry in the vehicle registration certificate",
    ],
    wrongChoices: [
      "By the color of the registration plate",
      "By the mileage on the odometer",
      "By the date you bought the car",
      "By the service book from the garage",
      "When the engine warning light comes on",
    ],
  },
  {
    question:
      "You have bought a new car. When is it due for its first official inspection?",
    answers: ["After three years"],
    wrongChoices: [
      "Immediately upon purchase",
      "After 6 months",
      "After 1 year",
      "After 5 years",
      "Only when you sell it",
    ],
  },
  {
    question:
      "At which intervals must you submit your car (not a new vehicle, petrol engine, G catalytic converter) for exhaust test?",
    answers: ["Every 2 years"],
    wrongChoices: [
      "Every 6 months",
      "Every 3 years",
      "Every 4 years",
      "Only once when the car is new",
      "Every 5 years",
    ],
  },
  {
    question:
      "At which intervals must you submit your car (not a new vehicle, petrol engine, without catalytic converter) for the exhaust test?",
    answers: ["Every 12 months"],
    wrongChoices: [
      "Every 6 months",
      "Every 2 years",
      "Every 3 years",
      "Every 4 years",
      "Only for new vehicles",
    ],
  },
  {
    question:
      "At which intervals must you submit your car (not a new vehicle) with diesel engine for the exhaust test?",
    answers: ["Every 2 years"],
    wrongChoices: [
      "Every 6 months",
      "Every 12 months",
      "Every 3 years",
      "Every 4 years",
      "Only when selling the vehicle",
    ],
  },
  {
    question:
      "You have bought a second-hand car. The official inspection has just been carried out. When is it due for its next official inspection?",
    answers: ["After two years"],
    wrongChoices: [
      "After 1 year",
      "After 3 years",
      "After 4 years",
      "Immediately, regardless of last test",
      "Only after 5 years",
    ],
  },
  {
    question:
      "You have left your registered caravan trailer for six months on a campground. What applies as far as the official inspection is concerned?",
    answers: [
      "The deadline for submission indicated on the test stamp must be observed.",
    ],
    wrongChoices: [
      "Trailers are exempt from inspection after 3 months parked",
      "You must inspect it again before using it",
      "The inspection deadline is paused while parked",
      "Caravans never need official inspection",
      "Inspection is only needed after 2 years of use",
    ],
  },
  {
    question:
      "What does the hexagonal stamp on the front number plate indicate?",
    answers: ["The date of the next exhaust test"],
    wrongChoices: [
      "The date your vehicle registration expires",
      "The manufacturing date of the car",
      "The date of the next general vehicle inspection",
      "The region code where the car was registered",
      "The maximum speed allowed for that vehicle",
    ],
  },
  {
    question:
      "You had to obtain an expert opinion because of a technical modification to your vehicle. What are you required to do?",
    answers: [
      "The certificate on the opinion must be carried or the vehicle document must be corrected",
    ],
    wrongChoices: [
      "You must remove the modification immediately",
      "No action needed if the car still drives fine",
      "You only need to inform your insurance company",
      "The expert opinion can be kept at home",
      "You must wait for the next inspection to update documents",
    ],
  },
  {
    question:
      "Alterations to your vehicle have resulted in the permit for use being cancelled. What are the consequences?",
    answers: [
      "Fine",
      'Entry in the "traffic offender file" (points)',
      "The insurance cover lapses",
    ],
    wrongChoices: [
      "Warning letter only",
      "Nothing, if the car still passes inspection",
      "Increased insurance premium only",
      "Temporary suspension of your driver’s license",
      "You must repaint the vehicle to original color",
    ],
  },
  {
    question:
      "The suspension of your motor vehicle has been lowered and an expert opinion must be obtained. When is this required?",
    answers: ["Immediately after the alteration"],
    wrongChoices: [
      "Only at the next scheduled inspection",
      "After 1 year of driving with the change",
      "Only if the police notice it",
      "When you sell the vehicle",
      "No expert opinion needed for suspension changes",
    ],
  },
  {
    question:
      "What is required when your vehicle is no longer covered by motor liability insurance?",
    answers: [
      "The vehicle may no longer be used in road traffic",
      "The vehicle must be de-registered at the registration centre",
    ],
    wrongChoices: [
      "You can still drive for 14 days and not more than that",
      "You only need to pay a small fine to keep using the vehicle",
      "The vehicle can be used during daytime only",
      "Insurance is optional if you drive carefully",
      "You must buy new plates but can keep driving",
    ],
  },
];
*/

/*
let lesson4Notes = [
  {
    question:
      "Which motor vehicles must, if possible, use the hard shoulder on country roads?",
    answers: [
      "Farm tractors and working machines driving at low speed",
      "Mopeds and invalid carriages",
    ],
    wrongChoices: [
      "All cars regardless of speed",
      "Motorcycles and scooters only",
      "Buses and trucks on all country roads",
      "Emergency vehicles with sirens on",
      "Any vehicle when it rains",
    ],
  },
  {
    question: "What are you allowed to use the left-hand hard shoulder for?",
    image: {
      src: "/src/assets/lesson4Assets/traffic_routes1.webp",
      alt: "Vehicles driving along a dual carriageway bordered by trees and grass",
    },
    answers: ["Stopping and parking", "Driving with slow vehicles"],
    wrongChoices: [
      "Overtaking slow traffic on highways",
      "Driving normally when the right lane is busy",
      "Turning around using a U-turn",
      "Testing your car’s top speed safely",
      "Changing lanes without signaling",
    ],
  },
  {
    question:
      "You are driving in dense fog on a road outside a built-up area. Are you allowed to drive in the middle of the road continuously straddling the broken white line?",
    answers: ["No, because it could represent a danger to oncoming traffic"],
    wrongChoices: [
      "Yes, because it gives better visibility in fog",
      "Yes, if no cars are coming from behind",
      "Yes, it’s the safest position when visibility is poor",
      "Yes, but only if you drive under 30 km/h",
      "Yes, provided you are sure no one will be endangered",
    ],
  },
  {
    question:
      "You are driving on a road outside a built-up area with three lanes in each direction. Individual vehicles are travelling well spaced out in the left-hand lane. Which lane may you use continuously?",
    answers: ["The middle lane"],
    wrongChoices: [
      "The right-hand lane only",
      "The left-hand lane only",
      "Any lane you prefer equally",
      "You must keep changing lanes every 2 km",
      "The left and middle lanes together",
    ],
  },
  {
    question:
      "Which motor vehicles may freely choose their lane inside built-up areas?",
    answers: [
      "All motor vehicles with a permissible total mass of up to (( 3.5 )) t",
    ],
    wrongChoices: [
      "Trucks over 7.5t",
      "Buses and taxis only",
      "Vehicles with trailers only",
      "All motor vehicles regardless of weight",
      "Motorcycles under 125cc only",
    ],
  },
  {
    question:
      "In which cases are you allowed to drive faster on the left-hand side than on the right-hand side of roads with marked lanes?",
    answers: [
      "When queues of vehicles have formed",
      "When arrows in the individual lanes point in different directions",
    ],
    wrongChoices: [
      "When you are in a hurry",
      "When the right lane has potholes",
      "When it’s raining and visibility is low",
      "When you want to overtake on the right",
      "At night when traffic is light",
    ],
  },
  {
    question:
      "What leads frequently to serious accidents when overtaking on Highways?",
    answers: [
      "Not keeping a close enough eye on the traffic situation behind",
      "Driving too close to the vehicle in front",
    ],
    wrongChoices: [
      "Using cruise control at constant speed",
      "Driving exactly at the speed limit",
      "Overtaking only on the right side",
      "Keeping windows closed to reduce noise",
      "Using high beams during daytime",
    ],
  },
  {
    question:
      "Are you allowed to overtake the black car on this Highways on the left?",
    image: {
      src: "/src/assets/lesson4Assets/traffic_routes2.webp",
      alt: "Driver's view of multi-lane highway with black car in right lane and traffic ahead",
    },
    answers: ["No, because there is no queue of vehicles in the right lane"],
    wrongChoices: [
      "Yes, if you signal clearly",
      "Yes, because the left lane is for overtaking",
      "Yes, if the black car is driving slowly",
      "Yes, but only during daytime",
      "if you honk to warn the other driver, you can overtake",
    ],
  },
  {
    question: "What must you reckon with on this Highway car park?",
    image: {
      src: "/src/assets/lesson4Assets/traffic_routes3.webp",
      alt: "cars parked on the side on a wet road",
    },
    answers: [
      "People suddenly stepping onto the roadway",
      "Danger of skidding when you brake",
    ],
    wrongChoices: [
      "Oil spills from trucks ahead",
      "Animals crossing the road suddenly",
      "Strong crosswinds from the side",
      "Road works starting without warning",
      "Toll booths appearing unexpectedly",
    ],
  },
  {
    question:
      "After a long journey at about 120 km/h, you want to leave the Highway. What must you remember?",
    answers: [
      "Indicate in good time and reduce speed on the exit lane",
      "Check the speedometer to ensure that you do not underestimate your speed",
    ],
    wrongChoices: [
      "Maintain 120 km/h until the exit line",
      "Brake hard immediately on the main lane",
      "Switch off hazard lights to save battery",
      "Change to the right lane at the last second",
      "only indicate if there are cars behind",
    ],
  },
  {
    question:
      "You are approaching the vehicles in the picture. What do you do?",
    image: {
      src: "/src/assets/lesson4Assets/traffic_routes5.webp",
      alt: "multi-lane high way with cars on both left and right side",
    },
    answers: [
      "Stay in the middle lane, reduce speed and do not overtake the cars",
    ],
    wrongChoices: [
      "Speed up to pass them before the bend",
      "Move to the left lane and overtake quickly",
      "Flash lights to make them move faster",
      "Follow closely to save fuel",
      "You can overtake the cars before the sign infront",
    ],
  },
  {
    question:
      "You are driving at least 20 km/h faster than the truck. What is correct?",
    image: {
      src: "/src/assets/lesson4Assets/traffic_routes4.webp",
      alt: "Highway view from inside a vehicle with green truck on the right and overpass ahead",
    },
    answers: ["Overtake the truck on the left and join the Highway"],
    wrongChoices: [
      "Overtake the truck on the right shoulder",
      "Wait behind the truck until traffic clears",
      "Flash lights and force the truck to move over",
      "Stop in the acceleration lane until it’s empty",
      "Reverse back to the previous exit",
    ],
  },
  {
    question:
      "You want to leave the Highway. The next exit has an exit lane. What must you do?",
    answers: [
      "Use the left-hand lane early enough and indicate in good time",
      "Reduce and check speed in the exit lane",
    ],
    wrongChoices: [
      "Stop on the main lane before the exit",
      "Switch lanes at the last moment without signaling",
      "Accelerate on the exit lane to leave faster",
      "Stay in the right lane and reverse if you miss it",
      "Stay on the main lane, drive calmly and switch to left lane in last moments to exit safely",
    ],
  },
  {
    question: "What must you do here?",
    image: {
      src: "/src/assets/lesson4Assets/traffic_routes6.webp",
      alt: "Driver's view of curved highway with truck and motorcycle ahead and chevron road markings",
    },
    answers: ["Check your speed again and, if necessary, brake"],
    wrongChoices: [
      "Accelerate quickly to pass the bend without endagering any cars",
      "Move closer to the chevrons for better view",
      "Switch to high beams immediately",
      "No need to break if the view is clear of cars",
    ],
  },
  {
    question: "What must you reckon with here?",
    image: {
      src: "/src/assets/lesson4Assets/traffic_routes7.webp",
      alt: "A car approaching a steep bend with no clear view",
    },
    answers: ["A traffic jam on the bend", "The bend will narrow"],
    wrongChoices: [
      "nothing if the road is clear",
      "A speed camera hidden behind the bend",
      "The road will widen into 2 lanes",
      "A rest area will appear suddenly",
      "Oncoming traffic will have priority",
    ],
  },
  {
    question: "What must you remember when you join the Highway?",
    answers: [
      "The traffic on the Highway has priority",
      "You may drive faster in the accelerating lane than in the Highway lane",
    ],
    wrongChoices: [
      "You may drive a little slowly in the accelerating lane than in the Highway lane",
      "You have priority over traffic on the highway",
      "Highway traffic must let you in automatically if you came first",
      "You can merge without checking mirrors since you have priority",
      "Horn must be used continuously while merging",
    ],
  },
  {
    question:
      "You want to join the driving lane of the Highway from the accelerating lane. Where must you stop, if necessary, on the accelerating lane, if you cannot join because of the high traffic density?",
    answers: ["Toward the end of the accelerating lane"],
    wrongChoices: [
      "At the very beginning of the acceleration lane",
      "After the end of the accelerating lane",
      "On the hard shoulder immediately",
      "You must never stop on the acceleration lane",
      "Before the acceleration lane starts",
    ],
  },
  {
    question:
      "What do you do if a driver is following you closely on the Highway and urges you constantly by flashing his headlights to clear the overtaking lane?",
    answers: ["You move over to the left lane as soon as possible"],
    wrongChoices: [
      "Brake hard to make him back off",
      "Stay in the overtaking lane and increase your speed",
      "Flash your brake lights repeatedly",
      "Move to the hard shoulder and stop",
      "Ignore the driver behind",
    ],
  },
  {
    question:
      "While your are stationary in a traffic jam, you see in the rear-view mirror that a motorcyclist ignores the regulations and is threading his way through. What do you do?",
    answers: ["You allow him to pass"],
    wrongChoices: [
      "Block him by moving slightly left",
      "Ignore him and keep your position",
      "Open your window and gesture for him to wait",
      "Accelerate to close the gap in front",
      "Report him to police immediately while driving",
    ],
  },
  {
    question:
      "You want to quickly overtake a queue of cars on the Highway. A car travelling at lower speed stops you from doing so. You are annoyed and frustrated. What do you do?",
    answers: ["You control yourself and wait until overtaking is possible"],
    wrongChoices: [
      "Flash lights and overtake on the hard shoulder",
      "Honk continuously until the car moves",
      "Swerve between lanes to find a gap",
      "Tailgate the slower car to pressure it",
      "Stop completely and wait for police",
    ],
  },
  {
    question:
      "In which cases are you allowed to drive faster on the left lane than on the right?",
    answers: [
      "When queues of vehicles have formed in thick traffic",
      "When you want to join a motorway in an acceleration lane",
    ],
    wrongChoices: [
      "When you are late for an appointment",
      "When the right lane is damaged",
      "When queues of vehicles have not formed in thick traffic",
      "When overtaking a single slow vehicle",
      "When your car has more than 100 horsepower",
    ],
  },
  {
    question:
      "What is the recommended speed that applies to cars and motorcycles on the Highway?",
    answers: ["130 km/h"],
    wrongChoices: [
      "100 km/h",
      "80 km/h",
      "150 km/h",
      "No limit applies on Highways",
      "90 km/h",
    ],
  },
  {
    question: "You are driving in the acceleration lane. What do you do?",
    answers: [
      "Accelerate adequately, if possible, avoid stopping, observe priority and filter into the stream of traffic",
      "Pass vehicles travelling more slowly in the driving lane on the left and filter into the stream of traffic in front of them",
    ],
    wrongChoices: [
      "Stop at the end and wait for a gap",
      "Pass vehicles travelling more slowly in the driving lane on the right and filter into the stream of traffic in front of them",
      "Drive slowly at 40 km/h in the acceleration lane if there are fewer cars",
      "Use hazard lights while accelerating",
      "Let cars from the Highway merge into your lane",
    ],
  },
  {
    question:
      "What must you do in a traffic jam on two-lane clearways for motor vehicles only?",
    answers: [
      "Vehicles driving on the right must keep well over to the right and vehicles driving on the left must keep well over to the left so that a channel is let clear for emergency vehicles",
    ],
    wrongChoices: [
      "All vehicles stay in the center lane",
      "Right lane moves left, left lane moves right",
      "Only emergency vehicles may use the hard shoulder",
      "No channel needed if traffic is slow",
      "Motorcycles must ride between cars",
    ],
  },
  {
    question:
      "You are driving in the right of two lanes and approaching a vehicle that has just started to overtake. What do you do?",
    answers: [
      "Keep an adequate distance behind the vehicle in front",
      "Allow the vehicle in front to overtake",
    ],
    wrongChoices: [
      "Keep close to the vehicle in front",
      "Move to the left lane immediately",
      "Brake to force them behind you",
      "Stay exactly at their speed",
      "Flash lights to tell them to go back",
    ],
  },
  {
    question:
      "You are driving on the Highway in light traffic. How long are you allowed to stay in the right-hand lane?",
    answers: [
      "As long as is necessary to overtake other vehicles",
      "As long as you are driving behind a vehicle which is overtaking in the right-hand lane",
    ],
    wrongChoices: [
      "Only for 30 seconds at a time",
      "Indefinitely if traffic is light",
      "Only at night when visibility is good",
      "Until you reach 130 km/h",
      "Only when raining",
    ],
  },
  {
    question: "You have missed the Highway exit. What do you do?",
    answers: ["Drive on to the next exit"],
    wrongChoices: [
      "Reverse back to the exit immediately if there are no cars behind",
      "Stop on the hard shoulder and wait",
      "Make a U-turn and exit without inconviniencing any cars",
      "Drive backward on the hard shoulder to the exit",
    ],
  },
  {
    question: "What applies on clearways for motor vehicles only?",
    answers: [
      "No U-turns",
      "Join the clearway only at crossroads and junctions",
    ],
    wrongChoices: [
      "Overtaking on the right is allowed",
      "You can stop on the hard shoulder anytime",
      "Pedestrians may cross if no bridge is near",
      "U-turns are allowed",
      "You can join clearway anywhere",
    ],
  },
  {
    question:
      "What top speed must be entered in the vehicle documents to allow the vehicle's use on Highways?",
    answers: ["More than 60 km/h"],
    wrongChoices: [
      "More than 40 km/h",
      "More than 80 km/h",
      "More than 100 km/h",
      "Any speed is allowed",
      "More than 120 km/h",
    ],
  },
  {
    question:
      "A traffic jam has formed on a three-lane Highway. Where must the channel for emergency vehicles be formed?",
    answers: ["Between the right-hand and the middle lanes"],
    wrongChoices: [
      "Between the middle and left lanes",
      "On the hard shoulder only",
      "Between all three lanes equally",
      "No channel needed on three-lane roads",
      "Emergency vehicles must wait behind traffic",
    ],
  },
  {
    question:
      "Your vehicle has broken down on the Highway. What must you remember when having it towed away?",
    answers: [
      "You must leave the Highway at the next exit",
      "During towing, both vehicles must have their hazard warning lights switched on",
    ],
    wrongChoices: [
      "You may be towed to any nearby garage",
      "Only the broken vehicle needs hazard lights",
      "Towing is not allowed on Highways at all",
      "Only the towing vehicle should have hazards light on.",
      "Hazard lights should be off to save battery",
    ],
  },
  {
    question: "What applies on Highways?",
    answers: ["No stopping on the roadway and hard shoulder", "No reversing"],
    wrongChoices: [
      "Stopping for 5 minutes is allowed if tired",
      "Reversing is allowed if you miss your exit",
      "U-turns are allowed at emergency gaps",
      "Parking on the hard shoulder for rest is OK",
      "You can walk on the hard shoulder for help",
    ],
  },
  {
    question:
      "What is the maximum speed at which you are allowed to drive a car with a trailer on the Highway?",
    answers: ["80 km/h"],
    wrongChoices: [
      "100 km/h",
      "120 km/h",
      "130 km/h",
      "No speed limit with trailer",
      "60 km/h",
    ],
  },
];
*/

/*
let lesson5Notes = [
  {
    question: "Why must you not drive extra slowly for no reason?",
    answers: [
      "Because it obstructs the flow of traffic",
      "Because it increases the danger of rear-end collisions",
      "Because it encourages vehicle drivers behind to overtake dangerously",
    ],
    wrongChoices: [
      "Because it improves fuel economy",
      "Because it reduces tyre wear",
      "Because it gives other drivers more reaction time",
      "Because it improves visibility",
      "Because it reduces engine noise",
    ],
  },
  {
    question: "What must you be prepared for?",
    image: {
      src: "/src/assets/lesson5Assets/speed2.webp",
      alt: "Picture of a woman crossing a road between parked cars",
    },
    answers: [
      "Pedestrians often change the side of the road",
      "Parking vehicles obstruct your view",
      "Pedestrians sometimes step into the roadway inattentively",
    ],
    wrongChoices: [
      "Pedestrians always use designated crossings",
      "Children are prohibited from crossing here",
      "Pedestrians don't often change the side of the road",
      "Cyclists frequently ride on the pavement",
      "Pedestrians must walk facing traffic",
    ],
  },
  {
    question: "What must you reckon with?",
    image: {
      src: "/src/assets/lesson5Assets/speed3.webp",
      alt: "cars parked on both sides of the road in a built up area",
    },
    answers: [
      "Pedestrians and particularly children may suddenly step onto the roadway between the parked vehicles",
      "Doors are often opened carelessly on the side of the roadway",
      "Vehicles setting off swerve out unexpectedly",
    ],
    wrongChoices: [
      "Parked vehicles always indicate before moving off",
      "Pedestrians cannot suddenly cross because there is no zebra crossing.",
      "Vehicles setting off swerve out expectedly",
      "Drivers of parked cars will always wait for you to pass before opening the doors",
    ],
  },
  {
    question: "What must you reckon with?",
    image: {
      src: "/src/assets/lesson5Assets/speed4.webp",
      alt: "driving past parked cars on both sides of the road in a built up area",
    },
    answers: [
      "Pedestrians could step onto the roadway in front of you",
      "Children may suddenly appear from between the vehicles",
    ],
    wrongChoices: [
      "There;s no danger of pedestrians",
      "The road surface becomes smoother",
      "It is safer to pass because parked vehicles cannot suddenly move",
      "Parked vehicles always indicate before moving off",
    ],
  },
  {
    question:
      "Where must you particularly reckon with dirt on the roadway and therefore danger of skidding?",
    answers: ["Near construction sites", "At junctions with farm tracks"],
    wrongChoices: [
      "Near bus stops",
      "At pedestrian crossings",
      "Near filling stations",
      "At railway crossings",
      "25km after construction sites",
    ],
  },
  {
    question:
      "Why must the safe distance maintained be much greater on a wet roadway than on a dry roadway?",
    answers: [
      "The contact between the tyres and the roadway deteriorates",
      "Wheel-spray can impair visibility",
      "Braking distances are greater",
    ],
    wrongChoices: [
      "Tyres heat up more quickly",
      "The engine becomes less efficient",
      "Road signs are harder to read",
      "Fuel consumption decreases",
      "Steering becomes lighter",
    ],
  },
  {
    question: "Where must you especially reckon with obstacles on the roadway?",
    answers: ["On bridges", "On stretches of road running through forest"],
    wrongChoices: [
      "5km before or after bridges",
      "At traffic circles",
      "On dual carriageways",
      "At pedestrian crossings",
      "Near service stations",
    ],
  },
  {
    question: "Why should you drive with particular care here?",
    image: {
      src: "/src/assets/lesson5Assets/speed8.webp",
      alt: "patched road surface aproaching a bend with an obscured view",
    },
    answers: [
      "The road ahead is obscured from view",
      "The surface of the road is uneven",
      "Oncoming traffic might drive too far on the right",
    ],
    wrongChoices: [
      "Oncoming traffic might drive too far on the left",
      "The shoulder is wider than usual",
      "Animals cannot suddenly appear",
      "The oncomming car will always drive safely near bends",
      "The road surface is newly paved",
    ],
  },
  {
    question:
      "Why does driving on this stretch of road require greater alertness on the part of the motorist?",
    image: {
      src: "/src/assets/lesson5Assets/speed9.webp",
      alt: "a 2 way wet road",
    },
    answers: [
      "The road surface is uneven and road grip varies",
      "A vehicle might come from the opposite direction",
      "Driving on the tracks is dangerous",
    ],
    wrongChoices: [
      "A vehicle might not come from the opposite direction",
      "The shoulder is too narrow for stopping",
      "The road surface is even and road grip is sufficient",
      "The braking distance is much shorter now because of wet road",
      "Road signs are difficult to understand",
    ],
  },
  {
    question:
      "Why is it necessary to maintain a particularly great safe distance from vehicles in front?",
    image: {
      src: "/src/assets/lesson5Assets/speed10.webp",
      alt: "driving on a wet road with cars infront",
    },
    answers: [
      "Because otherwise wheel-spray impairs visibility",
      "Because the stopping distance is greater than on a dry road",
      "Because otherwise you might react too late to puddles",
    ],
    wrongChoices: [
      "Because the stopping distance is lesser than on a dry road",
      "Because road signs are harder to see",
      "Because tyres wear out faster",
      "Because you always react too late to puddles",
      "Because lane markings disappear",
    ],
  },
  {
    question: "What adversely affects road safety in this situation?",
    image: {
      src: "/src/assets/lesson5Assets/speed11.webp",
      alt: "driving behind a car on a wet road",
    },
    answers: [
      "Water thrown up by vehicles in front",
      "The fog tail lamps of the car in front",
    ],
    wrongChoices: [
      "Bright sunlight reflecting from mirrors",
      "Its safe to drive in this road",
      "A clean windscreen",
      "The break lighs of the car ahead",
    ],
  },
  {
    question:
      "The road is muddy for a short distance. What should you avoid here, if possible?",
    answers: ["Accelerating", "Braking", "Steering wheel movements"],
    wrongChoices: [
      "Changing gears",
      "Using dipped headlights",
      "Checking mirrors",
      "Deccelerating",
      "Using indicators",
    ],
  },
  {
    question:
      "While driving, how can you safely check whether the road is slippery?",
    answers: ["By carefully applying the brakes at very low speed"],
    wrongChoices: [
      "By accelerating sharply",
      "By turning the steering wheel quickly",
      "By driving over road markings",
      "By quickly applying the brakes at very low speed",
    ],
  },
  {
    question:
      "You are driving against oncoming traffic on a road deeply covered in sand. The roadway has been cleared by a bulldozer. What must you reckon with?",
    answers: [
      "Pedestrians are often not able to leave the roadway because of piled-up dirt and therefore make the roadway even narrower",
      "You may only drive at a speed which excludes any danger for pedestrians",
    ],
    wrongChoices: [
      "Pedestrians are often not able to leave the roadway because of piled-up dirt and therefore make the roadway even broader",
      "Road signs may become unreadable",
      "Drivers must use full headlights",
      "Vehicles can only travel one way",
    ],
  },
  {
    question: "What dangers could arise if you want to turn right here?",
    image: {
      src: "/src/assets/lesson5Assets/speed15.webp",
      alt: "a large pothole filled with water on a wet road",
    },
    answers: [
      "You might not be able to stop in time if a pedestrian crosses the side street",
      "Vehicles coming out of the side street might go into a skid on braking",
      "Your vehicle could go into a skid on turning too fast",
    ],
    wrongChoices: [
      "Your vehicle could go into a skid on turning too slowly",
      "You may not be able to stop in time if you are not driving faster",
      "Your headlights could fail",
      "The road could become one-way",
    ],
  },
  {
    question: "Why must you drive with particular caution here?",
    image: {
      src: "/src/assets/lesson5Assets/speed16.webp",
      alt: "a wet road, wrongly parked car and a bend",
    },
    answers: [
      "Because the roadway is slippery",
      "Because the view is obscured by the bend",
      "Because the roadway is made narrower by the wrongly parked car",
    ],
    wrongChoices: [
      "Because the road has firm grip",
      "Because pedestrians have priority everywhere",
      "Because the roadway is made broader by the wrongly parked car",
      "Breaking distance is shorter",
    ],
  },
  {
    question: "Where must you be prepared to encounter sudden fog?",
    answers: ["Near rivers", "In marshy areas", "Near lakes"],
    wrongChoices: [
      "Near airports",
      "In industrial zones",
      "After rivers",
      "Before marshy areas",
      "On a sunny day",
    ],
  },
  {
    question: "Why can driving along this unevenly lit street be dangerous?",
    image: {
      src: "/src/assets/lesson5Assets/speed18.webp",
      alt: "unevenly lit street with cars parked on the right side shoulder",
    },
    answers: [
      "Pedestrians crossing the street in a dark area can easily be overlooked",
      "Badly lit vehicles are difficult to make out in dark areas",
    ],
    wrongChoices: [
      "Street lights improve visibility equally everywhere",
      "Drivers can be flashed by the light from the pedestrians reflective gear",
      "Traffic moves more slowly in dark areas",
      "Drivers can always see parked vehicles clearly",
      "Badly lit vehicles are easy to make out in dark areas",
    ],
  },
  {
    question: "What must you reckon with here?",
    image: {
      src: "/src/assets/lesson5Assets/speed19.webp",
      alt: "built up area with a tight bend and brightly lit lights",
    },
    answers: [
      "Others cannot see your vehicle in good time",
      "You only see oncoming vehicles late",
      "Traffic lights hardly stand out from the coloured neon signs",
    ],
    wrongChoices: [
      "Road signs are always easier to see",
      "The bend improves visibility",
      "Street lighting removes all hazards",
      "Others can see your vehicle in good time",
      "You only see oncoming vehicles early",
    ],
  },
  {
    question: "Where does driving fast often lead to accidents?",
    answers: [
      "At crossroads and junctions",
      "At pedestrian crossings",
      "On bends",
    ],
    wrongChoices: [
      "On straight roads",
      "Outside built up areas",
      "When running low on fuel",
      "When the roadway is broader",
      "On 2 way roads",
    ],
  },
  {
    question: "Where is fast driving particularly dangerous?",
    answers: ["At blind spots", "At road narrowings", "At level crossings"],
    wrongChoices: [
      "Before bends",
      "On well-lit roads",
      "After a bus stop",
      "Near filling stations",
      "After crossroads and junctions",
    ],
  },
  {
    question: "How do you take tight bends?",
    answers: [
      "Reduce speed before reaching the bend",
      "Only accelerate again when the road straightens out",
    ],
    wrongChoices: [
      "Accelerate while entering the bend",
      "Brake heavily halfway through the bend",
      "Move to the shoulder before turning",
      "Sound the horn continuously to warn incoming cars",
      "Reduce speed only when leaving the bend",
    ],
  },
  {
    question: "Which dangers can arise in this residential area?",
    image: {
      src: "/src/assets/lesson5Assets/speed23.webp",
      alt: "a road between built up area with residential places",
    },
    answers: [
      "Vehicles drive too fast",
      "Junctions are ignored",
      "Children may run into the road unexpectedly",
    ],
    wrongChoices: [
      "Vehicles drive too slowly",
      "Traffic lights are absent",
      "Only heavy trucks use the area",
      "No risk of danger in built up areas, drivers are always careful with pedestrians",
    ],
  },
  {
    question: "What must you reckon with?",
    image: {
      src: "/src/assets/lesson5Assets/speed24.webp",
      alt: "a tight bend with obscured view",
    },
    answers: [
      "A vehicle moving slowly in your direction behind the bend",
      "Fast oncoming traffic cutting the bend",
      "Game pass",
    ],
    wrongChoices: [
      "A pedestrian crossing controlled by lights",
      "A railway crossing immediately ahead",
      "A broken traffic signal",
      "A stationary police vehicle",
      "A road closure beyond the bend",
    ],
  },
  {
    question: "What must you be prepared for?",
    image: {
      src: "/src/assets/lesson5Assets/speed25.webp",
      alt: "a wet road with a mini joining road on the left",
    },
    answers: [
      "The appearance of a vehicle from the left",
      "A longer braking distance on account of the wet road",
    ],
    wrongChoices: [
      "A shorter braking distance on account of the wet road",
      "No car appearing on the left",
      "No pedestrian crossing the road",
      "Animals may be tethered to the roadside",
    ],
  },
  {
    question: "Why must you be particularly careful here?",
    image: {
      src: "/src/assets/lesson5Assets/speed26.webp",
      alt: "a tight bend with grass getting on the road",
    },
    answers: [
      "Because there is an increased danger of skidding when braking",
      "Because a vehicle could come from the right",
    ],
    wrongChoices: [
      "Because the road is wider than normal",
      "Because there is less danger of skidding when braking",
      "Because overtaking is encouraged",
      "Because road markings are missing",
    ],
  },
  {
    question: "What must you reckon with over the brow of this hill?",
    image: {
      src: "/src/assets/lesson5Assets/speed27.webp",
      alt: "an uphill road with the other end obscured from view",
    },
    answers: [
      "A vehicle may have broken down there",
      "A vehicle coming from the other direction may be straddling part of your lane",
      "A slow-moving vehicle may be on your lane",
    ],
    wrongChoices: [
      "A pedestrian crossing controlled by lights",
      "Roadworks blocking both lanes",
      "A traffic officer directing traffic",
      "A railway crossing immediately ahead",
      "A speed camera checkpoint",
    ],
  },
  {
    question: "What must you reckon with?",
    image: {
      src: "/src/assets/lesson5Assets/speed28.webp",
      alt: "uphill road with a right bend and the other end obscured from view",
    },
    answers: [
      "With a dangerous right bend",
      "With a vehicle stopped behind the top of the hill",
    ],
    wrongChoices: [
      "With a level crossing",
      "A traffic officer directing traffic",
      "With a traffic circle",
      "A speed camera checkpoint",
    ],
  },
  {
    question: "What must you be prepared for in this situation?",
    image: {
      src: "/src/assets/lesson5Assets/speed29.webp",
      alt: "road workers constructing the road on the side",
    },
    answers: [
      "An uneven and dirty roadway",
      "Workers and construction equipment on the roadway",
    ],
    wrongChoices: [
      "Unobstructed road markings",
      "An even road surface",
      "Workers and construction equipment far from the roadway",
      "A speed enforcement camera",
      "A newly paved shoulder",
    ],
  },
  {
    question: "What must you reckon with in this situation?",
    image: {
      src: "/src/assets/lesson5Assets/speed30.webp",
      alt: "two lane road with a car infront, on a dry clear day with dust on the road",
    },
    answers: [
      "Vehicles may suddenly brake",
      "You may need a longer braking distance than normal",
    ],
    wrongChoices: [
      "Vehicles may increase speed suddenly",
      "You may need a shorter braking distance than normal",
      "Vehicles not suddenly braking",
      "Drivers may switch on full headlights",
    ],
  },
  {
    question: "Which dangers must you reckon with above all in rural areas?",
    answers: [
      "Soiled roadways",
      "Slow farm vehicles",
      "Excessively wide farm vehicles",
    ],
    wrongChoices: [
      "Poorly lit tunnels and underpasses",
      "Traffic congestion during peak hours",
      "Non working traffic lights",
      "Pedestrian traffic at crosswalks",
      "Flashing light from street lights at night",
    ],
  },
  {
    question: "With which road users must special care be taken?",
    answers: [
      "With handicapped and elderly pedestrians and other pedestrians requiring assistance",
      "With children",
      "With cyclists whose riding shows they are unsure of themselves",
    ],
    wrongChoices: [
      "With adults",
      "With the non handicapped",
      "Pedestrians wearing reflective clothing",
      "Taxi drivers unfamiliar with the route",
    ],
  },
  {
    question: "What is the permissible top speed generally in built-up areas?",
    answers: ["(( 60 )) km/h"],
    wrongChoices: [
      "(( 50 )) km/h",
      "(( 70 )) km/h",
      "(( 80 )) km/h",
      "(( 90 )) km/h",
      "(( 55 )) km/h",
    ],
  },
  {
    question:
      "What must you take into consideration when selecting your speed?",
    answers: [
      "Visibility and weather conditions",
      "The condition of the road and traffic situations",
      "Personal driving ability",
    ],
    wrongChoices: [
      "The age of your vehicle",
      "The amount of fuel in the tank",
      "The number of passengers",
      "The brand of tyres fitted",
    ],
  },
  {
    question: "What kind of driving results in high fuel consumption?",
    answers: [
      "Fast starts and unnecessary acceleration",
      "Revving up all gears",
      "Driving at high speed",
    ],
    wrongChoices: [
      "Slow starts and acceleration",
      "Driving with headlights on during the day",
      "Maintaining low tyre pressure",
      "Keeping windows open at high speed",
      "Reaching the highest gear as early as possible",
    ],
  },
  {
    question: "How can you cover more kilometres on less fuel?",
    answers: [
      "Accelerate in such a way that the highest possible gear is quickly reached",
      "Think ahead when driving in order to avoid unnecessary acceleration and braking",
    ],
    wrongChoices: [
      "Keep the vehicle in first gear as long as possible",
      "Accelerate sharply before every junction",
      "Accelerate in such a way that the highest possible gear is slowly reached",
      "Frequent accelerations to reach the destination faster",
      "Shift down a gear before every bend",
    ],
  },
  {
    question:
      "Why must you be particularly careful when driving a vehicle with which you are unfamiliar?",
    answers: [
      "Because you might not be familiar with the controls and dimensions of the vehicle",
      "Because you do not yet know how the vehicle reacts to braking",
      "Because you do not yet know how the vehicle behaves on bends at higher speeds",
    ],
    wrongChoices: [
      "You don't need to be careful if you have more than 10years driving experience",
      "Because it's a requirement by the law",
      "Because unfamiliar vehicles require special licences",
      "Because you know how the vehicle reacts to braking",
    ],
  },
  {
    question: "What can cause skidding on bends?",
    answers: ["Heavy braking", "Driving fast on a wet roadway"],
    wrongChoices: [
      "Light braking",
      "Driving slowly on a wet roadway",
      "Maintaining a large following distance",
      "Driving in a low gear",
    ],
  },
  {
    question: "What can result in aquaplaning (sliding on wet roads)?",
    answers: ["High speed", "Worn tyres", "Grooves in the roadway"],
    wrongChoices: [
      "Low speed",
      "Used tires",
      "Driving on low gear",
      "Dry road shoulders",
    ],
  },
  {
    question:
      "What must you do if your vehicle is caught by a strong side wind?",
    answers: ["Steer against the wind", "Reduce speed"],
    wrongChoices: [
      "Increase speed to maintain stability",
      "Apply the handbrake immediately",
      "Switch on hazard warning lights",
      "Steer towards the wind direction",
      "Accelerate through the affected area",
    ],
  },
  {
    question:
      "Where must you be particularly prepared for dangerous side winds on the Highway?",
    answers: ["On bridges", "Behind cuts in the landscape"],
    wrongChoices: [
      "At fuel stations",
      "Near pedestrian crossings",
      "In tunnels",
      "Before bridges",
      "After bridges",
    ],
  },
  {
    question: "When can strong side wind be particularly dangerous?",
    answers: [
      "When overtaking trucks",
      "When driving across bridges",
      "When driving past fire breaks in forests",
    ],
    wrongChoices: [
      "After driving past a truck",
      "After driving past the bridges",
      "Before passing the bridge",
      "After passing the fire break in a forest",
      "When driving through tunnels",
    ],
  },
  {
    question: "What must you reckon with here?",
    image: {
      src: "/src/assets/lesson5Assets/speed43.webp",
      alt: "driving behind a truck ",
    },
    answers: [
      "Your vehicle could be blown to the right by the strong side wind",
      "When overtaking, your vehicle is pulling to the left when you enter the slipstream of the truck",
    ],
    wrongChoices: [
      "It is safe to overtake the truck here if you are driving faster than it",
      "The sidewind can only affect you when you have already left the slipstream of the truck",
      "The truck may stop to pick up passengers",
      "Side wind cannot affect you when overtaking the truck",
    ],
  },
  {
    question:
      "A strong side wind is blowing from the left. When are you particularly exposed to danger when overtaking?",
    image: {
      src: "/src/assets/lesson5Assets/speed44.webp",
      alt: "driving behind a truck ",
    },
    answers: [
      "When you enter the slipstream of the truck",
      "When you leave the slipstream of the truck",
    ],
    wrongChoices: [
      "When driving parallel to the truck",
      "Before approaching the truck",
      "After completing the overtake",
      "When you're 5km from entering the slipstream of the truck",
      "When you're 5km after leaving the slipstream of the truck",
    ],
  },
  {
    question: "Why must you reduce your speed in heavy rain?",
    answers: [
      "Because braking distance is increased",
      "Because visibility is reduced",
      "Because aquaplaning (sliding on wet roads) can occur",
    ],
    wrongChoices: [
      "Because braking distance is shortened",
      "Because visibility is increased",
      "Because road signs become brighter",
      "Because steering effort is reduced",
      "Because engine temperature falls",
    ],
  },
  {
    question: "What adversely affects road safety here?",
    image: {
      src: "/src/assets/lesson5Assets/speed46.webp",
      alt: "driver's view on a wet road and foggy day",
    },
    answers: [
      "Poor visibility",
      "Reduced grip of the tyres on the wet roadway",
    ],
    wrongChoices: [
      "Improved tyre lifespan",
      "Reduced fuel consumption",
      "Increased grip of tyres on a wet road",
      "Clear visibility",
    ],
  },
  {
    question: "What can be caused if the road surface suddenly becomes worse?",
    answers: ["Danger of sliding and skidding", "Changes in tyre noise"],
    wrongChoices: [
      "Reduced chances of skidding and sliding",
      "Reduced tyre pressure",
      "Increased engine cooling",
      "Less wear on road markings",
      "Greater suspension comfort",
    ],
  },
  {
    question: "What must driver of the white car reckon with?",
    image: {
      src: "/src/assets/lesson5Assets/speed48.webp",
      alt: "diver's view of a tight bend with an obscured car coming from the other direction",
    },
    answers: [
      "Oncoming traffic may cut the corner",
      "A vehicle may have broken down beyond the bend",
      "Game animals could suddenly appear",
    ],
    wrongChoices: [
      "He should trust that oncomming traffic will drive on the right lane",
      "Street lights may suddenly fail",
      "Road signs may become unreadable",
      "Sudden appearance of police",
      "The road may become one-way",
    ],
  },
  {
    question:
      "Where does aquaplaning (sliding on wet roads) occur particularly often?",
    answers: [
      "In dips in the roadway",
      "Where there are grooves in the roadway",
    ],
    wrongChoices: [
      "On roads with a rough porous surface",
      "On the highway",
      "On steep downhill slopes",
      "On rough roads",
    ],
  },
  {
    question: "What does aquaplaning (sliding on wet roads) lead to?",
    answers: [
      "The vehicle can no longer be steered and braked",
      "The vehicle can leave the road",
    ],
    wrongChoices: [
      "The vehicle can be steered and braked",
      "The suspension stiffens automatically",
      "The vehicle becomes easier to control",
      "The steering wheel locks temporarily",
    ],
  },
  {
    question:
      "What must you reckon with when it starts raining after a long period of dry weather?",
    answers: [
      "A dangerous greasy film on the surface of the road",
      "Bad visibility immediately upon switching the windscreen wipers on",
    ],
    wrongChoices: [
      "Good visibility immediately upon switching the windscreen wipers on",
      "The brake fluid lines may overheat from ambient humidity changes.",
      "Tire pressure will suddenly spike due to cooled tarmac temperatures.",
      "The vehicle's electrical grounding system becomes completely unstable.",
      "Oncoming traffic will automatically switch to high-beam hazard lights.",
    ],
  },
  {
    question:
      "What must you do on encountering sudden dense fog driving at daytime?",
    answers: [
      "Adapt speed immediately to visibility conditions",
      "Switch on dipped headlights",
    ],
    wrongChoices: [
      "Switch on your hazard lights and continue driving at your current speed.",
      "Pull over onto the left shoulder immediately and turn off all lights.",
      "Switch on your main-beam headlights .",
      "Maintain your distance and strictly monitor your rear-view mirror without slowing down.",
      "Sound your horn continuously to alert drivers traveling behind you.",
    ],
  },
  {
    question:
      "You are driving on a country road in darkness and rain and encounter oncoming vehicles with dipped headlights. What must you remember?",
    answers: [
      "You can be dazzled by reflections on the wet road",
      "Your wet windscreen can result in you being dazzled",
    ],
    wrongChoices: [
      "You cannot be dazzled by reflections on the wet road.",
      "The rainwater will neutralize the glare effect completely by dispersing light downward.",
      "Road markings will glow brighter, reducing the need for left-side lane boundaries.",
      "Your braking distance will be cut in half because the wet road cools down the brake pads.",
      "You must switch your own headlights off briefly to let your eyes adjust to the darkness.",
    ],
  },
  {
    question:
      "You have been driving at high speed for some time. What effects can this have?",
    answers: [
      "You lose your feel for speed",
      "Your powers of concentration diminish",
    ],
    wrongChoices: [
      "Your reaction time becomes shorter and your reflexes sharpen significantly.",
      "You overestimate your actual speed when entering a slower urban zone.",
      "Your engine oil pressure drops directly proportional to the sustained speed.",
      "The vehicle's electronic steering system locks up to stabilize the straight-line path.",
      "Your peripheral vision widens, allowing you to see objects at the extreme sides more clearly.",
    ],
  },
  {
    question: "What can result from driving for a long time at high speed?",
    answers: [
      "You lose your feel for speed",
      "You drive too close to vehicles in front",
    ],
    wrongChoices: [
      "Your field of vision widens, allowing you to react much quicker to side hazards.",
      "You begin to overestimate the safe stopping distance required for emergencies.",
      "You automatically increase your trailing distance from vehicles ahead without noticing.",
      "The vehicle's brake pads compress tightly, resulting in immediate brake fade.",
      "You become hyper-aware of subtle changes in the road layout and signage.",
    ],
  },
  {
    question:
      "You are travelling at high speed. Where in particular can obstructions suddenly appear?",
    answers: ["In woodland areas (game animals crossing)", "Behind hilltops"],
    wrongChoices: [
      "Only on well-lit urban streets with active pedestrian crossings.",
      "On long, straight stretches of clearways with wide hard shoulders.",
      "At designated emergency breakdown bays and gravel escape lanes.",
      "In industrial zones during daytime shift changes.",
    ],
  },
  {
    question: "When is there a danger of underestimating your own speed?",
    answers: [
      "When the road is wide and there are no trees, buildings, fences etc. at the edge of the road",
      "When you have already been driving at high speed for some time",
    ],
    wrongChoices: [
      "When driving a heavy commercial vehicle on a steep uphill gradient.",
      "When the road is narrow and there are no trees, buildings, fences etc. at the edge of the road.",
      "When you are driving in heavy stop-and-go city traffic during rush hour.",
      "When you frequently switch between low-beam and high-beam headlights.",
      "When you are towing a heavy trailer on an unpaved country road.",
    ],
  },
  {
    question: "What can lead you to dangerously underestimate your own speed?",
    answers: [
      "Driving for a long time at high speed",
      "Driving on a good, wide road",
    ],
    wrongChoices: [
      "Driving on a good narrow, winding road.",
      "Driving through a long, brightly lit tunnel at a constant low speed.",
      "Driving behind a large truck that completely blocks your forward view.",
      "Driving in heavy stop-and-go urban traffic with frequent traffic lights.",
      "Driving on a steep uphill gradient with poor visibility conditions.",
    ],
  },
  {
    question: "What must you do?",
    image: {
      src: "/src/assets/lesson5Assets/speed59.webp",
      alt: "driver's view of a built up area with oncoming traffic and cars parked on the left shoulder",
    },
    answers: [
      "Drive slowly because children might run out from between the parked vehicles at any time",
      "Drive slowly because a door on one of the vehicles could be opened on the roadway side",
    ],
    wrongChoices: [
      "Accelerate quickly to pass the parked vehicles before any doors open.",
      "Drive in the middle of the road over the center markings to stay clear of both sides.",
      "Sound your horn continuously to warn any occupants inside the parked vehicles.",
      "Flash your high beams repeatedly so oncoming traffic pulls over to let you pass.",
      "Maintain a high speed to minimize the time spent next to the parked cars.",
    ],
  },
  {
    question:
      "What could cause a fast travelling motor vehicle suddenly to veer sideways on a dry straight road?",
    answers: [
      "If it is suddenly hit by a gust of strong side wind",
      "A burst tyre",
    ],
    wrongChoices: [
      "An unexpected engagement of the vehicle's electronic stability control system.",
      "A sudden accumulation of engine oil on the inner rim of the wheels.",
      "The sudden activation of the vehicle's automatic anti-lock braking system.",
      "A sudden change in the vehicle's wheel alignment settings due to high speed.",
      "The car's aerodynamic lift force exceeding its gross vehicle weight.",
    ],
  },
  {
    question:
      "You are driving into a left-hand bend. A motorcyclist is approaching you at high speed. What must you reckon with?",
    answers: [
      "The motorcyclist could project into your lane with the upper part of his body, because he is leaning over at a steep angle",
    ],
    wrongChoices: [
      "The motorcyclist will always lose traction and slide completely out of the bend.",
      "The motorcyclist will switch on his hazard warning lights to indicate his high speed.",
      "The motorcyclist will brake aggressively and come to a complete stop inside the bend.",
      "The motorcyclist will drop his speed to zero before passing your vehicle.",
      "The motorcyclist will stand upright on the footpegs to stabilize his forward trajectory.",
    ],
  },
  {
    question:
      "Why does environment friendly driving in general have a beneficial effect on traffic safety?",
    answers: [
      "Because drivers think ahead when travelling, so that possible dangers can be recognised in time and well avoided",
      "Because environment friendly driving avoids high speeds so that dangerous situations occur less frequently",
    ],
    wrongChoices: [
      "Because eco-friendly vehicles use smaller tires that have significantly higher road grip.",
      "Because it ensures that drivers always travel at least 20 km/h below the legal speed limit.",
      "Because it requires drivers to use their brakes constantly to maintain a steady low speed.",
      "Because eco-friendly vehicles are constructed with softer materials that absorb impacts better.",
      "Because it eliminates the vehicle's blind spots by forcing a specific seating position.",
    ],
  },
  {
    question:
      "For which motor vehicles is the recommended Highway speed intended?",
    answers: [
      "For cars and motorcycles",
      "For trucks with a permissible total mass of 3.5 t",
    ],
    wrongChoices: [
      "For all commercial trucks with a permissible total mass exceeding 7.5 t.",
      "For buses and taxis only",
      "For motorcycles only",
      "For vehicles carrying passengers only",
      "For emergency vehicles only",
    ],
  },
  {
    question: "To which roads does the recommended speed of 120 km/h apply?",
    answers: [
      "Highways",
      "Roads outside built-up areas with physically separate roadways for each direction",
      "Roads outside built-up areas with at least two marked lanes in each direction",
    ],
    wrongChoices: [
      "Roads inside built-up areas with physically separate roadways for each direction",
      "Highways only within built-up industrial areas.",
      "Single-lane roads only",
      "Gravel roads outside built-up areas",
      "All country roads with a single marked lane in each direction.",
    ],
  },
  {
    question:
      "You are driving in fog on the Highway and have 50 m visibility. What is the maximum speed you may drive?",
    answers: ["(( 50 )) km/h"],
    wrongChoices: [
      "(( 100 )) km/h",
      "(( 80 )) km/h",
      "(( 70 )) km/h",
      "(( 60 )) km/h",
      "(( 30 )) km/h",
    ],
  },
  {
    question:
      "You are driving on a narrow road and can see 50 m ahead. What must be your maximum stopping distance?",
    answers: ["(( 25 )) m"],
    wrongChoices: [
      "(( 50 )) m",
      "(( 35 )) m",
      "(( 17 )) m",
      "(( 15 )) m",
      "(( 10 )) m",
    ],
  },
  {
    question:
      "You are driving on a good road. Visibility is good. Within what distance must you be able to stop at the latest?",
    answers: ["Within the range of vision"],
    wrongChoices: [
      "Within double the range of vision",
      "Within half the range of vision",
      "Within a fixed distance of 100 metres",
      "Within three times the length of your vehicle",
      "Within the length of the roadway visible",
    ],
  },
  {
    question:
      "You are driving at night with dipped headlights on a good country road. Within what distance must you be able to stop at the latest?",
    answers: ["Within the range of the dipped headlights"],
    wrongChoices: [
      "Within the range of the full-beam headlights",
      "Within 100 metres",
      "Within the stopping distance of oncoming traffic",
      "Within double the range of the dipped headlights",
      "Within half the range of the dipped headlights",
    ],
  },
  {
    question:
      "What is the maximum speed a motor vehicle fitted with twin-wheels is allowed to travel?",
    answers: ["(( 80 )) km/h"],
    wrongChoices: [
      "(( 100 )) km/h",
      "(( 90 )) km/h",
      "(( 70 )) km/h",
      "(( 60 )) km/h",
      "(( 50 )) km/h",
    ],
  },
  {
    question:
      "What is the maximum speed you are allowed to drive a truck and trailer with a permissible total mass of 3.6 t on country roads outside built-up areas?",
    answers: ["(( 80 )) km/h"],
    wrongChoices: [
      "(( 100 )) km/h",
      "(( 90 )) km/h",
      "(( 70 )) km/h",
      "(( 60 )) km/h",
      "(( 50 )) km/h",
    ],
  },
  {
    question:
      "What is the maximum speed you are allowed to drive a car with trailer on country roads outside built-up areas?",
    answers: ["(( 80 )) km/h"],
    wrongChoices: ["90 km/h", "100 km/h", "110 km/h", "120 km/h", "140 km/h"],
  },
  {
    question:
      "What is the maximum speed you are allowed to drive a car on roads with one marked lane for each direction outside built-up areas?",
    answers: ["(( 120 )) km/h"],
    wrongChoices: [
      "(( 100 )) km/h",
      "(( 90 )) km/h",
      "(( 80 )) km/h",
      "(( 60 )) km/h",
      "(( 50 )) km/h",
    ],
  },
  {
    question:
      "What is the maximum speed you are allowed to drive a truck with a permissible total mass of 7.5 t on roads with one marked lane for each direction outside built-up areas?",
    answers: ["(( 80 )) km/h"],
    wrongChoices: [
      "(( 100 )) km/h",
      "(( 90 )) km/h",
      "(( 70 )) km/h",
      "(( 60 )) km/h",
      "(( 50 )) km/h",
    ],
  },
  {
    question:
      "What is the maximum speed a truck with a permissible total mass of 8.0 t and trailer may be driven on Highways?",
    answers: ["(( 80 )) km/h"],
    wrongChoices: [
      "(( 100 )) km/h",
      "(( 90 )) km/h",
      "(( 70 )) km/h",
      "(( 60 )) km/h",
      "(( 50 )) km/h",
    ],
  },
  {
    question:
      'On a clearway for motor vehicles only, there is a sign "recommended speed 100 km/h". What is the maximum speed at which a car towing a trailer may travel?',
    answers: ["(( 80 )) km/h"],
    wrongChoices: [
      "(( 100 )) km/h",
      "(( 90 )) km/h",
      "(( 70 )) km/h",
      "(( 60 )) km/h",
      "(( 50 )) km/h",
    ],
  },
  {
    question: "What are the effects of driving at high speed?",
    answers: ["Increased fuel consumption", "Increased pollutant emission"],
    wrongChoices: [
      "Reduced engine wear",
      "Improved tyre grip",
      "Shorter stopping distances",
      "Reduced tire wear and tear",
      "Lower risk of brake pad crystallization",
    ],
  },
  {
    question: "How can you reduce noise?",
    answers: ["By driving in 4th or 5th gear in built-up areas"],
    wrongChoices: [
      "By using the horn less often",
      "By maintaining high engine revs",
      "By revving the engine up to its maximum limit before changing gears",
      "By keeping the windows fully open to allow sound waves to escape",
      "By driving in 1st or 2nd gear at a high engine speed",
    ],
  },
  {
    question:
      "By which percentage does the fuel consumption (litre/100 km) of a middle-class car driving at 160 km/h in general increase compared to driving at the recommended speed of 120 km/h?",
    answers: ["By up to 35 %"],
    wrongChoices: [
      "By up to 10%",
      "By up to 15%",
      "By up to 20%",
      "By up to 25%",
      "By up to 50%",
    ],
  },
  {
    question:
      "What does a front-wheel drive car tend to do if you accelerate too much on a bend?",
    answers: ["The front end tends to turn out to the side"],
    wrongChoices: [
      "The rear end tends to turn out to the side",
      "The vehicle lifts on one side",
      "The vehicle pulls sharply in the opposite direction of the bend",
      "The brakes engage automatically on the inner wheels",
      "The steering wheel locks completely in the straight-ahead position",
    ],
  },
  {
    question:
      "What does a rear-wheel drive car tend to do if you accelerate too much on a bend?",
    answers: ["The rear end tends to turn out to the side"],
    wrongChoices: [
      "The front end tends to turn out to the side",
      "The vehicle stalls instantly due to transmission overload",
      "The front wheels lift off the ground surface completely",
      "The steering wheel pulls forcefully toward the center of the bend",
      "The steering becomes lighter",
    ],
  },
  {
    question: "Which factors lengthen your braking distance?",
    answers: [
      "Towing a trailer not fitted with brakes",
      "A wet or slippery roadway",
      "Driving down slopes",
    ],
    wrongChoices: [
      "Driving with high-performance low-profile tires",
      "A dry, clean concrete road surface",
      "Driving up a steep hill",
      "Reducing the total luggage load inside the vehicle boot",
      "Driving on a level road",
    ],
  },
  {
    question: "What does the braking distance depend on?",
    answers: [
      "The condition of the tyres",
      "The condition of the braking system",
      "The condition of the road surface",
    ],
    wrongChoices: [
      "The age of the driver",
      "The number of passengers",
      "The total number of passengers in the vehicle",
      "The engine capacity and torque specifications",
      "The width and layout design of the vehicle's dashboard",
    ],
  },
  {
    question:
      "You double the speed at which you are travelling. How does this affect the braking distance?",
    answers: ["It is (( 4 )) times as long"],
    wrongChoices: [
      "It is (( 2 )) times as long",
      "It is (( 3 )) times as long",
      "It remains exactly the same length",
      "It is (( 5 )) times as long",
      "It is (( 6 )) times as long",
    ],
  },
  {
    question:
      "By which rule of thumb can you determine from the speed the distance in metres a motor vehicle travels in one second?",
    answers: ["Speed in km/h / 10 x 3"],
    wrongChoices: [
      "Speed in km/h / 10 x 5",
      "Speed in km/h / 5 x 3",
      "Speed in km/h / 10 + 3",
      "Speed in km/h / 100 x 3",
      "Speed in km/h x 3 / 5",
    ],
  },
  {
    question:
      "By which rule of thumb can you determine the braking distance in metres from speed?",
    answers: ["Speed in km/h / 10 x Speed in km/h / 10"],
    wrongChoices: [
      "Speed in km/h / 10 x 3",
      "Speed in km/h / 10 x 2",
      "Speed in km/h / 5 x Speed in km/h / 5",
      "Speed in km/h / 10 + Speed in km/h / 10",
      "Speed in km/h x 10 / Speed in km/h",
    ],
  },
  {
    question:
      "You are driving on a narrow road. A pedestrian suddenly steps onto the roadway 20 m ahead of you. When, by the rule of thumb, can a collision not be avoided?",
    answers: ["At a speed of 40 km/h"],
    wrongChoices: [
      "At a speed of 25 km/h",
      "At a speed of 50 km/h",
      "At a speed of 20 km/h",
      "At a speed of 30 km/h",
      "At any speed below 30 km/h",
    ],
  },
  {
    question:
      "You have a reaction time of 1 second. Which stopping distance must you reckon with by rule of thumb if you are travelling at 100 km/h?",
    answers: ["(( 130 )) m"],
    wrongChoices: [
      "(( 100 )) m",
      "(( 70 )) m",
      "(( 50 )) m",
      "(( 40 )) m",
      "(( 30 )) m",
    ],
  },
  {
    question:
      "How long is the braking distance by rule of thumb when you are travelling at 100 km/h?",
    answers: ["(( 100 )) m"],
    wrongChoices: [
      "(( 130 )) m",
      "(( 70 )) m",
      "(( 50 )) m",
      "(( 30 )) m",
      "(( 80 )) m",
    ],
  },
  {
    question:
      "You have a reaction time of 1 second. What is the reaction distance by rule of thumb if you are travelling at 100 km/h?",
    answers: ["(( 30 )) m"],
    wrongChoices: ["(( 130 )) m", "(( 70 )) m", "(( 50 )) m", "(( 100 )) m"],
  },
  {
    question:
      "You have a reaction time of 1 second. Which stopping distance must you reckon with by rule of thumb if you are travelling at 50 km/h?",
    answers: ["(( 40 )) m"],
    wrongChoices: ["(( 50 )) m", "(( 30 )) m", "(( 25 )) m", "(( 15 )) m"],
  },
  {
    question:
      "How long is the braking distance by rule of thumb when you are travelling at 60 km/h?",
    answers: ["(( 36 )) m"],
    wrongChoices: [
      "(( 60 )) m",
      "(( 18 )) m",
      "(( 15 )) m",
      "(( 80 )) m",
      "(( 130 )) m",
    ],
  },
  {
    question:
      "You have a reaction time of 1 second. What is the reaction distance by rule of thumb if you are travelling at 60 km/h?",
    answers: ["(( 18 )) m"],
    wrongChoices: [
      "(( 60 )) m",
      "(( 36 )) m",
      "(( 30 )) m",
      "(( 130 )) m",
      "(( 80 )) m",
    ],
  },
  {
    question: "What can be the causes of rear-end collisions?",
    answers: [
      "Unexpectedly heavy braking",
      "Inattentiveness",
      "Driving too close behind the vehicle in front",
    ],
    wrongChoices: [
      "Driving at a constant, steady speed within the limit",
      "Using the direction indicators too early before changing lanes",
      "Checking the rear-view mirror frequently at regular intervals",
      "Slowing down gradually when approaching a red traffic light",
      "Defective brake lights",
    ],
  },
  {
    question:
      "You are driving in a built-up area behind a vehicle with foreign number plates. What should you be prepared for?",
    answers: [
      "The driver in front could brake unexpectedly",
      "The driver in front may switch on the direction indicators too late, just before a turn",
      "The driver in front could stop unexpectedly to ask the way",
    ],
    wrongChoices: [
      "The driver in front will not brake unexpectedly",
      "The driver in front will always switch on the direction indicators too late, just before a turn",
      "The driver in front will not stop unexpectedly to ask the way",
      "The driver in front will consistently drive faster than the speed limit",
      "The driver in front will flash his high beams to ask you to pass",
    ],
  },
  {
    question: "What do you do if visibility is drastically reduced by fog?",
    answers: [
      "Adapt your speed in time to visibility conditions",
      "Increase the distance from the vehicle in front",
    ],
    wrongChoices: [
      "Reduce the distance to the vehicle ahead",
      "Increase speed to clear the fog",
      "Switch on your high-beam headlights to penetrate the fog completely",
      "Pull over immediately onto the lane itself and wait for the fog to clear",
      "Overtake the vehicle ahead quickly to escape the dense fog zone",
    ],
  },
  {
    question:
      "What does the distance to be maintained from the vehicle ahead depend on?",
    answers: ["Visibility conditions", "Speed", "State of the road surface"],
    wrongChoices: [
      "The engine power and torque rating of your vehicle",
      "The total number of passengers riding inside your car",
      "The age and manufacturer brand of your vehicle's tires",
      "The legal speed limit posted on the opposite side of the road",
      "The length of time you have been driving without a rest break",
    ],
  },
  {
    question:
      "It starts raining. Why must you immediately increase the safe distance?",
    answers: [
      "Because a greasy film may form which increases the braking distance",
      "Because visibility may become worse and the windscreen wipers do not immediately provide a clear field of vision",
    ],
    wrongChoices: [
      "Because a greasy film may form which decreases the braking distance",
      "Because rainwater increases the friction level between the rubber and the asphalt",
      "Because the engine temperature will drop rapidly, causing a loss in engine power",
      "Because oncoming vehicles will lose traction and slide into your driving lane",
      "Because brake fluid absorbs ambient humidity instantly, reducing brake pressure",
    ],
  },
  {
    question:
      "You are driving on a country road in a stream of traffic. What must you do?",
    answers: ["Observe the safe distance"],
    wrongChoices: [
      "Overtake the entire stream of vehicles as quickly as possible",
      "Drive closely to the center line to prevent others from overtaking you",
      "Flash your high beams repeatedly to keep the traffic flow moving faster",
      "Switch on your hazard warning lights to indicate you are in a queue",
      "Maintain a distance of exactly one car length regardless of the speed",
    ],
  },
  {
    question: "What makes driving in a stream of vehicles easier?",
    answers: [
      "Watching the queue through the windows of the vehicles travelling in front",
      "Driving in a slightly staggered position in your own lane",
    ],
    wrongChoices: [
      "Watching the speedometer constantly",
      "Following the tyre tracks of the vehicle ahead",
      "Accelerating quickly whenever the gap ahead increases slightly",
      "Switching lanes frequently to find a faster moving line of vehicles",
      "Focusing your eyes exclusively on the brake lights of the car directly ahead",
    ],
  },
  {
    question:
      "What is the minimum distance that should normally be maintained from the vehicle in front outside built-up areas?",
    answers: ["½ the speedometer reading in metres"],
    wrongChoices: [
      "The full speedometer reading in metres",
      "¼ the speedometer reading in metres",
      "A fixed distance of exactly 50 metres at all speeds",
      "Three times the speedometer reading in metres",
      "The reaction distance multiplied by the braking distance",
    ],
  },
  {
    question:
      "You are driving in urban traffic on a dry roadway in a stream of traffic travelling at a speed of 50 km/h. What is the minimum safe distance you must keep from the vehicle in front?",
    answers: ["15 m or approximately 3 car lengths"],
    wrongChoices: [
      "5 m or approximately 1 car length",
      "30 m or approximately 6 car lengths",
      "50 m or approximately 10 car lengths",
      "10 m or approximately 2 car lengths",
      "100 m or approximately 20 car lengths",
    ],
  },
  {
    question: "What do hazard warning lights draw your attention to?",
    answers: [
      "To vehicles which have broken down",
      "To school buses with children boarding or alighting",
      "To a traffic jam",
    ],
    wrongChoices: [
      "Vehicles travelling above the speed limit",
      "A vehicle reversing",
      "An approaching emergency vehicle",
      "To vehicles which are traveling slightly below the minimum speed limit",
      "To police vehicles operating on an active duty run",
    ],
  },
  {
    question:
      "What must you reckon with when you see a hazard warning light flash?",
    answers: [
      "With a school bus with children alighting",
      "With a car being towed",
      "With a truck broken down",
    ],
    wrongChoices: [
      "A speed camera checkpoint",
      "An ambulance approaching",
      "With a priority vehicle executing an emergency lane change",
      "With a motorcycle traveling significantly below the legal speed limit",
      "With a driver adjusting their navigation system on the roadway",
    ],
  },
  {
    question:
      "For which purposes is a horn allowed to be used outside built-up areas?",
    answers: ["As a warning signal", "As an overtaking signal"],
    wrongChoices: [
      "To greet a driver or acquaintance walking on the sidewalk",
      "To express frustration at a vehicle driving too slowly in front of you",
      "To signal your intention to turn right at the next intersection",
      "To demand the right of way when entering a roundabout system",
      "To indicate that you are parking your vehicle on the roadside shoulder",
    ],
  },
  {
    question:
      "For which purpose is a horn allowed to be used in built-up areas?",
    answers: ["As a warning signal"],
    wrongChoices: [
      "As a greeting signal",
      "To warn parked vehicles",
      "To celebrate an event",
      "To signal your intention to park your vehicle in a tight space",
      "As an overtaking signal",
    ],
  },
  {
    question:
      "Where is it permitted to flash headlights to indicate your intention to overtake?",
    answers: [
      "In daylight outside built-up areas",
      "In darkness outside built-up areas",
    ],
    wrongChoices: [
      "In daylight inside built-up areas",
      "In darkness inside built-up areas",
      "When approaching a railway level crossing in an urban zone",
      "Only when driving in a residential area with designated calm traffic zones",
      "Only when overtaking a large commercial vehicle inside a tunnel system",
    ],
  },
];
*/

/*
let lesson6 = [
  {
    question:
      "Why might a driver fail to notice the 'Give Way' sign at the next crossroads?",
    image: {
      src: "/src/assets/lesson6Assets/right%20of%20way1.webp",
      alt: "Night street scene with a car parked on the left, street lights creating a continuous row of lights, and a dark road ahead",
    },
    answers: [
      "The continuous row of lights could mislead the driver into thinking he has priority at the crossroads",
      "The condition and direction of the road gives the impression that this is a priority road",
    ],
    wrongChoices: [
      "The car parked on the left completely covers the shape of the sign.",
      "The high beams of oncoming traffic make all road signs temporarily invisible.",
      "The vehicle's automatic lane-keeping assist overrides manual steering inputs.",
      "The dashboard display brightness automatically decreases when approaching junctions.",
      "The road surface transitions from asphalt to gravel just before the intersection.",
    ],
  },
  {
    question:
      "What do you have to particularly remember at crossroads and junctions in a built-up area?",
    answers: [
      "Intersecting roads may have priority even though they are narrow and less well developed",
    ],
    wrongChoices: [
      "Vehicles traveling on wider roads automatically hold priority over those on narrower streets.",
      "Public transport buses always have the right of way regardless of road classifications.",
      "Multi-lane highways inside city centers waive the right-before-left rule entirely.",
      "You only need to give way to commercial heavy delivery trucks on narrow streets.",
      "The speed limit automatically drops to 10 km/h at every urban junction.",
    ],
  },
  {
    question: "What must you reckon with?",
    image: {
      src: "/src/assets/lesson6Assets/right%20of%20way3.webp",
      alt: "Daytime road view from behind a white bakki, with a pedestrian on the right sidewalk and other vehicles ahead in a town area",
    },
    answers: ["With a small vehicle driving in front of the Bakki"],
    wrongChoices: [
      "With a pedestrian suddenly jumping off the back of the white Bakki.",
      "With the white Bakki instantly switching into reverse gear without warning.",
      "With a sudden failure of the town area's street lighting system.",
      "With the sidewalk on the right narrowing down into an unpaved ditch.",
      "With an oncoming vehicle executing a high-speed U-turn over the median.",
    ],
  },
  {
    question: "Where must you wait?",
    image: {
      src: "/src/assets/lesson6Assets/right%20of%20way4.webp",
      alt: "Driver's view of a street intersection with a stop sign, traffic lights showing red, and a stop line on the road",
    },
    answers: ["At the stop line"],
    wrongChoices: [
      "After the stop line.",
      "At least two vehicle lengths behind the marked stop line.",
      "In the exact center of the crossroads intersection.",
      "Parallel to the cross-traffic vehicle path on the left.",
      "At the edge of the pedestrian sidewalk structure.",
    ],
  },
  {
    question:
      "At which places where there are no traffic signs regulating priority does the rule 'right before left' apply?",
    answers: ["At crossroads and junctions"],
    wrongChoices: [
      "At all roundabouts and designated circular traffic islands.",
      "On roads featuring physically separate roadways for each direction.",
      "At field or forest tracks merging onto a paved highway.",
      "On properties and parking lot exits leading onto a public street.",
      "At all intersections controlled by functional overhead traffic signals.",
    ],
  },
  {
    question:
      "At which places where there are no traffic signs regulating priority does the rule 'right before left' apply?",
    answers: ["At crossroads and junctions"],
    wrongChoices: [
      "At entries to dual-carriageway national expressways.",
      "Where a minor farm track intersects an unpaved rural bypass.",
      "At pedestrian zebra crossings equipped with flashing amber beacons.",
      "On all designated priority routes outside residential districts.",
      "At exits leading out of public petrol filling stations.",
    ],
  },
  {
    question:
      "You are approaching a crossroads where the priority situation is not clear to you straightaway. What do you do?",
    answers: [
      "Wait, observe and come to an agreement with others, if necessary",
    ],
    wrongChoices: [
      "Accelerate quickly to clear the crossroads before other vehicles can react.",
      "Maintain your current speed and flash your high beams continuously.",
      "Sound your horn forcefully and assert your right of way regardless.",
      "Pull over onto the left shoulder and deactivate your engine.",
      "Strictly observe the vehicle to your left and match its speed.",
    ],
  },
  {
    question:
      "You want to cross a priority road. The sight to both sides is greatly impaired by parking vehicles. What do you do?",
    answers: ["Drive onto the crossroads slowly and carefully"],
    wrongChoices: [
      "Sound your horn repeatedly to force parked cars to move away.",
      "Accelerate quickly to cross the intersection as fast as possible.",
      "Stop completely in the center of the priority road to get a clear view.",
      "Flash your high beams to signal cross traffic to halt for you.",
      "Reverse back down your lane and look for an alternative route.",
    ],
  },
  {
    question: "Which conduct is correct?",
    image: {
      src: "/src/assets/lesson6Assets/right%20of%20way9.webp",
      alt: "Driver's view approaching a t-junction with a cyclist on the left side of the junction",
    },
    answers: ["I may continue", "The cyclist must wait"],
    wrongChoices: [
      "I must come to a complete stop before the junction line.",
      "The cyclist has priority to cross before me.",
      "I must yield to all traffic coming from the left side.",
      "The cyclist must dismount and push the bicycle across the road.",
      "I must flash my high beams to indicate I am yielding.",
    ],
  },
  {
    question: "Which conduct is correct?",
    image: {
      src: "/src/assets/lesson6Assets/right%20of%20way10.webp",
      alt: "Illustration of a four-way intersection seen from a car’s perspective. The car is intending to turn right. The motocyclist is crossing from left to right in front of the junction. A motorcyclist is approaching head on, in the oncoming lane.",
    },
    answers: [
      "I must allow the cyclist to pass",
      "The motorcyclist must wait for me",
    ],
    wrongChoices: [
      "I have right of way over both road users.",
      "The oncoming cyclist must wait.",
      "The motocyclist crossing from left to right can pass infront of the oncoming cyclist.",
      "I must wait until the intersection is entirely clear of all ambient traffic.",
      "The oncoming motorcyclist must signal left to allow me to pass.",
    ],
  },
  {
    question: "Which conduct is correct?",
    image: {
      src: "/src/assets/lesson6Assets/right%20of%20way11.webp",
      alt: "Driver's view at a 4 way junction intending to turn right, with an oncoming red car and yellow car on the right passing to the left ",
    },
    answers: ["The red and yellow car proceed first"],
    wrongChoices: [
      "I have priority over both vehicles.",
      "The yellow car waits for the red car, then I proceed before the yellow car.",
      "The red car must yield to my vehicle because I am turning right.",
      "The yellow car proceeds first, while the red car must wait for me.",
      "The red car proceeds first, while the yellow car must wait for me.",
    ],
  },
  {
    question: "Which conduct is correct?",
    image: {
      src: "/src/assets/lesson6Assets/right%20of%20way12.webp",
      alt: "Driver's view at a 4 way intersection intending to turn right, with a red car on the right passing to the left and a green car on the left passing to the right",
    },
    answers: [
      "I allow the red car to proceed",
      "I may pass in front of the green car",
    ],
    wrongChoices: [
      "I have priority over both the red and green cars.",
      "The green car must wait for the red car to clear the junction.",
      "The red car must yield to the green car.",
      "I must wait for both cars to proceed.",
      "The green car has priority over my vehicle.",
    ],
  },
  {
    question: "Which conduct is correct?",
    image: {
      src: "/src/assets/lesson6Assets/right%20of%20way13.webp",
      alt: "Driver's view intending to turn to the right at a 4 way junction with an oncoming truck and a yellow car on the left going to the right.",
    },
    answers: ["I allow the truck to proceed", "The yellow car must wait"],
    wrongChoices: [
      "I may turn in front of the oncoming truck safely.",
      "The yellow car has priority over the oncoming truck.",
      "The truck must wait for both my vehicle and the yellow car.",
      "I must wait for the yellow car to clear the intersection first.",
      "All three vehicles must come to a stop and negotiate manually.",
    ],
  },
  {
    question: "Which conduct is correct?",
    image: {
      src: "/src/assets/lesson6Assets/right%20of%20way14.webp",
      alt: "Driver's view at a 4 way intersection intending to proceed straight with a cyclist on the left going to the right and a motorcycle on the right intending to proceed to his left",
    },
    answers: ["The cyclist must wait", "I may pass in front of the motorcycle"],
    wrongChoices: [
      "The motorcycle has priority over my vehicle.",
      "I must yield to the cyclist coming from the left.",
      "The cyclist has priority over the motorcycle on the right.",
      "The motocyclist must proceed first.",
      "I must stop and wait for both vehicles to proceed first.",
    ],
  },
  {
    question: "Which conduct is correct?",
    image: {
      src: "/src/assets/lesson6Assets/right%20of%20way15.webp",
      alt: "Driver's view intending to turn right at a 4 way junction with a blue car on the left and a cyclist ahead, both intending to turn right",
    },
    answers: ["I must allow the cyclist to turn", "The blue car must wait"],
    wrongChoices: [
      "I must allow the blue car to proceed.",
      "The cyclist must wait.",
      "I may turn in front of the cyclist.",
      "Both the blue car and the cyclist must yield to me.",
    ],
  },
  {
    question: "Which conduct is correct?",
    image: {
      src: "/src/assets/lesson6Assets/right%20of%20way16.webp",
      alt: "Driver's view approaching a one way t-junction with a blue car on the left turning to its left and a motorcyclist ahead turning right",
    },
    answers: [
      "The blue car on the left must wait",
      "The motorcyclist must wait",
    ],
    wrongChoices: [
      "The blue car has priority over the motorcyclist ahead.",
      "I must wait for the blue car on the left to turn.",
      "I have priority over the blue car only.",
      "The motorcyclist must proceed first.",
      "All vehicles may proceed simultaneously without yielding at a slower speed.",
    ],
  },
  {
    question: "Which conduct is correct?",
    image: {
      src: "/src/assets/lesson6Assets/right%20of%20way17.webp",
      alt: "Driver's view intending to proceed ahead at a junction with a red truck on the right going to the left and a cyclist ahead also turning left",
    },
    answers: [
      "I am not allowed to cross the crossroads first",
      "The red truck may proceed after the cyclist",
    ],
    wrongChoices: [
      "I must cross the crossroads first.",
      "I am allowed to cross the crossroads before the cyclist turns.",
      "The cyclist must wait for the red truck to complete its turn.",
      "I must yield to the red truck but not to the cyclist.",
    ],
  },
  {
    question: "Which conduct is correct?",
    image: {
      src: "/src/assets/lesson6Assets/right%20of%20way18.webp",
      alt: "Driver's view approaching a yield sign at a junction with a cyclist on the right turning to his left",
    },
    answers: ["I must wait"],
    wrongChoices: [
      "The cyclist must stop and wait for me to pass.",
      "I have priority because the cyclist is turning to his left.",
      "I may proceed slowly if I flash my headlights at the cyclist.",
      "I should accelerate to clear the junction before the cyclist turns.",
    ],
  },
  {
    question: "Which conduct is correct?",
    image: {
      src: "/src/assets/lesson6Assets/right%20of%20way19.webp",
      alt: "Driver's view approaching a priority sign at an intersection, a blue car on the left and a yellow car on the right",
    },
    answers: ["I am allowed to turn in front of the two other cars"],
    wrongChoices: [
      "The blue car on the left has priority over my vehicle.",
      "The yellow car on the right has priority over my vehicle.",
      "I must stop and wait for both vehicles to cross before me.",
      "The yellow car may turn in front of my vehicle.",
    ],
  },
  {
    question: "Which conduct is correct?",
    image: {
      src: "/src/assets/lesson6Assets/right%20of%20way20.webp",
      alt: "Driver's view approaching a yield sign with a blue truck on the right and a tractor on the left",
    },
    answers: [
      "I must allow the blue truck to proceed",
      "I must allow the tractor to turn",
    ],
    wrongChoices: [
      "The tractor has priority over the blue truck.",
      "I have priority over the tractor coming from the left.",
      "I may proceed in front of the blue truck carefully.",
      "The blue truck must wait for the tractor to turn.",
      "I may pass infront of both vehicles.",
    ],
  },
  {
    question: "Which conduct is correct?",
    image: {
      src: "/src/assets/lesson6Assets/right%20of%20way21.webp",
      alt: "Driver's view approaching a priority sign at a junction turning left with a bus on the left and an oncoming motorcycle with priority proceeding ahead",
    },
    answers: [
      "I must allow the motorcycle to proceed",
      "I proceed in front of the bus",
    ],
    wrongChoices: [
      "I may turn infront of both vehicles.",
      "The motorcycle must wait for me to complete my left turn.",
      "The bus has priority over the oncoming motorcycle.",
      "I must wait for the bus to turn before I proceed.",
      "The motorcycle must wait for the bus.",
    ],
  },
  {
    question: "Which conduct is correct?",
    image: {
      src: "/src/assets/lesson6Assets/right%20of%20way22.webp",
      alt: "Driver's view at an intersection with a yield sign, a bus with a yield sign on the right turning left and a motorcycle on the right proceeding to the left",
    },
    answers: [
      "I must allow the motorcycle to pass",
      "I pass in front of the bus",
    ],
    wrongChoices: [
      "The bus has priority over the motorcycle.",
      "I must wait for the bus to turn.",
      "The motorcycle must wait for the bus to pass.",
      "I must yield to both the motorcycle and the bus.",
      "The bus has priority over my vehicle.",
    ],
  },
  {
    question: "Which conduct is correct?",
    image: {
      src: "/src/assets/lesson6Assets/right%20of%20way23.webp",
      alt: "Driver's view approaching a yield sign at a 4 way junction intending to turn right, a tram on the left and an  oncoming motorcycle proceeding ahead",
    },
    answers: [
      "I must allow the tram to proceed",
      "I must allow the motorcycle to proceed",
    ],
    wrongChoices: [
      "I have priority over the motorcycle because I am turning right.",
      "The motocycle has priority over both vehicles.",
      "I may turn in front of the tram but must yield to the motorcycle.",
      "I must wait for the tram only to pass then i turn.",
      "I may turn infront of the tram and motocycle.",
    ],
  },
  {
    question: "Which conduct is correct?",
    image: {
      src: "/src/assets/lesson6Assets/right%20of%20way24.webp",
      alt: "Driver's view at a junction with a yield sign, a tram on the leftturning right with a yield sign and a motorcycle on the right proceeding to its left.",
    },
    answers: ["I must allow the motorcycle to turn in front of me"],
    wrongChoices: [
      "I must proceed before the motocycle.",
      "The bus has priority over the motorcycle on the right.",
      "The motorcycle must wait for the bus to turn in front of it.",
      "The bus has priority over both vehicles.",
      "Both the motorcycle and the bus must wait for me.",
    ],
  },
  {
    question: "Which conduct is correct?",
    image: {
      src: "/src/assets/lesson6Assets/right%20of%20way25.webp",
      alt: "Driver's view at a junction with priority sign and a red car on the left",
    },
    answers: ["I may proceed first"],
    wrongChoices: [
      "The red car must proceed first.",
      "The red car has priority.",
      "I do not have priority.",
    ],
  },
  {
    question: "Which conduct is correct?",
    image: {
      src: "/src/assets/lesson6Assets/right%20of%20way26.webp",
      alt: "Driver's view at a junction with a priority road sign, a motorcycle ahead and a yellow car on the right",
    },
    answers: [
      "I may only turn after the motorcycle",
      "I may turn in front of the yellow car",
    ],
    wrongChoices: [
      "I have priority over the motorcycle ahead.",
      "The yellow car may turn in front of my vehicle.",
      "The motorcycle must wait for the yellow car to turn.",
      "I must wait for both the motorcycle and the yellow car.",
      "The yellow car has priority over the motorcycle ahead.",
    ],
  },
  {
    question: "Which conduct is correct?",
    image: {
      src: "/src/assets/lesson6Assets/right%20of%20way27.webp",
      alt: "Driver's view at a junction with a tram on the left and tram tracks on the road",
    },
    answers: ["I must allow the tram to pass"],
    wrongChoices: [
      "The tram must allow me to pass because I am on its right.",
      "I have priority over the tram at all non-signalized junctions.",
      "The tractor may turn infront of me after the tram passes.",
      "I may proceed before both vehicles.",
    ],
  },
  {
    question: "Which conduct is correct?",
    image: {
      src: "/src/assets/lesson6Assets/right%20of%20way28.webp",
      alt: "Driver's view at a stop sign with a bus ahead and a cyclist on the right",
    },
    answers: [
      "I must allow the cyclist to proceed",
      "I must allow the bus to proceed",
      "I must first stop at the stop line",
    ],
    wrongChoices: [
      "The bus must move first.",
      "I have priority over the cyclist on the right.",
      "The bus must wait for my vehicle to move off first.",
      "I may proceed straight ahead before the bus moves.",
      "The bus has priority over the cyclist on the right.",
    ],
  },
  {
    question: "Which conduct is correct?",
    image: {
      src: "/src/assets/lesson6Assets/right%20of%20way29.webp",
      alt: "Driver's view approaching a yield sign with a priority road sign and a cyclist ahead",
    },
    answers: ["I must wait"],
    wrongChoices: [
      "The cyclist must wait for me to pass.",
      "I have priority because of the priority road sign.",
      "I may proceed slowly if the cyclist continues straight.",
      "The priority road sign gives me absolute right of way.",
    ],
  },
  {
    question: "Which conduct is correct?",
    image: {
      src: "/src/assets/lesson6Assets/right%20of%20way30.webp",
      alt: "Driver's view at a junction with a priority road sign and a yellow car on the left",
    },
    answers: ["I must wait"],
    wrongChoices: [
      "The yellow car must wait.",
      "I have priority over the yellow car at this junction.",
      "The yellow car must yield because it is on my left.",
      "We may both proceed simultaneously without stopping.",
    ],
  },
  {
    question: "Which conduct is correct?",
    image: {
      src: "/src/assets/lesson6Assets/right%20of%20way31.webp",
      alt: "Driver's view approaching a yield sign with a priority road sign and a green car on the right",
    },
    answers: ["I must wait"],
    wrongChoices: [
      "The green car must wait for me.",
      "I have priority because of the priority road sign.",
      "The green car must yield because it faces a yield sign.",
      "We can both proceed together without any conflict.",
    ],
  },
  {
    question: "Which conduct is correct?",
    image: {
      src: "/src/assets/lesson6Assets/right%20of%20way32.webp",
      alt: "Driver's view on a priority road with a car on the left, red arrows showing turning path",
    },
    answers: ["I may proceed"],
    wrongChoices: [
      "I must stop and allow the car on the left to pass.",
      "The car on the left has priority to turn before me.",
      "The car on the left can proceed straight ahead first.",
      "I must flash my high beams to indicate I am yielding.",
    ],
  },
  {
    question: "Which conduct is correct?",
    image: {
      src: "/src/assets/lesson6Assets/right%20of%20way33.webp",
      alt: "Driver's view at a junction with a priority road sign and a motorcycle on the left",
    },
    answers: ["I must allow the motorcycle to pass"],
    wrongChoices: [
      "The motorcycle on the left must wait for me.",
      "I have priority because I am traveling straight ahead.",
      "The motorcycle must yield because it is on my left.",
      "We may both proceed at the same time without cross conflict.",
    ],
  },
  {
    question: "Which conduct is correct?",
    image: {
      src: "/src/assets/lesson6Assets/right%20of%20way34.webp",
      alt: "Driver's view at a junction with a priority road sign, a red car ahead and a tractor on the right",
    },
    answers: ["I may proceed first"],
    wrongChoices: [
      "The red car has priority over my vehicle.",
      "The tractor on the right has priority over my vehicle.",
      "I must wait for the red car to execute its turn.",
      "I must wait for the tractor on the right to pass.",
    ],
  },
  {
    question: "Which conduct is correct?",
    image: {
      src: "/src/assets/lesson6Assets/right%20of%20way35.webp",
      alt: "Driver's view at a junction with a yield sign, a blue car on the left and a motorcycle on the right",
    },
    answers: [
      "I must allow the motorcycle to proceed",
      "I must allow the blue car to proceed",
    ],
    wrongChoices: [
      "I may proceed before the blue car.",
      "The blue car has priority over the motorcycle on the right.",
      "I may proceed in front of the motorcycle.",
      "The motorcycle must wait for the blue car to pass.",
    ],
  },
  {
    question: "Which conduct is correct?",
    image: {
      src: "/src/assets/lesson6Assets/right%20of%20way36.webp",
      alt: "Driver's view at a junction with a priority road sign, a red car ahead and a blue truck on the right",
    },
    answers: [
      "I must allow the red car to pass",
      "I may turn in front of the blue truck",
    ],
    wrongChoices: [
      "I must allow the truck to pass.",
      "I may turn in front of the red car.",
      "The red car must wait for the blue truck to pass.",
      "I must wait for both the red car and the blue truck.",
      "I may turn infront of both vehicles.",
    ],
  },
  {
    question: "Which conduct is correct?",
    image: {
      src: "/src/assets/lesson6Assets/right%20of%20way37.webp",
      alt: "Driver's view at a junction with a priority road sign, a yellow truck on the left and a green car on the right",
    },
    answers: [
      "I must allow the yellow truck to pass",
      "I may turn in front of the green car",
    ],
    wrongChoices: [
      "The green car has priority over my vehicle.",
      "I must allow the green car to proceed before me.",
      "The yellow truck must wait for the green car to pass.",
      "I must wait for both the yellow truck and the green car.",
      "The green car has priority over the yellow truck.",
    ],
  },
  {
    question: "Which conduct is correct?",
    image: {
      src: "/src/assets/lesson6Assets/right%20of%20way38.webp",
      alt: "Driver's view at a junction with a priority road sign, a blue car on the left and a green car on the right",
    },
    answers: ["I may proceed"],
    wrongChoices: [
      "The blue car may turn infront of me.",
      "The green car must proceed before me.",
      "I must allow both cars to pass before I proceed.",
      "The blue car has priority over the green car.",
    ],
  },
  {
    question: "Who must wait?",
    image: {
      src: "/src/assets/lesson6Assets/right%20of%20way39.webp",
      alt: "Driver's view from a main road looking at a car entering from a farm track on the left",
    },
    answers: ["The car coming from the farm track"],
    wrongChoices: [
      "I must wait for the car coming from the farm track.",
      "The car on the farm track has priority over me.",
      "We must both stop and come to an agreement.",
      "The oncomming vehicle.",
      "I must yield to any vehicle entering from my left.",
    ],
  },
  {
    question: "You want to turn left from this farm track. Who must wait?",
    image: {
      src: "/src/assets/lesson6Assets/right%20of%20way40.webp",
      alt: "Driver's view from a farm track looking onto a main road",
    },
    answers: ["I must wait"],
    wrongChoices: [
      "The traffic on the main road must wait for me.",
      "I have priority because I am turning to the left.",
      "The main road traffic must follow the right-before-left rule.",
      "I may proceed if there are no signs on the main road.",
      "Vehicles on the main road must stop to let me join.",
    ],
  },
  {
    question: "Which conduct is correct?",
    image: {
      src: "/src/assets/lesson6Assets/right%20of%20way41.webp",
      alt: "Driver's view at a junction with a stop sign, a motorcycle on the left",
    },
    answers: ["I may proceed"],
    wrongChoices: [
      "I must wait for the motorcycle.",
      "The motorcycle has priority over my vehicle.",
      "I must stop completely because of the stop sign.",
      "We must both stop and come to an agreement.",
    ],
  },
  {
    question: "Which conduct is correct?",
    image: {
      src: "/src/assets/lesson6Assets/right%20of%20way42.webp",
      alt: "Driver's view approaching a roundabout with a yellow car entering from the right",
    },
    answers: ["I must allow the yellow car to pass"],
    wrongChoices: [
      "The yellow car must allow me to enter the roundabout.",
      "I have priority over all vehicles inside the roundabout.",
      "The yellow car must stop because it is on my right.",
      "We may both enter the roundabout simultaneously.",
      "Vehicles inside the roundabout must yield to entering traffic.",
    ],
  },
  {
    question: "Which conduct is correct?",
    image: {
      src: "/src/assets/lesson6Assets/right%20of%20way43.webp",
      alt: "Driver's view at a junction with a motorcycle on the left and a blue car on the right",
    },
    answers: [
      "I must allow the blue car to pass",
      "I may proceed in front of the motorcycle",
    ],
    wrongChoices: [
      "The motorcycle on the left has priority over me.",
      "The blue car must wait for the motorcycle to pass.",
      "I must wait for both the motorcycle and the blue car.",
      "I may pass infront of both vehicles.",
    ],
  },
  {
    question: "Which conduct is correct?",
    image: {
      src: "/src/assets/lesson6Assets/right%20of%20way44.webp",
      alt: "Driver's view at a junction with a blue car on the right and a red car ahead",
    },
    answers: [
      "I must give way to the blue car coming from the right",
      "I have priority over the red car",
    ],
    wrongChoices: [
      "I must give way to the red car.",
      "The blue car is the last to proceed.",
      "I must wait for both the blue and red cars.",
      "The red car has priority over my vehicle.",
      "The red car must give way to the blue car.",
    ],
  },
  {
    question: "Which conduct is correct?",
    image: {
      src: "/src/assets/lesson6Assets/right%20of%20way45.webp",
      alt: "Driver's view at a junction with a cyclist on the left and a green car on the right",
    },
    answers: [
      "I must allow the cyclist to pass",
      "The green car proceeds after the cyclist",
    ],
    wrongChoices: [
      "The green car proceeds before the cyclist.",
      "I have priority over both the cyclist and the green car.",
      "The cyclist must wait for the green car to pass.",
      "I must wait for the green car only to pass first.",
    ],
  },
  {
    question: "Which conduct is correct at a 3-way-stop?",
    answers: [
      "At any junction where all roads have a STOP sign, the driver of every vehicle shall stop",
      "The stopped vehicle which arrived first shall have priority to move off first, provided that it is safe to do so",
    ],
    wrongChoices: [
      "Only the vehicle facing the narrowest road is required to stop.",
      "The vehicle turning right always has priority over all other vehicles.",
      "Drivers must follow the right-before-left rule to determine priority.",
      "All vehicles may move off simultaneously at a reduced speed.",
      "The heaviest vehicle always has priority to move off first.",
    ],
  },
  {
    question: "Which conduct is correct?",
    image: {
      src: "/src/assets/lesson6Assets/right%20of%20way47.webp",
      alt: "Driver's view turning left with a cyclist ahead on the left and a blue truck on the right",
    },
    answers: [
      "I must allow the cyclist to proceed",
      "I must wait for the blue truck",
    ],
    wrongChoices: [
      "The blue truck must wait for my vehicle.",
      "I have priority over both the cyclist and the truck.",
      "The cyclist must wait for both vehicles to pass.",
      "I can proceed before the cyclist executes his turn.",
    ],
  },
  {
    question: "Which conduct is correct?",
    image: {
      src: "/src/assets/lesson6Assets/right%20of%20way48.webp",
      alt: "Driver's view at a junction with a warning sign and a yellow car on the left",
    },
    answers: ["I proceed first"],
    wrongChoices: [
      "The yellow car on the left proceeds first.",
      "I must wait for the yellow car to pass.",
      "The warning sign requires me to stop completely.",
      "The yellow car has priority because it is going to my right.",
      "We must both stop and come to an agreement.",
    ],
  },
  {
    question: "Which conduct is correct at a 4-way-stop?",
    answers: [
      "At crossings where all roads have a STOP sign, the driver shall stop",
      "The stopped vehicle which arrived first shall have priority to move off first, provided that it is safe to do so",
    ],
    wrongChoices: [
      "Vehicles intending to proceed straight ahead always move first.",
      "Priority is determined strictly by the right-before-left rule.",
      "The vehicle facing the widest roadway has absolute priority.",
      "All drivers may proceed slowly without stopping if the road is clear.",
      "The vehicle traveling at the highest speed moves off first.",
    ],
  },
  {
    question: "What applies here?",
    image: {
      src: "/src/assets/lesson6Assets/right%20of%20way50.webp",
      alt: "Driver's view at traffic lights showing red for all directions in a city",
    },
    answers: [
      "Vehicles turning left may turn off",
      "Vehicles proceeding straight ahead and turning right must wait",
    ],
    wrongChoices: [
      "Vehicles proceeding straight ahead may proceed.",
      "Vehicles turning right have absolute priority to proceed.",
      "All vehicles may proceed slowly through the intersection.",
      "Vehicles turning left must stop and wait for cross traffic.",
      "Vehicles proceeding straight ahead may turn right.",
    ],
  },
  {
    question: "What is the correct procedure?",
    image: {
      src: "/src/assets/lesson6Assets/right%20of%20way51.webp",
      alt: "Driver's view at a junction with traffic lights red, a green car on the left, and yield signs",
    },
    answers: [
      "The green car must wait",
      "I may turn observing the traffic signs",
    ],
    wrongChoices: [
      "I must wait for the red traffic light to change.",
      "The green car must proceed.",
      "I must stop completely before turning right.",
      "We must both wait for the traffic lights to turn green.",
    ],
  },
  {
    question: "What do you do in this situation?",
    image: {
      src: "/src/assets/lesson6Assets/right%20of%20way52.webp",
      alt: "Driver's view at a junction with green traffic light and a stop sign on the left",
    },
    answers: ["Cross the crossroads without stopping"],
    wrongChoices: [
      "Stop completely at the stop sign before crossing.",
      "Wait for the traffic light to turn red before proceeding.",
      "Yield to all cross traffic coming from the left side.",
      "Stop at the line and wait for oncoming traffic to clear.",
      "Proceed only if there are no pedestrians on the sidewalk.",
    ],
  },
  {
    question:
      "The traffic lights are on flashing amber. What is the correct procedure?",
    image: {
      src: "/src/assets/lesson6Assets/right%20of%20way53.webp",
      alt: "Driver's view at a junction with flashing amber traffic light and a yield sign",
    },
    answers: ["Approach with greater caution, giving way if necessary"],
    wrongChoices: [
      "Stop completely at the yield sign before proceeding.",
      "Maintain your current speed without shifting attention.",
      "The flashing amber light indicates the system is fully operational.",
      "Accelerate quickly to clear the junction immediately.",
    ],
  },
  {
    question: "What must you do here?",
    image: {
      src: "/src/assets/lesson6Assets/right%20of%20way54.webp",
      alt: "Driver's view turning right at a junction with a red van ahead and green traffic light",
    },
    answers: ["Turn right at a brisk pace"],
    wrongChoices: [
      "Stop in the middle of the junction and wait for the van.",
      "Turn right slowly while sounding your horn continuously.",
      "Abort the turn and proceed straight ahead instead.",
      "Flash your high beams to force the red van to stop.",
    ],
  },
  {
    question:
      "What is permitted at these traffic lights with green arrow sign?",
    image: {
      src: "/src/assets/lesson6Assets/right%20of%20way55.webp",
      alt: "Traffic light showing red light with a green right arrow signal next to it",
    },
    answers: [
      "Turn right from the right lane when there is no obstruction or danger to others",
    ],
    wrongChoices: [
      "Drive straight through the intersection from any available lane.",
      "Turn right only when the main traffic light switches to green.",
      "Turn right from the left lane if it is completely clear.",
      "U-turn safely without causing an obstruction to cross traffic.",
      "Turn right immediately without checking for cross traffic.",
    ],
  },
  {
    question:
      "When is it permitted to turn right at these traffic lights with green arrow sign?",
    image: {
      src: "/src/assets/lesson6Assets/right%20of%20way56.webp",
      alt: "Traffic light showing red light with a green right arrow signal next to it",
    },
    answers: [
      "When there is no danger to other road users, particularly pedestrians and cross traffic",
      "When there is no obstruction to other road users, particularly pedestrians and cross traffic",
    ],
    wrongChoices: [
      "Only when the cross traffic faces a red light signal.",
      "When your vehicle is equipped with a functional right indicator.",
      "Only during daylight hours when visibility is completely clear.",
      "When you have brought your vehicle to a complete stop for 5 seconds.",
      "Only when traveling in a commercial or public utility vehicle.",
    ],
  },
  {
    question:
      "Where should a vehicle stop at these traffic lights with green arrow sign intending to drive straight?",
    image: {
      src: "/src/assets/lesson6Assets/right%20of%20way57.webp",
      alt: "Traffic light showing red light with a green right arrow signal next to it",
    },
    answers: [
      "At the stop line",
      "Before the crossing or junction if there is no stop line",
    ],
    wrongChoices: [
      "Directly beneath the green arrow sign structure.",
      "In the middle of the crossing or junction lane.",
      "At least one car length behind the crosswalk line.",
      "Parallel to the parked vehicles on the right shoulder.",
      "After the stop line.",
    ],
  },
  {
    question: "What do these permanent control signs mean?",
    image: {
      src: "/src/assets/lesson6Assets/right%20of%20way58.webp",
      alt: "Overhead lane control signs showing green arrow for lane 1, yellow arrow for lane 2, red X for lanes 3 and 4",
    },
    answers: [
      "I must switch from lane 2 to lane 1",
      "I may not use lanes 3 and 4",
    ],
    wrongChoices: [
      "I must switch from lane 1 to lane 2.",
      "I may use lanes 3 and 4 during peak rush hours.",
      "Lane 2 is permanently closed to all motorized traffic.",
      "I must bring my vehicle to a complete stop in lane 2.",
      "Lanes 3 and 4 are reserved for oncoming emergency vehicles.",
    ],
  },
  {
    question: "What do these signals indicate?",
    image: {
      src: "/src/assets/lesson6Assets/right%20of%20way59.webp",
      alt: "Overhead lane control signs showing green arrows for lanes 1 and 2, red X for lanes 3 and 4",
    },
    answers: [
      "The two lanes on the left are open to traffic",
      "You may not use the two lanes on the right",
    ],
    wrongChoices: [
      "The two lanes on the right are open to public transport.",
      "You may use all four lanes at a reduced speed limit.",
      "The two lanes on the left are strictly closed to traffic.",
      "You must switch from the left lanes to the right lanes.",
      "Lanes 3 and 4 are open only for overtaking maneuvers.",
    ],
  },
  {
    question:
      "You are driving at a speed of approximately 40 km/h. The lights change from 'green' to 'amber' when you are 10 m away. What do you do?",
    answers: ["Proceed"],
    wrongChoices: [
      "Stop immediately.",
      "Sound your horn and flash your high beams continuously.",
      "Switch on your hazard lights and bring the car to a halt.",
      "Execute a sharp left turn into the nearest side road.",
      "Slow down gradually and stop exactly at the line.",
    ],
  },
  {
    question:
      "You are driving at a speed of approximately 40 km/h. The lights change from 'green' to 'amber' when you are 40 m away. What do you do?",
    answers: ["Stop"],
    wrongChoices: [
      "Proceed.",
      "Accelerate quickly to clear the junction before the red light.",
      "Maintain your speed and monitor the cross traffic closely.",
      "Switch on your hazard lights and continue driving straight.",
    ],
  },
  {
    question:
      "You are approaching a traffic light which has been 'green' for some time. What do you do?",
    answers: [
      "Watch the traffic light closely",
      "Approach but be ready to stop",
    ],
    wrongChoices: [
      "Accelerate quickly to pass before the light changes to amber.",
      "Maintain your speed and ignore the signal state changes.",
      "Deactivate your headlights to see the bulb changes clearer.",
      "Coast in neutral to save fuel while approaching the intersection.",
    ],
  },
  {
    question:
      "The traffic light has just changed to 'red'. You intend to turn right. What do you do?",
    image: {
      src: "/src/assets/lesson6Assets/right%20of%20way63.webp",
      alt: "Driver's view at a junction with traffic lights showing red, a van ahead",
    },
    answers: ["Stop"],
    wrongChoices: [
      "Proceed.",
      "Creep slowly into the intersection and wait for a gap.",
      "Flash your high beams and complete your turn quickly.",
      "Switch on your hazard lights and continue turning right.",
    ],
  },
  {
    question:
      "A police officer is regulating the traffic at the crossroads even though the traffic lights are in operation. What applies?",
    answers: ["The police officer's signals"],
    wrongChoices: [
      "The operating traffic lights take priority.",
      "The priority road signs beneath the lights apply.",
      "The standard right-before-left rule must be followed.",
      "Both traffic lights and police officer apply.",
    ],
  },
  {
    question:
      "A police officer is regulating the traffic at a crossroads where there are also traffic signs governing priority. What applies?",
    answers: ["The police officer's signals"],
    wrongChoices: [
      "The priority traffic signs take precedence.",
      "The standard right-before-left statutory rule applies.",
      "The signs apply only if the officer leaves the junction.",
      "The priority rules change based on the traffic volume.",
    ],
  },
  {
    question: "How important are instructions from police officers?",
    answers: ["They must be obeyed"],
    wrongChoices: [
      "They must be obeyed only if traffic signs are not working.",
      "They apply only during daylight hours or peak rush times.",
      "They can be safely ignored if traffic volume is very low.",
    ],
  },
  {
    question: "What is correct?",
    image: {
      src: "/src/assets/lesson6Assets/right%20of%20way67.webp",
      alt: "Driver's view at a crossroads with a police officer directing traffic and a yellow car ahead",
    },
    answers: [
      "The yellow car must leave the crossroads",
      "I must get ready to proceed",
    ],
    wrongChoices: [
      "I must leave the crossroads before the yellow car.",
      "We may both proceed since we are going in different directions.",
      "I must come to a complete stop and switch off my engine.",
      "The police officer requires me to turn left immediately.",
      "Both my vehicle and the yellow car must remain stationary.",
    ],
  },
  {
    question: "What is correct?",
    image: {
      src: "/src/assets/lesson6Assets/right%20of%20way68.webp",
      alt: "Driver's view at a crossroads with a police officer standing in the middle of the road",
    },
    answers: ["Wait at the crossroads"],
    wrongChoices: [
      "Proceed slowly past the police officer's right side.",
      "Turn left immediately to clear the approach lane.",
      "Flash your high beams to ask the officer for priority.",
      "The red car must wait.",
    ],
  },
  {
    question: "What is correct?",
    image: {
      src: "/src/assets/lesson6Assets/right%20of%20way69.webp",
      alt: "Driver's view approaching a pedestrian crossing with a pedestrian walking across the road",
    },
    answers: ["Cross the crossroads at a brisk pace"],
    wrongChoices: [
      "Cross the crossroads at a faster pace.",
      "I must wait.",
      "Cross the roads with a horn to warn others.",
    ],
  },
  {
    question: "What applies here?",
    image: {
      src: "/src/assets/lesson6Assets/right%20of%20way70.webp",
      alt: "Driver's view approaching a crossroads regulated by police",
    },
    answers: ["The crossroads may be crossed"],
    wrongChoices: [
      "I must wait first.",
      "I must stop completely before the crossroad.",
      "Cross the crossroads at a faster pace.",
    ],
  },
  {
    question:
      "Which are the areas you must not drive into when there is traffic congestion?",
    answers: ["Crossroads", "Level crossings"],
    wrongChoices: [
      "Residential streets with a speed limit below 30 km/h.",
      "Multi-lane highways.",
      "Designated one-way streets outside industrial commercial zones.",
    ],
  },
  {
    question:
      "Which are the areas you must not drive into when there is traffic congestion?",
    answers: ["Junctions", "Pedestrian crossing"],
    wrongChoices: [
      "Roundabouts featuring multiple internal traffic lanes.",
      "Clearways designated exclusively for high-speed motor vehicles.",
      "Multi-lane highways.",
    ],
  },
  {
    question:
      "In which case are you not allowed to drive into the crossroads even though you have priority?",
    answers: [
      "If you would have to wait on the crossroads because of traffic congestion",
      "If you would obstruct a vehicle with flashing blue light and siren",
    ],
    wrongChoices: [
      "If you are driving a heavy commercial transport truck.",
      "If the intersecting road is unpaved or poorly maintained.",
      "If you intend to turn left rather than proceeding straight.",
      "If you would have to stop 10m after the crossroads in traffic congestion.",
      "If the weather conditions cause a reduction in tyre traction.",
    ],
  },
  {
    question:
      "In which cases are you not allowed to drive into the crossroads even though the traffic light is 'green'?",
    answers: [
      "If you would have to wait on the crossroads because of traffic congestion",
      "If a police officer orders you to stop",
    ],
    wrongChoices: [
      "If you are towing a heavy utility trailer unit.",
      "If your forward visibility is slightly restricted by mist.",
      "If you are executing a right turn into a minor street.",
      "If there are no oncoming vehicles inside the junction area.",
    ],
  },
  {
    question: "What do you do if the white car does not stop?",
    image: {
      src: "/src/assets/lesson6Assets/right%20of%20way75.webp",
      alt: "Rural road with a white car approaching from a side road on the right",
    },
    answers: ["Reduce speed, waive your priority"],
    wrongChoices: [
      "Accelerate quickly to pass before the white car pulls out.",
      "Maintain your speed and sound your horn continuously.",
      "Flash your high beams repeatedly to force the car to stop.",
      "Swerve onto the left shoulder to bypass the white car.",
      "Maintain your trajectory and insist tightly on your priority.",
    ],
  },
];
*/

/*
let lesson7Notes = [
  {
    question: "What do you do when you see this traffic sign?",
    image: {
      src: "/src/assets/lesson7Assets/rs1.webp",
      alt: "Red triangular warning sign with a black X in the center",
    },
    answers: ["Reduce Speed", "Be ready to brake"],
    wrongChoices: [
      "Accelerate to clear the intersection as quickly as possible.",
      "Sound your horn continuously to warn cross traffic.",
      "Maintain your speed until you pass the sign.",
      "Bring your vehicle to a complete stop regardless of traffic.",
      "Flash your headlights to instruct oncoming vehicles to yield.",
    ],
  },
  {
    question: "What should you remember when you see this traffic sign?",
    image: {
      src: "/src/assets/lesson7Assets/rs2.webp",
      alt: "Red triangular warning sign showing a 10% downhill slope",
    },
    answers: [
      "Braking distance is greater on downhill slopes than on level ground",
      "The brakes may become less efficient with prolonged use",
    ],
    wrongChoices: [
      "Shift your vehicle into neutral to conserve fuel.",
      "Braking distances are significantly shorter on downhill slopes.",
      "Turn off your engine to increase engine braking power.",
      "Uphill traffic must strictly yield to downhill traffic.",
      "Apply the handbrake continuously to maintain a slow speed.",
    ],
  },
  {
    question: "What should you remember when you see this traffic sign?",
    image: {
      src: "/src/assets/lesson7Assets/rs3.webp",
      alt: "Red triangular warning sign showing falling rocks from a cliff",
    },
    answers: [
      "Avoid stopping and parking because of the danger of falling rocks",
      "There may be rocks on the roadway",
      "Vehicles in front may brake suddenly",
    ],
    wrongChoices: [
      "You are only allowed to stop for 3minutes or less in this zone.",
      "Accelerate rapidly to minimize your time in the danger zone.",
      "Park closely to the cliff face to shield your vehicle.",
      "Overtaking is mandatory if the vehicle ahead slows down.",
      "The road is permanently closed to heavy goods vehicles.",
    ],
  },
  {
    question: "What do you do when you see this traffic sign?",
    image: {
      src: "/src/assets/lesson7Assets/rs4.webp",
      alt: "Red triangular warning sign showing a road narrowing on the right",
    },
    answers: [
      "Give precedence to oncoming traffic",
      "When there are two lanes in one direction, employ the zipper feed-in method",
    ],
    wrongChoices: [
      "You have priority over oncoming traffic.",
      "Drive partially on the shoulder to maintain your lane.",
      "Accelerate quickly to pass the narrowing before oncoming traffic.",
      "You must yield to all vehicles attempting to overtake you.",
      "Stop completely and wait for a traffic officer's signal.",
    ],
  },
  {
    question: "You see this traffic sign. What must you reckon with?",
    image: {
      src: "/src/assets/lesson7Assets/rs5.webp",
      alt: "Red triangular warning sign with two arrows pointing up and down",
    },
    answers: ["Oncoming traffic", "Dazzle from oncoming traffic at night"],
    wrongChoices: [
      "You are entering a one-way street.",
      "Overtaking is strictly prohibited.",
      "You have right of way over all oncoming traffic.",
      "The speed limit automatically drops to 30 km/h immediately.",
      "You may safely park on the right side of the roadway.",
    ],
  },
  {
    question: "What does this traffic sign require of you?",
    image: {
      src: "/src/assets/lesson7Assets/rs6.webp",
      alt: "Red triangular warning sign showing an adult and child crossing",
    },
    answers: ["Greatest alertness", "Readiness to brake", "Reduction in speed"],
    wrongChoices: [
      "Accelerate quickly to pass before pedestrians step out.",
      "Sound your horn to order pedestrians off the crossing.",
      "Pedestrians must wait for all motor vehicles to pass first.",
      "Overtaking is recommended to clear the area faster.",
      "You only need to stop if pedestrians are actively running.",
    ],
  },
  {
    question: "What must you reckon with when you see this traffic sign?",
    image: {
      src: "/src/assets/lesson7Assets/rs7.webp",
      alt: "Red triangular warning sign showing a bicycle",
    },
    answers: ["Cyclists crossing the roadway"],
    wrongChoices: [
      "Cyclists are legally required to dismount and walk here.",
      "Sound your horn continuously to warn cyclists of your approach.",
      "You have right of way over all crossing cyclists.",
      "Swerve into the oncoming lane to avoid cyclists entirely.",
      "Cyclists must strictly ride on the unpaved shoulder here.",
    ],
  },
  {
    question:
      "You pass this traffic sign while driving outside a built-up area. How far off is the hazard to be expected?",
    image: {
      src: "/src/assets/lesson7Assets/rs8.webp",
      alt: "Red triangular warning sign with an exclamation mark",
    },
    answers: ["Between 150 m and 250 m"],
    wrongChoices: [
      "Precisely 50 meters from the sign.",
      "The hazard is located more than 250 meters away.",
      "The warning applies only during nighttime hours.",
      "Between 50m and 150m.",
      "The hazard has already been safely passed.",
    ],
  },
  {
    question: "What must you remember when you see these traffic signs?",
    image: {
      src: "/src/assets/lesson7Assets/rs9.webp",
      alt: "Red triangular warning sign with exclamation mark and a car on a tow truck below",
    },
    answers: ["You must expect soft verges"],
    wrongChoices: [
      "You should intentionally drive on the verge to allow overtaking.",
      "The verge is heavily reinforced for heavy goods vehicles.",
      "Parking on the verge is perfectly safe and recommended.",
      "The roadway is about to transition into a dirt track.",
      "You must increase your speed to maintain tire traction.",
    ],
  },
  {
    question:
      "What must you be prepared for when you pass these traffic signs?",
    image: {
      src: "/src/assets/lesson7Assets/rs10.webp",
      alt: "Two red triangular warning signs showing cows",
    },
    answers: [
      "That this road may be used by domestic animals",
      "That the roadway is heavily soiled",
    ],
    wrongChoices: [
      "Animals are restricted behind secure fencing in this area.",
      "Sound your horn to scare the animals away.",
      "You have priority, and herdsmen must clear the road immediately.",
      "Accelerate to pass the animals as quickly as possible.",
    ],
  },
  {
    question: "What does this traffic sign indicate?",
    image: {
      src: "/src/assets/lesson7Assets/rs11.webp",
      alt: "Red triangular warning sign showing a sharp right bend",
    },
    answers: ["There is a sharp right bend ahead"],
    wrongChoices: [
      "You should overtake vehicles immediately before the bend.",
      "Steer sharply to the left to prepare for the turn.",
      "Accelerate as you approach the start of the curve.",
      "There is a sharp left bend ahead.",
    ],
  },
  {
    question: "What do you do when you see this traffic sign?",
    image: {
      src: "/src/assets/lesson7Assets/rs12.webp",
      alt: "Red triangular warning sign showing a double bend, first left then right",
    },
    answers: [
      "Reduce your speed",
      "Drive as far as possible over on the left-hand side",
    ],
    wrongChoices: [
      "Drive as far to the right side of the roadway as possible.",
      "Accelerate to maintain momentum through both curves.",
      "Overtaking is particularly safe through this specific section.",
      "The first bend turns left, followed by a right bend.",
    ],
  },
  {
    question: "What do you have to expect after this traffic sign?",
    image: {
      src: "/src/assets/lesson7Assets/rs13.webp",
      alt: "Red triangular warning sign showing 10% downhill slope with a 800m supplementary plate",
    },
    answers: ["A downhill slope 800m in length"],
    wrongChoices: [
      "A downhill slope after 800m.",
      "You should shift into the highest gear possible.",
      "A 10% upward slope 800m in length.",
      "The gradient strictly increases every 100 meters.",
    ],
  },
  {
    question: "What do you do when you see this traffic sign?",
    image: {
      src: "/src/assets/lesson7Assets/rs14.webp",
      alt: "Red triangular warning sign showing 12% uphill slope",
    },
    answers: ["Change down gear, if necessary"],
    wrongChoices: [
      "Shift into the highest gear to maintain your speed.",
      "Overtaking heavy trucks is mandatory on this slope.",
      "Switch to the first  gear.",
      "Switch to gear 4 and 5.",
      "Drive at a higher speed to counter the slope.",
    ],
  },
  {
    question: "What should you do when you approach this traffic sign?",
    image: {
      src: "/src/assets/lesson7Assets/rs15.webp",
      alt: "Red triangular warning sign showing uneven road surface",
    },
    answers: ["Reduce your speed"],
    wrongChoices: [
      "Accelerate to glide smoothly over the bumps.",
      "Grip the steering wheel loosely to avoid sudden jerks.",
      "The road surface has recently been freshly paved.",
      "Reduce speed after passing the sign.",
      "Apply maximum emergency braking immediately.",
    ],
  },
  {
    question: "What dangers can arise if this traffic sign is ignored?",
    image: {
      src: "/src/assets/lesson7Assets/rs16.webp",
      alt: "Red triangular warning sign showing uneven road surface",
    },
    answers: [
      "The vehicle could go into a skid and endanger oncoming traffic",
      "The vehicle could suffer a broken axle or spring fracture",
      "The load could be damaged",
    ],
    wrongChoices: [
      "The engine will instantly overheat due to the bumps.",
      "The tires will immediately burst upon contact.",
      "The vehicle could stand firm on the ground and endanger oncoming traffic.",
      "The exhaust pipe will completely detach from the vehicle.",
    ],
  },
  {
    question: "What is this traffic sign a warning of?",
    image: {
      src: "/src/assets/lesson7Assets/rs17.webp",
      alt: "Red triangular warning sign showing pedestrian crossing",
    },
    answers: [
      "Unexpected pedestrians from the left",
      "Unexpected pedestrians from the right",
    ],
    wrongChoices: [
      "You only need to look for pedestrians approaching from behind.",
      "Unexpected pedestrians from the right only.",
      "You must accelerate to clear the crossing quickly.",
      "Unexpected pedestrians from the left only.",
      "Only school children are permitted to use this crossing.",
    ],
  },
  {
    question: "What do you do when you see this traffic sign?",
    image: {
      src: "/src/assets/lesson7Assets/rs18.webp",
      alt: "Red triangular warning sign showing road narrowing on the right",
    },
    answers: [
      "Reduce your speed, if necessary",
      "Employ the zipper feed-in method",
    ],
    wrongChoices: [
      "Maintain your current speed.",
      "Overtaking should happen before the narrowing.",
      "Vehicles on the right lane must immediately stop.",
      "The cars on the right proceeds first.",
      "The cars on the left proceeds first.",
    ],
  },
  {
    question: "What must you do when you see this traffic sign?",
    image: {
      src: "/src/assets/lesson7Assets/rs19.webp",
      alt: "Red triangular warning sign showing skidding car",
    },
    answers: [
      "Avoid braking heavily",
      "Avoid sudden movements of the steering wheel",
    ],
    wrongChoices: [
      "Apply heavy braking to regain traction.",
      "Accelerate rapidly to push through the slippery section.",
      "Make sharp steering adjustments to keep the car straight.",
      "The road is only slippery during heavy snowstorms.",
      "Shift your vehicle into neutral and coast through.",
    ],
  },
  {
    question:
      "What must you avoid at a danger point marked by this traffic sign?",
    image: {
      src: "/src/assets/lesson7Assets/rs20.webp",
      alt: "Red triangular warning sign showing car throwing stones",
    },
    answers: [
      "Accelerating strongly",
      "Making sudden movements with the steering wheel",
      "Keeping a short distance to the car in front of you",
    ],
    wrongChoices: [
      "Keeping a long distance to the car in front of you.",
      "Accelerating slowly to mooderately.",
      "Reducing your speed if necessary.",
      "Applying your brakes carefully.",
    ],
  },
  {
    question: "What do you do when you see this traffic sign?",
    image: {
      src: "/src/assets/lesson7Assets/rs21.webp",
      alt: "Red triangular warning sign showing road narrowing on both sides",
    },
    answers: ["Reduce your speed", "Refrain from overtaking"],
    wrongChoices: [
      "Accelerate to pass through the narrow section first.",
      "Overtaking is permitted in this area provided it's safe.",
      "You must yield to vehicles driving directly behind you.",
      "Drive entirely on the left shoulder to make space.",
    ],
  },
  {
    question: "What must you reckon with when you see these traffic signs?",
    image: {
      src: "/src/assets/lesson7Assets/rs22.webp",
      alt: "Red triangular warning sign showing road narrowing with 50m supplementary plate",
    },
    answers: ["The roadway narrowing approximately 50 m ahead"],
    wrongChoices: [
      "The road narrows for exactly 50 meters in length.",
      "The narrowing has already passed 50 meters ago.",
      "You must reach a speed of 50 km/h before the narrowing.",
      "Overtaking is explicitly required within the next 50 meters.",
    ],
  },
  {
    question: "What must you reckon with when you see this traffic sign?",
    image: {
      src: "/src/assets/lesson7Assets/rs23.webp",
      alt: "Red triangular warning sign showing roadworks",
    },
    answers: [
      "Traffic from road construction vehicles",
      "Men at work on the roadway",
      "Construction materials on the roadway",
    ],
    wrongChoices: [
      "The road is closed for construction work.",
      "You may safely maintain your maximum driving speed.",
      "Construction workers must yield to all passing vehicles.",
      "Overtaking construction vehicles is allowed.",
      "You should sound your horn to alert workers.",
    ],
  },
  {
    question: "What must you expect when you see these traffic signs?",
    image: {
      src: "/src/assets/lesson7Assets/rs24.webp",
      alt: "Red triangular warning sign showing roadworks with 100m supplementary plate",
    },
    answers: ["Start of roadworks 100m ahead"],
    wrongChoices: [
      "The roadworks will last for 100 meters.",
      "Start of roadworks before 100m.",
      "The roadworks construction ended 100 meters ago.",
      "Accelerate in order to clear space for construction ahead.",
    ],
  },
  {
    question: "What must you reckon with when you see this traffic sign?",
    image: {
      src: "/src/assets/lesson7Assets/rs25.webp",
      alt: "Red triangular warning sign showing traffic queue",
    },
    answers: [
      "Traffic congestion",
      "The vehicles driving in front may suddenly brake",
    ],
    wrongChoices: [
      "Accelerate quickly to join the back of the queue.",
      "Overtake the entire queue using the oncoming traffic lane.",
      "Sound your horn repeatedly to make vehicles move.",
      "The vehicles ahead will maintain a constant high speed.",
      "It is safe to use the hard shoulder to overtake if the traffic is too slow.",
    ],
  },
  {
    question: "What do you do when you see this traffic sign?",
    image: {
      src: "/src/assets/lesson7Assets/rs26.webp",
      alt: "Red triangular warning sign showing movable bridge",
    },
    answers: [
      "Check whether the bridge is passable",
      "Stop if the bridge is swung open",
    ],
    wrongChoices: [
      "Cross the bridge slowly.",
      "Proceed without slowing down.",
      "Sound your horn to instruct the bridge operator to lower it.",
    ],
  },
  {
    question: "What should you remember when you see this traffic sign?",
    image: {
      src: "/src/assets/lesson7Assets/rs27.webp",
      alt: "Red triangular warning sign showing quay or riverbank",
    },
    answers: [
      "The road leads to a river bank",
      "In darkness or poor visibility, the surface of the water could be mistaken for the roadway",
    ],
    wrongChoices: [
      "You should only pass the river bank slowly.",
      "The water is shallow enough to drive through safely.",
      "Accelerate to clear the riverbank zone quickly.",
      "Parking on the very edge of the bank is allowed.",
    ],
  },
  {
    question: "What does this traffic sign indicate?",
    image: {
      src: "/src/assets/lesson7Assets/rs28.webp",
      alt: "Red triangular warning sign showing traffic lights",
    },
    answers: ["Traffic lights"],
    wrongChoices: [
      "right of way rule does not apply.",
      "Yield sign with traffic signs.",
      "Prepare to move.",
      "Proceed.",
      "Stop.",
    ],
  },
  {
    question: "What does this traffic sign indicate?",
    image: {
      src: "/src/assets/lesson7Assets/rs29.webp",
      alt: "Red triangular warning sign showing pedestrian crossing",
    },
    answers: ["A Pedestrian crossing"],
    wrongChoices: [
      "Pedestrian crossing 5m ahead.",
      "You are required to stop even if no one is crossing.",
      "Sound your horn to prevent pedestrians from stepping out.",
      "Overtaking at the crossing is allowed provided there are no pedestrians on sight.",
    ],
  },
  {
    question: "What must you reckon with when you see this traffic sign?",
    image: {
      src: "/src/assets/lesson7Assets/rs30.webp",
      alt: "Two red triangular warning signs showing cows",
    },
    answers: ["A heavily soiled roadway", "Farm animals on the roadway"],
    wrongChoices: [
      "The road is strictly reserved for animal transport vehicles.",
      "Accelerate to scare the animals off the roadway.",
      "A fence to restrict animal movement.",
    ],
  },
  {
    question: "What must you reckon with when you see this traffic sign?",
    image: {
      src: "/src/assets/lesson7Assets/rs31.webp",
      alt: "Red triangular warning sign showing aeroplane",
    },
    answers: [
      "Sudden aeroplane noise",
      "The attention of other road users may be diverted",
    ],
    wrongChoices: [
      "You are required to stop and watch for low-flying aircraft.",
      "You are on the road that is also used by aeroplanes.",
      "There is an airpot ahead.",
      "The road ahead transitions into an active airport runway.",
    ],
  },
  {
    question: "What does this traffic sign indicate?",
    image: {
      src: "/src/assets/lesson7Assets/rs32.webp",
      alt: "Red triangular warning sign showing level crossing with barriers",
    },
    answers: ["A level crossing with barriers"],
    wrongChoices: [
      "A level crossing without barriers.",
      "A level crossing with barriers approximately 240m ahead.",
      "A level crossing with barriers approximately 160m ahead.",
      "A level crossing with barriers approximately 80m ahead.",
    ],
  },
  {
    question: "What does this traffic sign indicate?",
    image: {
      src: "/src/assets/lesson7Assets/rs33.webp",
      alt: "Red triangular warning sign showing train",
    },
    answers: ["A level crossing without barriers"],
    wrongChoices: [
      "A level crossing with barriers.",
      "A level crossing without barriers approximately 240m ahead.",
      "A level crossing without barriers approximately 160m ahead.",
      "A level crossing without barriers approximately 80m ahead.",
    ],
  },
  {
    question: "What do these traffic signs indicate?",
    image: {
      src: "/src/assets/lesson7Assets/rs34.webp",
      alt: "Red triangular warning sign showing train with right arrow supplementary plate",
    },
    answers: ["A level crossing on the road turning right"],
    wrongChoices: [
      "A level crossing on the road turning left.",
      "You must turn right to avoid the railway tracks.",
      "Trains will only approach from the right-hand direction.",
      "Turning right is prohibited at this crossing.",
      "The level crossing is for right-turning trains.",
    ],
  },
  {
    question: "What does this traffic sign indicate?",
    image: {
      src: "/src/assets/lesson7Assets/rs35.webp",
      alt: "Vertical post with barrier symbol and red-white stripes, 240m",
    },
    answers: ["A level crossing with barriers approximately 240 m ahead"],
    wrongChoices: [
      "A level crossing with barriers approximately 160m ahead.",
      "A level crossing with barriers approximately 80m ahead.",
      "A level crossing without barriers approximately 240m ahead.",
      "A level crossing without barriers approximately 160m ahead.",
    ],
  },
  {
    question: "What does this traffic sign indicate?",
    image: {
      src: "/src/assets/lesson7Assets/rs36.webp",
      alt: "Vertical post with train symbol and red-white stripes, 240m",
    },
    answers: ["A level crossing without barriers approximately 240 m ahead"],
    wrongChoices: [
      "A level crossing with barriers approximately 160m ahead.",
      "A level crossing with barriers approximately 80m ahead.",
      "A level crossing with barriers approximately 240m ahead.",
      "A level crossing without barriers approximately 160m ahead.",
    ],
  },
  {
    question: "What does this traffic sign indicate?",
    image: {
      src: "/src/assets/lesson7Assets/rs37.webp",
      alt: "Vertical post with two red diagonal stripes",
    },
    answers: ["A level crossing approximately 160m ahead"],
    wrongChoices: [
      "A level crossing with barriers approximately 160m ahead.",
      "A level crossing without barriers approximately 160m ahead.",
      "A level crossing without barriers approximately 240m ahead.",
      "A level crossing approximately 240m ahead.",
    ],
  },
  {
    question: "What does this traffic sign indicate?",
    image: {
      src: "/src/assets/lesson7Assets/rs38.webp",
      alt: "Vertical post with one red diagonal stripe",
    },
    answers: ["A level crossing approximately 80 m ahead"],
    wrongChoices: [
      "A level crossing with barriers approximately 160m ahead.",
      "A level crossing with barriers approximately 80m ahead.",
      "A level crossing without barriers approximately 80m ahead.",
      "A level crossing approximately 160m ahead.",
    ],
  },
  {
    question: "What do you do when you see this traffic sign?",
    image: {
      src: "/src/assets/lesson7Assets/rs39.webp",
      alt: "Red triangular warning sign showing windsock",
    },
    answers: [
      "Reduce speed when there is side wind",
      "Be prepared to countersteer",
    ],
    wrongChoices: [
      "Maintain your speed to push through the crosswind quickly.",
      "Drive entirely on the shoulder to avoid the wind.",
      "The windsock indicates a nearby active airport runway.",
      "You must park your vehicle on the hard shoulder until the wind clears away.",
      "Always reduce your speed.",
    ],
  },
  {
    question: "What do you do when you see this traffic sign on a Freeway?",
    image: {
      src: "/src/assets/lesson7Assets/rs40.webp",
      alt: "Red triangular warning sign showing traffic queue",
    },
    answers: [
      "Increase your alertness and, as a matter of precaution, increase your distance to the vehicle in front",
      "In case of a traffic jam, brake and switch on hazard warning lights",
    ],
    wrongChoices: [
      "Overtake the entire traffic queue using the emergency lane.",
      "Sound your horn continuously to clear the traffic jam.",
      "As a matter of precaution, shorten your distance to the vehicle in front .",
      "Always switch on your hazard warning lights.",
      "Maintain your speed and overtake safely using the hard shoulder.",
    ],
  },
  {
    question: "What must you do when you see this traffic sign?",
    image: {
      src: "/src/assets/lesson7Assets/rs41.webp",
      alt: "Red triangular warning sign showing left bend",
    },
    answers: [
      "Reduce speed before the bend",
      "Drive as far as possible over the left-hand side",
    ],
    wrongChoices: [
      "Drive as far as possible over the right-hand side.",
      "Accelerate to maintain grip through the bend.",
      "Overtake vehicles only on the left while navigating the curve.",
      "Brake only when you reach the apex.",
      "Reduce your speed only after leaving the bend.",
    ],
  },
  {
    question: "What do you do within this danger section?",
    image: {
      src: "/src/assets/lesson7Assets/rs42.webp",
      alt: "Red triangular warning sign showing deer with 3 km supplementary plate",
    },
    answers: [
      "Drive more slowly, watch out for game animals",
      "Dip the headlights and brake when you see game animals",
      "Do not avoid hitting game animals if oncoming traffic would be endangered",
    ],
    wrongChoices: [
      "Sound your horn continuously for the next 3 kilometers.",
      "Accelerate to clear the danger section rapidly.",
      "Animals will strictly cross only at designated points.",
      "Flash your high beams to scare the deer off the road.",
    ],
  },
  {
    question: "When must you wait at this traffic sign?",
    image: {
      src: "/src/assets/lesson7Assets/rs43.webp",
      alt: "Red and white St Andrew's cross railway crossing sign",
    },
    answers: [
      "When a railway employee is waving a white-red-white flag",
      "When the level crossing cannot be crossed without having to stop on it",
      "When a rail vehicle is approaching",
    ],
    wrongChoices: [
      "When you see a rail way employee standing up.",
      "When the barriers have fully opened and locked.",
      "When you have right of way over the train.",
      "When the crossing is completely clear of all traffic.",
      "You should always wait at all times.",
    ],
  },
  {
    question: "What do you do when you see this traffic sign?",
    image: {
      src: "/src/assets/lesson7Assets/rs44.webp",
      alt: "Red inverted triangle give way sign",
    },
    answers: ["Approach cautiously at moderate speed", "Give Way"],
    wrongChoices: [
      "You have the right of way over all cross traffic.",
      "Accelerate to clear the intersection quickly.",
      "You must stop completely even if the road is clear.",
      "Sound your horn to warn others.",
      "Overtaking within the intersection is allowed.",
    ],
  },
  {
    question: "What must you do at this traffic sign?",
    image: {
      src: "/src/assets/lesson7Assets/rs45.webp",
      alt: "Red octagonal STOP sign",
    },
    answers: [
      "Stop at the stopline and, if necessary, stop again at a point where you can see along the intersecting road and give way",
      "When there is no stop line, stop again at a point where you can see along the intersecting road",
    ],
    wrongChoices: [
      "You may slowly roll through if no traffic is visible.",
      "Stop 15m before the stopline and, if necessary, stop again at a point where you can see along the intersecting road and give way.",
      "Stop after the stopline and, if necessary, stop again at a point where you can see along the intersecting road and give way.",
      "If there is no stop line, proceed slowly without stopping if the road is clear.",
    ],
  },
  {
    question: "What do you do when you see this traffic sign?",
    image: {
      src: "/src/assets/lesson7Assets/rs46.webp",
      alt: "Blue circular sign with white arrow pointing right",
    },
    answers: ["You must indicate right", "You may only proceed to the right"],
    wrongChoices: [
      "You may turn left if the right turn is blocked.",
      "You can proceed straight ahead with caution.",
      "You must reverse if you intend to go straight.",
      "The arrow indicates a one-way street coming from the right.",
      "You may execute a U-turn if the road is clear.",
    ],
  },
  {
    question: "What do you do when you see this traffic sign?",
    image: {
      src: "/src/assets/lesson7Assets/rs47.webp",
      alt: "Blue circular sign with white arrow pointing left",
    },
    answers: ["You must indicate left", "You may only proceed to the left"],
    wrongChoices: [
      "You may turn right if the left turn is blocked.",
      "You can proceed straight ahead with caution.",
      "You must reverse if you intend to go straight.",
      "The arrow indicates a one-way street coming from the left.",
      "You may execute a U-turn if the road is clear.",
    ],
  },
  {
    question: "In which directions may you proceed?",
    image: {
      src: "/src/assets/lesson7Assets/rs48.webp",
      alt: "Blue circular sign with white arrow pointing straight and right",
    },
    answers: ["Straight ahead", "To the right"],
    wrongChoices: [
      "To the left.",
      "To the right only if there is traffic congestion.",
      "You may execute a U-turn if no traffic is endangered.",
      "Only straight ahead is permitted.",
    ],
  },
  {
    question: "What must you do when you see this traffic sign?",
    image: {
      src: "/src/assets/lesson7Assets/rs49.webp",
      alt: "Blue circular sign with white arrow pointing down-right",
    },
    answers: ["You must pass on the right of traffic islands"],
    wrongChoices: [
      "You must pass on the left of traffic islands.",
      "You may choose to pass on either side of the obstacle.",
      "You must turn right at the next intersection.",
      "The sign warns of a sharp right curve ahead.",
      "You must be prepared for a u turn or reverse road.",
    ],
  },
  {
    question:
      "You are approaching a bus stop marked like this. What do you do if you see children there?",
    image: {
      src: "/src/assets/lesson7Assets/rs50.webp",
      alt: "Green bus stop sign with H and School Bus text",
    },
    answers: ["Reduce your speed and be ready to brake"],
    wrongChoices: [
      "Accelerate to pass the bus before children exit.",
      "Sound your horn to warn children to stay back.",
      "Overtake the bus closely at high speed to eliminate any dangers.",
      "You are required to stop.",
    ],
  },
  {
    question: "What does this traffic sign indicate?",
    image: {
      src: "/src/assets/lesson7Assets/rs51.webp",
      alt: "Blue square sign showing pedestrian and child",
    },
    answers: ["A special path for pedestrians", "Cycles and mopeds prohibited"],
    wrongChoices: [
      "A designated crossing for children only.",
      "Cycles and mopeds are allowed.",
      "A zone where motor vehicles have no priority.",
      "A crosswalk that requires a complete 10-second stop.",
      "A path strictly reserved for pedestrians, bicycles and mopeds.",
    ],
  },
  {
    question: "What must you remember when you see this traffic sign?",
    image: {
      src: "/src/assets/lesson7Assets/rs52.webp",
      alt: "Blue square sign showing pedestrian and child with ZONE text",
    },
    answers: ["You may not drive a motor vehicle in this pedestrian precinct"],
    wrongChoices: [
      "You may drive at high speeds to clear the zone quickly.",
      "Motorcycles are allowed to drive here.",
      "Parking is freely allowed anywhere in the zone.",
      "You must honk frequently while driving through to alert pedestrians.",
      "Only heavy commercial trucks are prohibited.",
    ],
  },
  {
    question: "Which vehicles are not allowed to use this road?",
    image: {
      src: "/src/assets/lesson7Assets/rs53.webp",
      alt: "Red circular sign with no entry",
    },
    answers: ["Motor vehicles of any kind"],
    wrongChoices: [
      "Only heavy commercial trucks over 3.5t.",
      "Only motorcycles and bicycles.",
      "Only vehicles carrying hazardous materials.",
      "Pedestrians and cyclists only.",
      "Only passenger cars towing trailers.",
    ],
  },
  {
    question: "Which vehicles are not allowed to drive here?",
    image: {
      src: "/src/assets/lesson7Assets/rs54.webp",
      alt: "Red circular sign with moped symbol",
    },
    answers: ["Mopeds"],
    wrongChoices: [
      "All motor vehicles including bicycles.",
      "Bicycles.",
      "Motocycles.",
      "Cyclist of any kind.",
    ],
  },
  {
    question: "What must you remember when you see this traffic sign?",
    image: {
      src: "/src/assets/lesson7Assets/rs55.webp",
      alt: "Red circular no entry sign",
    },
    answers: [
      "Vehicles may come out of this road",
      "You may not enter this road",
    ],
    wrongChoices: [
      "You may enter this road.",
      "Expect no vehicles to come out of this road.",
      "You may reverse into the road if necessary.",
      "Only residents are allowed to enter.",
      "You may enter if you are driving a motorcycle.",
    ],
  },
  {
    question: "What must you remember when you see this traffic sign?",
    image: {
      src: "/src/assets/lesson7Assets/rs56.webp",
      alt: "Blue no stopping and no standing signs",
    },
    answers: ["You may not stop"],
    wrongChoices: [
      "You may stop for a maximum of 5 minutes.",
      "You may only stop for loading passengers.",
      "Stopping is permitted only to drop off passengers.",
      "You may stop if your hazard lights are activated.",
      "Parking is allowed on weekends and public holidays.",
    ],
  },
  {
    question: "What is allowed at this traffic sign?",
    image: {
      src: "/src/assets/lesson7Assets/rs57.webp",
      alt: "Blue no parking and no waiting signs",
    },
    answers: [
      "Stopping for loading or unloading, for alighting or boarding vehicles",
      "Waiting up to 3 minutes",
    ],
    wrongChoices: [
      "Parking for 30minutes duration is permitted.",
      "You may park if you remain inside the vehicle and leave the engine on.",
      "Stopping is only prohibited during rush hours.",
      "You can park here if you leave your engine running.",
      "Only heavy commercial vehicles are prohibited from parking.",
    ],
  },
  {
    question: "What is permitted when you see these traffic signs?",
    image: {
      src: "/src/assets/lesson7Assets/rs58.webp",
      alt: "No parking and no waiting signs with disabled permit supplementary plate",
    },
    answers: [
      "Severely disabled persons with the appropriate numbered parking permit may park here",
      "Anyone is allowed to stop to pick up or drop passengers",
    ],
    wrongChoices: [
      "Disabled people are not allowed to park here.",
      "No parking is allowed in this zone.",
      "You may park here if you display a standard parking permit.",
      "No one is allowed to stop to pick up or drop passengers.",
    ],
  },
  {
    question: "What do these traffic signs tell you?",
    image: {
      src: "/src/assets/lesson7Assets/rs59.webp",
      alt: "Give way sign with STOP 100m supplementary plate",
    },
    answers: ["There is a 'Stop' sign 100m ahead"],
    wrongChoices: [
      "You must stop immediately at the sign.",
      "There is a yield sign 100m ahead.",
      "The speed limit is 100 km/h.",
      "You are not allowed to stop for 100m from this sign.",
    ],
  },
  {
    question: "What do you do when you see this traffic sign?",
    image: {
      src: "/src/assets/lesson7Assets/rs60.webp",
      alt: "Priority over oncoming vehicles sign",
    },
    answers: ["You must give precedence to oncoming traffic"],
    wrongChoices: [
      "Oncoming traffic must yield to your vehicle.",
      "You have right of way in this narrow section.",
      "Overtaking is prohibited.",
      "The road is restricted to one-way traffic only.",
    ],
  },
  {
    question: "What do you do when you see this traffic sign?",
    image: {
      src: "/src/assets/lesson7Assets/rs61.webp",
      alt: "Blue circular sign with white arrow pointing left",
    },
    answers: ["You must indicate left", "You may only proceed to the left"],
    wrongChoices: [
      "You may turn right if the left turn is blocked.",
      "You can proceed straight ahead with caution.",
      "You must reverse if you intend to go straight.",
      "The arrow indicates a one-way street coming from the right.",
      "You must indicate.",
    ],
  },
  {
    question: "What do you do when you see this traffic sign?",
    image: {
      src: "/src/assets/lesson7Assets/rs62.webp",
      alt: "Blue circular sign with white arrow pointing right",
    },
    answers: ["You must indicate right", "You may only proceed to the Right"],
    wrongChoices: [
      "You may turn left if the right turn is blocked.",
      "You can proceed straight ahead with caution.",
      "You must reverse if you intend to go straight.",
      "The arrow indicates a one-way street coming from the left.",
      "You must indicate.",
    ],
  },
  {
    question: "What does this traffic sign indicate?",
    image: {
      src: "/src/assets/lesson7Assets/rs63.webp",
      alt: "Blue circular sign with white arrow pointing straight ahead",
    },
    answers: ["You may only proceed straight ahead"],
    wrongChoices: [
      "A one way street ahead.",
      "You may turn right or left provided the road ahead is not safe.",
      "You can execute a U-turn safely.",
    ],
  },
  {
    question: "In which directions are you allowed to continue?",
    image: {
      src: "/src/assets/lesson7Assets/rs64.webp",
      alt: "Blue circular sign with arrows left and right",
    },
    answers: ["To the left", "To the right"],
    wrongChoices: [
      "Straight ahead.",
      "In reverse only.",
      "You may execute a U-turn.",
    ],
  },
  {
    question: "What must you do when you see this traffic sign?",
    image: {
      src: "/src/assets/lesson7Assets/rs65.webp",
      alt: "Blue circular sign with white arrow pointing down-left",
    },
    answers: ["You must pass obstacles on the left"],
    wrongChoices: [
      "You must pass obstacles on the right.",
      "You may choose to pass on either side of the obstacle.",
      "You must turn left at the next intersection.",
      "The sign warns of a sharp left curve ahead.",
      "You may stop and park on the left side.",
    ],
  },
  {
    question: "What do you do when you see this traffic sign?",
    image: {
      src: "/src/assets/lesson7Assets/rs66.webp",
      alt: "Green bus stop sign with H",
    },
    answers: [
      "You may stop",
      "You must not endanger passengers boarding or alighting",
    ],
    wrongChoices: [
      "You must park your vehicle here overnight.",
      "You have right of way over the departing bus.",
      "You must sound your horn to hurry/alert boarding passengers.",
      "You are prohibited from overtaking the bus at all times.",
      "You must never stop here.",
    ],
  },
  {
    question:
      "A school bus is stopping on the roadway approximately 80 m in front of you. Can this be dangerous?",
    image: {
      src: "/src/assets/lesson7Assets/rs67.webp",
      alt: "School bus stop sign",
    },
    answers: [
      "Yes, because children frequently run across the road to catch the bus",
      "Yes, because children do not always take the shortest route to cross the roadway",
    ],
    wrongChoices: [
      "No, the bus driver controls all surrounding traffic.",
      "No, children are strictly confined inside the bus.",
      "No, school buses have a dedicated safety forcefield.",
      "Yes, because the bus will reverse unpredictably.",
    ],
  },
  {
    question: "What should you remember where you see this traffic sign?",
    image: {
      src: "/src/assets/lesson7Assets/rs68.webp",
      alt: "Blue rectangular sign with red X and TAXI",
    },
    answers: ["You must reckon with taxis pulling in and setting off"],
    wrongChoices: [
      "Parking is free for all private vehicles here except taxis.",
      "You may overtake taxis safely on the left.",
      "Taxis are strictly prohibited from stopping here.",
      "You must park your vehicle and wait for a taxi.",
    ],
  },
  {
    question: "What does this traffic sign indicate?",
    image: {
      src: "/src/assets/lesson7Assets/rs69.webp",
      alt: "Blue circular sign with bicycle symbol",
    },
    answers: ["A cycle track"],
    wrongChoices: [
      "A parking lane for motorcycles.",
      "A path where motor vehicles are highly recommended.",
      "A warning for crossing cyclists ahead.",
      "A designated racing track for bicycles.",
    ],
  },
  {
    question: "What does this traffic sign indicate?",
    image: {
      src: "/src/assets/lesson7Assets/rs70.webp",
      alt: "Blue circular sign with horse rider symbol",
    },
    answers: [
      "A track prohibited for road users other than horse riders",
      "A track which horse riders are required to use",
    ],
    wrongChoices: [
      "A track where horse riders must dismount and walk.",
      "A path open to all motorized off-road vehicles.",
      "Cars can use this road at walking speed.",
      "A designated parking area for horse trailers.",
      "A warning that wild horses may cross the road.",
    ],
  },
  {
    question: "What must a motorist do on this road?",
    image: {
      src: "/src/assets/lesson7Assets/rs71.webp",
      alt: "Blue pedestrian zone sign with Delivery traffic FREE plate",
    },
    answers: [
      "Drive at walking speed only",
      "Pay particular attention to pedestrians",
    ],
    wrongChoices: [
      "Drive at the maximum posted speed limit.",
      "Sound your horn to clear pedestrians from your path.",
      "Overtake slower delivery vehicles on the left only.",
      "Park anywhere without time restrictions.",
      "Pay more attention to other drivers only.",
    ],
  },
  {
    question: "Who is allowed to drive a motor vehicle on this road?",
    image: {
      src: "/src/assets/lesson7Assets/rs72.webp",
      alt: "Blue pedestrian zone sign with Delivery traffic FREE plate",
    },
    answers: ["Persons delivering goods"],
    wrongChoices: [
      "All standard passenger cars less than 3.5t.",
      "Any vehicle displaying a disabled badge.",
      "Public transport buses only.",
      "Buses carrying residents of the street only.",
    ],
  },
  {
    question:
      "Which vehicles are allowed to use the special lane marked like this?",
    image: {
      src: "/src/assets/lesson7Assets/rs73.webp",
      alt: "Blue circular sign with bus symbol",
    },
    answers: ["Regular buses"],
    wrongChoices: [
      "All heavy goods vehicles.",
      "Taxis and cabs.",
      "Motorcycles and mopeds.",
      "Any vehicle that is 3.5t or more.",
      "School buses only.",
    ],
  },
  {
    question: "Who is allowed to enter a street sign posted like this?",
    image: {
      src: "/src/assets/lesson7Assets/rs74.webp",
      alt: "Red circular no entry sign with Residents FREE plate",
    },
    answers: ["Residents", "People visiting residents"],
    wrongChoices: [
      "Only public transport buses.",
      "Heavy commercial vehicles.",
      "Anyone paying a toll fee.",
      "Emergency vehicles.",
      "Motorcycles only.",
    ],
  },
  {
    question: "What do you do when you enter a road sign posted like this?",
    image: {
      src: "/src/assets/lesson7Assets/rs75.webp",
      alt: "Red circular no entry sign with Residents FREE plate",
    },
    answers: [
      "If necessary, drive at walking speed",
      "Watch out for walking people",
    ],
    wrongChoices: [
      "The maximum speed you can drive at is 80km/h.",
      "Sound your horn continuously to alert residents.",
      "Overtake only on the left at  walking speed.",
      "Overtake only on the right at  walking speed.",
    ],
  },
  {
    question:
      "Which vehicles are not allowed to use a road sign posted like this?",
    image: {
      src: "/src/assets/lesson7Assets/rs76.webp",
      alt: "Red circular sign with car symbol",
    },
    answers: ["Trucks", "Cars"],
    wrongChoices: [
      "Bicycles",
      "Motorcycles",
      "Private cars",
      "Horse riders",
      "Public buses",
    ],
  },
  {
    question:
      "Which vehicles are not allowed to use a road sign posted like this?",
    image: {
      src: "/src/assets/lesson7Assets/rs77.webp",
      alt: "Red circular sign with bicycle symbol",
    },
    answers: ["Bicycles"],
    wrongChoices: [
      "Motocycles and bicycles",
      "Mopeds",
      "Motorcycles",
      "Only bicycles are allowed",
    ],
  },
  {
    question:
      "Which vehicles are not allowed to use a road sign posted like this?",
    image: {
      src: "/src/assets/lesson7Assets/rs78.webp",
      alt: "Red circular sign with motorcycle symbol",
    },
    answers: ["Motorcycles"],
    wrongChoices: ["Mopeds", "Bicycles", "Motocycles and Mopeds"],
  },
  {
    question: "What do these traffic signs indicate?",
    image: {
      src: "/src/assets/lesson7Assets/rs79.webp",
      alt: "No entry sign with 100m supplementary plate",
    },
    answers: ["No entry 100m ahead"],
    wrongChoices: [
      "No entry for 100m",
      "There is a stop sign 100m ahead.",
      "You are not allowed to stop for the next 100m.",
    ],
  },
  {
    question: "Which vehicles may proceed here?",
    image: {
      src: "/src/assets/lesson7Assets/rs80.webp",
      alt: "SMOG label sign",
    },
    answers: ["Cars with a 'SMOG label'", "Vehicles with electric drive"],
    wrongChoices: [
      "Any car without a SMOG label",
      "Vehicles without electric drive",
      "Motorcycles with modified exhausts.",
    ],
  },
  {
    question: "What does this traffic sign indicate?",
    image: {
      src: "/src/assets/lesson7Assets/rs81.webp",
      alt: "Red circular sign with no U-turn symbol",
    },
    answers: ["No turning"],
    wrongChoices: ["No turning left.", "No turning right.", "No reversing."],
  },
  {
    question: "What does this traffic sign indicate?",
    image: {
      src: "/src/assets/lesson7Assets/rs82.webp",
      alt: "Red circular sign with 60 km/h",
    },
    answers: ["You must not drive faster than 60 km/h"],
    wrongChoices: [
      "You must drive at 60 km/h.",
      "You must drive at a minimum speed of 60 km/h.",
      "You may exceed 60 km/h if overtaking.",
    ],
  },
  {
    question: "What does this traffic sign indicate?",
    image: {
      src: "/src/assets/lesson7Assets/rs83.webp",
      alt: "Red circular sign with 30 ZONE",
    },
    answers: ["The start of a zone with a permitted maximum speed of 30 km/h"],
    wrongChoices: [
      "The start of a zone with a minimum speed of 30 km/h.",
      "The end of a zone with a permitted maximum speed of 30 km/h.",
      "Only 30 vehicles are allowed in this zone at a time.",
    ],
  },
  {
    question: "A traffic calmed commercial zone starts here. What must you do?",
    image: {
      src: "/src/assets/lesson7Assets/rs84.webp",
      alt: "30 ZONE, no parking zone, and 2hrs signs",
    },
    answers: [
      "You must specifically watch out for busy pedestrian traffic",
      "You must pay attention to the allowed maximum parking time",
    ],
    wrongChoices: [
      "You must drive at a minimum of 30 km/h.",
      "Parking is strictly prohibited at all times.",
      "All vehicles have priority over pedestrian traffic at all times.",
    ],
  },
  {
    question: "What does this traffic sign indicate?",
    image: {
      src: "/src/assets/lesson7Assets/rs85.webp",
      alt: "30 ZONE end sign",
    },
    answers: ["The end of a zone with a permitted maximum speed of 30 km/h"],
    wrongChoices: [
      "The start of a zone with a minimum speed of 30 km/h.",
      "The end of a zone with a permitted minimum speed of 30 km/h.",
      "No overtaking in the zone of 30 km/h maximum speed.",
    ],
  },
  {
    question: "Are you allowed to drive at a speed faster than 60 km/h here?",
    image: {
      src: "/src/assets/lesson7Assets/rs86.webp",
      alt: "60 km/h sign with IF WET and car supplementary plate",
    },
    answers: ["Yes if the roadway is dry"],
    wrongChoices: [
      "Yes, but only if the roadway is wet.",
      "No, you must never exceed 60 km/h here.",
      "Yes, if you are driving a car below 3.5t",
    ],
  },
  {
    question: "What do you do when you see this traffic sign?",
    image: {
      src: "/src/assets/lesson7Assets/rs87.webp",
      alt: "Blue circular sign with minimum speed 60",
    },
    answers: [
      "You must drive at least at a speed of 60 km/h, weather and traffic conditions permitting",
      "You may not use this road if you cannot or are not allowed to drive at least 60 km/h",
    ],
    wrongChoices: [
      "You must not drive faster than 60 km/h.",
      "The speed limit is 60 km/h.",
      "You must drive at a maximum speed of 60 km/h, weather and traffic conditions permitting.",
    ],
  },
  {
    question:
      "Which vehicles are you allowed to overtake where you see this traffic sign?",
    image: {
      src: "/src/assets/lesson7Assets/rs88.webp",
      alt: "No overtaking signs",
    },
    answers: ["Motorcycle without sidecar"],
    wrongChoices: [
      "Standard passenger cars.",
      "Motorcycle with side car.",
      "Any vehicle traveling above 130 km/h.",
    ],
  },
  {
    question: "What do these traffic signs indicate?",
    image: {
      src: "/src/assets/lesson7Assets/rs89.webp",
      alt: "No overtaking sign with 3 km supplementary plate",
    },
    answers: ["No overtaking for 3 km"],
    wrongChoices: [
      "Overtaking zone 3km ahead.",
      "The overtaking lane is open for 3 kilometers.",
      "No overtaking zone 3km ahead.",
    ],
  },
  {
    question: "What do these traffic signs indicate?",
    image: {
      src: "/src/assets/lesson7Assets/rs90.webp",
      alt: "No overtaking sign with 200m supplementary plate",
    },
    answers: ["Start of a no-overtaking area 200 m ahead"],
    wrongChoices: [
      "End of a no-overtaking area 200m ahead.",
      "No overtaking for 200m.",
      "Start of a no-overtaking area 200m for 200m.",
    ],
  },
  {
    question: "What does this traffic sign indicate?",
    image: {
      src: "/src/assets/lesson7Assets/rs91.webp",
      alt: "End of speed restriction sign",
    },
    answers: ["End of speed restriction"],
    wrongChoices: [
      "Start of a new speed restriction.",
      "End of a no overtaking zone.",
      "Start of a zone with a minimum speed of 60km/h.",
    ],
  },
  {
    question: "What is allowed in the zone which starts here?",
    image: {
      src: "/src/assets/lesson7Assets/rs92.webp",
      alt: "No stopping zone sign",
    },
    answers: [
      "Waiting for up to 3 minutes",
      "Waiting for loading or unloading as well as boarding or alighting",
    ],
    wrongChoices: [
      "Parking for up to 5 minutes.",
      "Parking, provided you display a valid ticket.",
      "Parking if you leave your hazard lights flashing.",
    ],
  },
  {
    question: "Which prohibitions are ended by these traffic signs?",
    image: {
      src: "/src/assets/lesson7Assets/rs93.webp",
      alt: "End of all prohibitions sign",
    },
    answers: ["No overtaking", "Speed restrictions"],
    wrongChoices: [
      "No stopping and no parking.",
      "No entry for motor vehicles.",
      "Minimum speed limits.",
    ],
  },
  {
    question: "What ends here?",
    image: {
      src: "/src/assets/lesson7Assets/rs94.webp",
      alt: "End of no-waiting zone sign",
    },
    answers: ["A no-waiting area"],
    wrongChoices: [
      "A pedestrian zone.",
      "A mandatory minimum speed zone.",
      "A priority road.",
    ],
  },
  {
    question: "What do these traffic signs indicate?",
    image: {
      src: "/src/assets/lesson7Assets/rs95.webp",
      alt: "No stopping sign with car supplementary plate",
    },
    answers: ["No stopping on the roadway and the hard shoulder"],
    wrongChoices: [
      "Stopping is permitted only on the hard shoulder.",
      "You may stop if you turn on your hazard lights.",
      "Stopping is allowed for a maximum of 5 minutes.",
    ],
  },
  {
    question:
      "What should you remember when you see a line like this in the centre of the roadway?",
    image: {
      src: "/src/assets/lesson7Assets/rs96.webp",
      alt: "Photo of solid white centre line on road with trees",
    },
    answers: ["You may not cross or straddle the line"],
    wrongChoices: [
      "You may cross the line safely to overtake.",
      "You can straddle the line to maintain a straight path.",
      "You must drive on the right side of the line.",
    ],
  },
  {
    question: "What should you remember here (not a priority road)?",
    image: {
      src: "/src/assets/lesson7Assets/rs97.webp",
      alt: "Photo of road with orange traffic cones and solid centre line",
    },
    answers: [
      "Parking is permitted if a gap of at least 3 m is left between a parked vehicle and the centre line",
      "Vehicles may not cross or straddle the centre line",
    ],
    wrongChoices: [
      "Parking is permitted if a gap of at least 2m is left between a parked vehicle and the centre line.",
      "You may cross the center line to overtake safely.",
      "Parking is permitted if a gap of at least 1m is left between a parked vehicle and the centre line.",
    ],
  },
  {
    question: "You want to overtake. What do you do?",
    image: {
      src: "/src/assets/lesson7Assets/rs98.webp",
      alt: "Photo of road with dashed centre line",
    },
    answers: ["You may cross both lines provided no-one is endangered thereby"],
    wrongChoices: [
      "You must not cross the dashed and solid line under any circumstances.",
      "Overtaking is strictly prohibited on this section.",
      "You must sound your horn before crossing the line.",
    ],
  },
  {
    question: "What must you remember when you see this traffic sign?",
    image: {
      src: "/src/assets/lesson7Assets/rs87.webp",
      alt: "Blue circular sign with minimum speed 60",
    },
    answers: ["Minimum speed of 60 km/h"],
    wrongChoices: [
      "You must not drive faster than 60 km/h.",
      "The speed limit is exactly 60 km/h.",
      "You may drive at any speed below 60 km/h.",
    ],
  },
  {
    question: "Which traffic sign refers to the permissible total mass?",
    image: {
      src: "/src/assets/lesson7Assets/rs100.webp",
      alt: "5.5t weight limit sign and truck with 7.5t sign",
    },
    answers: ["2"],
    wrongChoices: ["1 & 2", "none", "1"],
  },
  {
    question: "Which traffic sign refers to the actual mass?",
    image: {
      src: "/src/assets/lesson7Assets/rs101.webp",
      alt: "5.5t weight limit sign and truck with 7.5t sign",
    },
    answers: ["1"],
    wrongChoices: [
      "2",
      "Both signs refer to permissible total mass.",
      "Neither sign refers to mass.",
    ],
  },
  {
    question:
      "Which vehicles are prohibited from using a road with a sign posted like this?",
    image: {
      src: "/src/assets/lesson7Assets/rs102.webp",
      alt: "Red circular sign with 2t axle weight limit",
    },
    answers: ["Vehicles with an actual axle weight exceeding 2t"],
    wrongChoices: [
      "Vehicles with a permissible total mass exceeding 2 t.",
      "Vehicles with a total width exceeding 2t.",
      "Vehicles with an actual axle weight below 2t.",
    ],
  },
  {
    question: "What does this traffic sign indicate?",
    image: {
      src: "/src/assets/lesson7Assets/rs103.webp",
      alt: "Red circular sign with 2m width limit",
    },
    answers: ["A prohibition for vehicles more than 2 m wide including load"],
    wrongChoices: [
      "A minimum following distance of 2m.",
      "A mandatory gap of 2m between overtaking cars.",
      "A prohibition for vehicles more than 2m in height.",
    ],
  },
  {
    question:
      "Which vehicles can cause serious accidents when this traffic sign is ignored?",
    image: {
      src: "/src/assets/lesson7Assets/rs104.webp",
      alt: "Red circular sign with 3.8m height limit",
    },
    answers: [
      "Vehicles of the following dimensions, including load: Length 8m, width 2.5m, height 4m",
    ],
    wrongChoices: [
      "Vehicles of the following dimensions, including load: Length 15m, width 2.5m, height 3.5m.",
      "Vehicles of the following dimensions, including load: Length 10m, width 2.5m, height 3.8m.",
      "Vehicles of the following dimensions, including load: Length 8m, width 3.5m, height 2.5m.",
    ],
  },
  {
    question:
      "With which vehicles are you not allowed to drive on a road sign posted like this?",
    image: {
      src: "/src/assets/lesson7Assets/rs105.webp",
      alt: "Red circular sign with truck and 10m length limit",
    },
    answers: [
      "Car with caravan trailer, total length of the combination 11 m",
      "Tractor with trailer, total length of the combination 12 m",
    ],
    wrongChoices: [
      "Car with caravan trailer, total length of the combination 10m.",
      "Car with caravan trailer, total length of the combination 8m.",
      "Trucks, total length of 10m.",
    ],
  },
  {
    question: "What does this traffic sign indicate?",
    image: {
      src: "/src/assets/lesson7Assets/rs106.webp",
      alt: "Red triangular priority road ahead sign",
    },
    answers: ["Priority only at the next crossroads or junction"],
    wrongChoices: [
      "Right of way for the entire road.",
      "Hospital nearby.",
      "Overtaking is strictly prohibited at the junction.",
    ],
  },
  {
    question: "What should you remember when you approach these traffic signs?",
    image: {
      src: "/src/assets/lesson7Assets/rs107.webp",
      alt: "Priority road sign with junction layout supplementary plate",
    },
    answers: ["You will remain on the priority road if you turn left"],
    wrongChoices: [
      "You lose priority if you turn left.",
      "You must yield to vehicles approaching from the right.",
      "You will remain on the priority road if you continue straight ahead.",
    ],
  },
  {
    question: "Which traffic sign gives right of way?",
    image: {
      src: "/src/assets/lesson7Assets/rs108.webp",
      alt: "Three signs: straight ahead, priority road, straight ahead",
    },
    answers: ["Traffic sign 2"],
    wrongChoices: ["Traffic sign 1", "Traffic sign 3", "None of the signs."],
  },
  {
    question: "What applies after this traffic sign?",
    image: {
      src: "/src/assets/lesson7Assets/rs109.webp",
      alt: "Blue sign showing pedestrian, car, house and curved arrow",
    },
    answers: [
      "You must not drive faster than walking speed",
      "You must look out for children playing",
    ],
    wrongChoices: [
      "You may drive at normal speed provided there is no traffic congestion.",
      "Vehicles have priority at all times.",
      "Overtaking is allowed provided there is no danger to oncoming traffic.",
    ],
  },
  {
    question: "What does this traffic sign indicate?",
    image: {
      src: "/src/assets/lesson7Assets/rs110.webp",
      alt: "Blue sign showing highway symbol",
    },
    answers: ["The start of a Highway"],
    wrongChoices: [
      "The end of a Highway.",
      "The start of level crossing.",
      "The end of level crossing.",
    ],
  },
  {
    question: "What does this traffic sign indicate?",
    image: {
      src: "/src/assets/lesson7Assets/rs111.webp",
      alt: "Blue sign with white arrow pointing straight up",
    },
    answers: ["One-way street"],
    wrongChoices: [
      "Priority.",
      "The start of a dual carriageway.",
      "No reversing permitted on this road.",
    ],
  },
  {
    question: "What must you expect when you see this traffic sign?",
    image: {
      src: "/src/assets/lesson7Assets/rs112.webp",
      alt: "Blue sign with Traffic Scouts symbol",
    },
    answers: [
      "Flowing traffic will be stopped in order to let children cross the road",
      "Children will run across the roadway more often than usual",
    ],
    wrongChoices: [
      "Traffic will accelerate to clear the crossing quickly.",
      "You must sound your horn to warn the scouts.",
      "The scouts will issue speeding fines.",
    ],
  },
  {
    question: "Which traffic sign gives right of way at the next crossroads?",
    image: {
      src: "/src/assets/lesson7Assets/rs113.webp",
      alt: "Three signs: hazard, priority road diamond, priority over oncoming",
    },
    answers: ["Traffic sign 1"],
    wrongChoices: [
      "Traffic sign 2",
      "Traffic sign 1 and Traffic sign 2",
      "Traffic sign 3",
    ],
  },
  {
    question: "Which traffic sign gives the right of way?",
    image: {
      src: "/src/assets/lesson7Assets/rs114.webp",
      alt: "Three signs: hazard left bend, hazard, A1 road number",
    },
    answers: ["Traffic sign 2"],
    wrongChoices: ["Traffic sign 1", "Traffic sign 3", "None of the signs."],
  },
  {
    question: "What does this sign tell you?",
    image: {
      src: "/src/assets/lesson7Assets/rs115.webp",
      alt: "Yellow diamond priority road sign",
    },
    answers: ["Priority road", "No parking outside built up areas"],
    wrongChoices: [
      "Give way to cross traffic.",
      "Pedestrian crossing zone.",
      "Pedestrians have priority even here at all times.",
    ],
  },
  {
    question: "What is allowed on priority roads outside built-up areas?",
    image: {
      src: "/src/assets/lesson7Assets/rs116.webp",
      alt: "Yellow diamond priority road sign",
    },
    answers: [
      "Stopping on the left edge of the roadway",
      "Parking on the hard shoulder",
    ],
    wrongChoices: [
      "Parking on the right-hand lane.",
      "Reversing to access a missed exit.",
      "Executing a U-turn if the road is clear.",
    ],
  },
  {
    question: "What must you remember when you see this traffic sign?",
    image: {
      src: "/src/assets/lesson7Assets/rs117.webp",
      alt: "Yellow diamond priority road with junction supplementary plate",
    },
    answers: [
      "If you follow the priority road, you must indicate left",
      "If you follow the priority road, you must show consideration to pedestrians and wait, if necessary",
    ],
    wrongChoices: [
      "If you follow the priority road, you must indicate right.",
      "You have absolute right of way over pedestrians because you're on a priority road.",
      "Pedestrians have priority over vehicles at any point regardless of whether you're on a priority road or not.",
    ],
  },
  {
    question: "What ends here?",
    image: {
      src: "/src/assets/lesson7Assets/rs118.webp",
      alt: "Yellow diamond with black bar priority road end sign",
    },
    answers: ["A priority road"],
    wrongChoices: [
      "A no-stopping zone.",
      "A speed restriction.",
      "A pedestrian precinct.",
    ],
  },
  {
    question: "What do you do when you see this traffic sign?",
    image: {
      src: "/src/assets/lesson7Assets/rs119.webp",
      alt: "Blue sign with white arrow up and red arrow down",
    },
    answers: [
      "You may only take precedence when the narrowing is clear",
      "You must be ready to stop despite taking precedence",
    ],
    wrongChoices: [
      "Oncoming traffic must yield to your vehicle at all times.",
      "You have right of way in this section at all times.",
      "You must accelerate to clear the narrowing quickly.",
    ],
  },
  {
    question: "What does this traffic sign indicate?",
    image: {
      src: "/src/assets/lesson7Assets/rs120.webp",
      alt: "Yellow diamond priority road with right turn supplementary plate",
    },
    answers: ["If you follow the priority road, you must indicate right"],
    wrongChoices: [
      "If you follow the priority road, you must indicate left.",
      "You must yield to traffic coming from the left.",
      "You must yield to oncoming traffic.",
    ],
  },
  {
    question: "What do these traffic signs allow?",
    image: {
      src: "/src/assets/lesson7Assets/rs121.webp",
      alt: "Blue P parking sign with Residents Parking Licence plate",
    },
    answers: [
      "Residents holding a parking licence with corresponding number may park here",
    ],
    wrongChoices: [
      "Anyone may park here for an unlimited duration.",
      "You may park here if you display a valid disabled badge.",
      "You must pay at a parking meter to use this space.",
    ],
  },
  {
    question: "Who may park here?",
    image: {
      src: "/src/assets/lesson7Assets/rs122.webp",
      alt: "Two blue P parking signs with disabled symbol",
    },
    answers: [
      "A car for a seriously disabled person with a special walking disability",
    ],
    wrongChoices: [
      "Any vehicle with a valid resident parking permit.",
      "Standard passenger cars paying an hourly fee.",
      "Anyone can park here except for disabled people.",
    ],
  },
  {
    question: "What must you observe when parking here?",
    image: {
      src: "/src/assets/lesson7Assets/rs123.webp",
      alt: "Blue P parking sign with Parking ticket plate",
    },
    answers: [
      "The parking time indicated on the parking ticket may not be exceeded",
      "The parking ticket must be put in a place so it can be easily read when controlled",
    ],
    wrongChoices: [
      "You may park for an unlimited time with a ticket.",
      "The ticket can be kept inside your wallet to avoid losing it.",
      "You can transfer the ticket to another vehicle later.",
    ],
  },
  {
    question: "Which vehicles are allowed to park here?",
    image: {
      src: "/src/assets/lesson7Assets/rs124.webp",
      alt: "Blue P parking sign with car symbol",
    },
    answers: [
      "Vehicles with a permissible total mass of up to 2.8 t",
      "Motorcycles",
    ],
    wrongChoices: [
      "Vehicles with a permissible total mass of up to 10 t.",
      "Any car.",
      "Any vehicle with a length of less than 10 meters.",
    ],
  },
  {
    question: "What does this traffic sign indicate?",
    image: {
      src: "/src/assets/lesson7Assets/rs125.webp",
      alt: "Blue P+R park and ride sign",
    },
    answers: ["A parking space connected to local public transport"],
    wrongChoices: [
      "A parking area strictly for postal and delivery vehicles.",
      "A zone where parking is strictly prohibited and restricted.",
      "A private parking lot for residential apartments.",
    ],
  },
  {
    question: "What must you reckon with when you see this traffic sign?",
    image: {
      src: "/src/assets/lesson7Assets/rs126.webp",
      alt: "Yellow P parking sign with Parking all vehicles",
    },
    answers: ["Hikers who have parked their car here temporarily"],
    wrongChoices: [
      "Hikers who have parked their car here permanently.",
      "Vehicles driving at extremely high speeds.",
      "Heavy construction equipment operating nearby.",
    ],
  },
  {
    question: "What does this traffic sign indicate?",
    image: {
      src: "/src/assets/lesson7Assets/rs127.webp",
      alt: "Blue sign with pedestrian, car, house crossed out",
    },
    answers: ["The end of a traffic calmed area"],
    wrongChoices: [
      "The start of a traffic calmed area.",
      "No children allowed in this area.",
      "A closed off residential street.",
    ],
  },
  {
    question:
      "What must a motor vehicle's maximum speed, determined by its construction, be at least if you want to use this road?",
    image: {
      src: "/src/assets/lesson7Assets/rs128.webp",
      alt: "Blue sign with car symbol",
    },
    answers: ["61 km/h"],
    wrongChoices: ["30 km/h", "80 km/h", "120 km/h"],
  },
  {
    question:
      "In which cases are you allowed to cross the line in the centre of the roadway?",
    image: {
      src: "/src/assets/lesson7Assets/rs129.webp",
      alt: "Photo from car showing solid centre line on road",
    },
    answers: ["To avoid an obstruction", "To overtake"],
    wrongChoices: [
      "In any case.",
      "To drive continuously in the center to avoid the edge.",
      "To overtake multiple vehicles at once in heavy traffic.",
    ],
  },
  {
    question: "Pedestrians wish to cross the road. What do you do?",
    image: {
      src: "/src/assets/lesson7Assets/rs130.webp",
      alt: "Blue pedestrian crossing sign",
    },
    answers: [
      "Approach the pedestrian crossing at moderate speed and, if necessary, wait",
      "Do not overtake at a pedestrian crossing",
    ],
    wrongChoices: [
      "Accelerate quickly to clear the crossing before they step out.",
      "Sound your horn to order the pedestrians off the crossing.",
      "Pedestrians must wait for your motor vehicle to pass first.",
    ],
  },
  {
    question: "What does this traffic sign indicate?",
    image: {
      src: "/src/assets/lesson7Assets/rs131.webp",
      alt: "Blue T junction ahead sign",
    },
    answers: ["A cul-de-sac (ending) road"],
    wrongChoices: [
      "A mandatory T-junction where you must turn.",
      "A designated parking bay for heavy trucks.",
      "A completely unpaved off-road trail.",
    ],
  },
  {
    question: "What does this traffic sign indicate?",
    image: {
      src: "/src/assets/lesson7Assets/rs132.webp",
      alt: "Blue sign with red cross first aid station",
    },
    answers: ["A first aid station"],
    wrongChoices: [
      "A designated intersection with a hospital entrance.",
      "A toll booth completely managed by the Red Cross.",
      "A road completely closed due to a medical emergency.",
    ],
  },
  {
    question: "What does this traffic sign indicate?",
    image: {
      src: "/src/assets/lesson7Assets/rs133.webp",
      alt: "Blue sign with breakdown service symbol",
    },
    answers: ["A breakdown service"],
    wrongChoices: [
      "A mandatory vehicle inspection checkpoint.",
      "A car wash and detailing facility.",
      "A mechanical workshop that strictly sells bolts.",
    ],
  },
  {
    question: "What does this traffic sign mean?",
    image: {
      src: "/src/assets/lesson7Assets/rs134.webp",
      alt: "Sign showing car on soft shoulder",
    },
    answers: ["The shoulder beside the roadway is not hard enough"],
    wrongChoices: [
      "The shoulder is exclusively designated for parking.",
      "You must drive entirely on the shoulder to avoid traffic.",
      "You should overtake slower vehicles using the shoulder.",
    ],
  },
  {
    question: "What does this traffic sign mean?",
    image: {
      src: "/src/assets/lesson7Assets/rs135.webp",
      alt: "Sign showing truck on soft shoulder with 3.5t",
    },
    answers: [
      "The shoulder on the side of the roadway is not hard enough for vehicles with a permissible total mass of more than 3.5 t",
      "A warning that tractors should not use the hard shoulder",
    ],
    wrongChoices: [
      "The shoulder is heavily reinforced and safe for all trucks.",
      "You must drive your truck directly onto the shoulder to park.",
      "The shoulder is reserved entirely for heavy trucks.",
    ],
  },
  {
    question: "What must you remember when you see this traffic sign?",
    image: {
      src: "/src/assets/lesson7Assets/rs136.webp",
      alt: "Green sign with train and cars park and ride",
    },
    answers: [
      "It indicates to the driver that there is a park- and-ride terminus",
    ],
    wrongChoices: [
      "It designates a racing track for private vehicles.",
      "It marks a parking area exclusively for train staff.",
      "It warns of an upcoming unguarded railway crossing.",
    ],
  },
  {
    question: "What does this traffic sign indicate?",
    image: {
      src: "/src/assets/lesson7Assets/rs137.webp",
      alt: "Green sign with traffic lights and 55 km/h",
    },
    answers: ["Coordinated robots at the average speed of 55 km/h"],
    wrongChoices: [
      "The speed limit is strictly enforced at 55 km/h by cameras.",
      "You must maintain a minimum speed of 55 km/h at all times.",
      "The traffic lights will turn red if you exceed 55 km/h.",
    ],
  },
  {
    question: "What does this traffic sign indicate?",
    image: {
      src: "/src/assets/lesson7Assets/rs138.webp",
      alt: "Yellow U3 diversion sign with arrow up",
    },
    answers: ["A numbered diversion"],
    wrongChoices: [
      "A mandatory U-turn in 3 kilometers.",
      "A one-way street heading upwards.",
      "A lane restricted entirely to heavy trucks.",
    ],
  },
  {
    question: "What does this traffic sign indicate?",
    image: {
      src: "/src/assets/lesson7Assets/rs139.webp",
      alt: "White sign with orange arrow diversion",
    },
    answers: ["A Highway section which is normally not used very much"],
    wrongChoices: [
      "A mandatory right turn for all traffic.",
      "A sharp right bend requiring heavy braking.",
      "A Highway section which is used very much.",
    ],
  },
  {
    question: "What does this traffic sign indicate?",
    image: {
      src: "/src/assets/lesson7Assets/rs140.webp",
      alt: "Blue sign with highway crossed out",
    },
    answers: ["The end of a dual carriageway"],
    wrongChoices: [
      "The start of a dual carriageway.",
      "No parking on the hardshoulder of the highway.",
      "A pedestrian-only overpass structure.",
    ],
  },
  {
    question: "What does this traffic sign indicate?",
    image: {
      src: "/src/assets/lesson7Assets/rs141.webp",
      alt: "Blue sign with car crossed out",
    },
    answers: ["The end of the clearway for motor vehicles only"],
    wrongChoices: [
      "The start of a clearway for motor vehicles only.",
      "A road where only heavy commercial trucks are permitted.",
      "No overtaking.",
    ],
  },
  {
    question: "What does this traffic sign indicate?",
    image: {
      src: "/src/assets/lesson7Assets/rs142.webp",
      alt: "Blue sign with 80",
    },
    answers: [
      "It recommends not driving faster than 80 km/h even under good conditions",
    ],
    wrongChoices: [
      "You must maintain a minimum speed of 80 km/h.",
      "You are strictly prohibited from driving below 80 km/h.",
      "Only vehicles weighing less than 80 tons are allowed.",
    ],
  },
  {
    question: "What does this traffic sign indicate?",
    image: {
      src: "/src/assets/lesson7Assets/rs143.webp",
      alt: "Blue 48 and green A1 road number signs",
    },
    answers: ["The number of a dual carriageway"],
    wrongChoices: [
      "A mandatory speed limit of 48 km/h.",
      "The total distance to the next major city.",
      "A specific lane designation for heavy trucks.",
    ],
  },
  {
    question: "What does the figure 'A 1' indicate in this traffic sign?",
    image: {
      src: "/src/assets/lesson7Assets/rs144.webp",
      alt: "Green direction sign for A1 Francistown, Western Bypass, R524 Molepolole",
    },
    answers: ["Dual carriageway number A 1 leads to Francistown"],
    wrongChoices: [
      "You must drive in lane A1.",
      "Only A1 licensed drivers may use this road.",
      "A1 refers to the highest toll fee category.",
    ],
  },
  {
    question: "What does this traffic sign indicate?",
    image: {
      src: "/src/assets/lesson7Assets/rs145.webp",
      alt: "Blue U22 diversion sign with arrow up",
    },
    answers: ["A diversion for Highway traffic when required"],
    wrongChoices: [
      "A mandatory diversion for all heavy vehicles.",
      "An underground tunnel entrance marked U22.",
      "A designated parking bay for exactly under 22 vehicles.",
    ],
  },
  {
    question: "What applies from this traffic sign onwards?",
    image: {
      src: "/src/assets/lesson7Assets/rs146.webp",
      alt: "Yellow sign SEROWE Central District",
    },
    answers: [
      "Maximum permissible speed 60 km/h",
      "Free choice of driving lane for motor vehicles with a permissible total mass up to 3.5 t",
    ],
    wrongChoices: [
      "Maximum permissible speed 80 km/h.",
      "You may sound your horn freely to alert others when overtaking.",
      "Free choice of driving lane for all cars.",
    ],
  },
  {
    question: "What applies from this traffic sign onwards?",
    image: {
      src: "/src/assets/lesson7Assets/rs146.webp",
      alt: "Yellow sign SEROWE Central District",
    },
    answers: [
      "You may not sound your horn to signal your intention to overtake",
      "Parking cars may be safely marked with parking light",
    ],
    wrongChoices: [
      "You must sound your horn before overtaking.",
      "Parking cars must use full beam headlights.",
      "Pedestrians must strictly yield to your vehicle.",
    ],
  },
  {
    question:
      "How are vehicles with a permissible total mass up to 2.8 t allowed to be parked here?",
    image: {
      src: "/src/assets/lesson7Assets/rs148.webp",
      alt: "Blue P parking sign with car symbol",
    },
    answers: ["The car as shown in the picture"],
    wrongChoices: [
      "Perpendicular to the pavement edge.",
      "1m from the pedestrian path.",
      "Diagonally across multiple parking bays.",
    ],
  },
  {
    question: "What does this traffic sign indicate?",
    image: {
      src: "/src/assets/lesson7Assets/rs149.webp",
      alt: "sign showing the text customs douane",
    },
    answers: ["A customs post"],
    wrongChoices: [
      "A mandatory toll booth for all vehicles.",
      "A completely closed international border.",
      "A drive-through vehicle weighing station.",
    ],
  },
  {
    question: "What can red-white warning plates on vehicles indicate?",
    answers: [
      "A trailer parked on the roadway within a built- up area",
      "A vehicle with excessive width",
    ],
    wrongChoices: [
      "A vehicle operating without brakes.",
      "A designated emergency ambulance.",
      "A mobile food delivery service vehicle.",
    ],
  },
  {
    question:
      "You approach this traffic control facility on the Freeway. What do you do?",
    image: {
      src: "/src/assets/lesson7Assets/rs151.webp",
      alt: "Red and white chevron sign with blue arrow pointing left down",
    },
    answers: [
      "Change into the left lane, if necessary, using the zipper feed-in method",
    ],
    wrongChoices: [
      "Change into the right lane, if necessary, using the zipper feed-in method.",
      "Always change into the left lane, using the zipper feed-in method.",
      "Overtake on the left side of the marker.",
    ],
  },
  {
    question:
      "You need assistance on the Freeway. Which information does the arrow in the roadside marker give you?",
    image: {
      src: "/src/assets/lesson7Assets/rs152.webp",
      alt: "Roadside marker with arrow pointing up",
    },
    answers: ["Nearest emergency call telephone in the direction of the arrow"],
    wrongChoices: [
      "The direction to the nearest public office in the direction of the arrow.",
      "The location of the closest fuel station.",
      "The distance to the nearest freeway exit.",
    ],
  },
  {
    question:
      "A railway employee is waving a white-red-white flag at a level crossing. What does this mean?",
    answers: ["You must wait in front of the level crossing"],
    wrongChoices: [
      "You must accelerate to clear the crossing.",
      "You must wait 1m from the level crossing.",
      "You should cross slowly ensuring no car is aproaching.",
    ],
  },
  {
    question: "When must you wait at a level crossing?",
    answers: [
      "When a flashing red light comes on",
      "When the barriers are being lowered",
      "When a railway employee is waving a white-red-white flag",
    ],
    wrongChoices: [
      "When a green light is flashing at the crossing.",
      "When the barriers have fully opened and locked.",
      "When you have absolute right of way over the train.",
    ],
  },
  {
    question:
      "You are approaching a level crossing with half barriers and flashing lights. The red light is flashing but the barrier is still open. What do you do?",
    answers: ["Wait in front of the level crossing"],
    wrongChoices: [
      "Proceed at a steady pace if you are 40m away.",
      "The flashing red light only applies to trains.",
      "Reverse immediately and find an alternative route.",
    ],
  },
  {
    question:
      "A railway employee is waving a red lamp at a level crossing. What does this mean?",
    answers: ["You must wait in front of the level crossing"],
    wrongChoices: [
      "The crossing is completely clear and safe to pass.",
      "You must accelerate rapidly to pass in time and reduce any risks when the train is far away.",
      "The red lamp indicates a detour route.",
    ],
  },
  {
    question:
      "You are approaching a level crossing where the barriers are open. What do you do?",
    answers: [
      "Approach at moderate speed, look along the railway line",
      "Wait in front of the level crossing if you would have to wait on it because of traffic congestion",
    ],
    wrongChoices: [
      "Accelerate to your maximum speed to clear the area.",
      "Sound your horn continuously while crossing the tracks.",
      "Wait in front of the level crossing.",
    ],
  },
  {
    question:
      "You are approaching a level crossing and the barrier begins to descend. What do you do?",
    answers: ["Wait in front of the level cross"],
    wrongChoices: [
      "Accelerate to pass under the descending barrier if you're 10m away.",
      "Sound your horn to instruct the operator to halt.",
      "Proceed slowly, look along the railway line.",
    ],
  },
  {
    question:
      "At the entrance to an industrial estate, there is a level cross with the supplementary sign 'Industrial estate, rail vehicles have precedence'. What must you remember?",
    answers: [
      "Approach level crossings at moderate speed only",
      "Rail vehicles have precedence at all level crossings",
    ],
    wrongChoices: [
      "You must accelerate to cross the tracks quickly.",
      "Rail vehicles must yield to all motor traffic.",
      "Always wait 1m away from the level cross",
    ],
  },
  {
    question:
      "You are driving along a forest track and approach a level crossing without a level cross sign. What do you do?",
    answers: [
      "Proceed at moderate speed and check to see if a rail vehicle is approaching",
      "Listen out in case a rail vehicle signals approach by whistling or ringing a bell",
    ],
    wrongChoices: [
      "Accelerate to cross the railway quickly thereby eliminating any collisions.",
      "Always wait 1m away from the level cross.",
      "Overtake the vehicle ahead directly on the tracks only if the train is not in sight.",
    ],
  },
  {
    question: "What do you do at level crossing when the barriers are closed?",
    answers: [
      "Wait before the level cross sign without obstructing junctions",
      "If possible, switch on the parking lights when it is dark",
    ],
    wrongChoices: [
      "Creep closely towards the tracks to get a better view.",
      "Leave your engine running at high RPM to stay ready.",
      "Flash your high beams to signal the train engineer.",
    ],
  },
  {
    question:
      "What is the meaning of a level cross with a flashing red light in the form of an arrow pointing to the right?",
    answers: [
      "Road users wishing to turn right must wait",
      "The flashing light does not concern road users driving straight ahead",
    ],
    wrongChoices: [
      "Road users wishing to turn right must proceed.",
      "All drivers must wait.",
      "The right lane is closed to all traffic.",
    ],
  },
  {
    question:
      "When are you allowed to cross a level crossing with flashing lights but no barriers after a train has passed?",
    answers: ["When the flashing red light goes out"],
    wrongChoices: [
      "Immediately after the rear carriage passes your position.",
      "While the red light is still actively flashing.",
      "If you are driving an emergency services vehicle.",
    ],
  },
  {
    question:
      "You are approaching a level crossing with barriers. Where must you wait if you would have to stop on the rails in case of traffic congestion?",
    answers: ["In front of the railway cross"],
    wrongChoices: [
      "After of the railway cross.",
      "Immediately behind the descending barrier arm.",
      "Wait 1m from the railway cross.",
    ],
  },
  {
    question: "What do you do here?",
    image: {
      src: "/src/assets/lesson7Assets/rs165.webp",
      alt: "Photo of level crossing with barriers down and railway worker holding red flag",
    },
    answers: ["Approach at moderate speed and wait"],
    wrongChoices: [
      "It is safe to  pass but at a moderate speed.",
      "It is safe to  pass but at a faster speed to clear the way.",
      "You can only turn right to the direction of the flag.",
    ],
  },
  {
    question:
      "The barrier of a level crossing inside a built-up area is closed. Where must you wait?",
    answers: ["In front of the Railway Cross"],
    wrongChoices: [
      "Directly beneath the closed barrier arm.",
      "Behind the railway cross.",
      "Wait 1m away from the level cross.",
    ],
  },
  {
    question:
      "When should you switch off the engine to save fuel and reduce pollution?",
    answers: [
      "When you have to wait in a traffic jam for a long time",
      "When you have to wait at level crossings or building sites",
    ],
    wrongChoices: [
      "Every time you stop at a standard red traffic light.",
      "While actively navigating through a roundabout.",
      "When waiting at a mandatory stop sign junction.",
    ],
  },
  {
    question:
      "How can you protect the environment and save petrol when waiting for a long time at closed level crossing barriers?",
    answers: ["By switching off the engine"],
    wrongChoices: [
      "By continuously revving the engine while waiting.",
      "By not sounding your horn to clear the tracks faster.",
      "By not leaving the headlights on full beam constantly.",
    ],
  },
  {
    question:
      "While driving a car with a trailer outside a built-up area on a road where overtaking is not prohibited, you approach a level crossing. Where must you wait, when the barriers are closing?",
    answers: ["Immediately after the single-stripe beacon"],
    wrongChoices: [
      "Immediately adjacent to the closed railway tracks.",
      "Directly in front of the descending barrier arm.",
      "Behind the railway crossing.",
    ],
  },
  {
    question:
      "Which vehicle must wait immediately after the single-stripe beacon at level crossings (overtaking is not prohibited) outside built-up areas when the red light is flashing?",
    answers: [
      "A truck with a permissible total mass of exceeding 3.5 t",
      "A truck tractor with trailer",
    ],
    wrongChoices: [
      "Any vehicle.",
      "A motorcycle without a sidecar attached.",
      "A small delivery van under 3.5 t total mass.",
    ],
  },
];
*/

/*
let lesson8Notes = [
  {
    question:
      "What must you reckon with in residential areas with little traffic?",
    answers: [
      "Children at play often run onto the roadway",
      "Pedestrians and cyclists are frequently inattentive",
    ],
    wrongChoices: [
      "Pedestrians and cyclists are frequently attentive.",
      "Children will always wait for cars to pass before crossing.",
      "Sound your horn continuously at every blind corner to warn hidden residents.",
    ],
  },
  {
    question:
      "A ball rolls out into the roadway in front of your vehicle in a residential area. How should you react?",
    answers: [
      "Reduce speed at once and remain ready to brake",
      "Stop if children run onto the roadway",
    ],
    wrongChoices: [
      "Accelerate quickly to pass the ball before any children can run out.",
      "Maintain your current speed and swerve into the oncoming lane to avoid it.",
      "Sound your horn firmly and proceed without changing your foot position.",
    ],
  },
  {
    question:
      "You are approaching children playing on the pavement. What should you do?",
    answers: ["Reduce speed and remain ready to brake"],
    wrongChoices: [
      "Sound your horn immediately to compel the children to stay away from the curb.",
      "Accelerate past them to clear the potential danger zone as fast as possible.",
      "Maintain your current speed since the children are currently safe on the pavement.",
    ],
  },
  {
    question: "What should you reckon with when approaching children?",
    answers: ["Rash behaviour on the part of the children"],
    wrongChoices: [
      "Children will always wait patiently at the roadside until all vehicles pass.",
      "Children possess a mature understanding of vehicle stopping distances.",
      "Children will always signal their intentions clearly before stepping onto the street.",
    ],
  },
  {
    question: "What must you reckon with?",
    image: {
      src: "/src/assets/lesson8Assets/dru5.webp",
      alt: "Photo of boy on bike at roadside with another child",
    },
    answers: [
      "The boy could set off at any moment",
      "The boy might look right but still set off",
    ],
    wrongChoices: [
      "The boy will remain stationary at the roadside until you pass completely.",
      "You hold absolute priority here, meaning you do not need to alter your speed.",
      "The boy is looking directly at your vehicle, which confirms he will not move.",
    ],
  },
  {
    question: "What must you do?",
    image: {
      src: "/src/assets/lesson8Assets/dru6.webp",
      alt: "Photo of two children walking on pavement near road",
    },
    answers: [
      "You must keep a close eye on the children and proceed cautiously",
    ],
    wrongChoices: [
      "Flash your high beams to instruct the children to halt on the pavement.",
      "Increase your speed slightly to pass them before they can react to your vehicle.",
      "Sound your horn sharply to force them to move away from the road boundary.",
    ],
  },
  {
    question: "What must you be prepared for?",
    image: {
      src: "/src/assets/lesson8Assets/dru7.webp",
      alt: "Photo of cyclist riding ahead on road",
    },
    answers: [
      "The boy ahead of you could turn right to follow the other child",
      "The boy ahead of you could turn right without signalling a change of direction",
    ],
    wrongChoices: [
      "The boy ahead of you will turn right to follow the other child.",
      "The boy ahead of you will proceed straight ahead.",
      "The boy ahead of you will turn right without signalling a change of direction.",
    ],
  },
  {
    question: "What must you do?",
    image: {
      src: "/src/assets/lesson8Assets/dru8.webp",
      alt: "Photo of children near parked car on roadside",
    },
    answers: ["Brake heavily immediately and remain ready to brake"],
    wrongChoices: [
      "Accelerate smoothly to pass the stationary parked vehicle without losing momentum.",
      "Sound your horn loudly to warn the kids.",
      "Disregard the hazard since the children are completely obscured behind the car.",
    ],
  },
  {
    question: "What must you be prepared for?",
    image: {
      src: "/src/assets/lesson8Assets/dru9.webp",
      alt: "Photo of children playing football on road",
    },
    answers: [
      "One of the children could turn back to collect the ball",
      "The girl could turn back and run to the other children",
    ],
    wrongChoices: [
      "The children will remain clear of the driving lane until you have gone past.",
      "The children will run away leaving the ball behind.",
      "The children will wait at the roadside for you to give them a hand signal to retrieve the ball.",
    ],
  },
  {
    question: "What do you have to do?",
    image: {
      src: "/src/assets/lesson8Assets/dru10.webp",
      alt: "Photo of children playing near road edge",
    },
    answers: ["Reduce speed, remain ready to brake and drive cautiously past"],
    wrongChoices: [
      "Maintain your speed normally since the children are playing on the extreme edge.",
      "Sound your horn to scatter the children away from the road before accelerating past.",
      "Flash your high beams to command the children to step further back into the property.",
    ],
  },
  {
    question: "What do you have to do?",
    image: {
      src: "/src/assets/lesson8Assets/dru11.webp",
      alt: "Photo of ball rolling into road in front of car",
    },
    answers: ["Brake immediately and remain ready to brake"],
    wrongChoices: [
      "Ignore the ball and maintain your lane position at the posted speed limit.",
      "Accelerate immediately to beat the path of the ball before it crosses your lane.",
      "Sound your horn to alert other road users while maintaining your current speed.",
    ],
  },
  {
    question: "What do you have to do?",
    image: {
      src: "/src/assets/lesson8Assets/dru12.webp",
      alt: "Photo of parked cars on road",
    },
    answers: ["Brake and, if necessary, stop"],
    wrongChoices: [
      "Accelerate past the parked vehicles to avoid getting trapped in a bottleneck.",
      "Maintain a steady speed to ensure the flow of traffic behind you is not disrupted.",
      "Honk your horn repeatedly to warn any invisible pedestrians who might be behind the cars.",
    ],
  },
  {
    question:
      "What must you reckon with when elderly people are crossing the roadway?",
    answers: [
      "They do not always pay attention to vehicle traffic",
      "They often stop abruptly on the roadway",
      "They often turn back in the middle of the roadway",
    ],
    wrongChoices: [
      "They always cross the road at the fastest possible pace to clear traffic.",
      "They consistently look both ways multiple times while crossing the street.",
      "They are legally required to yield the right of way to motorized vehicles.",
    ],
  },
  {
    question:
      "A pedestrian with a white stick wants to cross the roadway in front of you. What do you have to do?",
    answers: ["Reduce speed and, if necessary, stop"],
    wrongChoices: [
      "Accelerate past the pedestrian quickly before they begin stepping out.",
      "Sound your horn to inform the blind pedestrian of your exact position.",
      "Maintain your speed if the overhead or intersection traffic light is green for you.",
    ],
  },
  {
    question: "What must you reckon with?",
    image: {
      src: "/src/assets/lesson8Assets/dru15.webp",
      alt: "Photo of bus stopped with people around",
    },
    answers: [
      "People crossing the street in front of the bus",
      "People running across the street from the left to catch the bus",
    ],
    wrongChoices: [
      "The physical bulk of the bus shields all pedestrians from oncoming hazards.",
      "Pedestrians will always wait for the bus to depart before trying to cross.",
      "The immediate vicinity around a stopped bus is structurally restricted from pedestrian access.",
    ],
  },
  {
    question:
      "The bus has come to a halt at the stop. Under which conditions are you allowed to pass at walking speed?",
    image: {
      src: "/src/assets/lesson8Assets/dru16.webp",
      alt: "Photo of bus stopped with passengers boarding",
    },
    answers: [
      "If danger for passengers boarding and alighting is excluded",
      "If passengers boarding and alighting are not obstructed",
    ],
    wrongChoices: [
      "You are permitted to pass at the standard speed limit if your lane is clear.",
      "You are legally prohibited from passing a stopped bus under any circumstances.",
      "You must increase your speed significantly to minimize obstruction to the bus.",
    ],
  },
  {
    question:
      "What must you reckon with when children are waiting at traffic lights?",
    answers: [
      "The children will start running when their lights change from green to amber",
      "The children also start running when the light is red because they cannot wait",
      "The children will push each other into the roadway",
    ],
    wrongChoices: [
      "Children will always wait securely for the green light signal to appear.",
      "Children will instinctively step away from the curb when the light turns amber.",
      "The presence of a functional traffic light guarantees children will not enter the road.",
    ],
  },
  {
    question:
      "A group of children is cycling on a cycle track. What must you heed in general?",
    answers: [
      "The children will move onto the roadway without paying attention",
      "The children will move too far onto the roadway",
    ],
    wrongChoices: [
      "The children will ride in a straight, single-file line.",
      "The behavior of a group of young cyclists is predictable and stable.",
      "The cycle track boundary prevents any physical spillover onto the main roadway.",
    ],
  },
  {
    question: "Which statements are correct? (Brake lights on)",
    image: {
      src: "/src/assets/lesson8Assets/dru16.webp",
      alt: "Photo of bus stopped with brake lights on and people around",
    },
    answers: [
      "You may pass on the right-hand side at walking speed provided that passengers are not impeded and you are sure no-one is endangered",
    ],
    wrongChoices: [
      "You may pass on the left-hand side at walking speed provided that passengers are not impeded and you are sure no-one is endangered.",
      "You must not pass a bus that has its brake lights activated.",
      "Bring your vehicle to a complete stop behind the bus and wait until it moves off.",
    ],
  },
  {
    question:
      "Which vehicles may pass here at walking speed only, provided that passengers are not endangered in any way?",
    image: {
      src: "/src/assets/lesson8Assets/dru15.webp",
      alt: "Photo of bus stopped on roadside",
    },
    answers: [
      "All vehicles travelling in the same direction",
      "All vehicles travelling in the opposite direction",
    ],
    wrongChoices: [
      "Only cars below 3.5t traveling in the same direction.",
      "Only authorized emergency service vehicles executing an operational turn.",
      "No vehicles are permitted to pass a bus in this specific setting.",
    ],
  },
  {
    question: "What must you heed in this situation?",
    image: {
      src: "/src/assets/lesson8Assets/dru21.webp",
      alt: "Photo of stationary bus at petrol station with people around",
    },
    answers: [
      "You may pass the stationary bus at walking speed provided you are sure that passengers are not endangered",
    ],
    wrongChoices: [
      "You must hold your current speed to prevent rear-end collisions from behind.",
      "You possess right of way, meaning slowing down is unnecessary.",
      "You must come to a complete stop and wait until the bus pulls away from the station.",
    ],
  },
  {
    question:
      "Why are elderly pedestrians more at risk in traffic than younger people?",
    answers: [
      "Their eyesight and hearing are often poorer",
      "Their reactions are slower and they are less agile",
      "They cannot always judge the speed of vehicles accurately",
    ],
    wrongChoices: [
      "They are uniformly aware of modern vehicle speeds and stopping capabilities.",
      "Their reactions are faster and they are less more agile.",
      "They are legally protected by specialized rights that negate standard traffic risks.",
    ],
  },
  {
    question: "You want to turn left. What must you be prepared for?",
    image: {
      src: "/src/assets/lesson8Assets/dru23.webp",
      alt: "Photo of truck and pedestrian at intersection",
    },
    answers: [
      "The truck will stop",
      "The pedestrian might let the truck pass then cross the roadway in front of you",
      "After the truck has turned, the pedestrians may come from the opposite side",
    ],
    wrongChoices: [
      "The truck will accelerate through the intersection without slowing.",
      "The pedestrian will always remain on the sidewalk until your vehicle turns left.",
      "The truck will signal a left turn instead of turning right into the street.",
    ],
  },
  {
    question: "What must you remember at these bus stops?",
    image: {
      src: "/src/assets/lesson8Assets/dru24.webp",
      alt: "Photo of busy bus stop with pedestrians and car",
    },
    answers: [
      "Pedestrians sometimes step off the roadway without paying attention",
      "Pedestrians often run across the roadway in order to catch the bus",
    ],
    wrongChoices: [
      "Pedestrians will always double-check for oncoming traffic before moving off the curb.",
      "Pedestrians will wait for your car to pass before rushing toward the bus doors.",
      "Bus stop platforms are structurally isolated from the active driving lanes.",
    ],
  },
  {
    question: "What must you do?",
    image: {
      src: "/src/assets/lesson8Assets/dru25.webp",
      alt: "Photo of road with pedestrian crossing between cars",
    },
    answers: [
      "Brake and, if possible, pass slowly on the left",
      "Keep sufficient lateral distance to the pedestrian",
    ],
    wrongChoices: [
      "Brake and, if possible, pass slowly on the right.",
      "Keep a safe lateral distance of 0.5m to the pedestrian.",
      "Stop your vehicle completely and sound your horn to warn the pedestrian.",
    ],
  },
  {
    question:
      "A child is walking on the pavement with a dog on a lead. Can this cause a dangerous situation?",
    answers: [
      "Yes, if the dog suddenly runs onto the roadway and pulls the child along behind",
      "Yes, if the dog tears away and the child runs after the dog",
    ],
    wrongChoices: [
      "The dog will reliably remain directly at the side of the child at all times.",
      "No, if the child is accompanied by the parent.",
      "No, if the dog is on a tight leash.",
    ],
  },
  {
    question: "What must you heed in this situation?",
    image: {
      src: "/src/assets/lesson8Assets/dru27.webp",
      alt: "Photo of road near petrol station with pedestrians",
    },
    answers: [
      "You may pass at walking speed only",
      "You may pass only if you are sure that pedestrians are not endangered",
    ],
    wrongChoices: [
      "Pedestrians have priority at all roads.",
      "You hold priority over all pedestrian movements near petrol stations.",
      "You should accelerate smoothly to clear the built-up area without delays.",
    ],
  },
  {
    question: "Which statements are correct in this situation?",
    image: {
      src: "/src/assets/lesson8Assets/dru28.webp",
      alt: "Photo of bus stopped at bus stop on road",
    },
    answers: [
      "Cars coming from the opposite direction may pass the bus provided that they do so with care",
      "You may pass the bus provided that you do so with care",
    ],
    wrongChoices: [
      "You must bring your vehicle to a full stop and wait for the bus to pull away.",
      "Cars coming from the opposite direction should not pass the bus when its stationery.",
      "You must accelerate quickly to pass the bus before passengers begin to disembark.",
    ],
  },
  {
    question:
      "Which statements are correct in this situation? (Hazard warning lights on)",
    image: {
      src: "/src/assets/lesson8Assets/dru29.webp",
      alt: "Photo of bus with hazard lights at bus stop",
    },
    answers: [
      "The bus may be passed in either lane but no faster than at walking speed",
      "Vehicles in both lanes must stop if passengers would otherwise be endangered",
    ],
    wrongChoices: [
      "Only vehicles traveling in the right most lane are allowed to pass the bus.",
      "You must come to a total standstill and wait until the hazard lights are deactivated.",
      "Only vehicles traveling in the leftmost lane are allowed to pass the bus.",
    ],
  },
  {
    question:
      "What must you be prepared for when a truck in front of you wishes to turn right into a narrow street?",
    answers: [
      "The truck will reduce speed drastically",
      "The truck will swing out to the left before turning",
    ],
    wrongChoices: [
      "The truck will swing out to the right before turning.",
      "The truck will move entirely onto the right-hand shoulder before initiating the turn.",
      "The truck will maintain its speed until it finishes turning.",
    ],
  },
  {
    question: "What must you be prepared for in this situation?",
    image: {
      src: "/src/assets/lesson8Assets/dru31.webp",
      alt: "Photo of bus and car on road",
    },
    answers: [
      "The sudden appearance of oncoming traffic",
      "The bus driver suddenly jumping to the left side",
      "Oncoming traffic concealed by the bus",
    ],
    wrongChoices: [
      "The bus driver will signal to you when it is safe to proceed forward.",
      "The bus will pull off the roadway onto the verge to clear your sight line.",
      "Overtaking as sonn as the bus finishes overtaking and pulls back into the lane.",
    ],
  },
  {
    question: "When can a cyclist represent a danger for you?",
    image: {
      src: "/src/assets/lesson8Assets/dru32.webp",
      alt: "Photo of cyclist on roadside near road",
    },
    answers: [
      "When the cyclist switches to the roadway without paying attention to the traffic",
    ],
    wrongChoices: [
      "When the cyclist always utilizes hand signals well in advance of a turn.",
      "When the cyclist is legally bound to yield the right of way to all motor cars.",
      "When the cyclist maintains a predictable course along the absolute edge of the road.",
    ],
  },
  {
    question:
      "You are approaching a school. Children are leaving the school grounds. What must you reckon with?",
    answers: [
      "That children rush onto the road without thinking",
      "That children ride their bicycles onto the road without paying attention",
    ],
    wrongChoices: [
      "Children will cross the road using the marked zebra lines only.",
      "The presence of a school gate ensures children are supervised during crossings.",
      "Children will stop at the edge of the pavement and check both directions.",
    ],
  },
  {
    question: "What must you reckon with?",
    image: {
      src: "/src/assets/lesson8Assets/dru34.webp",
      alt: "Photo of moped and cyclist near van on street",
    },
    answers: [
      "The moped rider could pull out to the right to overtake the cyclist",
      "The driver of the van could step onto the road while unloading",
      "Pedestrians crossing the road in front of the van",
    ],
    wrongChoices: [
      "The moped rider will remain behind the slow cyclist until you pass.",
      "The van driver will not open any doors or step out while unloading cargo.",
      "The roadway ahead will remain free of pedestrian foot traffic until you pass.",
    ],
  },
  {
    question: "What must you be prepared for in this situation?",
    image: {
      src: "/src/assets/lesson8Assets/dru35.webp",
      alt: "Photo of road with pothole and puddle",
    },
    answers: [
      "That the braking distance will be longer",
      "That the driver could suddenly steer into your lane",
    ],
    wrongChoices: [
      "The road surface increases the tire grip ability.",
      "The vehicle in front will always maintain its lane position.",
      "That the braking distance will be shorter.",
    ],
  },
  {
    question: "Why are motorcyclists particularly at risk?",
    answers: [
      "Because they are easily overlooked",
      "Because their speed is often underestimated",
      "Because they are exposed to greater risk of injury in accidents",
    ],
    wrongChoices: [
      "Motorcyclists possess a high visual profile that makes them standout in traffic.",
      "Motorcyclists typically travel at much slower speeds than other motorized vehicles.",
      "Motorcyclists have reinforced structural protective shells identical to passenger cars.",
    ],
  },
  {
    question:
      "At a bus stop, passengers are getting on and off the bus onto the roadway. What do you do if you want to drive past on the left?",
    answers: [
      "Wait if passengers can be endangered or inconvenienced",
      "Drive cautiously at walking speed past if this is possible without endangering or inconveniencing passengers",
    ],
    wrongChoices: [
      "You should wait until all passengers are either in the bus or left.",
      "Passengers always have priority, wait.",
      "Accelarate quickly to pass the bus before any passengers get off.",
    ],
  },
  {
    question:
      "What must you observe when driving past a bus which has stopped at a bus stop?",
    answers: [
      "Keep a sufficient distance from the bus and drive past cautiously, since pedestrians might suddenly cross the roadway in front of the bus",
    ],
    wrongChoices: [
      "You can maintain the regular speed limit if your lane is wide enough.",
      "Keep a safe lateral distance of 0.5m to the bus.",
      "Pedestrians crossing in front of a bus will always check for passing cars first.",
    ],
  },
  {
    question:
      "What do you do when a bus has stopped at a bus stop with its hazard warning lights switched on?",
    answers: [
      "Drive past at walking speed only and, if necessary, stop",
      "Drive past at a sufficient distance in order to exclude endangering pedestrians",
      "Wait if passengers could be inconvenienced",
    ],
    wrongChoices: [
      "Accelarate quickly to pass the bus before any passengers get off.",
      "You must halt your vehicle and remain stationary until the bus leaves the stop.",
      "Keep a safe lateral distance of 0.5m to the bus.",
    ],
  },
  {
    question: "Which vehicles must you allow to set off from marked bus stops?",
    answers: ["Regular buses", "School buses"],
    wrongChoices: [
      "Private taxi cabs only",
      "Commercial delivery vans only",
      "Long-distance freight trucks only",
    ],
  },
  {
    question:
      "A regular bus in the oncoming traffic has stopped at a bus stop on the same roadway with hazard warning lights switched on. What do you do?",
    answers: ["Slow down to walking speed"],
    wrongChoices: [
      "Maintain your current cruising speed without any modifications.",
      "Accelerate rapidly to pass the bus zone before passengers step out.",
      "Bring your vehicle to an immediate and complete stop in your lane.",
    ],
  },
  {
    question:
      "A bus is driving in the middle of the roadway and reaches a bus stop where passengers are waiting at the edge of the roadway. What do you do shortly before the bus comes to a stop?",
    answers: [
      "I remain behind the bus in order not to endanger the passengers",
    ],
    wrongChoices: [
      "Overtake the bus immediately before it can slow down and block your path.",
      "Sound your horn continuously to warn the waiting passengers to stand clear.",
      "Accelerate sharply past the right side of the bus to clear the intersection.",
    ],
  },
  {
    question:
      "You are approaching a regular bus, which has stopped in the opposite direction at a bus stop on your roadway and its hazard warning lights are switched on. What must you expect?",
    answers: [
      "Passengers will cross the roadway in order to catch the bus",
      "Passengers leaving the bus will suddenly cross the roadway",
    ],
    wrongChoices: [
      "Passengers will wait on the opposite side until the bus drives away completely.",
      "The bus driver will step off to direct traffic and ensure the road stays clear.",
      "The traffic lanes will remain entirely free of pedestrian movement during the stop.",
    ],
  },
  {
    question: "What conduct must you expect of children at zebra crossings?",
    answers: [
      "They will run onto the zebra crossing without paying attention to traffic",
      "They will turn around on the zebra crossing for no apparent reason and run back",
    ],
    wrongChoices: [
      "They will stop at the edge of the zebra crossing and wait for a green signal.",
      "They will look both ways and accurately judge the speed of your approaching vehicle.",
      "They will cross the road in an organized, single-file group layout.",
    ],
  },
  {
    question:
      "How are elderly pedestrians often expected to behave at zebra crossings?",
    answers: [
      "They look neither right nor left",
      "They step unexpectedly onto the roadway",
      "They sometimes turn back in the middle of the roadway",
    ],
    wrongChoices: [
      "They will consistently look both ways before stepping off the sidewalk edge.",
      "They can never turn back once they step into the pedestrian crossing.",
      "They signal to cars before crossing the road.",
    ],
  },
  {
    question: "What must you do?",
    image: {
      src: "/src/assets/lesson8Assets/dru46.webp",
      alt: "Photo of pedestrians at roadside about to cross",
    },
    answers: [
      "Brake early in order to show the pedestrians that they may pass",
    ],
    wrongChoices: [
      "Maintain your current speed and only brake if the pedestrian starts moving.",
      "Sound your horn to instruct the pedestrians to halt on the sidewalk.",
      "Accelerate quickly to pass the crossing before the pedestrians can step off.",
    ],
  },
  {
    question: "What must you do here?",
    image: {
      src: "/src/assets/lesson8Assets/dru47.webp",
      alt: "Photo of busy road with pedestrians crossing",
    },
    answers: ["Stop to allow the pedestrians to cross the roadway"],
    wrongChoices: [
      "Drive through the pedestrian crossing slowly without stopping your vehicle.",
      "Sound your horn to alert the crossing pedestrians to clear your lane.",
      "Accelerate to clear the intersection before the crosswalk becomes fully blocked.",
    ],
  },
  {
    question:
      "In which cases must you approach a zebra crossing with particular care?",
    answers: [
      "When pedestrians want to cross the roadway",
      "When the view of the zebra crossing is obstructed",
      "When another vehicle is already waiting at the zebra crossing",
    ],
    wrongChoices: [
      "When you hold clear priority over all cross-traffic at the junction.",
      "When the zebra crossing is reserved exclusively for emergency operations.",
      "When you can accelerate smoothly to clear the marked area ahead of others.",
    ],
  },
  {
    question: "What applies immediately before and on zebra crossings?",
    answers: ["You may not overtake", "You may not stop"],
    wrongChoices: [
      "You are permitted to overtake slower-moving vehicles if there are no pedestrians onsight.",
      "You must stop directly on the zebra crossing if there is fraffic infront of you.",
      "Sounding your horn to warn pedestrians to stop crossing.",
    ],
  },
  {
    question:
      "A cyclist wrongly crosses the zebra crossings without getting off his bicycle. What is correct?",
    answers: ["Give in and let the cyclist cross the roadway"],
    wrongChoices: [
      "The cyclist is required to halt immediately and yield the lane to your car.",
      "Accelerate to force the cyclist to return.",
      "Sound your horn to force the cyclist to turn back to the curb.",
    ],
  },
  {
    question: "What do you do in this situation?",
    image: {
      src: "/src/assets/lesson8Assets/dru51.webp",
      alt: "Photo from car at zebra crossing with pedestrian and van",
    },
    answers: [
      "I let the pedestrian cross the roadway",
      "I wait at the zebra crossing until the van has turned off",
    ],
    wrongChoices: [
      "Sound your horn to signal the pedestrian to hurry across.",
      "Overtake the turning van on the right-hand shoulder to bypass the pedestrian crossing completely.",
      "Maintain your current speed and drive past before the pedestrian steps into your specific lane.",
    ],
  },
  {
    question:
      "A pedestrian want to cross the roadway on a zebra crossing. What do you do?",
    answers: [
      "Approach at moderate speed and wait if necessary",
      "Do not overtake under any circumstances",
    ],
    wrongChoices: [
      "Accelerate quickly to clear the zebra crossing before the pedestrian can reach your side of the lane.",
      "Sound your horn to warn the pedestrian that your vehicle has priority.",
      "Flash your headlights repeatedly to instruct the pedestrian to halt on the sidewalk until you pass.",
    ],
  },
  {
    question:
      "A truck stops in the left lane on a zebra crossing. You are driving in the right lane. What do you do?",
    answers: ["Wait because pedestrians might cross the roadway"],
    wrongChoices: [
      "Accelerate past the stationary truck immediately since your current driving lane is open and unobstructed.",
      "Sound your horn to alert the truck driver to move out of the intersection boundaries.",
      "Swerve slightly into the left lane behind the truck to get a better view of oncoming traffic.",
    ],
  },
  {
    question:
      "You are in congested traffic and must wait. There is a pedestrian crossing in front of you. What do you do?",
    answers: ["Leave the crossing free"],
    wrongChoices: [
      "Stop directly on the pedestrian crossing.",
      "Keep a safe lateral distance of 0.5m to the crossing.",
      "Overtake cars parked on the crossing on the right.",
    ],
  },
  {
    question:
      "There is mud on a pedestrian crossing and only the sign 'Pedestrian Crossing' is visible. A pedestrian wants to cross the roadway. What do you do?",
    answers: [
      "Cautiously brake in good time",
      "Stop if necessary so that the pedestrian can cross the roadway",
    ],
    wrongChoices: [
      "Maintain your normal speed since the painted lines on the road surface are completely obscured.",
      "Accelerate to pass the area quickly before the pedestrian attempts to guess where the crossing boundary is.",
      "Sound your horn to indicate to the pedestrian that you want to cross.",
    ],
  },
  {
    question:
      "Why is it particularly important to brake in good time when approaching a zebra crossing?",
    answers: [
      "So that pedestrian are not scared or made insecure",
      "To avoid front-end collision",
    ],
    wrongChoices: [
      "It saves fuel.",
      "To give yourself enough room to execute a rapid U-turn if the crossing becomes completely blocked.",
      "To allow trailing emergency vehicles to pass you on either side without lane obstruction.",
    ],
  },
  {
    question:
      "You come to a stop unexpectedly on a pedestrian crossing. What do you do?",
    answers: [
      "Move slightly forward or backward in order to clear the crossing as quickly as possible",
    ],
    wrongChoices: [
      "Switch off your vehicle engine and wait inside until the traffic congestion ahead clears up naturally.",
      "Sound your horn firmly to command crossing pedestrians to walk around your stationary vehicle.",
      "Activate your hazard lights and stay still.",
    ],
  },
];
*/

/*
let lesson9Notes = [
  {
    question:
      "You want to pull out of a row of parked vehicles into the stream of moving traffic. Behind you is a parked truck and trailer. How do you assess this situation?",
    answers: [
      "Because of your restricted view, you cannot see approaching vehicles until they are very close",
      "Because of their restricted view, vehicles approaching from behind cannot see your vehicle until very late",
    ],
    wrongChoices: [
      "Because of your view, you can see approaching vehicles early from the mirrors of cars parked infront.",
      "Because of their view, vehicles approaching from behind can see your vehicle if you have your hazard lights on.",
      "Vehicles approaching from behind will always wait for you because of their restricted view.",
    ],
  },
  {
    question:
      "You want to pull out of a driveway and turn left onto the road. A cyclist is approaching from the right. Who must wait?",
    answers: ["You must wait"],
    wrongChoices: [
      "The cyclist must wait.",
      "You must both wait.",
      "You should both proceed slowly.",
    ],
  },
  {
    question:
      "You want to pull out of a driveway across the pavement onto the roadway. What must you look out for first?",
    answers: [
      "Children cycling on the pavement",
      "Children playing and pedestrians",
    ],
    wrongChoices: [
      "Heavy transport vehicles approaching from the opposite side of the roadway.",
      "The timing sequence of the nearest signalized intersection down the street.",
      "Police cars on patrol.",
    ],
  },
  {
    question:
      "You want to pull out onto a road from a traffic calmed area. What must you do?",
    answers: [
      "Allow pedestrians on the pavement to pass",
      "Give precedence to vehicles",
    ],
    wrongChoices: [
      "Sound your horn to demand right of way when exiting the traffic calmed zone.",
      "Accelerate to match the speed of the cross traffic.",
      "Maintain your speed because vehicles on the main road must yield to incoming zone traffic.",
    ],
  },
  {
    question:
      "You want to turn onto a road from a traffic calmed area. A cyclist is approaching from the right. Who must wait?",
    answers: ["You must wait"],
    wrongChoices: [
      "The cyclist must steer onto the pavement to let you join the roadway.",
      "Priority is determined by who reaches the intersection boundary line first.",
      "The cyclist must wait.",
    ],
  },
  {
    question:
      "You want to turn out of a road with a sunken kerbstone into another road. A car is coming from the right. Who must wait?",
    answers: ["Whoever turns into a road over a sunken kerbstone must wait"],
    wrongChoices: [
      "The car coming from the right must yield according to the standard 'right before left' rule.",
      "The vehicle with the larger engine or heavier weight holds priority.",
      "Both vehicles can proceed at the same time by splitting the main intersection lane.",
    ],
  },
  {
    question: "What must you do when leaving the edge of the roadway?",
    answers: [
      "Check for traffic from behind",
      "Switch on your direction indicator",
    ],
    wrongChoices: [
      "Switch on your direction indicator immediately when you get at the turn.",
      "Check for traffic ahead only.",
      "Switch on your hazard warning lights.",
    ],
  },
  {
    question: "You want to set off from the driveway. Who must wait?",
    image: {
      src: "/src/assets/lesson9Assets/dm8.webp",
      alt: "Car leaving driveway, pedestrians on pavement",
    },
    answers: ["You must wait"],
    wrongChoices: [
      "The pedestrians must always wait until your vehicle has fully cleared the area.",
      "You can proceed immediately if you sound your horn to alert the pedestrians.",
      "The pedestrians are legally required to step into the roadway to let you pass.",
    ],
  },
  {
    question:
      "By mistake, you have taken the right-hand lane but wish to turn left. What do you do?",
    image: {
      src: "/src/assets/lesson9Assets/dm9.webp",
      alt: "Car in right lane at intersection wanting to turn left",
    },
    answers: ["Proceed straight ahead or turn right"],
    wrongChoices: [
      "Cut across the left-hand lane quickly before the traffic signal changes to red.",
      "Bring your vehicle to a complete stop and wait for the left lane to clear entirely.",
      "Make a u turn and proceed left if there is there cars from behind.",
    ],
  },
  {
    question: "What must you remember when you want to change lanes?",
    answers: [
      "You must signal your intention to change lanes in time",
      "You must pay attention to the traffic following behind",
    ],
    wrongChoices: [
      "You have automatic right of way once your indicator has flashed three times.",
      "You must pay attention to only traffic ahead of you.",
      "You can change lanes without indicating if there are no vehicles behind.",
    ],
  },
  {
    question: "Where must the zipper feed-in method be employed?",
    answers: [
      "Where a lane comes to an end",
      "Where a lane is entirely blocked by an obstruction",
    ],
    wrongChoices: [
      "In 2 way roads.",
      "At junctions.",
      "Where a road diverges into 2 roads.",
    ],
  },
  {
    question:
      "On a roadway with several lanes in one direction, one lane comes to an end. What must the drivers in the continuing lane do?",
    answers: [
      "Allow the vehicles which are unable to proceed to move into the continuing lane using the zipper feed-in method",
    ],
    wrongChoices: [
      "Accelerate to close any open gaps.",
      "Wait until all merging vehicles have passed.",
      "Proceed until they have all passed.",
    ],
  },
  {
    question: "You want to proceed straight ahead. What do you do?",
    image: {
      src: "/src/assets/lesson9Assets/dm13.webp",
      alt: "Multi-lane road with traffic ahead",
    },
    answers: [
      "Reduce speed, keep your distance and, if necessary, stop",
      "If there is a large enough gap in the traffic, change to the right-hand lane",
    ],
    wrongChoices: [
      "Remain in your lane and shorten the distance to the car infront.",
      "Remain in your lane, never change lanes if you proceed straight ahead.",
      "Weave continuously between the left and right lanes to find a clear path forward.",
    ],
  },
  {
    question:
      "You have taken the left lane by mistake although you want to turn right. How are you allowed to proceed?",
    image: {
      src: "/src/assets/lesson9Assets/dm14.webp",
      alt: "Car in left lane at intersection wanting to turn right",
    },
    answers: ["Straight ahead", "To the left"],
    wrongChoices: [
      "To the right if there is no danger to traffic.",
      "Reverse your vehicle safely back to the lane-selection markings.",
      "Wait on the hard shoulder then turn right.",
    ],
  },
  {
    question: "What do you do if you want to drive straight on?",
    image: {
      src: "/src/assets/lesson9Assets/dm15.webp",
      alt: "Road with lane arrows, cars ahead",
    },
    answers: ["Brake so that the driver in front can change lanes"],
    wrongChoices: [
      "Pass between the yellow and red car without braking.",
      "Sound your horn to warn the driver in front that they are in the wrong lane position.",
      "Swerve into the oncoming lane to bypass the entire queue of cars.",
    ],
  },
  {
    question:
      "A car is reversing into a parking space. The vehicle travelling in front of you is moving into the right-hand lane. What should you do?",
    image: {
      src: "/src/assets/lesson9Assets/dm16.webp",
      alt: "Car reversing into parking space on road",
    },
    answers: [
      "If traffic behind permits, move into the right-hand lane too",
      "If vehicles behind you are overtaking, stay in the left hand lane, drive slowly and, if necessary stop",
    ],
    wrongChoices: [
      "Accelerate quickly past the parking car on the left shoulder before it moves.",
      "Sound your horn continuously to alert the reversing car.",
      "Stop immediately in the middle of the road and flash your hazard warning lights.",
    ],
  },
  {
    question:
      "You are approaching the vehicles in this picture. What do you do?",
    image: {
      src: "/src/assets/lesson9Assets/dm17.webp",
      alt: "Truck and trailer on hard shoulder, car on road",
    },
    answers: [
      "Watch if the truck and trailer remain on the hard shoulder",
      "Allow the truck and trailer to enter the roadway when it indicates right",
    ],
    wrongChoices: [
      "Accelerate to pass the truck quickly before it moves off.",
      "Sound your horn to alert the truck driver to remain stationary.",
      "Swerve onto the opposite side of the road to maximize your passing distance.",
    ],
  },
  {
    question: "What must you know about using the rear-view mirrors?",
    answers: [
      "You cannot see vehicles and pedestrians in a blind angle",
      "Rear-view mirrors must be adjusted to the driver",
    ],
    wrongChoices: [
      "They provide a 360-degree field of view.",
      "Rear view mirrors must be adjusted to the front passenger.",
      "Rear view mirrors helps you to see vehicles and pedestrians.",
    ],
  },
  {
    question: "What must you reckon with here?",
    image: {
      src: "/src/assets/lesson9Assets/dm19.webp",
      alt: "Road approaching underpass",
    },
    answers: [
      "The vehicle in front changing lanes",
      "Denser traffic beyond the underpass",
    ],
    wrongChoices: [
      "The road surface inside the underpass will be illuminated by sunlight.",
      "Oncoming vehicles crossing directly through the solid concrete center barrier.",
      "An immediate drop in the statutory speed limit down to walking pace.",
    ],
  },
  {
    question:
      "You are approaching the truck and trailer which is changing into your lane at about 60 km/h. Which possibilities do you have?",
    image: {
      src: "/src/assets/lesson9Assets/dm20.webp",
      alt: "Truck changing lanes on highway",
    },
    answers: [
      "Keep in lane and let the truck and trailer filter in",
      "Keeping a careful eye on vehicles travelling behind, switch to the right-hand lane",
    ],
    wrongChoices: [
      "Accelerate to a speed more than that of the truck to pass quickly.",
      "Swerve instantly onto the left grass verge with reduced speed.",
      "Keep a closer distance to the truck and overtake when it's safe.",
    ],
  },
  {
    question: "What do you do in this situation?",
    image: {
      src: "/src/assets/lesson9Assets/dm21.webp",
      alt: "Car attempting to overtake van",
    },
    answers: ["Stop, if you cannot pass without danger"],
    wrongChoices: [
      "Pass through the narrow opening by accelerating fast.",
      "Sound your horn and compel the van to drive onto the pavement to clear space.",
      "Swerve across the sidewalk to bypass the obstruction safely.",
    ],
  },
  {
    question:
      "Which vehicle must wait when half the roadway is closed because of roadworks?",
    answers: ["The vehicle on the side of the roadway where the roadworks are"],
    wrongChoices: [
      "The larger or heavier vehicle should stop.",
      "The vehicle traveling at a higher speed has the right of way to clear the block.",
      "The vehicle coming from the opposite direction must always pull over and wait.",
    ],
  },
  {
    question: "Who must wait?",
    image: {
      src: "/src/assets/lesson9Assets/dm23.webp",
      alt: "Car approaching roadworks with oncoming vehicle",
    },
    answers: ["I must wait"],
    wrongChoices: [
      "The oncoming vehicle must wait.",
      "The truck.",
      "The yellow car.",
    ],
  },
  {
    question: "What do you do?",
    image: {
      src: "/src/assets/lesson9Assets/dm24.webp",
      alt: "Narrow bridge with oncoming vehicle",
    },
    answers: ["Reduce speed and, if necessary, stop"],
    wrongChoices: [
      "Accelerate  to cross the bridge before the oncoming vehicle can reach it.",
      "Flash your high beams to alert the oncoming vehicle.",
      "Maintain your speed and pass through.",
    ],
  },
  {
    question:
      "There are cyclists and pedestrians on the roadway. What must you remember when overtaking?",
    answers: [
      "You may only overtake keeping a safe lateral distance (at least 1.5m)",
      "You may not overtake if oncoming traffic makes it impossible to keep to sufficient lateral distance",
    ],
    wrongChoices: [
      "You may only overtake keeping a safe lateral distance (at least 0.5m).",
      "You may only overtake keeping a safe lateral distance (at least 50cm).",
      "You may not overtake if oncoming traffic makes it possible to keep to sufficient lateral distance.",
    ],
  },
  {
    question:
      "Is it irresponsible to overtake a truck and trailer before a crossroads?",
    answers: [
      "Yes, because the truck and trailer can obscure the view of important traffic signs",
      "Yes, because the truck and trailer can obscure the view of the crossing traffic",
    ],
    wrongChoices: [
      "No, if there is no cars behind you.",
      "No, because passing a large vehicle quickly increases overall traffic efficiency.",
      "Yes, because trucks are structurally prone to rolling over when driving through a junction.",
    ],
  },
  {
    question:
      "You want to overtake a cyclist. Is a lateral distance of 50 cm enough for overtaking?",
    answers: ["No, because the cyclist might suddenly swing out"],
    wrongChoices: [
      "Yes, because 50 cm is the standard statutory distance required in urban zones.",
      "Yes, provided you sound your horn to keep the cyclist perfectly stable.",
      "Yes, because bicycles occupy minimal lateral area on a paved roadway surface.",
    ],
  },
  {
    question: "When can overtaking be dangerous even on clear straight roads?",
    answers: ["Because the speed of oncoming traffic is often underestimated"],
    wrongChoices: [
      "Overtaking on open wide roads is never dangerous.",
      "Because straight road surfaces always possess hidden lateral traction issues.",
      "When the vehicle behind you is traveling with its daytime running lights turned on.",
    ],
  },
  {
    question:
      "What mistakes make overtaking dangerous even on clear and straight roads?",
    answers: [
      "The distance of an oncoming vehicle is overestimated",
      "You underestimate your overtaking distance",
    ],
    wrongChoices: [
      "You drive faster than the vehicle you are attempting to pass.",
      "The car ahead of you slows down and moves onto the shoulder.",
      "The road signs ahead indicate a change from a single lane to a dual carriageway.",
    ],
  },
  {
    question: "When are you in danger when overtaking?",
    answers: [
      "When the road user being overtaken suddenly accelerates",
      "When the road user being overtaken swerves out to overtake",
    ],
    wrongChoices: [
      "When the road user being overtaken suddenly deccelerates.",
      "When you drive faster than the vehicle you are attempting to pass.",
      "The car ahead of you slows down and moves onto the shoulder.",
    ],
  },
  {
    question: "In which cases must you abandon overtaking?",
    answers: [
      "When the road user being overtaken suddenly accelerates",
      "When there is danger from unexpected oncoming traffic",
    ],
    wrongChoices: [
      "When the road surface changes from concrete to asphalt pavement.",
      "When the vehicle you are passing is on a one way street.",
      "When the road user being overtaken suddenly starts deccelerating",
    ],
  },
  {
    question: "When is overtaking forbidden?",
    answers: [
      "If you are unable to drive considerably faster than the road user being overtaken",
      "You do not have a clear view of the road ahead",
      "When the traffic situation is not clear",
    ],
    wrongChoices: [
      "Whenever there are no lane markings or painted guidelines on the road surface.",
      "When the vehicle in front is moving at a lower speed than you.",
      "When the road user being overtaken suddenly reduces speed and drives slower than you .",
    ],
  },
  {
    question: "What must you reckon with in this situation?",
    image: {
      src: "/src/assets/lesson9Assets/dm33.webp",
      alt: "Cyclist and car on narrow road with parked car",
    },
    answers: [
      "The cyclist will pass the parked car on the right",
      "Oncoming traffic",
    ],
    wrongChoices: [
      "The cyclist will pass the parked car on the left.",
      "The cyclist will bring their bicycle to a stop behind the parked car.",
      "The cyclist will get off his ride and pass beside the car walking.",
    ],
  },
  {
    question: "What are you prepared for?",
    image: {
      src: "/src/assets/lesson9Assets/dm34.webp",
      alt: "Cyclist with carrier on road",
    },
    answers: [
      "The cyclist's riding will be extremely unsteady due to the weight on the carrier",
      "That the cyclist who is farther away will swerve to the right",
    ],
    wrongChoices: [
      "The cyclist will accelerate to match motor vehicle cruising speeds.",
      "The weight on the carrier will cause the bicycle's brakes to fail.",
      "The cyclist will dismount and walk the bicycle along the active traffic lane.",
    ],
  },
  {
    question: "What are you prepared for?",
    image: {
      src: "/src/assets/lesson9Assets/dm35.webp",
      alt: "Wet road with puddles and traffic",
    },
    answers: [
      "With the danger of deeper potholes",
      "With the danger of skidding and the stopping distance increasing",
    ],
    wrongChoices: [
      "With the danger of increased tire grip.",
      "Tire traction will improve dramatically due to the washing away of road oils.",
      "Oncoming traffic will stop to let you navigate around the water.",
    ],
  },
  {
    question: "What must you do?",
    image: {
      src: "/src/assets/lesson9Assets/dm36.webp",
      alt: "Car passing cyclist and stationary vehicle",
    },
    answers: [
      "Overtake the cyclist only after you have passed the stationary vehicle",
      "Drive past the stationary vehicle with care because oncoming traffic can suddenly appear",
    ],
    wrongChoices: [
      "Accelerate to pass both the cyclist and the stationary vehicle on the right.",
      "Sound your horn to order the cyclist to pull over onto the verge and wait.",
      "Swerve completely into the opposite lane.",
    ],
  },
  {
    question:
      "You wish to overtake a farm tractor with a mounted implement extending beyond its back. What must you remember?",
    answers: [
      "The mounted implement can swing out when the tractor turns off",
      "The rear lights may be heavily soiled or concealed, making direction signals difficult or impossible to see when they are on",
    ],
    wrongChoices: [
      "The mounted implement will swing out when the tractor turns off.",
      "The extended implement will automatically retract when a car approaches from behind.",
      "The rear lights will be heavily soiled or concealed, making direction signals difficult or impossible to see when they are on.",
    ],
  },
  {
    question: "What do you do?",
    image: {
      src: "/src/assets/lesson9Assets/dm38.webp",
      alt: "Multiple vehicles on road, overtaking situation",
    },
    answers: ["Overtake only after you have passed the Vehicle"],
    wrongChoices: [
      "Initiate an immediate double-overtake to bypass all vehicles in a single maneuver.",
      "Sound your horn to alert the truck about your intention to overtake.",
      "Do not overtake but shorten the distance to the car infront.",
    ],
  },
  {
    question:
      "Following a slow-moving vehicle are several faster vehicles which cannot overtake. What must the driver of the slow-moving vehicle do?",
    answers: [
      "He must allow the faster vehicles to overtake at a suitable place",
    ],
    wrongChoices: [
      "Maintain speed and lane position to force others to slow down.",
      "Accelerate faster to create a safe distance to the car behind.",
      "Activate hazard warning lights and come to a halt to allow them to overtake.",
    ],
  },
  {
    question:
      "As a driver of a slow vehicle, how can you allow faster cars to overtake?",
    answers: [
      "By pulling over onto the hard shoulder",
      "By pulling over into a parking lane or lay-by",
    ],
    wrongChoices: [
      "By waiting on the hard shoulder.",
      "By flashing your high beams at oncoming traffic to clear both lanes.",
      "By accelerating to keep a safe lateral distance to the car behind.",
    ],
  },
  {
    question: "Where is overtaking prohibited?",
    answers: [
      "When the traffic situation is not clear",
      "Where oncoming traffic could be obstructed",
    ],
    wrongChoices: [
      "On multi-lane highway or dual-carriageway setup with a dashed line.",
      "Outside built up areas.",
      "On flat, wide straight roads where visibility exceeds three kilometers.",
    ],
  },
  {
    question: "In which instances is overtaking always prohibited?",
    answers: ["At pedestrian crossings", "At blind spots"],
    wrongChoices: [
      "On any section of an open country road containing broken white lines.",
      "When passing stationary broken-down vehicles parked entirely on the verge.",
      "After passing a junction.",
    ],
  },
  {
    question: "What is the requirement for pulling out to overtake?",
    answers: [
      "Any danger to traffic following is excluded",
      "Oncoming traffic is not endangered",
    ],
    wrongChoices: [
      "Your vehicle's audio entertainment system must be turned off.",
      "The vehicle in front must flash its indicators to give you authorization.",
      "You must drive at a speed lower than the car infront.",
    ],
  },
  {
    question: "What must you do to end an overtaking manoeuvre?",
    answers: [
      "Move over to the left as soon as possible without inconveniencing the vehicle you have overtaken",
      "Signal your intention to draw in clearly and in good time",
    ],
    wrongChoices: [
      "Move over to the right as soon as possible without inconveniencing the vehicle you have overtaken.",
      "Deactivate your indicators before starting the physical lane re-entry.",
      "Apply your brakes firmly the instant you cross back over the lane boundary line.",
    ],
  },
  {
    question: "What are the regulations governing speed when overtaking?",
    answers: [
      "The speed of the overtaking vehicle must be appreciably higher",
      "The permissible top speed must not be exceeded",
      "The person being overtaken must not increase his speed",
    ],
    wrongChoices: [
      "The permissible top speed can be exceeded only for the purposes of overtaking.",
      "The vehicle being overtaken must maintain its current speed.",
      "The speed of the overtaking vehicle must be appreciably lower",
    ],
  },
  {
    question: "What must you do when you are being overtaken?",
    answers: ["If possible, drive on the far left", "Not increase your speed"],
    wrongChoices: [
      "Accelerate rapidly to keep a safe overtaking distance.",
      "Move out toward the center line to allow the car behind you to overtake on the left.",
      "If possible, drive on the far right.",
    ],
  },
  {
    question:
      "On which side must you overtake a bus which is travelling in the middle of the roadway (not a one-way street?)",
    answers: ["On the left"],
    wrongChoices: [
      "On the right.",
      "On whichever side has a wider unpaved shoulder or sidewalk clearance.",
      "Overtaking a bus in the middle of a two-way street is not permitted.",
    ],
  },
  {
    question: "When may a bus be overtaken on the left?",
    answers: ["In one-way streets"],
    wrongChoices: [
      "In two-way streets.",
      "Whenever the bus driver activates their hazard warning indicators.",
      "Overtaking on the left is not permitted.",
    ],
  },
  {
    question:
      "Which vehicles may be overtaken only by maintaining a specially great lateral distance?",
    answers: ["Bicycles", "Motorcycles"],
    wrongChoices: [
      "Heavy trucks and industrial trailers.",
      "Any car below 3.5t.",
      "School buses.",
    ],
  },
  {
    question: "When must you signal?",
    answers: [
      "Before pulling out to overtake or to pass",
      "Before pulling in again after overtaking",
    ],
    wrongChoices: [
      "After pulling out to overtake or to pass.",
      "After pulling in again after overtaking.",
      "Only when there is a car behind or infront of you.",
    ],
  },
  {
    question: "What must you remember about distance when overtaking?",
    answers: [
      "To maintain an adequate lateral distance primarily from pedestrians and cyclists",
      "Not to inconvenience the vehicle you have overtaken when you pull in to the left again",
    ],
    wrongChoices: [
      "To maintain an adequate lateral distance primarily from other cars.",
      "Keep a closer distance to the car behind you before overtaking.",
      "Always match the exact speed of the vehicle you are parallel with.",
    ],
  },
  {
    question: "What must you do on this country road?",
    image: {
      src: "/src/assets/lesson9Assets/dm52.webp",
      alt: "Car overtaking truck on country road",
    },
    answers: [
      "Stop overtaking and move back to the left",
      "Maintain a great distance from the vehicle in front",
    ],
    wrongChoices: [
      "Accelerate to overtake the truck after the white car finishes overtaking.",
      "Keep a close distance to the white car to enable easy overtaking of the truck.",
      "Sound your horn to stop the car infront from overtaking.",
    ],
  },
  {
    question: "Why could overtaking be dangerous here?",
    image: {
      src: "/src/assets/lesson9Assets/dm53.webp",
      alt: "Red car on wet/slushy road",
    },
    answers: [
      "There is still slush on the overtaking lane",
      "Slush could be thrown up and impair visibility",
    ],
    wrongChoices: [
      "The wet surface increases tire traction.",
      "The wet road increases the tire friction hence causing the tires to easily slide.",
      "Steering wheel ability is greatly enhanced by wet surface.",
    ],
  },
  {
    question:
      "Why can it be dangerous if you, as the last in a queue, immediately overtake as soon as the oncoming traffic is past?",
    answers: [
      "Because you must reckon with others in the queue swinging out to overtake",
      "Because the distance needed to overtake might not be sufficient",
      "Because if you perhaps need to push back into the queue, this could lead to an accident",
    ],
    wrongChoices: [
      "Because your engine will stall from waiting too long in a stationary queue.",
      "Because the distance needed to overtake is shortened.",
      "Because the oncoming traffic might choose to turn around and block you from behind.",
    ],
  },
  {
    question: "What must you remember if you want to overtake?",
    image: {
      src: "/src/assets/lesson9Assets/dm55.webp",
      alt: "Van on road ahead",
    },
    answers: [
      "The van could start to overtake the vehicle travelling on front of it",
      "Oncoming traffic could appear",
    ],
    wrongChoices: [
      "The van will indicate to let you pass safely.",
      "Your view is completely unobstructed because the van has a low-profile structure.",
      "The van will activate its hazard lights if any danger appears ahead.",
    ],
  },
  {
    question:
      "Both cars are travelling at about 30 km/h. Are you allowed to overtake both before the bend?",
    image: {
      src: "/src/assets/lesson9Assets/dm56.webp",
      alt: "Cars approaching bend",
    },
    answers: [
      "No, because the distance you need to overtake would be too great",
      "No, because the white car could swing out to overtake",
    ],
    wrongChoices: [
      "Yes, only if you're travelling faster than 30 km/h.",
      "Yes, provided you sound your horn throughout the entire curve.",
      "Yes, but only if there is no an oncoming car.",
    ],
  },
  {
    question:
      "The driver of the overtaking car has evidently made a miscalculation. What must you do?",
    image: {
      src: "/src/assets/lesson9Assets/dm57.webp",
      alt: "Oncoming car overtaking on road",
    },
    answers: ["Brake immediately and veer to the left"],
    wrongChoices: [
      "Brake immediately and veer to the right.",
      "Brake immediately and reverse into the hard shoulder.",
      "Brake immediately and come to a stop.",
    ],
  },
  {
    question:
      "A car is overtaking you. Although the oncoming traffic has come dangerously close, the driver does not stop overtaking. What do you do?",
    answers: ["Reduce speed and drive as far as possible over on the left"],
    wrongChoices: [
      "Accelerate to prevent the overtaking vehicle from entering your lane space.",
      "Reduce speed and drive as far as possible over on the right.",
      "Come to an immediate to allow the car to pass.",
    ],
  },
  {
    question: "Are you allowed to overtake the cyclists?",
    image: {
      src: "/src/assets/lesson9Assets/dm59.webp",
      alt: "Cyclists on road with car behind",
    },
    answers: [
      "No, because your visibility is insufficient",
      "No, because oncoming traffic could prevent you from passing the cyclists at an adequate lateral distance",
    ],
    wrongChoices: [
      "Yes, if it would leave a safe lateral distance of 1.5m between you and the cyclists.",
      "Yes, only if you are sure there is no oncoming traffic.",
      "Yes, if you sound your horn early.",
    ],
  },
  {
    question:
      "You want to overtake a cyclist while driving up a slope on a narrow road. What do you do?",
    answers: [
      "Keep a greater lateral distance because the cyclist may begin to swing out",
      "Let the oncoming vehicles pass before overtaking",
    ],
    wrongChoices: [
      "Pass as closely as possible to ensure you do not cross the center line layout.",
      "Keep a lesser lateral distance because the cyclist may begin to swing out.",
      "Maintain a high gear ratio and accelerate next to their handlebars.",
    ],
  },
  {
    question:
      "A slow driver prevents you from proceeding quickly. What is right?",
    answers: ["You follow him until there is a possibility of overtaking"],
    wrongChoices: [
      "Tailgate closely until there is a possibility of overtaking.",
      "If there is enough space, and no oncoming traffic is put at risk, overtake using the hard shoulder.",
      "Sound your horn to alert them of your intention to overtake.",
    ],
  },
  {
    question:
      "A car in front of you on a country road is slightly slower than permitted. The obstruction by the slower car annoys you. What do you do?",
    answers: [
      "You control yourself and patiently adapt your speed to the car in front",
    ],
    wrongChoices: [
      "Refrain from overtaking yet, tailgate closely until there is a possibility of overtaking.",
      "If there is enough space, and no oncoming traffic is put at risk, overtake using the hard shoulder.",
      "Control yourself and sound your horn to alert them of your intention to overtake.",
    ],
  },
  {
    question:
      "You had to follow a car travelling rather slowly on a country road for some time. This annoyed you and you can finally overtake. What do you do?",
    answers: [
      "You control your annoyance and overtake",
      "You keep a sufficient distance, also when changing back into the left-hand lane",
    ],
    wrongChoices: [
      "Sound your horn to show them you are not happy.",
      "Brake-check them immediately after passing.",
      "Maintain a high beam signal in their mirrors while you pull away.",
    ],
  },
  {
    question:
      "The queue you are driving in is overtaken in an inconsiderate manner by a car. Because of oncoming traffic the driver wants to join the queue in front of the car driving in front of you. This driver is annoyed and 'closes the gap'. What do you do?",
    answers: ["You give in and let the jostling driver join the queue"],
    wrongChoices: [
      "Accelerate to close the gap.",
      "Sound your horn continuously and force the driver into oncoming traffic lanes.",
      "Match the speed of the overtaking car.",
    ],
  },
  {
    question:
      "A truck indicating to the left is driving in front of you. A queue has formed behind you. Some drivers lose their patience. What can you do?",
    answers: [
      "You only overtake when you are completely certain that the traffic situation allows overtaking without danger",
      "You open up the distance to the truck to make overtaking easier for the others",
    ],
    wrongChoices: [
      "Overtake the truck on the left if no oncoming traffic is put at risk only.",
      "Drive as close as possible to the truck to make overtaking possible for cars behind you.",
      "Sound your horn to alert the truck that you want to overtake.",
    ],
  },
  {
    question:
      "You are driving on a country road and want to overtake a car. Where at the latest must you have finished overtaking?",
    answers: [
      "Before an uninterrupted line starts (lane limit)",
      "Before a no-overtaking sign",
    ],
    wrongChoices: [
      "After an uninterrupted line starts (lane limit).",
      "Before a solid line ends.",
      "After a solid line starts.",
    ],
  },
  {
    question:
      "You are driving 100 km/h on a country road. A truck is driving in front of you at 70 km/h. What is the minimum distance you must be away from the brow of a hill when you start overtaking?",
    answers: ["800m"],
    wrongChoices: ["100m", "400m", "600m"],
  },
  {
    question:
      "A queue of cars has formed behind a truck, which car should overtake first?",
    answers: ["The first car behind the truck"],
    wrongChoices: [
      "The car that is capable of driving at a speed higher than that of the truck.",
      "The first car from the back of the queue.",
      "Any car that is less than 3.5t.",
    ],
  },
  {
    question:
      "A big combine harvester in front of you wishes to turn left. What is correct?",
    answers: [
      "The combine harvester will swing far out to the right when turning",
      "The combine harvester will slow down drastically before turning",
    ],
    wrongChoices: [
      "The combine harvester will accelerate to clear the lane before turning.",
      "The combine harvester will swing far out to the left when turning.",
      "The combine harvester will switch on hazard lights before turning.",
    ],
  },
  {
    question:
      "You are driving on a road in heavy traffic and have moved into the lane for turning left. At the crossroads, you realize that you wanted to turn right. What do you do?",
    answers: ["Turn left and accept that you have to make a detour"],
    wrongChoices: [
      "Cut across to reach the right-hand turn slot quickly.",
      "Slowly squeeze yourself into the right without putting any cars to risk.",
      "Activate your hazards and wait for traffic to clear before turning right.",
    ],
  },
  {
    question:
      "You are waiting at a traffic light and want to turn right. What should you remember?",
    answers: [
      "You must make sure there is no road user beside you on the right intending to go straight on",
    ],
    wrongChoices: [
      "Immediately when the light changes to green, switch on your indicator.",
      "You have priority over all vehicles, they wait for you.",
      "Position yourself in the left lane to give yourself enough space to turn.",
    ],
  },
  {
    question: "You want to turn left. What do you do?",
    image: {
      src: "/src/assets/lesson9Assets/dm72.webp",
      alt: "Intersection with cyclist and car",
    },
    answers: ["Allow the cyclist to continue straight on"],
    wrongChoices: [
      "Turn before the cyclist.",
      "Sound your horn to indicate to the cyclist that they must stop.",
      "Come to an agreement with the cyclist to decide who passes first.",
    ],
  },
  {
    question: "Which conduct is right?",
    image: {
      src: "/src/assets/lesson9Assets/dm73.webp",
      alt: "Intersection with yellow truck and give way sign",
    },
    answers: ["I must let the yellow truck pass"],
    wrongChoices: [
      "The yellow truck must yield to me because I am moving along the straight axis.",
      "Both vehicles must stop and agree on who proceeds first over the horn system.",
      "I must pass infront of the yellow vehicle.",
    ],
  },
  {
    question: "Which conduct is right?",
    image: {
      src: "/src/assets/lesson9Assets/dm74.webp",
      alt: "Driver view at stop line with cyclist",
    },
    answers: [
      "I must stop first at the stopping line",
      "I must let the cyclist pass",
    ],
    wrongChoices: [
      "I must stop first after the stopping line.",
      "I may turn slowly without stopping after the cyclist has passed.",
      "The cyclist may proceed after i proceed.",
    ],
  },
  {
    question: "You want to turn right. In which order do you prepare to turn?",
    answers: [
      "Check the traffic behind, switch on direction indicator, get into lane",
    ],
    wrongChoices: [
      "Get into lane, switch on indicator, check traffic behind afterwards.",
      "Switch on direction indicator, check the traffic behind, get into lane.",
      "Check the traffic behind, switch on hazards indicator, get into lane.",
    ],
  },
  {
    question: "Which line must you follow?",
    image: {
      src: "/src/assets/lesson9Assets/dm76.webp",
      alt: "Driver view showing lane markings for turn",
    },
    answers: ["The line on the left"],
    wrongChoices: [
      "The line on the right.",
      "You can follow either line.",
      "Drive in between the lines.",
    ],
  },
  {
    question: "When must you switch on your direction indicators?",
    answers: ["Before turning off at a junction or into a driveway"],
    wrongChoices: [
      "After turning off at a junction or into a driveway.",
      "Before and immediately after turning off at a junction or into a driveway.",
      "Immediately when you arrive at a junction or intersection.",
    ],
  },
  {
    question: "You want to turn right. When must you check for traffic behind?",
    answers: ["Before getting into lane and again immediately before turning"],
    wrongChoices: [
      "Only after you have completed the turn and entered the new roadway.",
      "At least five minutes before reaching the target intersection.",
      "After getting into lane and again immediately before turning.",
    ],
  },
  {
    question: "You want to turn right. Who must you give way to?",
    answers: [
      "Oncoming cyclist",
      "Oncoming motor vehicles",
      "Pedestrians wishing to cross the road you are turning into",
    ],
    wrongChoices: [
      "Pedestrians only.",
      "Oncoming motocyclists only.",
      "No one, all vehicles must wait for you.",
    ],
  },
  {
    question: "What must you do?",
    image: {
      src: "/src/assets/lesson9Assets/dm80.webp",
      alt: "Intersection with cyclists and car turning",
    },
    answers: ["Allow both cyclists to proceed"],
    wrongChoices: [
      "Turn before the cyclists.",
      "Allow only the oncoming cyclist to proceed.",
      "Allow only the cyclist on your side to proceed.",
    ],
  },
  {
    question:
      "Two vehicles are approaching each other. Both want to turn right. What must they do as a rule?",
    answers: ["They turn in front of each other"],
    wrongChoices: [
      "The vehicle that came first turns first.",
      "The vehicle on the right turns first.",
      "The vehicle on the left turns first.",
    ],
  },
  {
    question:
      "Two vehicles are approaching each other. Both want to turn right. In which cases are you not allowed to turn right in front of each other?",
    answers: [
      "When you notice that the approaching vehicle wanting to turn right wishes to turn behind your vehicle",
      "When this is forbidden by lane markings",
    ],
    wrongChoices: [
      "When there is traffic behind the cars.",
      "When you notice that the approaching vehicle does not need much space to turn.",
      "When the length of both cars is relatively smaller.",
    ],
  },
  {
    question: "You want to turn right. Which difficulties may arise?",
    answers: [
      "The visibility of approaching vehicles proceeding straight on may be obstructed by approaching vehicles wishing to turn right",
      "Dangerous misunderstandings may arise with approaching vehicles wishing to turn right",
    ],
    wrongChoices: [
      "Your vehicle's engine will automatically lose electronic fuel pump pressure.",
      "The steering wheel lock will engage if you rotate it past 45 degrees.",
      "Brake system efficiency drops automatically when turning toward the right side.",
    ],
  },
  {
    question:
      "What can give rise to particularly dangerous situations where several lanes turn off?",
    answers: ["Driving too fast", "Changing lanes while turning off"],
    wrongChoices: [
      "Maintaining your lane position with both hands on the steering wheel.",
      "Driving to slowly.",
      "Keeping a clean safety distance from the concrete side barrier.",
    ],
  },
  {
    question: "Which line must you follow in this one-way street?",
    image: {
      src: "/src/assets/lesson9Assets/dm85.webp",
      alt: "One-way street with lane markings",
    },
    answers: ["The line on the right"],
    wrongChoices: [
      "Drive in between the lanes.",
      "You can follow any one of the 2.",
      "The line on the left.",
    ],
  },
  {
    question:
      "All three vehicles want to turn right. Which is in the correct line?",
    image: {
      src: "/src/assets/lesson9Assets/dm86.webp",
      alt: "Intersection with three cars in lanes",
    },
    answers: ["The yellow car"],
    wrongChoices: ["The truck.", "The green car.", "All three vehicles."],
  },
  {
    question:
      "After turning right, you want to turn immediately left. How should you position your vehicle?",
    image: {
      src: "/src/assets/lesson9Assets/dm87.webp",
      alt: "Intersection with red car positioned to turn left",
    },
    answers: ["Like the red car"],
    wrongChoices: [
      "Like the blue car.",
      "Like the green car.",
      "In any convinient position.",
    ],
  },
  {
    question: "Who must signal a change of direction here?",
    image: {
      src: "/src/assets/lesson9Assets/dm88.webp",
      alt: "Intersection with red car, motorcycle, and your car",
    },
    answers: ["I myself", "The red car", "The motorcycle"],
    wrongChoices: [
      "I myself only.",
      "The red car only.",
      "The motorcycle only.",
    ],
  },
  {
    question: "Who must signal a change of direction here?",
    image: {
      src: "/src/assets/lesson9Assets/dm89.webp",
      alt: "Intersection with blue truck and red car",
    },
    answers: ["I myself", "The blue truck"],
    wrongChoices: ["The red car.", "Myself only.", "The blue truck only."],
  },
  {
    question: "Who must signal a change of direction here?",
    image: {
      src: "/src/assets/lesson9Assets/dm90.webp",
      alt: "Intersection with motorcycle",
    },
    answers: ["The motorcycle"],
    wrongChoices: ["Myself.", "No one.", "Both of us."],
  },
  {
    question: "Who must signal a change of direction?",
    image: {
      src: "/src/assets/lesson9Assets/dm91.webp",
      alt: "Intersection with oncoming car",
    },
    answers: ["I myself", "The oncoming car"],
    wrongChoices: ["I myself only.", "The oncoming car only.", "No one."],
  },
  {
    question:
      "What do you do when pedestrians are crossing the road you want to turn into and your traffic light is 'green'?",
    answers: [
      "Show special consideration towards the pedestrians and wait if necessary",
    ],
    wrongChoices: [
      "Sound your horn to warn them to stop since you have a green light.",
      "Pedestrians must always wait at a green light.",
      "Swerve around them onto the opposite shoulder without dropping your speed.",
    ],
  },
  {
    question:
      "What do you do when pedestrians are crossing the road you want to turn into?",
    answers: [
      "Show special consideration towards the pedestrians and wait if necessary",
    ],
    wrongChoices: [
      "Sound your horn to warn them to stop.",
      "Pedestrians must always wait for cars to pass.",
      "Swerve around them onto the opposite shoulder without dropping your speed.",
    ],
  },
  {
    question: "What must you do?",
    image: {
      src: "/src/assets/lesson9Assets/dm94.webp",
      alt: "Car turning right, pedestrians crossing",
    },
    answers: ["Allow both pedestrians to cross"],
    wrongChoices: [
      "Pass between the pedestrians at a walking speed.",
      "Sound your horn to warn them to return to the pavement edge immediately.",
      "Allow the pedestrian on your side only to pass.",
    ],
  },
  {
    question: "Where are U-turns prohibited?",
    answers: ["On Highways", "On clearways for motor vehicles only"],
    wrongChoices: [
      "On any unpaved secondary routes.",
      "Outside built up areas.",
      "Inside built up areas.",
    ],
  },
  {
    question: "What must you do when reversing?",
    answers: [
      "Mainly look to the back; also check the traffic situation at the front and the side",
      "Drive with particular attention and slowly",
    ],
    wrongChoices: [
      "Mainly look to the back; also check the traffic situation at the front only.",
      "Mainly look to the back; also check the traffic situation at the side only.",
      "Rely on your side mirrors without turning your head toward the back.",
    ],
  },
  {
    question:
      "You want to turn left and the lights are 'green'. There is a bus wanting to proceed straight ahead. Who must wait?",
    answers: ["You must wait"],
    wrongChoices: [
      "The bus driver must wait.",
      "We both must wait.",
      "We both slowly proceed.",
    ],
  },
  {
    question:
      "You want to turn left into a priority road. To which road users you pay particular attention?",
    answers: [
      "Vehicles approaching from the left and from the right",
      "Pedestrians and cyclists on your left or behind you",
    ],
    wrongChoices: [
      "Vehicles approaching from the left.",
      "Vehicles approaching from the right.",
      "Pedestrians and cyclists on your left or behind you only.",
    ],
  },
];
*/

/*
let lesson10Notes = [
    {
        "question": "Where is stopping prohibited?",
        "answers": [
            "On level crossings",
            "On narrow sections of the road and at blind spots"
        ],
        "wrongChoices": [
            "Before a stop line.",
            "5m from pedestrian crossings.",
            "In one-way streets."
        ]
    },
    {
        "question": "Where is parking prohibited?",
        "answers": [
            "At the edge of the roadway if this would prevent others from using designated parking areas",
            "On priority roads outside built-up areas"
        ],
        "wrongChoices": [
            "At the edge of the roadway if this would leave a space of 5m from the center line to the parked car.",
            "At bus stops if you would park for less than 3 minutes.",
            "On designated parking areas with a parking disc."
        ]
    },
    {
        "question": "What must be remembered here?",
        "image": {
            "src": "/src/assets/lesson10Assets/pvt3.webp",
            "alt": "Driver view of road with roadway boundary marking"
        },
        "answers": [
            "It is forbidden to stop on the right of the roadway boundary marking",
            "Slow vehicles must, wherever possible, use the hard shoulder"
        ],
        "wrongChoices": [
            "Slow vehicles must, wherever possible, use the hard shoulder to overtake.",
            "Slow vehicles must, wherever possible, use the right-hand lane.",
            "It is permitted to stop on the right of the roadway boundary marking for loading."
        ]
    },
    {
        "question": "Where is stopping prohibited?",
        "answers": [
            "On acceleration and deceleration lanes",
            "Between lane dividers when direction arrows are marked on the roadway"
        ],
        "wrongChoices": [
           "Before a stop line.",
            "5m from pedestrian crossings.",
            "5m away from a level crossing."
        ]
    },
    {
        "question": "Where is stopping prohibited?",
        "answers": [
            "On the roadway, if there is a sufficiently wide hard shoulder on the left",
            "Between lane dividers when direction arrows are marked on the roadway"
        ],
        "wrongChoices": [
            "In two way streets.",
            "5m away from a level crossing.",
            "In one-way streets."
        ]
    },
    {
        "question": "Where is stopping prohibited?",
        "answers": [
            "On pedestrian crossings and up to 5 m before pedestrian crossings"
        ],
        "wrongChoices": [
            "On pedestrian crossings and up to 10 m before pedestrian crossings.",
            "On pedestrian crossings and up to 15 m before pedestrian crossings.",
            "On pedestrian crossings and up to 20 m before pedestrian crossings."
        ]
    },
    {
        "question": "Where is parking prohibited?",
        "answers": [
            "At the edge of the roadway if this would prevent others from using designed parking areas",
            "Before sunken kerbstones"
        ],
        "wrongChoices": [
            "On designated parking areas.",
            "On broad sections of the road where visibility is clear.",
            "In towns and city roads."
        ]
    },
    {
        "question": "Where are you allowed to park on the right in the direction of travel?",
        "answers": [
            "In one-way streets"
        ],
        "wrongChoices": [
            "On two-way streets.",
            "On priority roads outside built-up areas.",
            "You should always park on the left."
        ]
    },
    {
        "question": "Who is parked?",
        "answers": [
            "Anyone who stops for more than 3 min.",
            "Anyone who leaves his vehicle"
        ],
        "wrongChoices": [
            "Anyone who stops for more than 1 min.",
            "Anyone who stops for more than 2 min.",
            "Anyone on a hard shoulder."
        ]
    },
    {
        "question": "What is the minimum distance you must leave clear when stopping or parking in front of a pedestrians crossing?",
        "answers": [
            "(( 5 )) m"
        ],
        "wrongChoices": [
            "(( 10 )) m",
            "(( 15 )) m",
            "(( 20 )) m"
        ]
    },
    {
        "question": "Up to what distances before and behind crossroads and junctions is parking prohibited",
        "answers": [
            "(( 5 )) m"
        ],
        "wrongChoices": [
            "(( 15 )) m",
            "(( 10 )) m",
            "(( 20 )) m"
        ]
    },
    {
        "question": "What is the minimum distance you must leave clear when parking outside a built-up area before a Railway Cross?",
        "answers": [
            "(( 50 )) m"
        ],
        "wrongChoices": [
            "(( 5 )) m",
            "(( 25 )) m",
            "(( 35 )) m"
        ]
    },
    {
        "question": "You want to park in front of a Railway Cross in a built-up area. What is the minimum distance you must leave clear?",
        "answers": [
            "(( 5 )) m"
        ],
        "wrongChoices": [
            "(( 10 )) m",
            "(( 15 )) m",
            "(( 50 )) m"
        ]
    },
    {
        "question": "Up to what distance is it not allowed to park before or behind a bus stop sign?",
        "answers": [
            "(( 15 )) m"
        ],
        "wrongChoices": [
            "(( 5 )) m",
            "(( 10 )) m",
            "(( 50 )) m"
        ]
    },
    {
        "question": "What is the maximum length of time you are allowed to stop at a bus stop provided you do not present an obstruction to buses?",
        "answers": [
            "(( 3 )) minutes"
        ],
        "wrongChoices": [
            "(( 1 )) minutes",
            "(( 5 )) minutes",
            "(( 10 )) minutes"
        ]
    },
    {
        "question": "Who has stopped incorrectly?",
        "image": {
            "src": "/src/assets/lesson10Assets/pvt16.webp",
            "alt": "Red car stopped on pedestrian crossing"
        },
        "answers": [
            "The red car"
        ],
        "wrongChoices": [
            "The yellow car",
            "Both cars",
            "No one"
        ]
    },
    {
        "question": "Who has parked incorrectly?",
        "image": {
            "src": "/src/assets/lesson10Assets/pvt17.webp",
            "alt": "Light-coloured car parked near bus stop"
        },
        "answers": [
            "The light-coloured car"
        ],
        "wrongChoices": [
            "The dark-coloured car",
            "Both cars",
            "No one"
        ]
    },
    {
        "question": "Who has stopped incorrectly?",
        "image": {
            "src": "/src/assets/lesson10Assets/pvt18.webp",
            "alt": "Red car stopped on hard shoulder"
        },
        "answers": [
            "The red car"
        ],
        "wrongChoices": [
            "Both cars",
            "No one",
            "The car infront"
        ]
    },
    {
        "question": "On the left and right of a street there are parking lanes for parking parallel to the roadway. Where are you allowed to park?",
        "answers": [
            "In two-way streets, only in the left-hand parking lane",
            "In one-way streets, in the right-hand or left-hand parking lane"
        ],
        "wrongChoices": [
            "In two-way streets, only in the right-hand parking lane.",
            "In one-way streets, only in the right-hand parking lane.",
            "In one-way streets, only in the left-hand parking lane."
        ]
    },
    {
        "question": "Which vehicles are allowed to stop in the second row alongside other vehicles?",
        "answers": [
            "Taxis, to let passengers board or alight, traffic conditions permitting"
        ],
        "wrongChoices": [
            "Buses, to let passengers board or alight.",
            "Delivery vehicles, for loading or unloading.",
            "Any car if stopping for less than 5 minutes."
        ]
    },
    {
        "question": "Where is stopping prohibited?",
        "answers": [
            "Outside parking areas on freeways and clearways for motor vehicles only",
            "Near or on sharp bends"
        ],
        "wrongChoices": [
            "5m away from pedestrian crossing.",
            "In one-way streets.",
            "In two way streets."
        ]
    },
    {
        "question": "In which cases is parking on the left-hand lane prohibited?",
        "answers": [
            "If there is a suitable hard shoulder on the left",
            "If this would not leave a gap of at least 3 m between your vehicle and the lane boundary marking"
        ],
        "wrongChoices": [
            "If there is a suitable hard shoulder on the right.",
            "If this would not leave a gap of at 2m between your vehicle and the lane boundary marking.",
            "If this would not leave a gap of at least 1.5m between your vehicle and the lane boundary marking."
        ]
    },
    {
        "question": "Where is parking prohibited?",
        "answers": [
            "On narrow roadways opposite driveway entrances and exits",
            "At taxi ranks"
        ],
        "wrongChoices": [
            "50m from level crossings.",
            "On broader sections of the road.",
            "On hard shoulders."
        ]
    },
    {
        "question": "You want to park on the left-hand edge of the roadway. What must be the minimum distance between your vehicle and the lane boundary marking?",
        "answers": [
            "(( 3 )) m"
        ],
        "wrongChoices": [
            "(( 5 )) m",
            "(( 10 )) m",
            "(( 15 )) m"
        ]
    },
    {
        "question": "Both cars want to park here. Which car takes precedence?",
        "image": {
            "src": "/src/assets/lesson10Assets/pvt25.webp",
            "alt": "Street with red car and white car"
        },
        "answers": [
            "The red car"
        ],
        "wrongChoices": [
            "The white car",
            "Both cars",
            "No one"
        ]
    },
    {
        "question": "Up to which permissible total mass may motor vehicles be parked on specially designated footpaths?",
        "answers": [
            "(( 3.5 )) t"
        ],
        "wrongChoices": [
            "(( 2.5 )) t",
            "(( 5.0 )) t",
            "(( 7.5 )) t"
        ]
    },
    {
        "question": "Before which signs are you not allowed to stop within a distance of 10m if the signs would be concealed by your vehicle?",
        "answers": [
            "Railway Cross",
            "Stop! Give way!"
        ],
        "wrongChoices": [
            "No overtaking",
            "Priority",
            "Speed Limit"
        ]
    },
    {
        "question": "What is the minimum distance a vehicle must leave clear in front of traffic lights if the traffic lights would be concealed by the vehicle?",
        "answers": [
            "(( 10 )) m"
        ],
        "wrongChoices": [
            "(( 5 )) m",
            "(( 15 )) m",
            "(( 50 )) m"
        ]
    },
    {
        "question": "Where are you allowed to park a trailer with a permissible total mass exceeding 2 t in built-up areas regularly on Sundays and public holidays and between 10 p.m and 6 a.m?",
        "answers": [
            "In industrial areas",
            "In wholly residential areas, on specially designated parking spaces"
        ],
        "wrongChoices": [
            "In commercial areas.",
            "In residential areas.",
            "In mixed-use areas, on the street."
        ]
    },
    {
        "question": "What must you remember when parking a trailer without a truck?",
        "answers": [
            "The trailer may not be parked for more than 2 weeks on public roads",
            "The trailer may be parked for more than 2 weeks on specially designated parking spaces"
        ],
        "wrongChoices": [
            "The trailer may not be parked for more than 1 week on public roads.",
            "The trailer may not be parked for more than 4 weeks on public roads.",
            "The trailer may be parked indefinitely on specially designated parking spaces."
        ]
    },
    {
        "question": "Where must you use a parking disc for parking?",
        "answers": [
            "At a defective parking meter",
            "Where stipulated by traffic signs"
        ],
        "wrongChoices": [
            "In all built-up areas.",
            "On all priority roads.",
            "At all bus stops."
        ]
    },
    {
        "question": "The time on a parking meter has not yet run out. What do you do?",
        "answers": [
            "You may use the time left on the metre without inserting more money"
        ],
        "wrongChoices": [
            "You must always insert more money, regardless of the time left.",
            "You cannot use the time left; you must wait for it to expire.",
            "You must use a parking disc instead of the remaining time."
        ]
    },
    {
        "question": "At 10:40, you enter an area where parking is allowed for 2 hours when using a parking disc. What time must you set on the parking disc?",
        "answers": [
            "(( 11:00 ))"
        ],
        "wrongChoices": [
            "(( 10:40 ))",
            "(( 10:50 ))",
            "(( 11:30 ))"
        ]
    },
    {
        "question": "You want to park in a car park where there is a parking-ticket machine. What must you remember",
        "answers": [
            "Place a valid parking ticket in your vehicle so it is easy to read from outside",
            "Do not exceed the parking time indicated on the parking ticket"
        ],
        "wrongChoices": [
            "Place a valid parking ticket in your vehicle so it is easy to read from inside.",
            "Always make sure to carry the parking ticket with you at all times.",
            "You can park for however long you wish if you placed a parking ticket in your car."
        ]
    },
    {
        "question": "For what purposes are you allowed to stop at parking meters which are out of order?",
        "answers": [
            "For boarding or alighting",
            "For loading or unloading"
        ],
        "wrongChoices": [
            "For parking up to 5 minutes.",
            "For parking up to 10 minutes.",
            "For parking indefinitely."
        ]
    },
    {
        "question": "You stop your vehicle to let a passenger out on the left. There is a cycle track there. What must you do?",
        "answers": [
            "Make sure there is no cyclist coming and only then let your passenger open the door."
        ],
        "wrongChoices": [
            "Let the passenger open the door immediately; cyclists must yield.",
            "Sound your horn to warn cyclists before letting the passenger out.",
            "Instruct the passenger to open the door quickly to minimize obstruction."
        ]
    },
    {
        "question": "What do you point out to passengers before they leave the car?",
        "answers": [
            "That they must watch out for moving traffic when leaving the car on the left-hand side",
            "That they must watch out for pedestrians when leaving the car on the left-hand side"
        ],
        "wrongChoices": [
            "That they must watch out for moving traffic when leaving the car on the right-hand side.",
            "That they must watch out for pedestrians when leaving the car on the right-hand side.",
            "That they do not need to watch for traffic if the hazard lights are on."
        ]
    },
    {
        "question": "Your car is standing on the edge of the roadway. What should you do when getting into the car?",
        "answers": [
            "Let passengers get into the car, if possible, from the left-hand side",
            "Open the doors on the roadway side only when traffic permits"
        ],
        "wrongChoices": [
            "Let passengers get into the car, if possible, from the right-hand side only.",
            "Open the doors on the roadway side only if you have your hazard lights on.",
            "Leave the doors open on the roadway side to signal other drivers."
        ]
    },
    {
        "question": "What is important when children are getting in and out of a car?",
        "answers": [
            "Let the children in or out, if possible, on the pavement side",
            "Let the children in or out on the roadway side only under supervision"
        ],
        "wrongChoices": [
            "Let the children in or out, if possible, on the roadway side.",
            "Let the children in or out on the right side.",
            "Children can get in or out on either side with hazard lights on."
        ]
    },
    {
        "question": "How must you safeguard your vehicle against theft?",
        "answers": [
            "By removing the ignition key, engaging the steering wheel and closing the windows",
            "By locking the doors and boot"
        ],
        "wrongChoices": [
            "By leaving the ignition key, engaging the steering wheel and locking the doors.",
            "By removing the ignition key, engaging the steering wheel and partially closing the windows.",
            "By leaving the ignition key, engaging the steering wheel and closing the windows."
        ]
    },
    {
        "question": "What must you do when leaving your car?",
        "answers": [
            "Before opening the door, look out for traffic behind",
            "Secure the vehicle against rolling away",
            "Secure the vehicle against unauthorised use"
        ],
        "wrongChoices": [
            "Before opening the door, look out for traffic ahead only.",
            "Avoid engaging the steering wheel when parking.",
            "Leave the engine running to keep the battery charged."
        ]
    },
    {
        "question": "How do you secure a car with a manual gearbox against rolling away on a downhill slope?",
        "answers": [
            "Apply the parking brake",
            "Engage first gear or reverse gear"
        ],
        "wrongChoices": [
            "Engage second gear or third gear.",
            "Leave the gearbox in neutral.",
            "Turn the steering wheel towards the center of the road."
        ]
    },
    {
        "question": "How do you secure a car with automatic transmission against rolling away on a downhill slope?",
        "answers": [
            "Apply the parking brake",
            "Put the selector lever in the \"P\" position."
        ],
        "wrongChoices": [
            "Put the selector lever in the 'N' position.",
            "Put the selector lever in the 'D' position.",
            "Put the selector lever in the 'R' position."
        ]
    },
    {
        "question": "You have a tyre failure on the Highway. What must you do?",
        "answers": [
            "Switch the hazard warning lights on and stop as far over on the left as possible (hard shoulder, stopping bay)",
            "Place the warning triangle at a distance of around 100m"
        ],
        "wrongChoices": [
            "Switch the hazard warning lights on and stop as far over on the right as possible (hard shoulder, stopping bay).",
            "Place the warning triangle at a distance of around 50m.",
            "Place the warning triangle at a distance of around 75m."
        ]
    },
    {
        "question": "At what distance must the warning triangle be placed when a car has broken down on a road with fast moving traffic?",
        "answers": [
            "At a distance of around 100m"
        ],
        "wrongChoices": [
            "At a distance of around 50m",
            "At a distance of around 75m",
            "At a distance of around 150m"
        ]
    },
    {
        "question": "At night, how must you secure a vehicle which has broken down at a place where it constitutes a danger to other traffic?",
        "answers": [
            "Immediately switch on the hazard warning lights",
            "Place a warning triangle at a sufficient distance"
        ],
        "wrongChoices": [
            "Immediately switch on the high beams.",
            "Place a warning triangle right next to the vehicle.",
            "Place a warning triangle 500m away from the car."
        ]
    },
    {
        "question": "When must you switch on the hazard warning lights?",
        "answers": [
            "When your vehicle has broken down at a place where it cannot readily be recognised as a stationary obstruction"
        ],
        "wrongChoices": [
            "When your vehicle has broken down at a place where it can readily be recognised.",
            "When you are driving slower than the speed limit.",
            "When you are parking in an undesignated parking area."
        ]
    },
    {
        "question": "Your vehicle has broken down on a country road. What must you remember when it is towed away?",
        "answers": [
            "Switch on the hazard warning lights on both vehicles while the vehicle is towed",
            "Always keep the tow-rope under tension"
        ],
        "wrongChoices": [
            "Switch on the hazard warning lights only on the towing vehicle.",
            "Switch on the hazard warning lights only on the towed vehicle.",
            "Always keep the tow-rope loose to prevent it from being cut."
        ]
    },
    {
        "question": "You want to tow another vehicle with your car. What must you know?",
        "answers": [
            "You must a least have a driving licence class B"
        ],
        "wrongChoices": [
            "You must a least have a driving licence class A",
            "You must a least have a driving licence class C",
            "You do not need a specific driving licence class."
        ]
    },
    {
        "question": "A car with servo brakes has broken down with engine damage. What is correct when towing the car away?",
        "answers": [
            "The car being towed can only achieve slight braking effect even when increased pressure is applied to the pedal",
            "If possible, use a tow-bar."
        ],
        "wrongChoices": [
            "The car being towed requires less pressure on the brake pedal.",
            "The car being towed can only achieve much braking effect even when increased pressure is applied to the pedal.",
            "If possible, use a tow-rope."
        ]
    },
    {
        "question": "A car with power steering has broken down with engine damage and must be towed away. What is correct?",
        "answers": [
            "The steering of the broken down car is considerably heavier"
        ],
        "wrongChoices": [
            "The steering of the broken down car is considerably lighter.",
            "The steering of the broken down car remains the same.",
            "The steering wheel of the broken down car will lock."
        ]
    },
    {
        "question": "What must you remember when towing?",
        "answers": [
            "The distance between the vehicles must not exceed 5m",
            "Tow-rope/tow-bar must be clearly marked"
        ],
        "wrongChoices": [
            "The distance between the vehicles must not exceed 10m.",
            "The distance between the vehicles must not exceed 15m.",
            "Tow-rope/tow-bar does not need to be marked."
        ]
    }
]
*/

/*
let lesson11Notes = [
  {
    question:
      "You turn from a brightly lit road into an unlit road. What do you have to bear in mind?",
    answers: [
      "Eyes adapt only slowly to darkness",
      "Obstructions are harder to make out than before",
    ],
    wrongChoices: [
      "Obstructions are easier to make out than before.",
      "You can safely maintain your previous speed without any risk.",
      "Eyes adapt only quickly to darkness.",
    ],
  },
  {
    question:
      "What must you reckon with in autumn when you encounter a line of oncoming cars with dipped headlights during daytime?",
    answers: ["Sudden banks of fog", "Heavy rain showers"],
    wrongChoices: [
      "An oncoming military convoy.",
      "People celebrating a wedding.",
      "A signal for animals crossing the road.",
    ],
  },
  {
    question:
      "Can dangers arise when you turn off a well-lit road into an unlit road?",
    answers: [
      "Yes, because the eyes cannot adapt to darkness so quickly",
      "Yes, because pedestrians are harder to make out",
    ],
    wrongChoices: [
      "Yes, because the eyes can adapt to darkness so quickly.",
      "No, because pedestrians are harder to make out.",
      "No, because your vehicle's side lights provide more than enough light.",
    ],
  },
  {
    question: "What must you do in this situation when you are dazzled?",
    image: {
      src: "/src/assets/lesson11Assets/bss4.webp",
      alt: "Road at night with bright headlights dazzling",
    },
    answers: [
      "Look to the left-hand edge of the roadway",
      "If necessary, reduce your speed",
    ],
    wrongChoices: [
      "Look directly into the oncoming headlights to make your eyes to adapt.",
      "Switch on your high beams immediately to dazzle the oncoming driver back.",
      "Accelerate quickly to pass the dazzling vehicle as quickly as possible.",
    ],
  },
  {
    question:
      "You are driving on a new road through a woodland area. What must you reckon with?",
    answers: [
      "Game animals unexpectedly crossing the roadway",
      "An obstruction caused by an accident involving a game animal",
    ],
    wrongChoices: [
      "A sudden mandatory increase in the permitted speed limit.",
      "An intersection with non working traffic lights.",
      "Game animals always staying away from the road when cars approach.",
    ],
  },
  {
    question:
      "Several deer run across the road in front of your vehicle. What must you reckon with?",
    answers: [
      "There could be stragglers following the herd",
      "The herd may come back and cross the road again",
    ],
    wrongChoices: [
      "The deer will clear the road completely and will not return.",
      "Other drivers will stop to help you guide the deer safely off the road.",
      "The deer will immediately run away when you sound your horn.",
    ],
  },
  {
    question:
      "What must you do if a collision with a game animal is impossible to avoid?",
    answers: [
      "Brake, hold the steering wheel or handlebar firmly and try to maintain the direction of travel",
    ],
    wrongChoices: [
      "Swerve aggressively into the oncoming lane to avoid hitting it.",
      "Accelerate quickly to minimize the force of the animal hitting your windshield.",
      "Change to gear 5, brake and hold the steering wheel firmly and maintain the direction of travel.",
    ],
  },
  {
    question:
      "You are driving on a country road at a brisk pace and see deer grazing near the roadway. What must you do?",
    answers: ["Reduce speed and be ready to brake"],
    wrongChoices: [
      "Maintain your speed and sound your horn continuously to scare them away.",
      "Switch on your high beams immediately to keep them away.",
      "Accelerate to pass by them before they have a chance to step onto the road.",
    ],
  },
  {
    question:
      "At which time of the day do you have to reckon with increased game pass?",
    answers: ["At dusk", "At dawn"],
    wrongChoices: [
      "Only at midday when the sun is at its highest point.",
      "Precisely at midnight when there is no active traffic.",
      "At any hour of the day.",
    ],
  },
  {
    question:
      "What must you remember concerning the lighting equipment of your vehicle?",
    answers: [
      "It must be correctly installed",
      "It must be clean",
      "It must be in operating condition",
    ],
    wrongChoices: [
      "It must only be checked and serviced during your annual vehicle inspections.",
      "It should be custom-modified to be as bright as possible.",
      "It is only necessary to keep it functional when driving outside built-up areas.",
    ],
  },
  {
    question:
      "What can cause even dipped headlights to dazzle oncoming traffic?",
    answers: [
      "Headlights set too high",
      "Incorrectly inserted bulbs",
      "An overloaded vehicle",
    ],
    wrongChoices: [
      "Headlights set too low.",
      "Driving on high beams during the day.",
      "Incorrect wheel alignment.",
    ],
  },
  {
    question:
      "How can you achieve sufficient visibility through the windscreen?",
    answers: [
      "Switch on the windscreen wipers from time to time when it is foggy",
      "When there is slush, switch on the windscreen wipers already before slush is thrown onto your windscreen by other vehicles",
    ],
    wrongChoices: [
      "Apply a thin layer of oil to the outside of the windscreen to repel dirt.",
      "Switch on the windscreen wipers every 20 minutes when it is foggy.",
      "Only clear the windscreen once your visibility is completely blocked by mud.",
    ],
  },
  {
    question:
      "While driving at night on a country road you see pedestrians on your side. What do you do if you are dazzled by an oncoming vehicle?",
    answers: ["Reduce speed and, if necessary, stop"],
    wrongChoices: [
      "Steer towards the edge of the road to pass the pedestrians.",
      "Look to your left side immediately to avoid contact with the lights.",
      "Overtake the pedestrians immediately by swerving into the oncoming lane.",
    ],
  },
  {
    question:
      "What must you do if game animals suddenly appear in the full beam of your headlights?",
    answers: ["Immediately dip your headlights", "Sound the horn and brake"],
    wrongChoices: [
      "Maintain full beam headlights and accelerate to frighten them off the road.",
      "Switch off all vehicle lights completely.",
      "Swerve violently to the left shoulder without applying the brakes.",
    ],
  },
  {
    question: "Which dangers are presented when you drive on full beam?",
    answers: [
      "Oncoming drivers are dazzled to the extent that they cannot make out pedestrians on their side of the roadway in time",
      'Game animals on the road are dazzled and "freeze" in the beam of light',
    ],
    wrongChoices: [
      "Your vehicle's battery will drain quickly.",
      "Game animals on the road are dazzled and always run away in the beam of light.",
      "Oncoming drivers are dazzled when lights are set too low to the extent that they cannot make out pedestrians on their side of the roadway in time.",
    ],
  },
  {
    question:
      "In the dark, an oncoming vehicle fails to dips its headlights. What can you do so that you can still see to a certain extent?",
    answers: [
      "Avoid looking at the headlights of the approaching vehicle and direct your gaze towards the left-hand edge of the roadway",
    ],
    wrongChoices: [
      "Close your eyes until the oncoming vehicle passes you.",
      "Slowly look at the headlights of the approaching vehicle to adjust your eyes to the light.",
      "Turn on your interior cabin light to balance out the external brightness.",
    ],
  },
  {
    question:
      "What must you do after an accident with a game animal (for example a roe)?",
    answers: [
      "Stop, switch on hazard warning lights and make the scene of the accident safe",
      "Inform the police or the nearest Council office",
    ],
    wrongChoices: [
      "Load the animal into your vehicle's boot and drive it to the nearest police station.",
      "Leave the scene immediately if your vehicle is still driveable.",
      "Drag the animal outside the road and proceed with your journey.",
    ],
  },
  {
    question:
      "Visibility is considerably reduced. When are you allowed to switch on fog headlamps?",
    answers: ["In rain", "In falling Hail", "In fog"],
    wrongChoices: [
      "In clear night conditions on unlit country roads to improve vehicle styling.",
      "In well-lit tunnels during daytime hours.",
      "At any hour of the day.",
    ],
  },
  {
    question:
      "You are driving in darkness with headlights on full beam. When must you dip your headlights?",
    answers: [
      "If you come to a road with adequate continuous lighting",
      "If you have to wait at a level crossing",
    ],
    wrongChoices: [
      "Only if you have to wait at a level crossing.",
      "Only if you come to a road with adequate continuous lighting.",
      "Only when an oncoming vehicle flashes its lights at you.",
    ],
  },
  {
    question:
      "You are driving in darkness with headlights on full beam. When must you dip your headlights?",
    answers: [
      "If there is oncoming traffic",
      "If a vehicle is travelling a short distance in front of you",
    ],
    wrongChoices: [
     "Only if you have to wait at a level crossing.",
      "Only if you come to a road with adequate continuous lighting.",
      "Only when an oncoming vehicle flashes its lights at you.",
    ],
  },
  {
    question:
      "You are driving at night on an unlit road. There is a motor vehicle travelling a short distance in front of you. Which lights must you have on?",
    answers: ["Dipped headlights"],
    wrongChoices: [
      "Full beam headlights.",
      "Side lights.",
      "Parking lights.",
    ],
  },
  {
    question:
      "You are driving in darkness with dipped headlights. Oncoming motorists flash their lights at you. What can this mean?",
    answers: [
      "The headlights of your vehicle may be incorrectly set and are dazzling other vehicles",
      "The light range adjustment of your vehicle is defective or you have chosen the wrong setting",
    ],
    wrongChoices: [
      "They are inviting you to turn on your high beams to see better.",
      "They are indicating that your hazard warning lights are faulty.",
      "They are warning you of the danger ahead.",
    ],
  },
  {
    question: "When are you allowed to use fog headlamps also during the day?",
    answers: [
      "When visibility is considerably reduced by fog or falling hail",
      "When visibility is considerably reduced by rain",
    ],
    wrongChoices: [
      "Whenever you are driving through a busy built-up residential area.",
      "To temporarily replace a broken dipped headlight bulb in clear weather.",
      "When visibility is considerably increased by fog or falling hail.",
    ],
  },
  {
    question: "When are you allowed to switch on rear fog lamps?",
    answers: ["When fog reduces visibility to less than 50m"],
    wrongChoices: [
      "When fog reduces visibility to less than 100m.",
      "When fog reduces visibility to less than 150m.",
      "When fog reduces visibility to less than 200m.",
    ],
  },
  {
    question:
      "Where are parking lights sufficient when parking a car on unlit roads?",
    answers: ["In built-up areas"],
    wrongChoices: [
      "On all freeways, motorways, and clearways.",
      "On narrow country roads outside built-up areas.",
      "At all level crossings outside built-up areas.",
    ],
  },
  {
    question:
      "When you are driving, how can you tell whether the headlights are switched on full beam?",
    answers: ["By a blue indicator light"],
    wrongChoices: [
      "By a green indicator light on the dashboard.",
      "By a red flashing warning symbol next to the speedometer.",
      "By an acoustic buzzer signal that sounds continuously in the cabin.",
    ],
  },
  {
    question:
      "Which dangers can arise from a manual light range adjustment being incorrectly set?",
    answers: ["Oncoming traffic may be dazzled", "Visibility may be too low"],
    wrongChoices: [
      "The vehicle's engine may overheat due to high electrical power draw.",
      "The directional indicators may fail to operate correctly when turning.",
      "The vehicle's mechanical braking distance will increase significantly.",
    ],
  },
  {
    question: "When must you drive at least with dipped headlights?",
    answers: [
      "In twilight",
      "In the daytime if visibility conditions make it necessary",
      "When driving through badly lit underpasses",
    ],
    wrongChoices: [
      "Only when driving at speeds faster than 100 km/h.",
      "When parking your vehicle inside a well-lit multi-story car park.",
      "Only during the winter months when visibility is bad.",
    ],
  },
  {
    question:
      "Are you allowed to drive only with side lights (parking lights) in darkness?",
    answers: ["No"],
    wrongChoices: [
      "Yes, if the public street lighting is continuous and bright.",
      "Yes, inside built-up areas when driving below 30 km/h.",
      "Yes, but exclusively on one-way streets.",
    ],
  },
  {
    question:
      "What must you do when you enter a badly lit underpass in the daytime?",
    answers: ["Switch on dipped headlights"],
    wrongChoices: [
      "Switch on full beam headlights.",
      "Switch on your hazard warning lights.",
      "Switch on your side lights.",
    ],
  },
  {
    question: "When must you use dipped headlights also during the day?",
    answers: [
      "When visibility is considerably reduced by fog or falling hail",
      "When visibility is considerably reduced by rain",
    ],
    wrongChoices: [
      "When driving through an industrial zone during midday.",
      "When visibility is considerably increased by fog or falling hail.",
      "Only when driving on single-lane roads.",
    ],
  },
  {
    question:
      "Why must you use at least dipped headlights also during the day when visibility is considerably reduced by fog, rain or falling hail?",
    answers: ["So that you can be seen better by other road users"],
    wrongChoices: [
      "To illuminate the road ahead up to a minimum distance of 300 m.",
      "To comply with local police regulations.",
      "To heat up the headlight lenses and prevent ice formation on the glass.",
    ],
  },
  {
    question:
      "In which cases must you at least switch on side lights (parking lights) in twilight or darkness?",
    answers: [
      "When the vehicle is parked on the hard shoulder outside built-up areas",
    ],
    wrongChoices: [
      "When driving at a speed less than 30km/h.",
      "When driving at a speed less than 60km/h.",
      "When the vehicle is driving on the hard shoulder outside built-up areas.",
    ],
  },
  {
    question: "What can interfere with your view?",
    answers: [
      "The load",
      "Worn wiper blades (formation of streaks)",
      "Smeared windows",
    ],
    wrongChoices: [
      "An adjusted interior rear-view mirror.",
      "Using a premium brand of windscreen washer fluid.",
      "Driving with a fully functioning electronic stability control system.",
    ],
  },
  {
    question:
      'In your rear-view mirror, you see the words "STOP POLICE" in red illuminated letters on the roof of a police car immediately behind your car. Who does this apply to?',
    answers: ["To you only"],
    wrongChoices: [
      "To the car infront of you.",
      "To the car behind the police car.",
      "To all the cars infront of the police car.",
    ],
  },
  {
    question:
      'The words "Please Follow" are illuminated on a police car immediately preceding your car. What does this mean?',
    answers: ["Only you must follow the police car"],
    wrongChoices: [
      "All vehicles behind the police car must follow the police car.",
      "All vehicles infront of the the police car must follow the police car.",
      "Only the car on the right must follow the police car.",
    ],
  },
  {
    question:
      'A police car overtakes you and turns into your lane in front of you. The words "STOP POLICE" are illuminated in red letters on the roof. Who does this apply to?',
    answers: ["To you only"],
    wrongChoices: [
      "To the oncoming traffic coming from the opposite direction only.",
      "To all vehicles within a 100-meter radius of the police car.",
      "Only to vehicles driving infront of the police car.",
    ],
  },
  {
    question:
      "You are waved down by a red illuminated signal disk from a car driving immediately in front of you. The car cannot be recognised as a police car. What does that mean?",
    answers: ["You must follow the car and stop behind it"],
    wrongChoices: [
      "You should ignore the signal and report the vehicle for reckless driving.",
      "You must accelerate, overtake the vehicle immediately, and drive away.",
      "You should flash your high beams and sound your horn continuously.",
    ],
  },
  {
    question:
      "A vehicle with flashing blue light and siren is approaching. What do you do?",
    answers: [
      "Clear the way for the vehicle",
      "Drive carefully onto the pavement if necessary",
    ],
    wrongChoices: [
      "Accelerate immediately and try to stay ahead of the emergency vehicle.",
      "Brake hard and stop exactly where you are to create space for emergency vehicle.",
      "Switch on your warning lights to warn other cars.",
    ],
  },
  {
    question: "You hear a siren. Which questions must you ask yourself?",
    answers: [
      "Where is the emergency vehicle coming from?",
      "Could I obstruct the emergency vehicle?",
    ],
    wrongChoices: [
      "Can i drive faster than the emergency vehicle to avoid obstructing it?",
      "Is the emergency vehicle responding to a medical or a fire incident?",
      "Should I switch off my engine completely until the siren stops sounding?",
    ],
  },
  {
    question: "What can a flashing amber light on a vehicle be a warning for?",
    answers: [
      "For dangers at roadworks or the scene of an accident",
      "For an exceptionally wide vehicle",
      "For a large transport proceeding at low speed",
    ],
    wrongChoices: [
      "For a standard passenger car executing a right-hand turn.",
      "For a police vehicle performing an active high-speed emergency pursuit.",
      "For a priority vehicle carrying a high-ranking foreign diplomat.",
    ],
  },
  {
    question: "What can a flashing blue light (without siren) mean?",
    answers: [
      "The vehicle is on duty. You should give way",
      "Advance warning of a closed convey",
    ],
    wrongChoices: [
      "The vehicle has a critical technical defect in its electrical wiring.",
      "The driver is testing newly installed commercial lighting accessories.",
      "The vehicle is operating as a regular slow-moving public transport bus.",
    ],
  },
  {
    question:
      "What must you do when a traffic jam has formed on this road outside built-up areas?",
    image: {
      src: "/src/assets/lesson11Assets/bss43.webp",
      alt: "Driver view of traffic jam on road outside built-up area",
    },
    answers: [
      "Move over to the right-hand side of your lane and leave a channel in the middle",
    ],
    wrongChoices: [
      "Drive continuously on the hard shoulder to escape the traffic jam.",
      "Move over to the middle-hand side of your lane and leave a channel in the left.",
      "Keep a closer distance to the car infront.",
    ],
  },
  {
    question: "A traffic jam is building up here. What must you do?",
    image: {
      src: "/src/assets/lesson11Assets/bss44.webp",
      alt: "Driver view of traffic jam building up ahead",
    },
    answers: [
      "If possible, switch on hazard warning lights to warn vehicles following behind",
      "Drive as far as possible on the left to leave room for a channel on the right",
    ],
    wrongChoices: [
      "Overtake on the right using the oncoming lane to inspect the cause.",
      "Overtake using a hard shoulder only.",
      "Sound your horn repeatedly to warn other drivers.",
    ],
  },
  {
    question:
      "You are involved in a traffic accident. What are you required to do?",
    answers: [
      "You must immediately pull over to the side",
      "You must inform the police that you were involved in the accident",
      "You must on request, give your name and address and show your driving licence and vehicle registration certificate or, if applicable permit for use",
    ],
    wrongChoices: [
      "Leave the scene if you feel the accident was not your fault.",
      "Hide your identity documents until a legal representative arrives at the scene.",
      "Offer a financial settlement on the spot to the victims.",
    ],
  },
  {
    question:
      "You have damaged a parked vehicle. Though you have waited for a reasonable length of time, the other driver has not appeared. What must you do?",
    answers: [
      "Leave your name and address on the damaged vehicle and immediately report the accident to the police within 24 hrs.",
    ],
    wrongChoices: [
      "Drive away without leaving any information if the damage appears minor.",
      "Wait for exactly 5 minutes, then leave without taking any further action.",
      "Remove the other vehicle's registration plate so they must contact the police.",
    ],
  },
  {
    question:
      "What are you required to do if you are involved in a traffic accident where people are injured?",
    answers: [
      "You must stop and ascertain the results of the accident",
      "You must make the scene of the accident safe",
      "You must help the injured and call the police",
    ],
    wrongChoices: [
      "Drive past the scene carefully to avoid causing further traffic congestion.",
      "You should call the police and walk away.",
      "Only offer help if you are personally acquainted with the injured persons.",
    ],
  },
  {
    question:
      "You are the first person to arrive at the scene of an accident with injured persons. In which order do you proceed?",
    answers: [
      "Make the scene of the accident safe – give first aid – call the rescue service and the police",
    ],
    wrongChoices: [
      "Call the rescue service – inspect the vehicle damage – leave the scene.",
      "Give first aid – search for personal belongings – make the scene safe.",
      "Call the police – wait in your car – check for injuries after 10 minutes.",
    ],
  },
  {
    question:
      "You are the first person to arrive at the scene of an accident with injured persons. What should you do first as a rule?",
    answers: ["Make the scene of the accident safe"],
    wrongChoices: [
      "Administer complex medical treatments or medication immediately.",
      "Move the heavily damaged vehicles to the side.",
      "Remove the injured people from their vehicles.",
    ],
  },
  {
    question: "What is entered in the Central Card-Index for Traffic Offences?",
    answers: [
      "Criminal offences in connection with road traffic",
      "Traffic offences for which an administration fine must be paid",
    ],
    wrongChoices: [
      "Every routine vehicle maintenance check and scheduled oil change.",
      "The names and identification details of your regular passengers.",
      "Your financial records and personal credit score ratings.",
    ],
  },
  {
    question:
      "What is the earliest point in time when traffic offences entered in the Central Card-Index for Traffic Offences are struck off the register?",
    answers: ["After two years"],
    wrongChoices: [
      "After six months.",
      "After five years.",
      "After ten years.",
    ],
  },
  {
    question:
      "For which purpose do you have to obtain a Driving Instructor Certificate from the Licensing Authority?",
    answers: [
      "If I teach for hire or reward",
      "If I teach as employee the staff of my company",
    ],
    wrongChoices: [
      "If I want to teach my own children how to drive.",
      "If I am driving my own personal vehicle.",
      "If I want to apply for a standard passenger car driving licence.",
    ],
  },
  {
    question:
      "Your PSV (PrDP) Permit has expired after 25 months. What are the implications?",
    answers: [
      "I have to apply for a full test",
      "I have to submit a new medical certificate and finger prints",
    ],
    wrongChoices: [
      "My standard driving licence is completely revoked forever.",
      "I am automatically granted an indefinite extension without any conditions.",
      "I only need to pay a small processing fee without any test or medical documents.",
    ],
  },
];
*/

/*
let lesson12Notes = [
    {
        "question": "Young drivers travelling to and from discotheques at night are often involved in serious accidents. What could be important reasons for this?",
        "answers": [
            "Exuberance, high spirits and carelessness",
            "Driving too fast and taking risks in order to show off"
        ],
        "wrongChoices": [
            "The vehicles they drive are generally older and mechanically unsafe.",
            "Strict police enforcement causes panic and sudden erratic maneuvers.",
            "Driving at excessively slow speeds to avoid police detection."
        ]
    },
    {
        "question": "The risk of young drivers being involved in an accident is much higher than that of older drivers. What could be important reasons for this?",
        "answers": [
            "Many young drivers want to test themselves and the performance of their cars. By doing this, many of them are involved in situations they cannot master",
            "Many young drivers take too many risks and are too thoughtless when driving. They often lack experience in order to assess the risks",
            "Many young drivers rely too much on the safety of their vehicles"
        ],
        "wrongChoices": [
            "Older drivers naturally have significantly faster physical reaction times.",
            "Young drivers are legally required to drive on more dangerous road routes.",
            "Vehicles driven by young drivers are inherently more difficult to steer."
        ]
    },
    {
        "question": "Driving at night to the next discotheque by car, a group of young men and women wants to keep spirits high during the journey. They thus sing exuberantly, laugh and turn up the volume on the car radio. How should the driver of the car react in such a situation?",
        "answers": [
            "The driver responsible for safety must distance himself from the group in such a case and ask his passengers not to divert his attention"
        ],
        "wrongChoices": [
            "The driver responsible for safety must join the group in such a case because this ensures he remains active and thus reduces road accidents.",
            "Accelerate to reach the destination faster and end the distraction sooner.",
            "Turn the radio volume even higher to completely drown out the passengers."
        ]
    },
    {
        "question": "What are frequent causes of traffic accidents after a visit to the discotheque?",
        "answers": [
            "Inexperienced young drivers, particularly when driving in the dark",
            "Young drivers showing off when travelling in groups",
            "Young drivers lacking experience in driving fully loaded cars"
        ],
        "wrongChoices": [
            "Mechanical vehicle failures caused by sitting in the discotheque parking lot.",
            "Sudden drops in tire pressure due to abrupt nighttime temperature changes.",
            "Strict curfews forcing young drivers to rush home before midnight."
        ]
    },
    {
        "question": "What can result in your qualification to drive being reviewed?",
        "answers": [
            "Frequent violation of traffic regulations",
            "Permanent physical handicaps which may put the safe driving of motor vehicles into question"
        ],
        "wrongChoices": [
            "Parking your vehicle slightly outside marked parking bays occasionally.",
            "Upgrading your vehicle to one with a significantly larger engine capacity.",
            "Changing the exterior paint color of your vehicle without notification."
        ]
    },
    {
        "question": "What is the current trial (learner) period?",
        "answers": [
            "6 months"
        ],
        "wrongChoices": [
            "12 months",
            "18 months",
            "24 months"
        ]
    },
    {
        "question": "An applicant for a learner permit is caught driving without a licence during this training period. Can this be a reason not to issue a driving licence to him?",
        "answers": [
            "Yes, because this creates doubts about his characters"
        ],
        "wrongChoices": [
            "No, because practical driving experience is encouraged regardless of license status.",
            "No, as long as they were driving safely and no accident occurred during the drive.",
            "No, because the local traffic authority allows minor exceptions for eager learners."
        ]
    }
]
*/

/*
let lesson13Notes = [
    {
        "question": "What influences the degree of centrifugal force on bends?",
        "answers": [
            "The radius of the bend",
            "Speed"
        ],
        "wrongChoices": [
            "The color of the road surface",
            "The engine capacity of the vehicle",
            "The gear you are driving in"
        ]
    },
    {
        "question": "What can cause skidding on bends?",
        "answers": [
            "Faulty shock-absorbers",
            "Insufficient or uneven tyre pressure"
        ],
        "wrongChoices": [
            "Driving in a low gear",
            "Using the horn on bends",
            "Having the headlights on"
        ]
    },
    {
        "question": "You are approaching a narrow left-hand bend at high speed. Why must you reduce speed already before entering the bend?",
        "answers": [
            "Because otherwise you will be thrown out of the bend to the right",
            "Because you will go into a skid if you do not brake until you are on the bend"
        ],
        "wrongChoices": [
            "Because otherwise the fuel consumption increases",
            "Because the indicators will not work properly",
            "Because other drivers cannot see your brake lights"
        ]
    },
    {
        "question": "You are driving round a bend rather fast and suddenly you must brake heavily. What is correct?",
        "answers": [
            "The vehicle can swing out"
        ],
        "wrongChoices": [
            "The vehicle will slow down normally",
            "The steering wheel will lock",
            "Nothing unusual will happen"
        ]
    },
    {
        "question": "What increases the danger of \"flying out\" of a bend when driving at high speed?",
        "answers": [
            "Braking",
            "Accelerating"
        ],
        "wrongChoices": [
            "Steering gently",
            "Changing gears",
            "Using the indicators"
        ]
    },
    {
        "question": "You drive round a bend once at 30 km/h and again at 60 km/h. How does the centrifugal force change?",
        "answers": [
            "Centrifugal force at 60 km/h is four times as high"
        ],
        "wrongChoices": [
            "Centrifugal force stays the same",
            "Centrifugal force is only twice as high",
            "Centrifugal force decreases"
        ]
    },
    {
        "question": "What increases the effect of centrifugal force on the vehicle when driving round bends?",
        "answers": [
            "Higher speed",
            "Smaller radius of a bend"
        ],
        "wrongChoices": [
            "Lower speed",
            "A wider road",
            "A larger radius of a bend"
        ]
    },
    {
        "question": "Which lighting equipment of a motor vehicle must be duplicated if e.g such equipment is covered by mounted implements or load supports?",
        "answers": [
            "Indicator lights and brake lights",
            "Tail lamps, rear reflectors and numbers plate lights"
        ],
        "wrongChoices": [
            "The dashboard lights",
            "The horn and reverse alarm",
            "The dashboard warning lights"
        ]
    },
    {
        "question": "Where do you find information on permissible towed loads?",
        "answers": [
            "In the vehicle registration certificate",
            "In the vehicle registration book",
            "In the owner's manual"
        ],
        "wrongChoices": [
            "On the driving licence",
            "On the number plate",
            "In the insurance certificate"
        ]
    },
    {
        "question": "What is designated as towed load?",
        "answers": [
            "The actual load being towed"
        ],
        "wrongChoices": [
            "A vehicle with no load",
            "The weight of the towing vehicle only",
            "The distance covered while towing"
        ]
    },
    {
        "question": "A single-axle trailer has an actual weight of 600 kg. What must be the minimum load on the trailer coupling of the car?",
        "answers": [
            "24 kg (= 4 %)"
        ],
        "wrongChoices": [
            "60 kg (= 10 %)",
            "45 kg (= 8 %)",
            "120 kg (= 25 %)"
        ]
    },
    {
        "question": "You are towing a trailer with your motor vehicle. What is important for visibility to the rear?",
        "answers": [
            "Trailer and load may not impair any following traffic in a non-permissible way",
            "If the normal mirrors do not provide adequate view due to trailer or load, additional mirrors must be installed"
        ],
        "wrongChoices": [
            "The trailer must always be shorter than the car",
            "Only the left mirror needs to be adjusted",
            "If the normal mirrors do not provide adequate view due to trailer or load, dashboard camera screen must be installed"
        ]
    },
    {
        "question": "What must you check on a car with a caravan trailer before setting out on a journey?",
        "answers": [
            "Whether the lights of the trailer are working",
            "Whether the view through the rear-view mirrors is adequate"
        ],
        "wrongChoices": [
            "Whether the fuel tank of the trailer is full",
            "Whether the trailer has the same tyre brand as the car",
            "Whether the trailer is shorter than the car"
        ]
    },
    {
        "question": "You want to tow a single-axle caravan trailer behind your car. What must you check?",
        "answers": [
            "If the permissible trailer load or the permissible coupling of the car are exceeded",
            "If additional rear-view mirrors must be mounted because of the width of the trailer"
        ],
        "wrongChoices": [
            "If the trailer has new brakes",
            "If the trailer has the same tyre brand as the car",
            "If the trailer is shorter than the car"
        ]
    },
    {
        "question": "You want to couple up a trailer with ball coupling. What is correct?",
        "answers": [
            "The claw of the coupling must fit securely around the ball.",
            "The locking device must engage",
            "The electrics must be connected"
        ],
        "wrongChoices": [
            "The ball must be greased before every trip",
            "The locking device must dis-engage",
            "The handbrake of the car must be released first"
        ]
    },
    {
        "question": "What must you do after coupling up a single-axle trailer with overrun brakes?",
        "answers": [
            "Check that the brakes are working",
            "Raise the jack wheel, if fitted, to the highest setting",
            "Attach the brakeaway cable to the coupling of the motor vehicle"
        ],
        "wrongChoices": [
            "Remove the number plate of the trailer",
            "Lower the jack wheel, if fitted, to the lowest setting",
            "Reduce the tyre pressure of the trailer"
        ]
    },
    {
        "question": "Which dangerous defects can have occurred on a trailer with overrun brakes which has been parked for some time?",
        "answers": [
            "The brakes may not work because of rust",
            "Cable connections can be defective"
        ],
        "wrongChoices": [
            "The paintwork may fade",
            "The upholstery may get damp",
            "The number plate may fall off"
        ]
    },
    {
        "question": "What must you check before setting off as the driver of a truck and trailer when the trailer has overrun brakes?",
        "answers": [
            "Functioning of the overrun brakes"
        ],
        "wrongChoices": [
            "The fuel level of the trailer",
            "The color of the trailer lights",
            "The age of the trailer"
        ]
    },
    {
        "question": "Who is responsible for the roadworthiness of licensed vehicle?",
        "answers": [
            "The driver",
            "The owner"
        ],
        "wrongChoices": [
            "The traffic police",
            "The vehicle manufacturer",
            "Transport department"
        ]
    },
    {
        "question": "What must you do when you are travelling and you notice that your vehicle is no longer roadworthy?",
        "answers": [
            "Take the vehicle out of the traffic as quickly as possible",
            "Continue only when the damage has been repaired"
        ],
        "wrongChoices": [
            "Increase your speed to reach a garage quickly",
            "Wait until the next scheduled service to get it fixed",
            "Switch off the hazard lights"
        ]
    },
    {
        "question": "Which defects of a vehicle can result in a danger for road traffic?",
        "answers": [
            "Worn tyres",
            "Defective rear lamps",
            "Insufficient braking effect"
        ],
        "wrongChoices": [
            "A dirty windscreen only",
            "A low fuel level",
            "An empty washer fluid tank"
        ]
    },
    {
        "question": "Moisture can impair the action of drum brakes. What should you do?",
        "answers": [
            "Cautiously apply the brakes while driving slowly"
        ],
        "wrongChoices": [
            "Drive faster to dry the brakes with airflow",
            "Pour water over the brakes to cool them",
            "Quickly apply the brakes while driving at a faster speed"
        ]
    },
    {
        "question": "What happens when you drive with a tyre pressure which is far too low?",
        "answers": [
            "Tyres heat up excessively",
            "Driving stability decreases"
        ],
        "wrongChoices": [
            "Fuel consumption decreases",
            "The vehicle becomes lighter",
            "Braking distance becomes shorter"
        ]
    },
    {
        "question": "One of your tyres bursts while you are travelling at high speed on a highway. What do you do?",
        "answers": [
            "Throttle down, if necessary, steer against and brake cautiously",
            "Stop, if possible, on the hard shoulder, switch on hazard warning lights and place the warning triangle"
        ],
        "wrongChoices": [
            "Accelerate to maintain control until the car stops",
            "Turn off the engine immediately while moving so that the car does not gain any momentum and to increase stability",
            "Swerve sharply to the hard shoulder"
        ]
    },
    {
        "question": "What must you remember particularly when driving with re-conditioned tyres?",
        "answers": [
            "The maximum permissible speed for these tyres may not be exceeded"
        ],
        "wrongChoices": [
            "They can be used on any vehicle regardless of size",
            "The maximum permissible speed for these tyres may only be exceeded under emergency situations if any danger to passengers is minimal",
            "They last longer than new tyres"
        ]
    },
    {
        "question": "When are you not allowed to use a motor vehicle on public roads?",
        "answers": [
            "When it is not roadworthy",
            "When there is no motor liability insurance"
        ],
        "wrongChoices": [
            "When the fuel tank is less than half full",
            "When the vehicle is more than five years old",
            "When it has not been serviced in 5 months"
        ]
    },
    {
        "question": "What particular characteristic of disc brakes must you remember when driving on a wet road surface?",
        "answers": [
            "As a rule, the effect of disc brakes starts later than on a dry road surface"
        ],
        "wrongChoices": [
            "As a rule, the effect of disc brakes starts earlier than on a dry road surface",
            "As a rule, the effect of disc brakes starts immediately than on a dry road surface",
            "Disc brakes require more pedal travel permanently"
        ]
    },
    {
        "question": "You notice that lever travel of the hydraulic front brake on your motorcycle has considerably increased. What must you do?",
        "answers": [
            "Have a specialist repair the front brake"
        ],
        "wrongChoices": [
            "Add more brake fluid yourself and continue riding",
            "Ignore it as it is normal wear",
            "Pump the lever repeatedly before every ride to fix it"
        ]
    },
    {
        "question": "What must you take into consideration when checking tyre pressure?",
        "answers": [
            "Load/Number of passengers in the car",
            "Tyre temperature"
        ],
        "wrongChoices": [
            "The color of the tyres",
            "The brand of the vehicle",
            "The time of day"
        ]
    },
    {
        "question": "In which cases is it imperative to test the brakes?",
        "answers": [
            "When taking over a vehicle with which you are not familiar",
            "When your vehicle has not moved for a long time",
            "Each time the underfloor has been washed"
        ],
        "wrongChoices": [
            "Every time you refuel the vehicle",
            "Only once a year regardless of use",
            "When driving for over 500km"
        ]
    },
    {
        "question": "You want to set off in an automatic car (hydraulic converter). What must you know?",
        "answers": [
            "When selecting a gear, the car must, as a rule, be held by the service brakes"
        ],
        "wrongChoices": [
            "When selecting a gear, the car must, as a rule, be held by the service brakes",
            "When selecting a gear, the car must, as a rule, be held by the clutch",
            "When selecting a gear, the car must, as a rule, be held by the accelarator",
        ]
    },
    {
        "question": "What must you remember with regard to tyre pressure?",
        "answers": [
            "To check the air pressure regularly, including that of the spare wheel",
            "To increase the pressure to the level stated in the vehicle manual when the vehicle is heavily loaded"
        ],
        "wrongChoices": [
            "To reduce pressure when the vehicle is loaded",
            "To check it only after long journeys",
            "To match the pressure of the vehicle in front"
        ]
    },
    {
        "question": "You had a tyre failure and must mount the emergency wheel. What is prohibited when you continue to drive?",
        "answers": [
            "Driving faster than 80 km/h",
            "Driving longer than necessary with the emergency wheel"
        ],
        "wrongChoices": [
            "Driving faster than 120 km/h",
            "Overtaking other vehicles",
            "Driving faster than 60 km/h"
        ]
    },
    {
        "question": "When driving, you notice that the car constantly pulls to the left. What could be the cause of this?",
        "answers": [
            "Too little air in the front left tyre",
            "Incorrect wheel adjustment at the front axle (track, wheel camber)"
        ],
        "wrongChoices": [
            "Too much air in the rear tyres",
            "Too little air in the front right tyre",
            "Low fuel level"
        ]
    },
    {
        "question": "The brakes of your car have a strong effect on one side. What could happen?",
        "answers": [
            "The vehicle can swing out to the side",
            "The braking distance is longer"
        ],
        "wrongChoices": [
            "The vehicle will stop faster than normal",
            "The braking distance is shorter",
            "The steering will become lighter"
        ]
    },
    {
        "question": "What are the advantages of an anti-slip device (ASR)?",
        "answers": [
            "No wheelspin when setting off",
            "Reduced danger of sliding sideways when setting off on a slippery roadway"
        ],
        "wrongChoices": [
            "Smooth wheelspin when setting off",
            "Faster acceleration on dry roads",
            "Reduced need for tyre maintenance"
        ]
    },
    {
        "question": "The diesel engine of your vehicle has stopped despite a full fuel tank. What can be the reason?",
        "answers": [
            "Air in the fuel system",
            "Blocked air filter"
        ],
        "wrongChoices": [
            "Too much fuel in the tank",
            "The radio was left on",
            "The tyres are overinflated"
        ]
    },
    {
        "question": "On braking, you notice that your car pulls to the right-hand side. What can be the possible causes?",
        "answers": [
            "The brakes are only engaging on one side",
            "The road surface affords more grip on the right-hand side than on the left-hand side"
        ],
        "wrongChoices": [
            "The steering wheel is too small",
            "The brakes are only engaging at the back",
            "The road surface affords less grip on the right-hand side than on the left-hand side"
        ]
    },
    {
        "question": "You can press the brake pedal too far down. Pedal travel is only reduced when you press the pedal several times. What must you do?",
        "answers": [
            "Have the brake repaired"
        ],
        "wrongChoices": [
            "Continue driving as normal, this is expected",
            "Add more brake fluid",
            "Only check it after the next long trip"
        ]
    },
    {
        "question": "When does the braking action of a trailer with overrun brakes start?",
        "answers": [
            "When the trailer runs up to the truck"
        ],
        "wrongChoices": [
            "Only when the driver presses brakes",
            "As soon as the trailer is loaded",
            "When the trailer comes to a complete stop"
        ]
    },
    {
        "question": "What is the prescribed minimum tyre profile?",
        "answers": [
            "(( 1.6 )) mm"
        ],
        "wrongChoices": [
            "(( 3.0 )) mm",
            "(( 0.8 )) mm",
            "(( 2.5 )) mm"
        ]
    },
    {
        "question": "A car is fitted with re-conditioned tyres. A sticker reading \"130 km/h\" is attached to the dashboard. What does it mean?",
        "answers": [
            "You must not drive faster than 130 km/h"
        ],
        "wrongChoices": [
            "You must drive at exactly 130 km/h",
            "The tires can only drive at 130 km/h",
            "You must not drive slower than 130 km/h"
        ]
    },
    {
        "question": "What must you remember when fitting re-conditioned tyres?",
        "answers": [
            "The air pressure should be checked more often than with normal tyres",
            "Driving characteristics can be different on dry roadways"
        ],
        "wrongChoices": [
            "Driving characteristics are the same on dry roadways",
            "The air pressure should be checked less often than with normal tyres",
            "They can be mixed freely with normal tyres on the same axle"
        ]
    },
    {
        "question": "What is the maximum number of persons an employer may allow to be taken to work on the floor of a truck?",
        "answers": [
            "(( 8 )) persons"
        ],
        "wrongChoices": [
            "(( 4 )) persons",
            "(( 12 )) persons",
            "(( 20 )) persons"
        ]
    },
    {
        "question": "You are driving a truck with a trailer and wish to give someone a lift as a favour. Where are you allowed to carry such a passenger?",
        "answers": [
            "In the driver's cab"
        ],
        "wrongChoices": [
            "On the open floor of the trailer",
            "On the the trailer",
            "Standing on the tow bar"
        ]
    },
    {
        "question": "What must you ensure before setting off on a journey in your car?",
        "answers": [
            "That the passengers too can put on the existing safety belts",
            "That you have an adequate view to the rear",
            "That no objects (e.g. first-aid kit, road atlas, camera) are lying loose on the rear parcel shelf"
        ],
        "wrongChoices": [
            "That the fuel tank is completely full",
            "That the tires have been changed",
            "That the vehicle has been recently washed"
        ]
    },
    {
        "question": "In which caravan trailers are passengers allowed to be transported under certain conditions?",
        "answers": [
            "In caravan trailers with several axles"
        ],
        "wrongChoices": [
            "In any caravan trailer regardless of design",
            "In caravan trailers with a single axle",
            "In caravan trailers under 500 kg"
        ]
    },
    {
        "question": "How are you allowed to transport a small child in your car?",
        "answers": [
            "In an approved child restraint with test mark"
        ],
        "wrongChoices": [
            "On an adult's lap, held firmly",
            "The child should use the default seat belt that's in the car",
            "Standing between the front seats"
        ]
    },
    {
        "question": "How are you allowed to transport a five-year-old child in your car?",
        "answers": [
            "In a suitable and approved child seat with test mark"
        ],
        "wrongChoices": [
           "On an adult's lap, held firmly",
            "The child should use the default seat belt that's in the car",
            "Standing between the front seats"
        ]
    },
    {
        "question": "How are you allowed to transport an eleven-year-old child of 140 cm (4'11\") in your car?",
        "answers": [
            "On an approved raised seat with test mark and with three-point safety belt fastened"
        ],
        "wrongChoices": [
            "On an adult's lap, held firmly",
            "The child should use the default seat belt that's in the car",
            "Standing between the front seats"
        ]
    },
    {
        "question": "What should be borne in mind when using an approved child seat with test mark?",
        "answers": [
            "The child seat must be appropriate for the height and weight of the child",
            "The child seat must be capable of attachment to the seat of the vehicle for which it is intended"
        ],
        "wrongChoices": [
            "The child seat must be appropriate forconly the weight of the child",
            "It can be shared between children of any age or size",
            "It only needs to be replaced after 10 years regardless of fit"
        ]
    },
    {
        "question": "Why is it dangerous not to wear safety belts?",
        "answers": [
            "Because you cannot adequately protect yourself in case of an impact at a speed of about 20 km/h",
            "Because in case of an accident you can be projected out of the vehicle"
        ],
        "wrongChoices": [
            "Because you cannot adequately protect yourself in case of an impact at a speed of about 5 km/h",
            "Because it is uncomfortable for long trips",
            "Because it damages the seat upholstery"
        ]
    },
    {
        "question": "Why is it dangerous for persons on the back seats not to wear safety belts?",
        "answers": [
            "Because even at low speed the backrests of the front seats no longer provide adequate protection against injury",
            "Because in case of an impact they are an additional danger to driver and co-driver"
        ],
        "wrongChoices": [
            "Because in case of an impact they will remain seated on their chair",
            "Because even at low speed the backrests of the front seats provide adequate protection against injury",
            "Because it affects the radio reception"
        ]
    },
    {
        "question": "When must you wear safety belts?",
        "answers": [
            "When driving in built-up areas",
            "When driving outside built-up areas"
        ],
        "wrongChoices": [
            "Only when driving on highways",
            "Only when carrying passengers",
            "Only during the daytime"
        ]
    },
    {
        "question": "When is it not necessary to wear safety belts?",
        "answers": [
            "When driving at walking speed, i.e. parking"
        ],
        "wrongChoices": [
            "When driving on a highway",
            "When driving with passengers under 18",
            "When driving on a village road"
        ]
    },
    {
        "question": "At which impact speed must you reckon with serious or deadly injuries when no safety belt is worn?",
        "answers": [
            "From 30 km/h onward"
        ],
        "wrongChoices": [
            "From 10 km/h onward",
            "From 5 km/h onward",
            "From 15 km/h onward"
        ]
    },
    {
        "question": "A car is equipped with two air bags. On which seat must safety belts be worn?",
        "answers": [
            "On all seats"
        ],
        "wrongChoices": [
            "Only on the front seats",
            "Only on the rear seats",
            "Seat belts are not required if air bags are fitted"
        ]
    },
    {
        "question": "You are driving behind a farm vehicle with a trailer carrying a high load. What must you reckon with?",
        "answers": [
            "Particularly when braking or turning, parts of the load can fall off",
            "The indicators may be concealed, making it difficult to see when the combination of vehicles wishes to turn off"
        ],
        "wrongChoices": [
            "Particularly when braking or turning, parts of the load will move to one side",
            "The indicators will be concealed, making it difficult to see when the combination of vehicles wishes to turn off",
            "The braking distance is shorter with a loaded trailer"
        ]
    },
    {
        "question": "What is the maximum distance a load may project backwards beyond the rear reflections without a projection marker being necessary?",
        "answers": [
            "(( 1 )) m"
        ],
        "wrongChoices": [
            "(( 0.5 )) m",
            "(( 2 )) m",
            "(( 3 )) m"
        ]
    },
    {
        "question": "How must a load projecting more than 1 m beyond the rear reflectors of the vehicle be marked in darkness?",
        "answers": [
            "By a red light or red rear reflector"
        ],
        "wrongChoices": [
            "By a flashing white light",
            "By an orange reflective triangle only",
            "By a green light or green rear reflector"
        ]
    },
    {
        "question": "What must you remember if you want to transport load?",
        "answers": [
            "The load must not obstruct the driver",
            "The permissible weights and dimensions must not be exceeded"
        ],
        "wrongChoices": [
            "The load must be visible from the driver's seat only",
            "The load can exceed permissible weight if secured well",
            "The load must be covered in a bright color"
        ]
    },
    {
        "question": "What can be the effect of an overload of only 20%?",
        "answers": [
            "The brakes may be overstrained",
            "Steering may become worse",
            "There may be too much strain on the load-bearing parts of the vehicle"
        ],
        "wrongChoices": [
            "Fuel consumption decreases significantly",
            "The vehicle becomes easier to steer",
            "Tyre wear is reduced"
        ]
    },
    {
        "question": "Is a load allowed to project beyond the front of the vehicle?",
        "answers": [
            "No"
        ],
        "wrongChoices": [
            "Yes",
            "Yes, but only up to 2 m",
            "Yes, if marked with a flag"
        ]
    },
    {
        "question": "What is the maximum permissible width of a vehicle including load (excluding vehicles with farming or forestry products and refrigerator vehicles)?",
        "answers": [
            "(( 2.50 )) m"
        ],
        "wrongChoices": [
            "(( 2.00 )) m",
            "(( 3.00 )) m",
            "(( 2.20 )) m"
        ]
    },
    {
        "question": "What is the maximum permissible height of a vehicle including load (excluding vehicles with farming or forestry products)?",
        "answers": [
            "(( 4.3 )) m"
        ],
        "wrongChoices": [
            "(( 3.5 )) m",
            "(( 5.0 )) m",
            "(( 4.0 )) m"
        ]
    },
    {
        "question": "What must you bear in mind if you want to carry luggage on the roof on your car?",
        "answers": [
            "The road-handling characteristics are adversely affected",
            "The permissible total mass must not be exceeded",
            "The maximum roof load stipulated by the car manufacturer (owner's manual) must not be exceeded"
        ],
        "wrongChoices": [
            "The road-handling characteristics are not adversely affected",
            "There is no limit to roof load if straps are used",
            "The vehicle's warranty is automatically voided"
        ]
    },
    {
        "question": "What must you reckon with when transporting luggage on the roof of your car?",
        "answers": [
            "The vehicle inclines more on bends",
            "The vehicle's susceptibility to side wind is greater"
        ],
        "wrongChoices": [
            "The vehicle brakes faster",
            "The vehicle inclines more on straight road",
            "The vehicle becomes more stable at speed"
        ]
    },
    {
        "question": "What must you do when transporting bicycles on the roof of your car?",
        "answers": [
            "Safely attach holding device and bicycles",
            "Avoid driving at high speed",
            "Regularly check the fixing devices"
        ],
        "wrongChoices": [
            "Remove the front wheels of the bicycles only",
            "Driving at high speed is allowed only if holding devices sre attached",
            "Check the fixing devices only once a month"
        ]
    },
    {
        "question": "What must you check when transporting bicycles on a rear-mounted support system?",
        "answers": [
            "Whether, according to the manufacturer's indications, the system is adequate for the vehicle",
            "Whether system and bicycles are fixed safely",
            "Whether lighting equipment or number plate are covered"
        ],
        "wrongChoices": [
            "Whether both the bicycles and cars tires are at full pressure.",
            "Whether the system was the cheapest available",
            "Whether the manufacturer offers a warranty"
        ]
    },
    {
        "question": "You want to transport holiday luggage on the roof of your fully loaded car. What is the roof load limited by?",
        "answers": [
            "The stipulations of the vehicle's manufacturer in the owner's manual",
            "The permissible total mass of the car"
        ],
        "wrongChoices": [
            "The size of the roof rack only",
            "The number of passengers in the car",
            "The amount of luggage you have"
        ]
    },
    {
        "question": "What must you remember if you want to transport a load with your motor vehicle?",
        "answers": [
            "The load must be secured and may not cause unnecessary noise"
        ],
        "wrongChoices": [
            "The load must be visible from outside the vehicle",
            "The load must be insured separately",
            "The load must not exceed the value of the vehicle"
        ]
    },
    {
        "question": "A load extending beyond the back of the vehicle must be marked. How do you mark it during the day?",
        "answers": [
            "A bright red flag of at least 30 x 30 cm held apart by a crossbar",
            "A bright red sign of at least 30 x 30 cm, pendulously mounted transverse to the direction you are travelling in"
        ],
        "wrongChoices": [
            "A bright red flag of at least 60 x 30 cm held apart by a crossbar",
            "A reflective triangle placed on the roof",
            "A bright red sign of at least 50 x 30 cm, pendulously mounte to the direction you are travelling in"
        ]
    },
    {
        "question": "How must a load be marked in darkness or bad visibility when it extends laterally more than 40 cm beyond the side lights of the vehicle?",
        "answers": [
            "By a white light to the front",
            "By a red light to the back"
        ],
        "wrongChoices": [
            "By a flashing orange light to the side",
            "By a purple light to the side",            
            "By a green reflector to the front"
        ]
    },
    {
        "question": "What is the maximum height allowed above the roadway for a red light marking a load extending to the back?",
        "answers": [
            "(( 1.50 )) m"
        ],
        "wrongChoices": [
            "(( 0.50 )) m",
            "(( 2.50 )) m",
            "(( 3.00 )) m"
        ]
    },
    {
        "question": "What should be remembered with regard to the load of a vehicle?",
        "answers": [
            "The permissible total mass and permissible axle weights must not be exceeded",
            "The load must be stowed securely for transport"
        ],
        "wrongChoices": [
            "Only the permissible total mass matters, not axle weights",
            "The load can exceed limits if the driver is experienced",
            "The load must always be directly proportinal to axel weight and load"
        ]
    },
    {
        "question": "What is understood by a load being stowed securely for transport?",
        "answers": [
            "The load should be distributed as evenly as possible over the floor",
            "The load should be securely accommodated and fastened down to prevent it sliding or falling",
            "Bulk goods which could be blown off by a headwind must be covered"
        ],
        "wrongChoices": [
            "The load should be piled as high as possible",
            "The load only needs securing on highways",
            "The load can be distributed unevenly, more load to the front and less load to the back."
        ]
    },
    {
        "question": "What is the maximum length of a combination of truck and trailer including load if the load projects backward?",
        "answers": [
            "(( 20.00 )) m"
        ],
        "wrongChoices": [
            "(( 15.00 )) m",
            "(( 25.00 )) m",
            "(( 18.50 )) m"
        ]
    },
    {
        "question": "What must you bear in mind when loading a single-axle trailer?",
        "answers": [
            "The permissible axle load must not be exceeded",
            "The permissible load on the coupling must not be exceeded",
            "The permissible total mass must not be exceeded"
        ],
        "wrongChoices": [
            "The permissible load weight is directly proportinal to axel weight",
            "The permissible load weight is indirectly proportinal to axel weight",
            "The trailer's fuel tank must be full"
        ]
    },
    {
        "question": "What must you remember when loading a trailer?",
        "answers": [
            "The load must be securely packed",
            "The load must not project more than 1 m beyond the rear reflectors, unless specially marked"
        ],
        "wrongChoices": [
            "The load must always be covered in plastic",
            "The load must not project more than 10 m beyond the rear reflectors, unless specially marked",
            "The load must be visible from the driver's seat"
        ]
    },
    {
        "question": "Which vehicles are you allowed to drive with a driving licence class B when considering the permissible towed load?",
        "answers": [
            "Combinations of a car with a permissible total mass of 3500 kg and a trailer with a permissible total mass of 750 kg",
            "Combination of a truck with a permissible total mass of 3500 kg and a trailer with a permissible total mass of 750 kg"
        ],
        "wrongChoices": [
            "Combinations of a car with a permissible total mass of 3500 kg and a trailer with a permissible total mass of 950 kg",
            "Combinations of a car with a permissible total mass of 5500 kg and a trailer with a permissible total mass of 750 kg",
            "Combinations of a truck with a permissible total mass of 4500 kg and a trailer with a permissible total mass of 850 kg",
        ]
    },
    {
        "question": "You are holding a driving licence class B. Your car has the following specifications; -empty mass 900 kg, -permissible total mass 1,400 kg, -permissible towed load 1,000 kg. Which trailer are you allowed to tow?",
        "answers": [
            "A trailer with permissible total mass of 850 kg",
            "850 kg requires class \"EB\""
        ],
        "wrongChoices": [
            "A trailer with a permissible total mass of 1,200 kg",
            "A trailer with a permissible total mass of 1,000 kg without restriction",
            "Any trailer regardless of mass, since the car is under 1,400 kg"
        ]
    },
    {
        "question": "You are holding a driving licence class B. Your car has the following specifications; - empty mass 1,900 kg, - permissible total mass 2,400kg, - permissible towed load 1,500 kg. Which trailer are you allowed to tow?",
        "answers": [
            "A trailer with a permissible total mass of 1,000 kg",
            "1,000 kg requires class \"EB\""
        ],
        "wrongChoices": [
            "A trailer with a permissible total mass of 1,500 kg",
            "A trailer with a permissible total mass of 1,300 kg without restriction",
            "Any trailer up to the car's empty mass"
        ]
    }
]
*/

/*
let lesson14Notes = [
  {
    question:
      "What must you remember in the interests of environmental protections?",
    answers: [
      "To avoid running the engine unnecessarily when you are stationary",
      "To avoid driving back and forth unnecessarily",
    ],
    wrongChoices: [
      "To warm up the engine at idle speed for at least 10 minutes before driving.",
      "To drive at high engine revolutions in low gears whenever possible.",
      "To leave the air conditioning running continuously while parked.",
    ],
  },
  {
    question:
      "Why are you required to have a defective exhaust system repaired immediately?",
    answers: [
      "Because of the noise pollution",
      "Because parts of the exhaust system can drop on the roadway",
    ],
    wrongChoices: [
      "Because it automatically reduces your vehicle's overall fuel consumption.",
      "Because it increases the engine power beyond legal safety limits.",
      "Because it prevents the battery from discharging rapidly.",
    ],
  },
  {
    question:
      "What must be regularly serviced to prevent high fuel consumption and excessive pollutant emission?",
    answers: [
      "Engine air filter",
      "Carburettor or fuel-injection system",
      "Ignition system",
    ],
    wrongChoices: [
      "The windshield wiper fluid reservoir.",
      "The interior seat upholstery.",
      "The horn wiring harness.",
    ],
  },
  {
    question:
      "What happens as a result of tyre pressures being well below the recommended levels?",
    answers: ["Fuel consumption increases", "Tyre wear increases"],
    wrongChoices: [
      "Tyre temperature decreases significantly.",
      "Vehicle top speed increases automatically.",
      "Braking distance is halved on wet surfaces.",
    ],
  },
  {
    question:
      "Your vehicle loses oil. How much drinking water can be polluted by a single drop of oil?",
    answers: ["Up to 600 litres"],
    wrongChoices: ["Up to 10 litres", "Up to 300 litres", "Up to 100 litres"],
  },
  {
    question: "What must you remember when refuelling?",
    answers: [
      "Do not breath in any fuel fumes",
      "Do not refuel when the tank is full and the nozzle switched off",
    ],
    wrongChoices: [
      "Always fill the fuel tank to overflowing to maximize range.",
      "Keep the vehicle engine running at idle while refuelling.",
      "Use a naked flame to check the fuel level inside the tank filler neck.",
    ],
  },
  {
    question:
      'The engine and exhaust system of a vehicle have been "souped up". What could be the effects?',
    answers: ["Increased noise pollution", "Increased pollutant emission"],
    wrongChoices: [
      "Decreased noise pollution and cleaner emissions.",
      "Automatic exemption from annual vehicle roadworthiness tests.",
      "Reduced tyre wear during heavy acceleration.",
    ],
  },
  {
    question:
      "Other drivers indicate that your exhaust is emitting a lot of smoke. What must you do?",
    answers: ["Have the engine checked immediately"],
    wrongChoices: [
      "Ignore it as long as the engine maintains speed.",
      "Add more motor oil immediately to dilute the exhaust gases.",
      "Drive only at high speeds on the motorway to burn off the smoke.",
    ],
  },
  {
    question:
      "What must you do in order to keep air pollution as low as possible?",
    answers: [
      "Immediately repair defects when your exhaust emits a lot of smoke",
      "Always switch the engine off when waiting for a long time",
    ],
    wrongChoices: [
      "Drive in low gears at high engine RPMs.",
      "Warm up the engine while stationary for 15 minutes every morning.",
      "Remove the catalytic converter to improve exhaust airflow.",
    ],
  },
  {
    question: "What can cause unnecessary noise pollution when driving?",
    answers: ["Unnecessarily fast acceleration", "A defective exhaust"],
    wrongChoices: [
      "Driving at low engine revolutions in high gears.",
      "Properly maintaining the vehicle's silencer system.",
      "Rolling gently with the engine switched off at red lights.",
    ],
  },
  {
    question:
      "How should you change gears in order to drive with particular consideration to the environment and fuel saving?",
    answers: [
      "Change to a higher gear as early as possible",
      "Change to a lower gear as late as possible",
    ],
    wrongChoices: [
      "Change to a higher gear as late as possible.",
      "Change to a lower gear as early as possible.",
      "Drive continuously in first gear in urban areas.",
    ],
  },
  {
    question:
      "How can you avoid pollution of the environment and benefit your engine after a cold start?",
    answers: [
      "Set off at low revolutions per minute without running the engine until it warms up",
    ],
    wrongChoices: [
      "Let the engine idle until it reaches operating temperature before moving.",
      "Immediately accelerate at maximum throttle to warm the engine quickly.",
      "Rev the engine repeatedly in neutral while stationary.",
    ],
  },
  {
    question:
      "What is important to avoid pollution and to save energy when driving?",
    answers: [
      "Check the fuel consumption regularly",
      "Have the engine turning checked regularly",
    ],
    wrongChoices: [
      "Keep the engine idling at red traffic lights.",
      "Drive at top speed whenever on open country roads.",
      "Use low tyre pressures for better road grip.",
    ],
  },
  {
    question: "Which range of engine revolutions is best for fuel consumption?",
    answers: ["The lower range"],
    wrongChoices: [
      "The higher range",
      "The redline maximum RPM range",
      "Constantly changing between low and high ranges every few seconds",
    ],
  },
  {
    question: "How is fuel wasted and the environment polluted?",
    answers: [
      "By driving in a hectic manner",
      'By "playing with the accelerator" while waiting at traffic lights',
    ],
    wrongChoices: [
      "By driving smoothly at low engine revolutions.",
      "By turning off the engine during long stationary waits.",
      "By maintaining correct tyre pressure settings.",
    ],
  },
  {
    question:
      "How do you achieve low fuel consumption and low pollutant emission?",
    answers: [
      "By a technically perfect and correctly tuned engine",
      "By constant driving at low revolution ranges",
    ],
    wrongChoices: [
      "By frequent rapid acceleration and heavy braking.",
      "By driving constantly at high engine revolution ranges.",
      "By removing the air filter from the intake manifold.",
    ],
  },
  {
    question:
      "What indicates excessive petrol consumption due to high wear or wrong tuning of the engine?",
    answers: ["A lot of dark exhaust smoke"],
    wrongChoices: [
      "A steady stream of clear water droplets from the tailpipe.",
      "A completely quiet engine idle sound.",
      "Low coolant temperature readings on the dashboard.",
    ],
  },
  {
    question: "How do you drive with consideration to the environment?",
    answers: [
      "Decelerate in good time and use the momentum of the car when the next traffic light is on red",
      "Avoid unnecessary acceleration and unnecessary braking",
    ],
    wrongChoices: [
      "Accelerate rapidly towards red traffic lights to stop quickly.",
      "Brake suddenly at the last second before turning.",
      "Keep the engine revving high while slowing down.",
    ],
  },
  {
    question:
      "The fuel consumption of your vehicle is higher at peak traffic periods in urban traffic than at other times. Why?",
    answers: ["Because you have to brake and accelerate more often"],
    wrongChoices: [
      "Because during the day temperatures are higher.",
      "Because air pressure in urban areas is significantly higher.",
      "Because fuel evaporates faster in heavy urban traffic.",
    ],
  },
  {
    question: "What can you do to protect the environment?",
    answers: [
      "Avoid driving short distances, for example to the next letter box",
      "Avoid driving at full throttle",
      "Avoid driving into overcrowded town centres",
    ],
    wrongChoices: [
      "Drive full throttle on short urban trips to save time.",
      "Use the car for every short trip, even just to the mailbox.",
      "Drive through city centers during peak congestion hours.",
    ],
  },
  {
    question: "What can help save fuel and reduce pollution?",
    answers: [
      "Paying attention to the fuel consumption of a motor vehicle when buying it",
      "Contributing to a constant flow of traffic by thinking ahead and driving correspondingly",
      "Using public transport, a bicycle or walking, wherever possible",
    ],
    wrongChoices: [
      "Choosing vehicles with high fuel consumption ratings.",
      "Driving aggressively to clear traffic quickly.",
      "Avoiding public transport and walking for short distance journeys.",
    ],
  },
  {
    question: "What can cause damage to a catalytic converter?",
    answers: ["Frequent misfiring", "Leaded fuel"],
    wrongChoices: [
      "Using recommended unleaded fuel.",
      "Frequent use of a horn.",
      "Driving at smooth, steady highway speeds.",
    ],
  },
  {
    question: "What kind of noise pollution can be avoided?",
    answers: [
      "Setting off at full throttle",
      "Slamming doors",
      "Sounding the horn to greet people",
    ],
    wrongChoices: [
      "Using indicators when changing lanes.",
      "Gently closing doors.",
      "Applying brakes softly when stopping.",
    ],
  },
  {
    question: "What is the cause of unnecessary noise?",
    answers: [
      "Slamming the doors",
      '"Playing" with the accelerator when the vehicle has stopped',
    ],
    wrongChoices: [
      "Using indicators when changing lanes.",
      "Gently closing doors.",
      "Applying brakes softly when stopping.",      
    ],
  },
  {
    question: "Why should you avoid dashing off?",
    answers: [
      "Because others are inconvenienced by the noise thus caused",
      "Because this leads to unnecessary tyre wear",
    ],
    wrongChoices: [
      "Because it decreases overall fuel consumption.",
      "Because it extends the operational lifespan of the clutch.",
      "Because it cleans the catalytic converter system automatically.",
    ],
  },
  {
    question: "What must you know about catalytic converters?",
    answers: [
      "A catalytic converter can be damaged or destroyed when the car is towed to start the engine",
      "A catalytic converter can be damaged when the engine starts after many unsuccessful attempts",
    ],
    wrongChoices: [
      "It operates most efficiently when flooded with unburnt fuel.",
      "It requires leaded fuel to maintain its internal chemical balance.",
      "Towing a vehicle to start the engine cleans and protects the catalyst.",
    ],
  },
  {
    question:
      "Tyre wear is a burden to the environment. What can extend tyre life?",
    answers: [
      "Avoid high speeds",
      "Observing the tyre pressure indicated in the owner's manual",
    ],
    wrongChoices: [
      "Drive at maximum speed on highways.",
      "Keep tyre pressure significantly below recommended values.",
      "Perform frequent rapid cornering and hard braking.",
    ],
  },
  {
    question:
      "How can you save fuel when driving a motor vehicle with automatic transmission?",
    answers: ['By not using the "kick down" facility, if possible'],
    wrongChoices: [
      'By using the "kick down" facility as often as possible.',
      "By keeping the selector lever in manual low gear at all times.",
      "By revving the engine in neutral before shifting to Drive.",
    ],
  },
  {
    question: "How can you keep the burden on the environment low?",
    answers: [
      "By forming car pools",
      "By avoiding peak traffic periods",
      "By avoiding roads with frequent traffic jams",
    ],
    wrongChoices: [
      "By driving alone during peak traffic hours.",
      "By choosing routes through heavy traffic jams.",
      "By driving at full throttle on short urban errands.",
    ],
  },
  {
    question: "What results in increased fuel consumption of your car?",
    answers: ["A roof rack", "Transporting unnecessary objects"],
    wrongChoices: [
      "Removing empty roof racks.",
      "Maintaining correct tyre pressures.",
      "Unloading unnecessary weight from the boot.",
    ],
  },
  {
    question: "How can you save fuel?",
    answers: [
      "By observing at least the tyre pressure indicated in the owner's manual",
      "By removing the roof rack",
    ],
    wrongChoices: [
      "By carrying items in the boot.",
      "By keeping a permanent roof rack installed.",
      "By underinflating tyres for soft riding.",
    ],
  },
  {
    question: "What should you avoid for reasons of environmental protection?",
    answers: [
      "Letting the engine warm up when the vehicle is stationary",
      "Unnecessary trips",
      "Loud music with windows opened",
    ],
    wrongChoices: [
      "Switching off the engine during long traffic delays.",
      "Using public transit or cycling for short errands.",
      "Maintaining steady speeds in high gears.",
    ],
  },
  {
    question: "Which conduct shows awareness of the environment?",
    answers: [
      'Changing to public transport at collective parking areas ("P+R")',
      "The formation of car pools",
      "Switching off the engine in traffic jam",
    ],
    wrongChoices: [
      "Leaving the engine running while waiting in long traffic jams.",
      "Driving individual cars alone for every short trip.",
      "Avoiding Park & Ride public transit options.",
    ],
  },
  {
    question:
      "Where should you store your luggage if possible in order to save fuel?",
    answers: ["In the boot"],
    wrongChoices: [
      "On an open roof rack",
      "Tied to the front bumper",
      "Hanging from the side doors",
    ],
  },
  {
    question:
      "What must you do if the diesel engine of your motor vehicle emits smoke despite your driving correctly?",
    answers: [
      "Have the fuel injection system inspected",
      "Replace a heavily soiled air filter",
    ],
    wrongChoices: [
      "Increase engine speed to maximum RPM to blow out the smoke.",
      "Add extra oil directly into the fuel tank.",
      "Ignore it as smoke is normal for all diesel vehicles under any condition.",
    ],
  },
  {
    question:
      "What can cause the diesel engine of a motor vehicle to emit smoke?",
    answers: [
      "Defects in the fuel injection system",
      "Driving at high engine revolutions under full load",
    ],
    wrongChoices: [
      "Driving in high gear at low engine RPMs.",
      "Regularly replacing the air filter.",
      "Using high-quality clean diesel fuel.",
    ],
  },
  {
    question:
      "A farm tractor is approaching you at dawn with its headlights switched on. What must you reckon with?",
    answers: [
      "The tractor can carry large work equipment which is difficult to see",
      "Despite the headlights being switched on, it is not always possible to discern the width of the tractor",
      "Wide trailers can be attached to the tractor",
    ],
    wrongChoices: [
      "The headlights being switched on makes it easier to discern the width of the tractor.",
      "The headlights indicate the absolute maximum outer width of all attached equipment.",
      "Tractors never carry rear or side equipment on public roads.",
    ],
  },
  {
    question:
      "What helps to reduce the braking distances in critical situation?",
    answers: [
      "Immediately apply the brakes strongly and slowly release the brakes, if the situation permits (degressive braking)",
    ],
    wrongChoices: [
      "Brake gently at first and slowly increase pedal pressure.",
      "Pump the brake pedal rapidly without applying firm pressure.",
      "Pull the handbrake abruptly while keeping full throttle.",
    ],
  },
  {
    question:
      "You must change gear on a downhill slope. What must you remember in order to make use of the braking action of the engine?",
    answers: ["Immediately after changing gear, re-engage the clutch gently"],
    wrongChoices: [
      "Keep the clutch pedal fully depressed while rolling down.",
      "Switch the engine off while shifting gears.",
      "Shift into neutral and coast down the slope.",
    ],
  },
  {
    question:
      "How can you make the best use of the braking action of the engine on a long, steep downhill slope?",
    answers: ["By changing to a lower gear in good time"],
    wrongChoices: [
      "By shifting into neutral and relying solely on the footbrake.",
      "By switching off the ignition while rolling down.",
      "By shifting into the highest gear possible.",
    ],
  },
  {
    question:
      "You are driving along a country road. Suddenly a tractor enters the road in front of you. What do you do to reduce your braking distance as much as possible?",
    answers: [
      "Immediately apply the brakes strongly and slowly release the brakes, if the situation permits (degressive braking)",
    ],
    wrongChoices: [
      "Press the clutch pedal and coast without using the brakes.",
      "Brake very gently to avoid disturbing the tractor driver.",
      "Steer into the oncoming lane without applying the brakes.",
    ],
  },
  {
    question:
      "You are driving your car and caravan trailer (length of combination of vehicles exceeding 7 m) outside built-up areas on a road with only one marked lane in each direction. What must you remember?",
    answers: [
      "As a rule, the distance from a car in front must be great enough to allow an overtaking car to pull in",
    ],
    wrongChoices: [
      "Drive as closely as possible to the car ahead to block overtaking.",
      "Overtake all vehicles ahead regardless of visibility.",
      "Travel in tight continuous convoys with other trailers.",
    ],
  },
  {
    question:
      "When must a car with trailer driving outside built-up areas on roads with only one lane for each direction keep a sufficient distance from the car in front so that an overtaking vehicle may pull in?",
    answers: ["When the combination of vehicles exceeds (( 7 )) m"],
    wrongChoices: [
      "When the combination of vehicles exceeds (( 3 )) m",
      "When the combination of vehicles exceeds (( 4.5 )) m",
      "When the combination of vehicles exceeds (( 5 )) m",
    ],
  },
  {
    question:
      "What must be remembered with regard to vehicles with canvass covers?",
    answers: [
      "The canvass covers must not obstruct the driver's rear view through the outside mirrors",
      "Unloaded trailers with high canvass covers superstructure are particularly sensitive to side wind",
    ],
    wrongChoices: [
      "Canvas covers completely eliminate susceptibility to crosswinds.",
      "Canvas covers may block the driver's exterior side mirrors as long as the interior mirror is clear.",
      "High canvas superstructures are unaffected by side wind when the trailer is empty.",
    ],
  },
  {
    question:
      "A single-axle caravan trailer is being parked on a slope. How must it be prevented from rolling away?",
    answers: [
      "Engage the parking brake",
      "Place wheel chocks under the wheels",
    ],
    wrongChoices: [
      "Turn the trailer tongue downhill without securing the wheels.",
      "Rely solely on the jockey wheel to hold the trailer stationary.",
      "Leave the trailer unsecured on the slope if stopped for less than an hour.",
    ],
  },
  {
    question:
      "Between what hours does the driving ban apply for vehicles exceeding 10.5 m in length?",
    answers: ["From (( Fri 6 pm)) to (( Su 24 pm))"],
    wrongChoices: [
      "From (( Sat 6 pm)) to (( Su 24 pm))",
      "From (( Fri 12 pm)) to (( Su 24 pm))",
      "From (( Sat 12 pm)) to (( Su 24 pm))",
    ],
  },
  {
    question:
      "To which vehicles do the Sunday and public holiday driving ban applies on certain roads?",
    answers: [
      "Trucks with a permissible total mass exceeding 3.5 t",
      "All trucks with trailers exceeding 10.5 m in length",
    ],
    wrongChoices: [
      "All private passenger cars without trailers.",
      "Trucks with a permissible total mass below 3.5 t.",
      "All trucks with trailers exceeding 5.5 m in length.",
    ],
  },
  {
    question: "What applies when there is a prohibition to drive due to ozone?",
    answers: [
      "Prohibition to drive motor vehicles with regulated catalytic converter without ozone disc",
      "Prohibition to drive motor vehicles with reduced pollutant emission without ozone disc",
    ],
    wrongChoices: [
      "Prohibition to drive electric or hybrid vehicles.",
      "Prohibition to drive motor vehicles with regulated catalytic converter with ozone disc.",
      "Prohibition to drive motor vehicles with reduced pollutant emission with ozone disc.",
    ],
  },
  {
    question:
      'You are driving on a road with potholes and your trailer starts "jumping". What must you do?',
    answers: ["Reduce speed in order to avoid skidding"],
    wrongChoices: [
      "Accelerate to stabilize the trailer combination.",
      "Apply the handbrake fully while driving at speed.",
      "Steer rapidly from side to side to stop the jumping.",
    ],
  },
  {
    question:
      "What is correct when reversing a truck and trailer and visibility is impaired?",
    answers: [
      "Constant sight contact with the person giving directions must be maintained",
    ],
    wrongChoices: [
      "Reverse as fast as possible without a guide to clear the area.",
      "Rely solely on interior rear-view mirror without looking at the guide.",
      "Ignore the person giving directions if you feel confident.",
    ],
  },
  {
    question:
      "Why should you not apply the clutch when driving on a long steep downhill slope?",
    answers: [
      "Because the braking action could be reduced due to overheating",
      "Because this caused unnecessary wear of the brakes",
    ],
    wrongChoices: [
      "Because applying the clutch increases engine braking capacity dramatically.",
      "Because the clutch pedal will lock up automatically.",
      "Because it causes the trailer overrun brakes to disengage permanently.",
    ],
  },
  {
    question: "What changes when a caravan trailer is towed?",
    answers: [
      "The distance for overtaking increases considerably",
      "Hasty movements of the steering wheel increase the danger of skidding",
    ],
    wrongChoices: [
      "The overtaking distance becomes much shorter.",
      "Acceleration capacity is significantly increased.",
      "Sudden steering moves improve stability during cornering.",
    ],
  },
  {
    question: "What changes in a car when towing a two-axle trailer?",
    answers: [
      "More space is needed when turning and driving round bends",
      "Acceleration capacity is reduced",
    ],
    wrongChoices: [
      "Less space is needed when turning corners.",
      "Acceleration capacity is greatly enhanced.",
      "Braking distance is shortened by half.",
    ],
  },
  {
    question:
      "You are in your car towing a trailer on a road with oncoming traffic and want to turn right. What must you particularly remember when you set off again?",
    answers: [
      "Think about the length of your car and trailer combination",
      "Consider the reduced acceleration capacity",
    ],
    wrongChoices: [
      "Assume the vehicle combination accelerates as fast as a solo car.",
      "Consider the enhanced braking capacity.",
      "Consider the increased acceleration capacity.",
    ],
  },
  {
    question:
      "You are in your car towing a trailer which has no brakes and you approach a long steep slope. What is correct?",
    answers: [
      "Reduce speed, if necessary, engage low gear in time, be ready to brake",
      "Make allowance for the pushing effect of the trailer",
    ],
    wrongChoices: [
      "Shift into high gear and coast down freely.",
      "Disregard the pushing force of the unbraked trailer.",
      "Accelerate to pass down the slope quickly.",
    ],
  },
  {
    question:
      "You are in your car towing a trailer in wet conditions on a narrow country road and you approach a tight left-hand bend affording a clear view on the road ahead. What is correct?",
    answers: [
      "Reduce speed before the bend",
      "Remain in the middle of the land and accelerate slightly at the earliest when you reach the centre of the bend",
    ],
    wrongChoices: [
      "Accelerate before entering and on the bend.",
      "Brake abruptly in the middle of the turn.",
      "Swerve into the oncoming lane to widen the turning angle.",
    ],
  },
  {
    question:
      "You are in your car towing a fully loaded trailer which has no brakes. What is correct?",
    answers: ["Braking distance increases"],
    wrongChoices: [
      "Braking distance decreases significantly.",
      "Braking distance remains unchanged.",
      "The car brakes faster due to the extra weight.",
    ],
  },
  {
    question:
      "You want to park your single-axle trailer (overrun brakes, 1000 kg permissible total mass) on a slope. What must you do?",
    answers: ["Pull the parking brake", "Place wheel chocks under the wheels"],
    wrongChoices: [
      "Leave the trailer in neutral without securing wheels or brakes.",
      "Rely solely on the jockey wheel to hold the trailer.",
      "Prop the trailer up with loose twigs.",
    ],
  },
  {
    question:
      "Why should you not press the clutch and switch off the engine at the same time when driving down a long slope?",
    answers: [
      "The steering of vehicles with servo-assisted steering immediately becomes unusually heavy",
      "Full braking power cannot be reached in vehicles with brake booster system despite great force being applied to the pedal",
    ],
    wrongChoices: [
      "The steering of vehicles with servo-assisted steering immediately becomes unusually lighter.",
      "Full braking power can be reached in vehicles with brake booster system despite great force being applied to the pedal.",
      "The fuel tank will overflow into the engine bay.",
    ],
  },
  {
    question: "What is the effect of an automatic anti-locking device (ABS)?",
    answers: [
      "The vehicle is braked in the best possible way also on wet roadways",
      "Steering control is largely retained when braking",
    ],
    wrongChoices: [
      "It prevents the vehicle from ever skidding on black ice regardless of speed.",
      "It shortens the braking distance on all surfaces by 90%.",
      "It eliminates the need for using footbrakes in emergency stops.",
    ],
  },
  {
    question:
      "What are the advantaged of an automatic anti-locking device (ABS)?",
    answers: [
      "The wheels do not lock when braking",
      "Steering control is retained even when braking heavily",
    ],
    wrongChoices: [
      "The wheels lock completely to create maximum friction.",
      "Steering control is lost completely during heavy braking.",
      "It automatically accelerates the vehicle out of skids.",
    ],
  },
  {
    question:
      "What are the advantages of an automatic anti-locking device (ABS)?",
    answers: [
      "It is possible to brake heavily and avoid an obstacle at the same time",
    ],
    wrongChoices: [
      "It automatically steers the vehicle around obstacles.",
      "It makes winter tyres unnecessary on icy roads.",
      "It prevents brake pad wear entirely.",
    ],
  },
  {
    question:
      "What must you remember when driving a car and trailer with a trailer equipped with overrun brakes?",
    answers: [
      "Reversing without problem is not possible for all trailers",
      'In the case of certain trailers, the "reverse lock" must be engaged before reversing',
    ],
    wrongChoices: [
      "All overrun brake trailers can reverse without any resistance or locking.",
      "Overrun brakes automatically disengage whenever the vehicle stops.",
      "You must never use overrun brakes on downhill slopes.",
    ],
  },
  {
    question: "What is the significance of orange warning plates on a vehicle?",
    answers: ["It is transporting dangerous goods"],
    wrongChoices: [
      "The vehicle is carrying oversized passenger luggage.",
      "The driver is a novice learner.",
      "The vehicle is broken down and waiting for recovery.",
    ],
  },
  {
    question: 'What do white plates with a red "L" on a vehicle mean?',
    answers: ["The vehicle is driven by a beginner"],
    wrongChoices: [
      "The vehicle is carrying long or oversized cargo.",
      "The vehicle belongs to a local municipal authority.",
      "The vehicle is carrying hazardous liquid chemicals.",
    ],
  },
  {
    question:
      "What must you adjust when driving a vehicle which is not your own?",
    answers: ["Seat, head rest, safety belt", "Inside mirror, outside mirrors"],
    wrongChoices: [
      "The engine displacement and gear ratios.",
      "The fuel tank capacity and tire tread depth.",
      "The brake pedal sensitivity and steering wheel balance.",
    ],
  },
  {
    question:
      "Your vehicle is covered in dirt. What must you do before setting off on a journey?",
    answers: [
      "Remove dirt from the windscreen and rear window",
      "Remove dirt from the side windows and mirrors",
    ],
    wrongChoices: [
      "Clean only the license plates.",
      "Drive at high speeds to let the wind blow off the dirt.",
      "Clean only the roof and bonnet of the car.",
    ],
  },
  {
    question:
      "Your vehicle is equipped with heated rear window and heated outside mirrors. What must you do before setting off on a journey when the vehicle is covered in dirt?",
    answers: [
      "Remove dirt from the windscreen and side windows",
      "Remove dirt from rear window and outside mirrors",
    ],
    wrongChoices: [
      "Rely on mirror heaters to melt away heavy mud or thick dirt crusts.",
      "Clean only the front bumper before driving.",
      "Leave all windows and mirrors uncleaned until reaching your destination.",
    ],
  },
  {
    question:
      "You are entering a public road e.g. from a field or building site and considerably soil the road. Who is responsible for eliminating this traffic obstructions?",
    answers: ["You, as you have caused it"],
    wrongChoices: [
      "The local municipality, regardless of who caused it.",
      "The owner of the field or building site.",
      "Other road users who drive over the mud.",
    ],
  },
  {
    question:
      "What must you do to avoid endangering others by equipment or load which has fallen off your vehicle?",
    answers: [
      "Depending on the situation remove the parts yourself",
      "Depending on the situation secure the danger spot immediately",
      "Depending on the situation inform the road service or police",
    ],
    wrongChoices: [
      "Ignore fallen objects if you are running late.",
      "Drive away quickly so you are not blamed for the obstruction.",
      "Leave fallen items in the center lane and report it after 24 hours.",
    ],
  },
];
*/
