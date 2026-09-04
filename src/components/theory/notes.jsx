import Image from "next/image";
import styles from "@components/theory/lesson.module.css";

export default function RenderNotes({ notesArr, title, ...rest }) {
 

  return (
    <>
      <h1 className={styles.topic_h1}>{title}</h1>

      <div className={styles.lessons_wrapper}>
        
        {notesArr.map(({ question, answers, image }, id) => (
          <article className={styles.note_card} key={`${id}`}>
            <span className={styles.note_number}>{id + 1}.</span>
            <p className={styles.note_question}>{question}</p>
            {image && (
              <div className={styles.lesson_image_wrapper}>
                <Image
                  className={`${styles.lesson_image}`}
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max_width: 768px) 70vw, 400px"
                  priority= {false}
                />
              </div>
            )}

            <ol className={styles.note_answers}>
              {answers.map((item) => (
                <li key={item}>
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
