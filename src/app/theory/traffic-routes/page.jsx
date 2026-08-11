import { lesson4Notes } from "@data/data";
import Notes from "@components/theory/notes";


export default function Lesson4() {
  return (
    <>
      <Notes notesArr={lesson4Notes} title="Traffic routes" />
    </>
  );
}
