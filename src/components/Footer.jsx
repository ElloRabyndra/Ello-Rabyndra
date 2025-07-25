const Footer = () => {
  return (
    <footer className="border-t p-3 flex flex-col items-center gap-3 justify-center w-full">
      <div className="flex items-center justify-center lg:justify-start gap-2 text-lg">
        <a
          href="https://www.linkedin.com/in/ello-rabyndra/"
          target="_blank"
          className="bx bxl-linkedin-square block border rounded-full p-2 hover:text-primary transition-colors duration-200"
        ></a>
        <a
          href="https://github.com/ElloRabyndra"
          target="_blank"
          className="bx bxl-github block border rounded-full p-2 hover:text-primary transition-colors duration-200"
        ></a>
        <a
          href="https://www.instagram.com/ellorabyndra/"
          target="_blank"
          className="bx bxl-instagram-alt block border rounded-full p-2 hover:text-primary transition-colors duration-200"
        ></a>
        <a
          href="mailto:ellorabyndra@gmail.com?subject=Halo%20Ello"
          className="bx bxl-gmail block border rounded-full p-2 hover:text-primary transition-colors duration-200"
        ></a>
      </div>
      <p className="text-sm sm:text-base">&copy; 2025 Ello Rabyndra</p>
    </footer>
  );
};

export default Footer;
