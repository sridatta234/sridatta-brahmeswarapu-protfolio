const Footer = () => {
  return (
    <footer className="py-8 border-t border-border bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center text-muted-foreground">
          <p className="mb-2">
            © {new Date().getFullYear()} Sridatta Brahmeswarapu. All rights reserved.
          </p>
          <p className="text-sm">
            Built with passion for data and innovation
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
