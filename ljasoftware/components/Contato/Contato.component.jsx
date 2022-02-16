import styles from './Contato.style.module.css'

export function Contato() {
  return <div className={styles.contato}>

    <h2>Contato</h2>

      <form>
        <label>Nome</label>
        <input type="text" placeholder='Digite seu nome...'></input>
        <label>E-mail</label>
        <input type="email" placeholder='Digite seu e-mail...'></input>
        <label>Mensagem</label>
        <textarea placeholder='Digite sua mensagem...'></textarea>
        <button>ENVIAR</button>
      </form>

    </div>
}