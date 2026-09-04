import { lesson8Notes } from "@data/data";
import Notes from "@components/theory/notes";

const title = "Different Road Users";

export const metadata = {
  title: title,
  description:
    "Learn how to drive safely around pedestrians, cyclists, motorcyclists, and other road users with practical theory guidance.",
};

export default function Lesson8() {
  return (
    <>
      <Notes notesArr={lesson8Notes} title={title} />
    </>
  );
}
