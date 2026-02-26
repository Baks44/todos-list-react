import Container from "../../common/Container";
import Header from "../../common/Header";
import Section from "../../common/Section";
import { Paragraph, Name, Content } from "./styled";

const About = () => (
  <Container>
    <Header title="O autorze" />

    <Section
      title="Cześć!"
      body={
        <>
          <Content>
            <Paragraph>
              Nazywam się <Name>Bugs44</Name>.
            </Paragraph>

            <Paragraph>
              Jestem na początku swojej drogi jako programista i codziennie uczę
              się czegoś nowego.
            </Paragraph>

            <Paragraph>
              Poza kodem interesują mnie samochody, mocne brzmienia i rzeczy,
              które mają charakter. Nuda to nie moja bajka.
            </Paragraph>
          </Content>
        </>
      }
    />
  </Container>
);

export default About;
