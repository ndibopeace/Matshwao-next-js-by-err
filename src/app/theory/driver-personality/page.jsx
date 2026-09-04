import { lesson2Notes } from "@data/data";
import Notes from "@components/theory/notes";

const title = "Driver personality";

export const metadata = {
  title: title,
  description:
    "Explore how driver personality, attitude, concentration, and emotions influence safe and responsible driving decisions.",
};

export default function Lesson2() {
  return (
    <>
      <Notes notesArr={lesson2Notes} title={title} />
    </>
  );
}
