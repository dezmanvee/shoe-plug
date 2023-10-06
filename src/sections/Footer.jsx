import { copyrightSign } from "../assets/icons";
import { footerLogo } from "../assets/images";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => {
  return (
    <footer className="max-container">
      <div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">
        <div className="flex flex-col items-start">
          <a href="/">
            <img src={footerLogo} width={150} height={46} />
          </a>
          <p className="mt-6 text-base leading-7 font-montserrat text-white-400 sm:max-w-sm">
            Get shoes ready for the new term at your nearest Shoeplug store.
            Find your perfect size in store. Get rewards.
          </p>
          <div className="flex items-center gap-5 mt-8">
            {socialMedia.map((icon) => {
              const { src, alt } = icon;
              return (
                <div
                  key={alt}
                  className="flex justify-center items-center w-12 h-12 bg-white rounded-full"
                >
                  <img src={src} alt={alt} />
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex-1 flex justify-between lg:gap-10 gap-20 flex-wrap">
          {footerLinks.map((grid) => {
            const { title, links } = grid;
            return (
              <div key={grid}>
                <h4 className="text-white font-montserrat text-2xl leading-normal font-medium mt-6">
                  {title}
                </h4>
                <ul>
                  {links.map((link) => {
                    return (
                      <li key={link.name} className="mt-3 text-white font-montserrat text-base leading-normal cursor-pointer hover:text-slate-gray">
                        <a href={link.link}>{link.name}</a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex justify-between text-white-400 mt-24 max-sm:flex-col max-sm:items-center">
        <div className="flex-1 flex justify-start items-center gap-2 font-montserrat cursor-pointer">
          <img src={copyrightSign} alt="copy right sign" width={20} height={20} className="rounded-full m-0" />
          <p>Copyright. All rights reserved.</p>
        </div>
        <p className="font-montserrat cursor-pointer">Terms & Conditions</p>
      </div>
    </footer>
  );
};
export default Footer;
