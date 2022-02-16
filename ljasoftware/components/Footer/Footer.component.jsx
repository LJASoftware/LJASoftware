import styles from './Footer.style.module.css'

export function Footer() {
  return <footer className={styles.footer}>
    <div className={styles.top}>

      <a href='#'><img src='/logo.jpg'></img></a>
    
      <div>
        <p>Desenvolvido por <strong>LJA SOFTWARE</strong></p>
        <p>Copyrigth ©  2022 LJA SOFTWARE - Todos os direitos reservados</p>
      </div>

    </div>
    <div className={styles.bottom}>
      <a href='https://github.com/LJASoftware/LJASoftware.github.io' target="_blank"><img src='/github_logo.svg'></img></a>
    </div>
  </footer>
}
