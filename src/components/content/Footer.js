const Footer = ({ theme, text }) => {
  return (
    <div>
      <footer className={theme}>
        <h4>{text.footerTitle}</h4>
      </footer>
    </div>
  );
};

export default Footer;
