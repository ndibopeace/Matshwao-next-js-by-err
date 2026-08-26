import Aside from '@components/reUsable/sidebar';
import styles from './theoryLayout.module.css';

// import Lesson1 from './personal-requirements/page';
// for some reason i dont know, other lessons automatically import. 
// All i need is to import this 1 lesson //

export const metadata = {
  title: "Theory lessons | err",
  description: "Study driving theory lessons.",
};

export default function NotesLayout({children}) {

    return (
        <div className={styles.lesson_container}>
            <Aside />
            <div>
                {children}
            </div>
        </div>
    )
}