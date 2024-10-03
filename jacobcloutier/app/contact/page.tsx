import Image from "next/image";
import C2A from "../components/Layout/C2A";
import Facebook from "../public/assets/Icon/facebook.svg"
import LinkedIn from "../public/assets/Icon/icons8-linkedin.svg"

export default function platform() {

  return (
    <>
      <C2A header="Contact" button={{ title: "Schedule a Meeting",target:"_blank", href: "https://calendly.com/jacobcloutier/30min" }} buttonSecondary={{ title: "Give Your Feedback",target:"_blank", href: "https://docs.google.com/forms/d/e/1FAIpQLScpOHV8b15clE_aoBj7Jo_BqqpUWUu49Uhgg27mJFD16yPQOw/viewform" }} >
        <p>Please feel free to reach out to me via the information provided below. You can also schedule a meeting with me via the link below, or fill out a survey to communicate what you need from the councillor of ward 5.</p>
        <ul>
            <li className="my-2 hover:text-secondary-500 cursor-pointer transition-all"><a target="_blank" href="tel:1-506-260-3529">+1 (506) 260-3529</a></li>
            <li className="my-2 hover:text-secondary-500 cursor-pointer transition-all"><a target="_blank" href="mailto:jwkcloutier@hotmail.com">jwkcloutier@hotmail.com</a></li>
          </ul>
          <div className="flex w-full mt-2 mb-8 -mx-2">
            <div className="mx-2 bg-white-500 transition-all rounded-full items-center justify-center flex p-2 hover:shadow-md">
              <a target="_blank" href="https://www.facebook.com/jacob.cloutier.92">
                <Image
                  src={Facebook}
                  className="h-6 w-6"
                  alt="Facebook"
                />
              </a>
            </div>
            <div className="mx-2 bg-white-500 transition-all rounded-full items-center justify-center flex p-2 hover:shadow-md">
              <a target="_blank" href="https://www.linkedin.com/in/jacob-cloutier-503476267/">
                <Image
                  src={LinkedIn}
                  className="h-6 w-6"
                  alt="LinkedIn"
                />
              </a>
            </div>
          </div>
      </C2A>
    </>
  );
}