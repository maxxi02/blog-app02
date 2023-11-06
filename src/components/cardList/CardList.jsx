import Pagination from '../pagination/Pagination';
import styles from './CardList.module.css';
import Card from '../card/Card';




export default function CardList() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Recent Posts</h1>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      <Pagination/>
      
    </div>
  )
}
