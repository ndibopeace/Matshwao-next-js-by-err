import { lesson6Notes } from "@data/data";
import Notes from "@components/theory/notes";

const title = "Right of Way";

export const metadata = {
  title: title,
  description:
    "Understand right-of-way rules, priority at intersections, and how to make safe decisions in common traffic situations.",
};

export default function Lesson6() {
  return (
    <>
      <Notes notesArr={lesson6Notes} title={title} />
    </>
  );
}
