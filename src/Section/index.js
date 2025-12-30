import Header from "../Header";
import { Body, Wrapper } from "./styled";

const Section = ({ title, body, extraHeaderContent }) => (
    <Wrapper>
        <Header>
            <title>{title}</title>
            {extraHeaderContent}
        </Header>
        <Body>
            {body}
        </Body>
    </Wrapper>
);

export default Section;