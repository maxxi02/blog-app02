import Image from 'next/image';
import styles from './Featured.module.css';




export default function Featured() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b>Welcome!</b>
        <br />
        Discover stories and creative ideas.
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src={"/p1.jpeg"} fill alt='' className={styles.image}/>
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>Your Gateway to Knowledge and Inspiration!</h1>
          <p className={styles.postDesc}>Discover a world of insightful articles, thought-provoking stories, and expert advice on our engaging blog platform. Our website is your go-to destination for all things informative and inspiring. Whether you're looking for the latest trends in technology, travel tips, lifestyle advice, or deep dives into fascinating topics, our diverse team of writers has you covered.</p>
          <button className={styles.button}>Read More</button>
        </div>
      </div>
    </div>
  )
}
