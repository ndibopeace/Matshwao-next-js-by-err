import { lesson11Notes } from "@data/data";
import Notes from "@components/theory/notes";

const title = "Special situations / traffic regulations";

export const metadata = {
  title: title,
  description:
    "Prepare for special driving situations and traffic regulations, including emergencies, hazards, and unusual road conditions.",
};

export default function Lesson11() {
  return (
    <>
      <Notes notesArr={lesson11Notes} title={title} />
    </>
  );
}
