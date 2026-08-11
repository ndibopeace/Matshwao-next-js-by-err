import { lesson6Notes } from "@data/data";
import Notes from "@components/theory/notes";

export default function Lesson6() {
  return (
    <>
      <Notes notesArr={lesson6Notes} title="Right of Way" />
    </>
  );
}
