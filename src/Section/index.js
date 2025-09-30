import "./style.css";

const Section = ({ title, body, extraHeaderContent }) => (
    <section className="section">
        <h2 className="section__title">{title}</h2>
        <header className="section__header section__header--with-buttons">          
            <div className="section__buttons">
                {extraHeaderContent}
            </div>
        </header>
        <div className="section__header-line" />
        <div className="section__body">
            {body}
        </div>
    </section>
);

export default Section;