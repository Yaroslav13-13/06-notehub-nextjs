// import styles from "@/app/about/About.module.css";

// export default function About() {
//   return (
//     <main className={styles.container}>
//       <section className={styles.hero}>
//         <h1>About NoteHub</h1>
//         <p>
//           NoteHub — це простий і зручний застосунок для створення, збереження та
//           організації нотаток. Наше завдання — допомогти тобі структурувати свої
//           ідеї й працювати продуктивніше.
//         </p>
//       </section>

//       <section className={styles.card}>
//         <h2>Можливості</h2>
//         <ul>
//           <li>📝 Створення та редагування нотаток</li>
//           <li>📂 Організація та швидкий пошук</li>
//           <li>🌙 Світла та темна тема</li>
//         </ul>
//       </section>

//       <section className={styles.contact}>
//         <h2>Контакти</h2>
//         <p>
//           Маєш питання чи ідеї для покращення? <br />
//           Напиши нам на{" "}
//           <a href="mailto:pronjaroslav@gmail.com">pronjaroslav@gmail.com</a>
//         </p>
//       </section>
//     </main>
//   );
// }

import styles from "@/app/about/About.module.css";
import { FiEdit, FiFolder, FiMoon, FiMail } from "react-icons/fi";

export default function About() {
  return (
    <main className={styles.container}>
      <section className={styles.hero}>
        <h1>About NoteHub</h1>
        <p>
          NoteHub is a simple and intuitive app for creating, saving, and
          organizing notes. Our goal is to help you structure your ideas and
          work more productively.
        </p>
      </section>

      <section className={styles.card}>
        <h2>Features</h2>
        <ul>
          <li>
            <FiEdit color="#4caf50" className={styles.icon} /> Create and edit
            notes
          </li>
          <li>
            <FiFolder color="#2196f3" className={styles.icon} /> Organize and
            quickly search
          </li>
          <li>
            <FiMoon color="#ff9800" className={styles.icon} /> Light and dark
            theme
          </li>
        </ul>
      </section>

      <section className={styles.contact}>
        <h2>Contact</h2>
        <p>
          Have questions or ideas for improvement? <br />
          Write to us at{" "}
          <a href="mailto:pronjaroslav@gmail.com">pronjaroslav@gmail.com</a>
        </p>
      </section>
    </main>
  );
}
