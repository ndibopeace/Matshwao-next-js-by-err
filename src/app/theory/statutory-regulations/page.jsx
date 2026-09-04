import { lesson3Notes } from "@data/data";
import Notes from "@components/theory/notes";

const title = "Statutory regulations";

export const metadata = {
  title: title,
  description:
    "Review statutory driving regulations, legal responsibilities, and the rules every driver must follow on public roads.",
};

export default function Lesson3() {
  return (
    <>
      <Notes notesArr={lesson3Notes} title={title} />
    </>
  );
}
