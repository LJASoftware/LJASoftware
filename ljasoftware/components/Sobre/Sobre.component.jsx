import styles from './Sobre.style.module.css'
import Image from 'next/image'

export function Sobre() {
  return (
    <div className={styles.sobre}>

      <div className={styles.divSubtitulo}>
        <h2>Sobre</h2>
      </div>
      

      <div className={styles.divGeral}>
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit
            pharetra eget metus semper. Nulla lorem at sapien vestibulum, in
            gravida. Proin convallis consequat nulla quis sapien cursus
            facilisis consectetur. At mauris vitae enim, est magna facilisi.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit
            pharetra eget metus semper. Nulla lorem at sapien vestibulum, in
            gravida. Proin convallis consequat nulla quis sapien cursus
            facilisis consectetur. At mauris vitae enim, est magna facilisi.
          </p>
        </section>
      </div>
    </div>
  )
}
