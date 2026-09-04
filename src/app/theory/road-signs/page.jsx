import { lesson7Notes } from "@data/data";
import Notes from "@components/theory/notes";

const title = "Traffic Signs";

export const metadata = {
  title: title,
  description:
    "Learn to recognize and understand traffic signs, road markings, and signals for safer driving and theory test preparation.",
};

export default function Lesson7() {
  return (
    <>
      <Notes className='road-signs' notesArr={lesson7Notes} title={title} />
    </>
  );
}
