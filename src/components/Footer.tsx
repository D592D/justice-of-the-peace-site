const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center">
        <p>&copy; {new Date().getFullYear()} Randy Sampson. All rights reserved.</p>
        <a href="https://wa.me/5926977944" target="_blank" rel="noopener noreferrer" className="text-amber-400 hover:text-amber-300">
          WhatsApp Contact
        </a>
      </div>
    </footer>
  );
};

export default Footer;
