import { lesson2Notes } from "@data/data";
import Notes from "@components/theory/notes";

export default function Lesson2() {
  return (
    <>
      <Notes notesArr={lesson2Notes} title="Driver personality" />
    </>
  );
}
