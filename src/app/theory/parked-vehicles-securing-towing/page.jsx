import { lesson10Notes } from "@data/data";
import Notes from "@components/theory/notes";

const title = "Parked vehicles/Securing & Towing";

export const metadata = {
  title: title,
  description:
    "Review driving theory for parking safely, securing vehicles, and towing trailers or other vehicles on the road.",
};

export default function Lesson10() {
  return (
    <>
      <Notes notesArr={lesson10Notes} title={title} />
    </>
  );
}
