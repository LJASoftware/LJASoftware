import { useEffect, useState } from 'react'
import { Projeto } from '..'
import axios from 'axios'
import styles from './Portfolio.style.module.css'

export function Portfolio() {
  const [projetos, setProjetos] = useState([])

  useEffect(() => {
    async function getProjetos() {
      try {
        const urlAtual = window.location.href
        const resposta = await axios.get(urlAtual + '/api/projetos')
        setProjetos(resposta.data.projetos)
      } catch {
        console.log(error)
      }
    }

    getProjetos()
  }, [])

  return (
    <section className={styles.portifolio}>
      <h2>PORTFÓLIO</h2>
      <ul className={styles.projetos__container}>
        {projetos.map(projeto => {
          return (
            <Projeto
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
