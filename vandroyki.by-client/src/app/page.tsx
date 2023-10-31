import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <div className={styles.lovecard}>
          <h1 className={styles.h1}>Дорогая Auginia ❤️ ❤️ ❤️ </h1>
          <p className={styles.p}>
            Я люблю тебя до бесконечноти.. Однажды и навсегда ❤️ ❤️ ❤️
          </p>
          <p>Навсегда твой Антон</p>
        </div>
      </main>
    </>
  );
}
