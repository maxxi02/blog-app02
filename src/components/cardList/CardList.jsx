import Pagination from '../pagination/Pagination';
import styles from './CardList.module.css';




export default function CardList() {
  return (
    <div className={styles.container}>
      <Pagination/>
    </div>
  )
}
