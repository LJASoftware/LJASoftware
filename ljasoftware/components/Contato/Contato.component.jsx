import { useState } from 'react'
import styles from './Contato.style.module.css'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const MENSAGEM_SUCESSO = 'Mensagem enviada com sucesso!'
const MENSAGEM_ERRO = 'Por favor preencha todos os campos!'

export function Contato() {
  const [campos, setCampos] = useState({ nome: '', email: '', mensagem: '' })

  function mostrarToasterSucesso() {
    toast.success(MENSAGEM_SUCESSO)
  }

  function mostrarToasterErro() {
    toast.error(MENSAGEM_ERRO)
  }

  function handleChange(event) {
    const { name, value } = event.target

    setCampos(values => ({ ...values, [name]: value }))
  }

  function handleSubmit(event) {
    event.preventDefault()
    if (campos.nome === '' || campos.email === '' || campos.mensagem === '') {
      mostrarToasterErro()
      return
    }

    mostrarToasterSucesso()

    setCampos({ nome: '', email: '', mensagem: '' })
  }

  return (
    <section className={styles.contato}>
      <ToastContainer
        position='top-right'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <h2>Contato</h2>

      <form onSubmit={handleSubmit}>
        <label>Nome</label>
        <input
          value={campos.nome}
          type='text'
          placeholder='Digite seu nome...'
          onChange={handleChange}
          name='nome'
        ></input>
        <label>E-mail</label>
        <input
          value={campos.email}
          type='email'
          placeholder='Digite seu e-mail...'
          onChange={handleChange}
          name='email'
        ></input>
        <label>Mensagem</label>
        <textarea
          value={campos.mensagem}
          rows='6'
          placeholder='Digite sua mensagem...'
          onChange={handleChange}
          name='mensagem'
        ></textarea>
        <button className={styles.botao} type='submit'>
          ENVIAR
        </button>
      </form>
    </section>
  )
}
