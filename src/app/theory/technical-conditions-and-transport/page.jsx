import { lesson13Notes } from "@data/data";
import Notes from "@components/theory/notes";

const title = "Technical conditions/Passenger and goods transport";

export const metadata = {
  title: title,
  description:
    "Study vehicle technical conditions and the safe transport of passengers and goods for driving theory and road safety.",
};

export default function Lesson13() {
  return (
    <>
      <Notes notesArr={lesson13Notes} title={title} />
    </>
  );
}


