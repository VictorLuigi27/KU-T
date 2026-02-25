export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-white p-8">
      
      <h1 className="text-5xl lg:text-7xl mb-16 text-center">
        CONTACT ME
      </h1>

      {/* Télé avec GIF */}
      <div className="relative w-75 lg:w-100 mb-16">
        <img
          src="/videos/screen.gif"
          alt="tv static"
          className="absolute top-[40%] left-[5%] w-[75%] h-[50%] object-cover"
        />
        <img
          src="/television.svg"
          alt="television"
          className="relative w-full"
        />
      </div>

      {/* Contact infos */}
      <div className="flex flex-col lg:flex-row items-center gap-8">
        {/* Email */}
        <a
          href="mailto:victordiaz.pro270@gmail.com"
          className="text-xl lg:text-2xl hover:text-gray-300 transition-colors"
        >
          victordiaz.pro270@gmail.com
        </a>

        {/* LinkedIn logo */}
        <a
          href="https://www.linkedin.com/in/victordiazpro/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:opacity-80 transition-opacity"
        >
          <img src="/L.svg" alt="LinkedIn" className="w-20 h-20 lg:w-25 lg:h-25" />
        </a>
      </div>

    </div>
  );
}