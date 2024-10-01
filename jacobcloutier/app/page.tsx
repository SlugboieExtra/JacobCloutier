import Hero from "./components/Hero";
import BodySectionWithCard from "./components/Layout/BodySectionWithCard";
import MarysvilleImage from "./public/assets/HistoricalMarysville.jpg";
import FamilyImage from "./public/assets/FamilyPhoto.jpg";
import AnimatedList from "./components/Layout/AnimatedList";
import Image from "next/image";
import BodySection from "./components/Layout/BodySection";
import BodySectionC2A from "./components/Layout/BodySectionC2A";



export default function Home() {
  return (
    <>
      <Hero />
      <BodySectionWithCard
        header="Commitment To Our Community"
        button={{
          title:"Learn More About My Platform",
          href:"/platform",
        }}
        card={
          <Image
            className=" w-full"
            src={MarysvilleImage}
            alt="Marysville Cotton Mill, largest of its day, 1945."
            width={600}
            height={455}
          />
        }>
          <p className="my-2 text-black-500">My name is Jacob Cloutier and I am running for the position of councilor for our beloved Marysville (Ward 5).
            <br/><br/>If elected, there are four key areas I plan to address:
          </p>
          <AnimatedList list={[
              "Homelessness & poverty.",
              "Infrastructure issues such as we are seeing with the Marysville Bridge. There have also been growing concerns with the quality of our sidewalks, especially during winter months.",
              "Development of a strong business and employee ecosystem for the Fredericton Region.",
              "Councilor wage control",
          ]}/>
      </BodySectionWithCard>
      <BodySection
        header="I'm Here to Represent You"
        button={{
          href:"https://docs.google.com/forms/d/e/1FAIpQLScpOHV8b15clE_aoBj7Jo_BqqpUWUu49Uhgg27mJFD16yPQOw/viewform",
          target:"_blank",
          title:"Have Your Voice Heard"
        }} 
      >
        <p>
            I will be visiting door to door throughout 2024 to learn about your needs and desires for Marysville and Fredericton in general. This will help me to focus on what matters most to you. I intend to follow up in 2025 and 2026 with additional outreach and surveys to make sure I am on track and stay aligned with community needs.
            <br/><br/>
            If elected, I will continue to listen and stay on course to support all of Ward 5 and Fredericton.
            <br/><br/>
            Between now and the election day  I will be meeting with as many local leaders and professionals as I can that effect or have insight about our city and talk about what we are doing right and what we could do better , my goal will be to meet with over 100 of these individuals at this stage I have met with 15. 
            <br/><br/>
            Please take a few minutes to fill out the survey below.
        </p>
      </BodySection>
      <BodySectionWithCard
        header="About Jacob Cloutier"
        card={
          <Image
          className=" w-full"
          src={FamilyImage}
          alt="Jacob Cloutier and his beautiful family posing in the autumn leaves."
          width={1080}
          height={721}
        />
        }
      >
        <p>Born and raised in Maryville, this is where my family calls home. My passion lies in spending quality time with family and in our community. Volunteering and living in different parts of Maryville I have been exposed to many diverse lifestyles and community challenges. Being driven by a thirst for knowledge and always seeking solutions, I aim to understand and address these challenges to improve our ward for my family and yours.</p>
      </BodySectionWithCard>
      <BodySectionC2A
        header="Community Concerns Survay"
        button={{
          title:"Have Your Voice Heard",
          href:"https://docs.google.com/forms/d/e/1FAIpQLScpOHV8b15clE_aoBj7Jo_BqqpUWUu49Uhgg27mJFD16yPQOw/viewform",
          target:"_blank"
        }}
      >
        <p>Your voice matters! Fill out this short survey to share your concerns and ideas for improving our community. Your feedback will help shape policies that reflect our residents&apos; needs. Together, we can build a better future!</p>
      </BodySectionC2A>
    </>
  );
}