import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
const socialMediaList = [
  {
    child: <FaFacebook className=" text-2xl " />,
    href: "https://www.facebook.com/vistademanabao/",
    title: "Facebook 'Vista de Manabao'",
  },
  {
    child: <FaInstagram className=" text-2xl " />,
    href: "https://instagram.com/vistademanabao?igshid=YmMyMTA2M2Y=",
    title: "Instagram 'Vista de Manabao'",
  },
  {
    child: <FaYoutube className=" text-2xl " />,
    href: "https://youtube.com/channel/UCRqamsJqTuwwkQ0tv7A1thg",
    title: "YouTube 'Vista de Manabao'",
  },
];
const SocialMediaBanner = () => {
  return (
    <div className="flex justify-center mt-8 space-x-24">
      {socialMediaList.map((sMedia, index) => {
        return (
          <a
            href={sMedia.href}
            target="_blank"
            rel="noopener noreferrer"
            key={index}
          >
            {sMedia.child}
          </a>
        );
      })}
    </div>
  );
};

export default SocialMediaBanner;
