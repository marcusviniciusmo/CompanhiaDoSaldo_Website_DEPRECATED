import './styles.css';

function News() {
  return (
    <article id='newsContainer'>
      <header>
        <hgroup>
          <h3>Novidades!</h3>
          <h1>Não perca essas novidades!!</h1>
          <h2>por Marcus Vinícius</h2>
          <h3 className='alignRight'>Atualizado em 26/Julho/2022</h3>
          <h3>AQUI VAI UMA IMAGEM</h3>
        </hgroup>
      </header>
    </article>
  );
};

export default News;