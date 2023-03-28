import "./style.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header__wrapper">
        <h1 className="header__title">
          <strong>
            Hi, my name is <em>Vitaliy</em>
          </strong>
          <br />a Full Stack developer
        </h1>
        <div className="header__text">
          <p>with passion for learning and creating.</p>
        </div>
        <a href="https://github.com/zpvrvnormxc17" className="btn">
          View Git
        </a>
      </div>
    </header>
  );
};

export default Header;
