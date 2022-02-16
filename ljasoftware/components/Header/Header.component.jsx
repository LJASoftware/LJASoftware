import styles from './Header.style.module.css'
import Image from 'next/image'

export function Header() {
  return <header className={styles.header}>

  <Image
      width="50"
      height="50"
      src="/logo.png"
      alt="Logo LJA Software"
    />

    <ul>
      <li><a href='#'>SOBRE</a></li>
      <li><a href='#'>PORTIFÓLIO</a></li>
      <li><a href='#'>CONTATO</a></li>
    </ul>

  </header>
}
