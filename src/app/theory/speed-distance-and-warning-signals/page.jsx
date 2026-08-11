import { lesson5Notes } from "@data/data";
import Notes from "@components/theory/notes";

export default function Lesson5() {
  return (
    <>
      <Notes notesArr={lesson5Notes} title="Speed, distance and warning signals" />
    </>
  );
}
