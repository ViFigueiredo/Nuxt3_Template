interface Rotas {
  nome: string;
  path: string;
}

export default () => {
  const rotas: Rotas[] = [
    { nome: 'Sobre', path: '/' },
    { nome: 'Habilidades', path: '/#skills' },
    { nome: 'Projetos', path: '/#projects' },
  ];
  return rotas;
};
