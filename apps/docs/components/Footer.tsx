const Footer = () => {
  return (
    <footer className="bg-background py-4">
      <div className="flex items-center justify-center">
        <p className="text-muted text-sm">
          &copy; {new Date().getFullYear()} Principium Studios. MIT License.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
