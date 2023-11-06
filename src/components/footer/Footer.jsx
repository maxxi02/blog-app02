import Image from 'next/image';
import styles from './Footer.module.css';
import Link from 'next/link';




export default function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.logo}>
          <Image src={"/nextjs.png"} alt='lama blog' width={50} height={50}/>
          <h1 className={styles.logoText}>Blog App</h1>
        </div>
        <p className={styles.desc}>
          Explore, Dream, Discover – Your Journey Awaits 🌍✨
        </p>
        <div className={styles.icons}>
          <Image src={"/facebook.png"} alt='' width={18} height={18}/>
          <Image src={"/instagram.png"} alt='' width={18} height={18}/>
          <Image className={styles.tiktok} src={"/tiktok.png"} width={18} height={18} alt='tiktok'/>
          <Image src={"/youtube.png"} alt='' width={18} height={18}/>
        </div>
      </div>
      <div className={styles.links}>
        <div className={styles.list}>
          <span className={styles.listTitle}>Links</span>
          <Link href={"/"}>Homepage</Link>
          <Link href={"/"}>Blog</Link>
          <Link href={"/"}>About</Link>
          <Link href={"/"}>Contact</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Tags</span>
          <Link href={"/"}>Style</Link>
          <Link href={"/"}>Fashion</Link>
          <Link href={"/"}>Coding</Link>
          <Link href={"/"}>Travel</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Social</span>
          <Link href={"/"}>Facebook</Link>
          <Link href={"/"}>Instagram</Link>
          <Link href={"/"}>Tiktok</Link>
          <Link href={"/"}>Youtube</Link>
        </div>
      </div>
    </div>
  )
}
