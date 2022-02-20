import { Portfolio, Slogan, Sobre, Contato } from '..'

export function Main({ projetos }) {
  return (
    <main>
      <Slogan />
      <Sobre />
      <Portfolio projetos={projetos} />
      <Contato />
    </main>
  )
}
