class Footer {
  static callFooter() {
    const footerSection = document.createElement('footer');
    footerSection.innerHTML = `
        <h3>Copyright</h2>
        `;

    return footerSection;
  }
}

export default Footer;
