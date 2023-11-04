import Link from 'next/link'
import styles from './MenuCategory.module.css'

export default function MenuCategory() {
  return (
   
    <div className={styles.categoryList}>
        <Link href={"/blog?cat=style"} className={`${styles.category} ${styles.style}`}>Style
        </Link>
        <Link href={"/blog?cat=style"} className={`${styles.category} ${styles.fashion}`}>fashion
        </Link>
        <Link href={"/blog?cat=style"} className={` ${styles.category} ${styles.food}`}>food
        </Link>
        <Link href={"/blog?cat=style"} className={` ${styles.category} ${styles.culture}`}>culture
        </Link>
        <Link href={"/blog?cat=style"} className={` ${styles.category} ${styles.coding}`}>coding
        </Link>
        <Link href={"/blog?cat=style"} className={` ${styles.category} ${styles.travel}`}>travel
        </Link>
    </div>

  )
}
