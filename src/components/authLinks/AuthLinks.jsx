"use client";
import Link from 'next/link';
import styles from './AuthLinks.module.css';
import { useState } from 'react';


export default function AuthLinks() {

  const [open, setOpen] = useState(false)
  const status = "unauthenticated";
  return (
    <>
      {status === "unauthenticated" ? (
      <Link 
      className={styles.links} 
      href={"/login"}>Login</Link>) : (
      <>
      <Link 
        className={styles.links} 
        href={"/write"}>Write</Link>
        <span>Logout</span>
      </>
      )}
      <div className={styles.burger} onClick={()=>setOpen(!open)}>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>
      {open && (
        <div className={styles.responsiveMenu}>
          <Link href={"/"}>Home</Link>
          <Link href={"/"}>About</Link>
          <Link href={"/"}>Contact</Link>
          {status === "unauthenticated" ? (
          <Link 
          className={styles.links} 
          href={"/login"}>Login</Link>) : (
          <>
          <Link 
            className={styles.links} 
            href={"/write"}>Write</Link>
            <span>Logout</span>
          </>
          )}
        </div>
      )}
    </>
  )
}
