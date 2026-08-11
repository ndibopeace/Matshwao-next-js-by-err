import Aside from '@components/reUsable/sidebar';
import './layout.css';

import Lesson1 from './personal-requirements/page';
// for some reason i dont know, other lessons automatically import. 
// All i need is to import this 1 lesson

export default function NotesLayout({children}) {

    return (
        <div className='lesson-container'>
            <Aside />
            <main>
                {children}
            </main>
        </div>
    )
}