import styles from './Main.style.module.css'
import { Portfolio, Slogan, Sobre, Contato } from '..'

export function Main() {
  return (
    <main>
      <Slogan />
      <Sobre />
      <Portfolio />
      <Contato />
    </main>
  )
}
