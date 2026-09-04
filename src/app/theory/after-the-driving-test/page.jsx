import { lesson12Notes } from "@data/data";
import Notes from "@components/theory/notes";

const title = "After the driving test";

export const metadata = {
  title: title,
  description:
    "Learn what to do after the driving test, including post-test responsibilities and the next steps for new drivers.",
};

export default function Lesson12() {
  return (
    <>
      <Notes notesArr={lesson12Notes} title={title} />
    </>
  );
}
