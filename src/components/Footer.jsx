const Footer = () => {
  const socials = [
    {
      href: "https://www.linkedin.com/in/ello-rabyndra/",
      icon: "bx bxl-linkedin-square",
      label: "LinkedIn",
    },
    {
      href: "https://github.com/ElloRabyndra",
      icon: "bx bxl-github",
      label: "GitHub",
    },
    {
      href: "https://www.instagram.com/ellorabyndra/",
      icon: "bx bxl-instagram-alt",
      label: "Instagram",
    },
    {
      href: "mailto:ellorabyndra@gmail.com?subject=Halo%20Ello",
      icon: "bx bxl-gmail",
      label: "Email",
    },
  ];

  return (
    <footer className="border-t border-border/50 p-4 flex flex-col items-center gap-3 justify-center w-full">
      {/* Gradient line */}
      <div className="w-32 h-px bg-gradient-to-r from-transparent via-border to-transparent mb-1" />

      <div className="flex items-center justify-center gap-3 text-lg">
        {socials.map(({ href, icon, label }) => (
          <a
            key={label}
            href={href}
            target={href.startsWith("mailto") ? undefined : "_blank"}
            aria-label={label}
            className={`${icon} flex items-center justify-center border border-border/60 rounded-full p-2 text-muted-foreground hover:text-primary hover:-translate-y-1 hover:border-primary/30 hover:shadow-[0_0_12px_oklch(0.7058_0_0_/_0.15)] transition-all duration-200 shadow-inner`}
          />
        ))}
      </div>

      <p className="text-xs text-muted-foreground tracking-wider">
        &copy; 2025 <span className="text-foreground font-medium">Ello Rabyndra</span>
      </p>
    </footer>
  );
};

export default Footer;