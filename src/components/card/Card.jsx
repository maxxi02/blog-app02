
import Image from 'next/image';
import styles from './card.module.css';
import Link from 'next/link';

export default function Card() {
  return (
    <div className={styles.container}>
    <div className={styles.imageContainer}>
        <Image src={"/terraces.jpg"} alt='' fill className={styles.image} />
    </div>
    <div className={styles.textContainer}>
        <Link href={"/"}>
          <h1>The Majestic Philippine Rice Terraces</h1>
        </Link>
        <p className={styles.desc}>
          Nestled high in the mountains of the Philippines, the Banaue Rice Terraces are a breathtaking testament to the ingenuity and culture of the Ifugao people. These magnificent rice terraces, often referred to as the &quot;Eighth Wonder of the World,&quot; have been sculpted into the steep mountainsides over 2,000 years ago.
        </p>

        <div className={styles.details}>
            <span className={styles.category}>CULTURE</span>
            <span className={styles.date}>11.02.2023</span>
        </div>
        <Link href={"/"} className={styles.link}>Read More</Link>
    </div>
    </div>

  )
}
