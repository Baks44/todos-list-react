import Container from "../../common/Container";
import Header from "../../common/Header";
import Section from "../../common/Section";

const About = () => (
  <Container>
    <Header title="O autorze" />

    <Section
      title="Cześć!"
      body={
        <>
          <p>Nazywam się: Bugs44</p>
          <p>
            Jestem na początku swojej drogi jako programista i codziennie uczę
            się czegoś nowego. Poza kodem - samochody, mocne brzmienia i rzeczy,
            które mają charakter. Nuda to nie moja bajka.
          </p>
        </>
      }
    />
  </Container>
);

export default About;
