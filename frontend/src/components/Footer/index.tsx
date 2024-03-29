const Footer = () => {
  return (
    <div>
      <footer className="footer mt-auto py-3 bg-dark">
        <div className="container">
          <p className="text-light">
            Aplicação desenvolvida por{" "}
            <a
              href="https://github.com/oamaraldev"
              target="_blank"
              rel="noreferrer"
            >
              Antonio Amaral
            </a>
          </p>
          <p className="text-light">
            <small>
              <strong>Semana Spring React 4</strong>
              <br />
              Evento promovido pela escola DevSuperior:{" "}
              <a
                href="https://instagram.com/devsuperior.ig"
                target="_blank"
                rel="noreferrer"
              >
                @devsuperior.ig
              </a>
            </small>
          </p>
        </div>
      </footer>
    </div>
  );
};
export default Footer;
