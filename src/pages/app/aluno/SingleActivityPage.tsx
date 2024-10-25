const SingleActivityPage = () => {
  // pegar o ID da rota
  const teste = window.location.pathname.split("/")[2];

  return (
    <div className="group h-screen p-5 grow dark:text-zinc-50">
      <h1>Atividade {teste}</h1>
        <h1>Teste</h1>
    </div>
  );
};

export default SingleActivityPage;
