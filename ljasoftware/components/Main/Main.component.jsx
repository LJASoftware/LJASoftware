import styles from './Main.style.module.css'
import { Portifolio, Slogan, Sobre, Contato } from '..'

export function Main() {
  return (
    <main>
      <Slogan />
      <Sobre />
      <Portifolio />
      <Contato />
    </main>
  )
}
