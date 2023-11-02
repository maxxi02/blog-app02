import Image from 'next/image';
import styles from './Navbar.module.css';
import Link from 'next/link';
import AuthLinks from '../authLinks/AuthLinks';
import ThemeToggle from '../themeToggle/ThemeToggle';

export default function Navbar() {
  return (
    <div className={styles.container}>
      <div className={styles.social}>
        <Image src={"/facebook.png"} width={24} height={24} alt='facebook'/>
        <Image src={"/instagram.png"} width={24} height={24} alt='instagram'/>
        <Image className={styles.tiktok} src={"/tiktok.png"} width={24} height={24} alt='tiktok'/>
        <Image src={"/youtube.png"} width={24} height={24} alt='youtube'/>
      </div>
      <div className={styles.logo}><Link href={"/"}>Blogs</Link></div>
      <div className={styles.links}>
        <ThemeToggle/>
        <Link className={styles.link} href={""}>Home</Link>
        <Link className={styles.link} href={""}>Contact</Link>
        <Link className={styles.link} href={""}>About</Link>
        <Link className={styles.link} href={""}>Login</Link>
        <AuthLinks/>
      </div>
    </div>
  )
}
