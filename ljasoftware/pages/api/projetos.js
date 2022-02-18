import dados from './dados.json'

export default function getProjetos(_, res) {
  const response = { projetos: dados.projetos }
  res.status(200).json(response)
}
