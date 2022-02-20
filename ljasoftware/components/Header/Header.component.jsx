import styles from './Header.style.module.css'
import Image from 'next/image'

export function Header() {
  function handleClickSobre() {
    document.getElementById('sobre').scrollIntoView({ behavior: 'smooth' })
  }

  function handleClickPortfolio() {
    document.getElementById('portfolio').scrollIntoView({ behavior: 'smooth' })
  }

  function handleClickContato() {
    document.getElementById('contato').scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className={styles.header}>
      <Image width='50' height='50' src='/logo.jpg' alt='Logo LJA Software' />

      <ul>
        <li>
          <button onClick={handleClickSobre}>SOBRE</button>
        </li>
        <li>
          <button onClick={handleClickPortfolio}>PORTFÓLIO</button>
        </li>
        <li>
          <button onClick={handleClickContato}>CONTATO</button>
        </li>
      </ul>
    </header>
  )
}
