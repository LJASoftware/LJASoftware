import { useEffect, useState } from 'react'
import { Projeto } from '..'
import axios from 'axios'
import styles from './Portifolio.style.module.css'

export function Portifolio() {
  const [projetos, setProjetos] = useState([])

  useEffect(() => {
    async function getProjetos() {
      try {
        const resposta = await axios.get('http://localhost:3000/api/projetos')
        setProjetos(resposta.data.projetos)
      } catch {
        console.log(error)
      }
    }

    getProjetos()
  }, [])

  return (
    <section className={styles.portifolio}>
      <h2>PORTIFOLIO</h2>
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
