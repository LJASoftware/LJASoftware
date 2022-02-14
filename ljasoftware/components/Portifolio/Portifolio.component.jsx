import { Projeto } from '..'
import styles from './Portifolio.style.module.css'

export function Portifolio() {
  return (
    <div>
      <h2>PORTIFOLIO</h2>
      <Projeto link={'google.com'} nome={'Chocolate'} imagem={'imagem'} />
      <Projeto link={'yahoo.com'} nome={'Chocolate'} imagem={'imagem'} />
      <Projeto link={'facebook.com'} nome={'Chocolate'} imagem={'imagem'} />
      <Projeto link={'tibia.com'} nome={'Chocolate'} imagem={'imagem'} />
    </div>
  )
}
