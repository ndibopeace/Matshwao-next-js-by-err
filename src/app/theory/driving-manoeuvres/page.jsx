import { lesson9Notes } from "@data/data";
import Notes from "@components/theory/notes";

const title = "Driving Manoeuvres";

export const metadata = {
  title: title,
  description:
    "Study essential driving manoeuvres, including positioning, reversing, turning, parking, and safe vehicle control.",
};

export default function Lesson9() {
  return (
    <>
      <Notes notesArr={lesson9Notes} title={title} />
    </>
  );
}
