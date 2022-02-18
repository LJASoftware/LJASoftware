import styles from './Projeto.style.module.css'
import Image from 'next/image'

export function Projeto({ link, nome, imagem }) {
  return (
    <li className={styles.projeto}>
      <a className={styles.link} href={link}>
        {nome.toUpperCase()}
      </a>
      <div className={styles.imagem}>
        <Image
          layout='fill'
          src='/pessoa-programando.jpg'
          alt={`Imagem do projeto ${nome}`}
        />
      </div>
      <div className={styles.espaco}></div>
    </li>
  )
}
