import Nav from "../components/nav";
import Cards from "../components/cards";

export default function Personagens() {
  return (
    <div className="container">
      <div className="texto-personagens">
        <Nav />
        <h1>Personagens</h1>
        <p className="p-personagens">
          A série "The Vampire Diaries", criada por Kevin Williamson e Julie
          Plec e baseada nos livros de L.J. Smith, foi exibida de 2009 a 2017 e
          se tornou um dos maiores sucessos da emissora, popularizando o gênero
          de vampiros na TV com uma abordagem moderna e dinâmica.
        </p>
        <Cards />
      </div>
    </div>
  );
}
