const Header = ({
  theme,
  handleTheme,
  text,
  handleLanguage,
  auth,
  handleAuth,
}) => {
  return (
    <header className={theme}>
      <h2>{text.headerTitle}</h2>
      <h3>{text.headerSubtitle}</h3>
      <select name="lenguaje" onChange={handleLanguage}>
        <option>Idioma</option>
        <option value="es">ES</option>
        <option value="en">EN</option>
      </select>
      <input
        type="radio"
        name="theme"
        id="light"
        onClick={handleTheme}
        value="light"
      />
      <label htmlFor="light">{text.headerLight}</label>
      <input
        type="radio"
        name="theme"
        id="dark"
        onClick={handleTheme}
        value="dark"
      />
      <label htmlFor="dark">{text.headerDark}</label>
      <button onClick={handleAuth}>
        {auth ? text.buttonLogin : text.buttonLogout}
      </button>
    </header>
  );
};

export default Header;
