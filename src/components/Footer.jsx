const Footer = () => {
  return (
    <div className="footer bg-white shadow mt-20">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <p className="py-4">
          &copy; Copyright by <span className="font-bold">LensaKulitku</span>
        </p>
        <div className="social-footer flex items-center sm:gap-7 gap-2">
          <a
            href="https://github.com/Ardani-Bangkit/Bangkit-Capstone-Team-C242-PS557"
            target="_blank"
            class="hover:text-blue-700 transition duration-300"
          >
            <i className="ri-github-fill text-2xl"></i>
          </a>
          <i class="ri-instagram-line text-2xl"></i>
        </div>
      </div>
    </div>
  );
};

export default Footer;
