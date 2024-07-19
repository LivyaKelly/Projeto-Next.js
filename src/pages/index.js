import Image from "next/image";
import Footer from "@/components/footer";
import Nav from "../components/nav";

export default function Home() {
  return (
    <main>
      <div className="container">
      <div className="texto-1">

        <Nav />
        <h1>The Vampires Diaries</h1>

        <div style={{display: 'flex'}}>
          <div className="textos">
            <p>
              The Vampire Diaries é uma série de televisão americana de drama
              sobrenatural, baseada na série de livros homônima escrita por L.J.
              Smith. Lançada em 2009 e concluída em 2017, a série se passa na cidade
              fictícia de Mystic Falls, uma pequena localidade permeada por seres
              sobrenaturais e histórias de fantasmas. A trama se centra em Elena
              Gilbert, uma adolescente que perde os pais em um acidente de carro e se
              vê envolvida em um complexo triângulo amoroso com dois irmãos vampiros,
              Stefan e Damon Salvatore. Enquanto Stefan busca a redenção por seu
              passado sangrento, Damon, inicialmente, segue um caminho de violência e
              manipulação, embora ambos compartilhem um profundo amor por Elena. <br/>

              <br/>Ao longo das oito temporadas, The Vampire Diaries explora temas de amor,
              perda, amizade e poder, à medida que os personagens principais enfrentam
              não apenas dilemas humanos, mas também ameaças sobrenaturais de
              vampiros, bruxas, lobisomens e outras entidades místicas. A série é
              conhecida por sua trama dinâmica, frequentes reviravoltas e um
              equilíbrio emocional que cativa a audiência, mergulhando-a em um mundo
              onde as linhas entre o bem e o mal são frequentemente borradas. A
              narrativa não apenas mantém os espectadores envolvidos com seus
              personagens carismáticos e desenvolvimento contínuo, mas também explora
              como as escolhas enfrentadas pelos personagens afetam suas vidas e as
              das pessoas ao redor deles, em um cenário onde o sobrenatural serve como
              um pano de fundo para histórias humanas universais.
              </p>
          </div>
          
          <div className="foto-principal">  
          <Image src="/images/capa.jpg" alt="The Vampires Diaries" width={450} height={550} />
          </div>

            </div>
        <Footer />
        </div>
    </div>
    </main>
  );
}
