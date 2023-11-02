"use client"
import Image from 'next/image';
import styles from './ThemeToggle.module.css';
import { useContext } from 'react';
import { context } from '@/context/ThemeContext';


export default function ThemeToggle() {

  const {theme, toggle} = useContext(context);
  console.log("this is the theme status ",theme);


  return (
    <div className={styles.container} onClick={toggle} style={theme === "dark" ? { backgroundColor:"white"} : { backgroundColor: "#0f172a"}}>
      <Image src={"/moon.png"} width={14} height={14} alt=''/>
      <div className={styles.ball}
      style={theme === "dark" ? { left: 1, backgroundColor:"#0f172a"} : { right: 1, backgroundColor: "white"}}
      ></div>
      <Image src={"/sun.png"} width={14} height={14} alt=''/>
    </div>
  )
}
