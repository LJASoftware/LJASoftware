import dados from './dados.json'

export default function getProjetos(_, res) {
  const apenasDados = dados.projetos
  res.status(200).json(apenasDados)
}
