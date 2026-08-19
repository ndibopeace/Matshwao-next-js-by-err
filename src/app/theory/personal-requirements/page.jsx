import { lesson1Notes } from "@data/data";
import Notes from "@components/theory/notes";

export default function Lesson1() {
  return (
    <>
      <Notes notesArr={lesson1Notes} title="Personal requirements" />
    </>
  );
}
