import { lesson7Notes } from "@data/data";
import Notes from "@components/theory/notes";

export default function Lesson7() {
  return (
    <>
      <Notes className='road-signs' notesArr={lesson7Notes} title="Traffic Signs" />
    </>
  );
}
