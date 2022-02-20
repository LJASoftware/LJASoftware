import { useState } from 'react'
import styles from './Contato.style.module.css'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import axios from 'axios'

const MENSAGEM_SUCESSO = 'Mensagem enviada com sucesso!'
const MENSAGEM_ERRO = 'Por favor preencha todos os campos!'
const MENSAGEM_EMAIL_INVALIDO = 'Email inválido!'

export function Contato() {
  const [campos, setCampos] = useState({ nome: '', email: '', mensagem: '' })

  function mostrarToasterSucesso() {
    toast.success(MENSAGEM_SUCESSO)
  }

  function mostrarToasterAviso() {
    toast.warn(MENSAGEM_ERRO)
  }

  function mostrarToasterErro() {
    toast.error(MENSAGEM_EMAIL_INVALIDO)
  }

  function handleChange(event) {
    const { name, value } = event.target

    setCampos(values => ({ ...values, [name]: value }))
  }

  async function handleSubmit(event) {
    event.preventDefault()
    if (campos.nome === '' || campos.email === '' || campos.mensagem === '') {
      mostrarToasterAviso()
      return
    }
    const dados = new FormData()

    dados.append('nome', campos.nome)
    dados.append('email', campos.email)
    dados.append('mensagem', campos.mensagem)

    try {
      await axios.post('https://formspree.io/f/mvolavkg', dados, {
        headers: { 'Content-Type': 'multipart/form-data' },
      })
      mostrarToasterSucesso()

      setCampos({ nome: '', email: '', mensagem: '' })
    } catch (error) {
      console.log(error)
      mostrarToasterErro()
    }
  }

  return (
    <section className={styles.contato} id='contato'>
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
