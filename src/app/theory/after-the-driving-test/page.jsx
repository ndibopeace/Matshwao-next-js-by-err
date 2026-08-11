import { lesson12Notes } from "@data/data";
import Notes from "@components/theory/notes";

export default function Lesson12() {
  return (
    <>
      <Notes notesArr={lesson12Notes} title="After the driving test" />
    </>
  );
}
