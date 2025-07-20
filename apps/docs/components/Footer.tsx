const Footer = () => {
  return (
    <footer className="bg-background-50 py-4">
      <div className="flex items-center justify-center">
        <p className="text-background-600 text-sm">
          &copy; {new Date().getFullYear()} Principium Studios. MIT License.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
