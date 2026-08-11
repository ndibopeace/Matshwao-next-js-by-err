// export default function RenderNotes({ notesArr, title, ...rest }) {

//   {console.log(rest);}

//   return (
//     <>
//       <title>{title}</title>
//       <h1 className="topic-h1">{title}</h1>

//       <div className="lessons-wrapper">
//         {notesArr.map(({ id, question, answers, image }) => (
//           <article className="note-card" key={`${id}`}>
//             <span className="note-number">{id}.</span>
//             <p className="note-question">{question}</p>
//             {image && (
//               <img className={rest.className} src={image.src} alt={image.alt} />
//             )}

//             <ol className="note-answers">
//               {answers.map(({ label, text }) => (
//                 <li>
//                   {/* <li key={label}> */}
//                   {/* <span className="answer-span">{label}.</span> */} {text}
//                 </li>
//               ))}
//             </ol>
//           </article>
//         ))}
//       </div>
//     </>
//   );
// }

import Image from "next/image";

export default function RenderNotes({ notesArr, title, ...rest }) {
  {
    console.log(rest);
  }

  return (
    <>
      <title>{title}</title>
      <h1 className="topic-h1">{title}</h1>

      <div className="lessons-wrapper">
        {notesArr.map(({ question, answers, image }, id) => (
          <article className="note-card" key={`${id}`}>
            <span className="note-number">{id + 1}.</span>
            <p className="note-question">{question}</p>
            {image && (
              <div className="lesson-image-wrapper">
                <Image
                  className={`lesson-image ${rest.className || ""}`}
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 768px) 70vw, 400px"
                  priority= {false}
                />
              </div>
            )}

            <ol className="note-answers">
              {answers.map((item) => (
                <li key={item}>
                  {/* <li > */}
                  {item}
                </li>
              ))}
            </ol>
          </article>
        ))}
      </div>
    </>
  );
}
