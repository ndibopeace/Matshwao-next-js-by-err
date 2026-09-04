import { lesson4Notes } from "@data/data";
import Notes from "@components/theory/notes";

const title = "Traffic routes";

export const metadata = {
  title: title,
  description:
    "Learn driving theory for different traffic routes, road layouts, lane use, and safe navigation in varied environments.",
};

export default function Lesson4() {
  return (
    <>
      <Notes notesArr={lesson4Notes} title={title} />
    </>
  );
}
