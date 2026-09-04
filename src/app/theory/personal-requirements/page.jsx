import { lesson1Notes } from "@data/data";
import Notes from "@components/theory/notes";

const title = "Personal requirements";

export const metadata = {
  title: title,
  description:
    "Study personal requirements for safe driving, including driver fitness, responsibility, and essential road safety knowledge.",
};

export default function Lesson1() {
  return (
    <>
      <Notes notesArr={lesson1Notes} title={title} />
    </>
  );
}
