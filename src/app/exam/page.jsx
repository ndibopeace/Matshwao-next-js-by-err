"use client"
import { useState } from "react";
import "./quiz.css";
import {
  lesson1Notes,
  lesson2Notes,
  lesson3Notes,
  lesson4Notes,
  lesson5Notes,
  lesson6Notes,
  lesson7Notes,
  lesson8Notes,
  lesson9Notes,
  lesson10Notes,
  lesson11Notes,
  lesson12Notes,
  lesson13Notes,
  lesson14Notes,
} from "@data/data";


import Instructions from "@components/exam/instructions";
import Quiz from "@components/exam/quizComp";


// ------------------------------------------------------------------------------------------------------------>

// let newArr = lesson1Notes.map( ({answers, question, image})=> {
//   return { answers: answers.map( ( {text} )=> text ) , question, image }
// } )

// let newArr = lesson1Notes.map((obj) => {
// return obj;
// });

// console.log(newArr);

// ------------------------------------------------------------------------------------------------------------>



export default function QuizPage() {
  let [isExamOn, setIsExamOn] = useState(false);

  return (
    <>
      {isExamOn ? (
        <Quiz />
      ) : (
        <Instructions isExamOn={isExamOn} setIsExamOn={setIsExamOn} />
      )}
    </>
  );
}

//from here

// let quizQuestions = [
//     {
//         "id": 1,
//         "question": "What can be the cause for veering off the roadway?",
//         "answers": [
//             {
//                 "label": "A",
//                 "text": "Excessive speed"
//             },
//             {
//                 "label": "B",
//                 "text": "Inattentiveness, distraction"
//             },
//             {
//                 "label": "C",
//                 "text": "Fatigue"
//             }
//         ],
//         "wrongChoices": [
//             "Driving too slowly",
//             "Proper lane discipline",
//             "Using mirrors correctly",
//             "Adequate following distance",
//             "Clear road markings"
//         ]
//     },
//     {
//         "id": 2,
//         "question": "What must you do if you notice signs of fatigue when driving on open stretches of road at night (heavy eyelids, feeling chilly, sudden frights, etc.)?",
//         "image": {
//             "src": "/src/assets/lesson4Assets/traffic_routes1.webp",
//             "alt": ""
//         },
//         "answers": [
//             {
//                 "label": "A",
//                 "text": "Interrupt your journey for an adequate break"
//             }
//         ],
//         "wrongChoices": [
//             "Drink plenty of water",
//             "Turn up the radio to stay alert",
//             "Open the windows for fresh air",
//             "Drive faster to reach destination sooner",
//             "Talk on the phone to stay awake"
//         ]
//     },
//     {
//         "id": 3,
//         "question": "How can fatigue be prevented on a long journey?",
//         "answers": [
//             {
//                 "label": "A",
//                 "text": "By well-timed and sufficient stops for rests"
//             },
//             {
//                 "label": "B",
//                 "text": "Gymnastic exercises during stops"
//             }
//         ],
//         "wrongChoices": [
//             "By driving at maximum speed to finish sooner",
//             "By avoiding eating during the journey",
//             "By drinking energy drinks continuously",
//             "By keeping the windows closed",
//             "By driving with loud music"
//         ]
//     },
//     {
//         "id": 4,
//         "question": "What can diminish alertness in road traffic?",
//         "answers": [
//             {
//                 "label": "A",
//                 "text": "Strong emotions (e.g. delight, annoyance, impatience)"
//             },
//             {
//                 "label": "B",
//                 "text": "Animated conversation"
//             },
//             {
//                 "label": "C",
//                 "text": "Engrossing programs on the car radio"
//             }
//         ],
//         "wrongChoices": [
//             "High visibility conditions",
//             "Driving on familiar roads",
//             "Calm and stable emotions",
//             "Complete silence in the car",
//             "Driving during daytime"
//         ]
//     },
//     {
//         "id": 5,
//         "question": "What strongly distracts you while you are driving?",
//         "answers": [
//             {
//                 "label": "A",
//                 "text": "Telephoning"
//             },
//             {
//                 "label": "B",
//                 "text": "Lighting a cigarette"
//             },
//             {
//                 "label": "C",
//                 "text": "Nagging children on the backseats"
//             }
//         ],
//         "wrongChoices": [
//             "Checking mirrors",
//             "Adjusting the seat",
//             "Listening to calm music",
//             "Checking the speedometer",
//             "Observing road signs"
//         ]
//     },
//     {
//         "id": 6,
//         "question": "What can prevent you from hearing warning signals?",
//         "answers": [
//             {
//                 "label": "A",
//                 "text": "Having the radio on too loud"
//             },
//             {
//                 "label": "B",
//                 "text": "Using headphones"
//             },
//             {
//                 "label": "C",
//                 "text": "The exhaust being too loud"
//             }
//         ],
//         "wrongChoices": [
//             "Driving with windows down",
//             "Driving at high speed",
//             "Having a conversation with passengers",
//             "Using the air conditioning",
//             "Wearing a seatbelt"
//         ]
//     },
//     {
//         "id": 7,
//         "question": "What does \"power sound\" in the car result in?",
//         "answers": [
//             {
//                 "label": "A",
//                 "text": "Signals from other traffic - in particular sirens - are not heard"
//             },
//             {
//                 "label": "B",
//                 "text": "There is noise pollution for others even when the windows are closed"
//             },
//             {
//                 "label": "C",
//                 "text": "Driving errors due to the driver being diverted"
//             }
//         ],
//         "wrongChoices": [
//             "It improves fuel efficiency",
//             "It helps the driver concentrate better",
//             "It keeps passengers calm",
//             "It reduces engine wear",
//             "It improves the car's performance"
//         ]
//     },
//     {
//         "id": 8,
//         "question": "A motorist has drunk too much alcohol and for this reason must not drive. How can his fitness to drive not be restored in a short time?",
//         "answers": [
//             {
//                 "label": "A",
//                 "text": "By sleeping for half an hour"
//             },
//             {
//                 "label": "B",
//                 "text": "By drinking two cups of strong coffee"
//             },
//             {
//                 "label": "C",
//                 "text": "By going for a half hour's walk"
//             }
//         ],
//         "wrongChoices": [
//             "waiting sufficient time for the alcohol to clear",
//             "Getting a full night sleep",
//             "Allowing the body enough time to metabolise the alcohol"
//         ]
//     },
//     {
//         "id": 9,
//         "question": "Can a motorist's fitness to drive be impaired by even relatively small quantities of alcohol?",
//         "answers": [
//             {
//                 "label": "A",
//                 "text": "Yes, even small quantities of alcohol can impair fitness to drive"
//             }
//         ],
//         "wrongChoices": [
//             "No, only large quantities of alcohol impair driving",
//             "No, alcohol only affects pedestrians",
//             "No, experienced drivers are unaffected",
//             "Sometimes alcohol improves reaction time",
//             "Only illegal substances impair driving"
//         ]
//     },
//     {
//         "id": 10,
//         "question": "Which substances can impair fitness to drive in a similar way to alcohol?",
//         "answers": [
//             {
//                 "label": "A",
//                 "text": "Certain medicines and intoxicants"
//             }
//         ],
//         "wrongChoices": [
//             "Caffeinated drinks",
//             "Vitamin supplements",
//             "Herbal teas",
//             "Fruit juice",
//             "Energy bars"
//         ]
//     },
//     {
//         "id": 11,
//         "question": "What can impair fitness to drive?",
//         "answers": [
//             {
//                 "label": "A",
//                 "text": "Fatigue"
//             },
//             {
//                 "label": "B",
//                 "text": "Alcohol and other intoxicants"
//             },
//             {
//                 "label": "C",
//                 "text": "Certain medicines"
//             }
//         ],
//         "wrongChoices": [
//             "Drinking water",
//             "Listening to music",
//             "Driving on familiar roads",
//             "Having a full tank of fuel",
//             "Not wearing sunglasses on a sunny day"
//         ]
//     },
//     {
//         "id": 12,
//         "question": "Above which alcohol level in your blood can you expect your fitness to drive to be impaired?",
//         "answers": [
//             {
//                 "label": "A",
//                 "text": "0.3 per mille (30 mg/100 ml)"
//             }
//         ],
//         "wrongChoices": [
//             "1.0 per mille (100 mg/100 ml)",
//             "0.8 per mille (80 mg/100 ml)",
//             "0.5 per mille (50 mg/100 ml)",
//             "2.0 per mille (200 mg/100 ml)"
//         ]
//     },
//     {
//         "id": 13,
//         "question": "In general, how long does it take before an alcohol level of 1.0 per mille (100 mg/100 ml) is cleared from the blood stream?",
//         "answers": [
//             {
//                 "label": "A",
//                 "text": "10 hours"
//             }
//         ],
//         "wrongChoices": [
//             "2 hours",
//             "4 hours",
//             "6 hours",
//             "24 hours",
//             "30 minutes"
//         ]
//     },
//     {
//         "id": 14,
//         "question": "What can increase the intoxicating effect of alcohol?",
//         "answers": [
//             {
//                 "label": "A",
//                 "text": "Sleeping pills, pain killers or sedatives"
//             },
//             {
//                 "label": "B",
//                 "text": "Drinking on an \"empty\" stomach"
//             },
//             {
//                 "label": "C",
//                 "text": "Downing alcoholic drinks in one"
//             }
//         ],
//         "wrongChoices": [
//             "Drinking a lot of water before alcohol",
//             "Eating a large meal before drinking",
//             "Drinking slowly over a long period",
//             "Mixing alcohol with fruit juice",
//             "none of the answers"
//         ]
//     },
//     {
//         "id": 15,
//         "question": "What can be the effects of even small quantities of alcohol?",
//         "answers": [
//             {
//                 "label": "A",
//                 "text": "Delayed reactions"
//             },
//             {
//                 "label": "B",
//                 "text": "Reckless driving"
//             },
//             {
//                 "label": "C",
//                 "text": "Impairment of hearing and vision"
//             }
//         ],
//         "wrongChoices": [
//             "Improved night vision",
//             "Faster reaction times",
//             "Better lane discipline",
//             "Increased concentration",
//             "Improved decision making"
//         ]
//     },
//     {
//         "id": 16,
//         "question": "What effects can drugs have?",
//         "answers": [
//             {
//                 "label": "A",
//                 "text": "Intoxication"
//             },
//             {
//                 "label": "B",
//                 "text": "Dependence, addiction"
//             }
//         ],
//         "wrongChoices": [
//             "Improved concentration",
//             "Enhanced driving ability",
//             "Better reaction time",
//             "Increased awareness",
//             "Improved vision"
//         ]
//     },
//     {
//         "id": 17,
//         "question": "Which drugs can make a person temporarily unfit to drive even when consumed on a single occasion?",
//         "answers": [
//             {
//                 "label": "A",
//                 "text": "Hashish, marijuana"
//             },
//             {
//                 "label": "B",
//                 "text": "Heroin, cocaine, amphetamines"
//             },
//             {
//                 "label": "C",
//                 "text": "LSD, dagga"
//             }
//         ],
//         "wrongChoices": [
//             "Aspirin and ibuprofen",
//             "Vitamin C supplements",
//             "Antacids and digestive tablets",
//             "Caffeine tablets",
//             "Antihistamines taken in low doses"
//         ]
//     },
//     {
//         "id": 18,
//         "question": "How long can hashish and its catabolites (decomposition products) be detected in urine?",
//         "answers": [
//             {
//                 "label": "A",
//                 "text": "Weeks later"
//             }
//         ],
//         "wrongChoices": [
//             "A few minutes",
//             "A few hours",
//             "24 hours",
//             "2 days",
//             "3 days"
//         ]
//     },
//     {
//         "id": 19,
//         "question": "Which of the following are unfit to drive motor vehicles?",
//         "answers": [
//             {
//                 "label": "A",
//                 "text": "Persons who regularly take drugs (e.g. hashish, heroin, cocaine), even if they are not unfit to drive at the time of the journey"
//             },
//             {
//                 "label": "B",
//                 "text": "Persons who smoke a single hashish cigarette per day"
//             }
//         ],
//         "wrongChoices": [
//             "Persons who only drinks water",
//             "Persons who have taken painkillers once",
//             "Persons who drive at midnight",
//             "Persons who consumed carbonated drinks",
//             "Persons who ate too much before driving"
//         ]
//     },
//     {
//         "id": 20,
//         "question": "May a person who has just smoked a hashish cigarette drive a motor vehicle?",
//         "answers": [
//             {
//                 "label": "A",
//                 "text": "No, because he/she could be unfit to drive"
//             }
//         ],
//         "wrongChoices": [
//             "Yes, as long as he/she feels fine",
//             "Yes, if the cigarette was smoked more than an hour ago",
//             "Yes, if it is a short distance",
//             "Yes, if he/she has driven under such conditions before and has self trust",
//             "Yes, only at night when roads are empty"
//         ]
//     },
//     {
//         "id": 21,
//         "question": "When is a drug-dependent person fit to drive a motor vehicle again?",
//         "answers": [
//             {
//                 "label": "A",
//                 "text": "After presenting a proof that he/she has not taken any drugs for a whole year and there is no likelihood of a relapse"
//             }
//         ],
//         "wrongChoices": [
//             "After a 30-day detox program",
//             "After a doctor certifies them as healthy",
//             "Immediately after stopping drug use",
//             "After completing a driving refresher course",
//             "After six months of sobriety"
//         ]
//     },
//     {
//         "id": 22,
//         "question": "How is the intoxicating substance in hashish broken down by the body?",
//         "answers": [
//             {
//                 "label": "A",
//                 "text": "Unevenly over an indeterminate period"
//             }
//         ],
//         "wrongChoices": [
//             "Quickly and predictably within a fixed timeframe",
//             "At a rate of 0.1 per mille per hour like alcohol",
//             "Instantly once the person sleeps",
//             "Within 2 hours regardless of quantity consumed",
//             "Evenly over a fixed 8-hour period"
//         ]
//     },
//     {
//         "id": 23,
//         "question": "Why are drugs (e.g. hashish, heroin, cocaine) still dangerous even if they are just taken on a single occasion?",
//         "answers": [
//             {
//                 "label": "A",
//                 "text": "They can cause the person to be unfit to drive"
//             },
//             {
//                 "label": "B",
//                 "text": "They can produce intoxication lasting several hours"
//             }
//         ],
//         "wrongChoices": [
//             "They can produce intoxication lasting a few minutes",
//             "They make you alert",
//             "They cause immediate unconsciousness",
//             "They are not dangerous if taken occasionally",
//             "They have no effect on experienced users"
//         ]
//     },
//     {
//         "id": 24,
//         "question": "What are the consequences for a person driving a motor vehicle under the influence of drugs (e.g. hashish, heroin, cocaine)?",
//         "answers": [
//             {
//                 "label": "A",
//                 "text": "Confiscation of driving license or driving ban"
//             },
//             {
//                 "label": "B",
//                 "text": "Fine and/or imprisonment"
//             },
//             {
//                 "label": "C",
//                 "text": "Compulsory medical/psychological examination"
//             }
//         ],
//         "wrongChoices": [
//             "Verbal warning from a traffic officer",
//             "Mandatory community service only",
//             "First offence can be forgiven",
//             "Only repeat offenders face consequences",
//             "Mandatory attendance of a driving awareness course only"
//         ]
//     },
//     {
//         "id": 25,
//         "question": "What are the possible effects of hashish consumption?",
//         "answers": [
//             {
//                 "label": "A",
//                 "text": "Intoxication with dangerous hallucination and reduced reaction capability"
//             },
//             {
//                 "label": "B",
//                 "text": "Intoxication with confusion and depression"
//             }
//         ],
//         "wrongChoices": [
//             "Increased alertness and sharper focus",
//             "Faster reaction times and better coordination",
//             "Improved night vision",
//             "Reduced anxiety and calmer driving behavior",
//             "Enhanced ability to judge speed and distance"
//         ]
//     },
//     {
//         "id": 26,
//         "question": "What are the possible effects of hashish consumption?",
//         "answers": [
//             {
//                 "label": "A",
//                 "text": "Diminished awareness of danger"
//             },
//             {
//                 "label": "B",
//                 "text": "Increased likelihood of mistakes in assimilating information"
//             },
//             {
//                 "label": "C",
//                 "text": "Misjudgement of speed and distance"
//             }
//         ],
//         "wrongChoices": [
//             "Heightened awareness of surrounding traffic",
//             "Improved ability to multitask while driving",
//             "Better judgement of road conditions",
//             "Reduced stopping distance perception",
//             "Increased patience in traffic"
//         ]
//     },
//     {
//         "id": 27,
//         "question": "What are the possible effects of hashish consumption?",
//         "answers": [
//             {
//                 "label": "A",
//                 "text": "Impaired attention and concentration"
//             }
//         ],
//         "wrongChoices": [
//             "Enhanced memory recall while driving",
//             "Improved peripheral vision",
//             "Better ability to follow complex routes",
//             "Increased alertness in low-light conditions",
//             "Faster processing of road signs"
//         ]
//     },
//     {
//         "id": 28,
//         "question": "Immediately before setting off you have felt very angry and you are furious. What is right?",
//         "answers": [
//             {
//                 "label": "A",
//                 "text": "You should not drive when you are furious"
//             }
//         ],
//         "wrongChoices": [
//             "You should drive faster to release tension",
//             "You should drive immediately to clear your head",
//             "You should play loud music to calm down",
//             "Anger has no effect on driving ability",
//             "You should call someone while driving to vent"
//         ]
//     },
//     {
//         "id": 29,
//         "question": "What do you think of drivers who travel too fast under pressure of time and do not observe speed regulations?",
//         "answers": [
//             {
//                 "label": "A",
//                 "text": "Pressure of time is no justification for ignoring traffic regulations"
//             }
//         ],
//         "wrongChoices": [
//             "Pressure of time justifies moderate speeding",
//             "Speed regulations can be ignored on empty roads",
//             "Faster driving is acceptable when running late for work",
//             "Traffic laws are flexible depending on urgency",
//             "Pressure of time is only allowed when having hospital emergency"
//         ]
//     },
//     {
//         "id": 30,
//         "question": "A car with a young driver has stopped next to you at a red traffic light. He is playing with his accelerator and obviously intends to start first and shake you off when the lights change. How do you react?",
//         "answers": [
//             {
//                 "label": "A",
//                 "text": "You ignore the challenge, remain cool and let the other car drive off"
//             }
//         ],
//         "wrongChoices": [
//             "You rev your engine and accept the challenge",
//             "You honk your horn to warn him",
//             "You speed up slightly to stay ahead",
//             "You flash your headlights at him",
//             "You change lanes to get away from him faster"
//         ]
//     }
// ]

/*
import { lesson1Notes } from "../components/theory/data/data";



let wrong = [
  {
    1: [
      "Driving too slowly",
      "Proper lane discipline",
      "Using mirrors correctly",
      "Adequate following distance",
      "Clear road markings",
    ],
  },
  {
    2: [
      "Drink plenty of water",
      "Turn up the radio to stay alert",
      "Open the windows for fresh air",
      "Drive faster to reach destination sooner",
      "Talk on the phone to stay awake",
    ],
  },
  {
    3: [
      "By driving at maximum speed to finish sooner",
      "By avoiding eating during the journey",
      "By drinking energy drinks continuously",
      "By keeping the windows closed",
      "By driving with loud music",
    ],
  },
  {
    4: [
      "High visibility conditions",
      "Driving on familiar roads",
      "Calm and stable emotions",
      "Complete silence in the car",
      "Driving during daytime",
    ],
  },
  {
    5: [
      "Checking mirrors",
      "Adjusting the seat",
      "Listening to calm music",
      "Checking the speedometer",
      "Observing road signs",
    ],
  },
  {
    6: [
      "Driving with windows down",
      "Driving at high speed",
      "Having a conversation with passengers",
      "Using the air conditioning",
      "Wearing a seatbelt",
    ],
  },
  {
    7: [
      "It improves fuel efficiency",
      "It helps the driver concentrate better",
      "It keeps passengers calm",
      "It reduces engine wear",
      "It improves the car's performance",
    ],
  },
  {
    8: [
      "By drinking a glass of cold water",
      "By eating a heavy meal",
      "By taking a cold shower",
      "By doing jumping jacks",
      "By waiting only 15 minutes",
    ],
  },
  {
    9: [
      "No, only large quantities of alcohol impair driving",
      "No, alcohol only affects pedestrians",
      "No, experienced drivers are unaffected",
      "No, alcohol improves reaction time",
      "No, only illegal substances impair driving",
    ],
  },
  {
    10: [
      "Caffeinated drinks",
      "Vitamin supplements",
      "Herbal teas",
      "Fruit juice",
      "Energy bars",
    ],
  },
  {
    11: [
      "Drinking water",
      "Listening to music",
      "Driving on familiar roads",
      "Having a full tank of fuel",
      "Wearing sunglasses on a sunny day",
    ],
  },
  {
    12: [
      "1.0 per mille (100 mg/100 ml)",
      "0.8 per mille (80 mg/100 ml)",
      "0.5 per mille (50 mg/100 ml)",
      "0.1 per mille (10 mg/100 ml)",
      "2.0 per mille (200 mg/100 ml)",
    ],
  },
  { 13: ["2 hours", "4 hours", "6 hours", "24 hours", "30 minutes"] },
  {
    14: [
      "Drinking a lot of water before alcohol",
      "Eating a large meal before drinking",
      "Drinking slowly over a long period",
      "Mixing alcohol with fruit juice",
      "Drinking only beer instead of spirits",
    ],
  },
  {
    15: [
      "Improved night vision",
      "Faster reaction times",
      "Better lane discipline",
      "Increased concentration",
      "Improved decision making",
    ],
  },
  {
    16: [
      "Improved concentration",
      "Enhanced driving ability",
      "Better reaction time",
      "Increased awareness",
      "Improved vision",
    ],
  },
  {
    17: [
      "Aspirin and ibuprofen",
      "Vitamin C supplements",
      "Antacids and digestive tablets",
      "Caffeine tablets",
      "Antihistamines taken in low doses",
    ],
  },
  { 18: ["A few minutes", "A few hours", "24 hours", "2 days", "3 days"] },
  {
    19: [
      "Persons who only drink alcohol occasionally",
      "Persons who have taken painkillers once",
      "Persons who are simply tired",
      "Persons who consumed caffeine",
      "Persons who ate too much before driving",
    ],
  },
  {
    20: [
      "Yes, as long as he/she feels fine",
      "Yes, if the cigarette was smoked more than an hour ago",
      "Yes, if it is a short distance",
      "Yes, if he/she has driven under such conditions before",
      "Yes, only at night when roads are empty",
    ],
  },
  {
    21: [
      "After a 30-day detox program",
      "After a doctor certifies them as healthy",
      "Immediately after stopping drug use",
      "After completing a driving refresher course",
      "After six months of sobriety",
    ],
  },
  {
    22: [
      "Quickly and predictably within a fixed timeframe",
      "At a rate of 0.1 per mille per hour like alcohol",
      "Instantly once the person sleeps",
      "Within 2 hours regardless of quantity consumed",
      "Evenly over a fixed 8-hour period",
    ],
  },
  {
    23: [
      "They are physically addictive after one use",
      "They permanently damage the nervous system",
      "They cause immediate unconsciousness",
      "They are detectable only for 24 hours",
      "They have no effect on experienced users",
    ],
  },
  {
    24: [
      "Verbal warning from a traffic officer",
      "Mandatory community service only",
      "Automatic vehicle impoundment for 30 days",
      "Suspension of vehicle registration",
      "Mandatory attendance of a driving awareness course only",
    ],
  },
  {
    25: [
      "Increased alertness and sharper focus",
      "Faster reaction times and better coordination",
      "Improved night vision",
      "Reduced anxiety and calmer driving behavior",
      "Enhanced ability to judge speed and distance",
    ],
  },
  {
    26: [
      "Heightened awareness of surrounding traffic",
      "Improved ability to multitask while driving",
      "Better judgement of road conditions",
      "Reduced stopping distance perception",
      "Increased patience in traffic",
    ],
  },
  {
    27: [
      "Enhanced memory recall while driving",
      "Improved peripheral vision",
      "Better ability to follow complex routes",
      "Increased alertness in low-light conditions",
      "Faster processing of road signs",
    ],
  },
  {
    28: [
      "You should drive faster to release tension",
      "You should drive immediately to clear your head",
      "You should play loud music to calm down",
      "Anger has no effect on driving ability",
      "You should call someone while driving to vent",
    ],
  },
  {
    29: [
      "Pressure of time justifies moderate speeding",
      "Speed regulations can be ignored on empty roads",
      "Faster driving is acceptable when running late for work",
      "Traffic laws are flexible depending on urgency",
      "Other drivers should give way to those in a hurry",
    ],
  },
  {
    30: [
      "You rev your engine and accept the challenge",
      "You honk your horn to warn him",
      "You speed up slightly to stay ahead",
      "You flash your headlights at him",
      "You change lanes to get away from him faster",
    ],
  },
];

let array = [];

lesson1Notes.forEach((obj, i) => {
  let objmin = obj;
  objmin.wrongChoices = wrong[i][i + 1];
  array.push(objmin);
});

console.log(array); 
*/

// up to here is the playground
