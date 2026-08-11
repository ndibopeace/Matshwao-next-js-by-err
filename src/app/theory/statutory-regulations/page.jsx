import { lesson3Notes } from "@data/data";
import Notes from "@components/theory/notes";

export default function Lesson3() {
  return (
    <>
      <Notes notesArr={lesson3Notes} title="Statutory regulations" />
    </>
  );
}
