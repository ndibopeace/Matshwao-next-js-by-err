import { lesson14Notes } from "@data/data";
import Notes from "@components/theory/notes";

const title = "Using motor vehicles in an environmentall sensitive manner";

export const metadata = {
  title: title,
  description:
    "Learn how to use motor vehicles responsibly, reduce environmental impact, and drive efficiently and safely.",
};

export default function Lesson14() {
  return (
    <>
      <Notes
        notesArr={lesson14Notes}
        title={title}
      />
    </>
  );
}
