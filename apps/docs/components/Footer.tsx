const Footer = () => {
  return (
    <footer className="bg-background-50 border-border-300 border-t py-4">
      <div className="flex justify-center items-center">
        <p className="text-background-600 text-sm">
          &copy; {new Date().getFullYear()} Principium Studios. MIT License.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
