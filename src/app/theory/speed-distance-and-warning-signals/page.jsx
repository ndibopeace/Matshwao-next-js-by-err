import { lesson5Notes } from "@data/data";
import Notes from "@components/theory/notes";

const title = "Speed, distance and warning signals";

export const metadata = {
  title: title,
  description:
    "Learn how speed, stopping distance, following distance, and warning signals affect safe driving in changing traffic conditions.",
};

export default function Lesson5() {
  return (
    <>
      <Notes notesArr={lesson5Notes} title={title} />
    </>
  );
}
