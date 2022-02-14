import styles from './Projeto.style.module.css'

export function Projeto({ link, nome, imagem }) {
  return (
    <div>
      {link} {nome} {imagem}
    </div>
  )
}
