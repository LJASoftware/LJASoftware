import { Projeto } from '..'
import styles from './Portfolio.style.module.css'

export function Portfolio({ projetos }) {
  return (
    <section className={styles.portfolio}>
      <h2>PORTFÓLIO</h2>
      <ul className={styles.projetos__container}>
        {projetos &&
          projetos.map(projeto => {
            return (
              <Projeto
                key={projeto.nome}
                link={projeto.link}
                nome={projeto.nome}
                imagem={projeto.imagem}
              />
            )
          })}
      </ul>
    </section>
  )
}
