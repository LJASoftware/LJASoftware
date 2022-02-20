import styles from './Sobre.style.module.css'
import Image from 'next/image'

export function Sobre() {
  return (
    <section className={styles.sobre} id='sobre'>
      <div>
        <h2>Sobre</h2>
      </div>

      <div className={styles.container__info}>
        <div className={styles.image}>
          <Image
            width='934'
            height='624'
            src='/pessoa-programando.jpg'
            alt='Pessoa programando'
          />
        </div>

        <section>
          <p>
            Somos uma empresa de tecnologia especializada na área de
            desenvolvimento de aplicativos e sites ( web development ) com o
            objetivo de inovar e ampliar, cada vez mais, o mundo da tecnologia,
            levando todos os projetos dos clientes do papel à tela, satisfazendo
            a demanda, com foco na qualidade do produto e satisfação do cliente.
          </p>
          <p>
            Nossa missão é trazer à realidade do dia a dia da tecnologia da
            informação, os valores que trazemos consigo, através de boas
            práticas, que são: integridade, inovação, qualidade e diversidade.
          </p>
        </section>
      </div>
    </section>
  )
}
