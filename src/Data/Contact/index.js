import { BiMessageRoundedMinus } from "react-icons/bi";
import { MdOutlineEmail } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import BannerImage from "../../assets/contact/ContactUsBg.png";

export const BannerData = {
  image: BannerImage,
  title: "Contact Us",
  desc: "Our dedicated in house charter services are unique in the forwarding industry.",
};
export const GetInTouchData = {
  title: "Don't Hesitate Contact With Us And Solve Your Problem",
  desc: "Our dedicated in house charter services are unique in the forwarding industry. We have a reputation for taking on challenges others consider too difficult. With a 24/7, 365 global operation this tean thinks outside the box to match the right aircraft your load and nbsp iff it needs to move by air, CEVA charter team will have the answer",
};

export const ContactData = [
  {
    icon: (
      <BiMessageRoundedMinus
        style={{
          borderRadius: "25px 25px 25px 25px",
          backgroundColor: "#E8E8E8",
          fontSize: "3rem",
          padding: "10px",
        }}
      />
    ),
    title: "Tell with us",
    contact: [+971-4-3219202 , +971-55-2239077],
  },
  {
    icon: (
      <MdOutlineEmail
        style={{
          borderRadius: "25px 25px 25px 25px",
          backgroundColor: "#E8E8E8",
          fontSize: "3rem",
          padding: "10px",
        }}
      />
    ),
    title: "Email Drop Us ",
    contact: "info@logistics.com",
  },
  {
    icon: (
      <IoLocationOutline
        style={{
          borderRadius: "25px 25px 25px 25px",
          backgroundColor: "#E8E8E8",
          fontSize: "3rem",
          padding: "10px",
        }}
      />
    ),
    title: "Location ",
    contact: "Logistic LLC, Office No: 105 DNIC Building",
  },
];
