import BodySection from "../components/Layout/BodySection";
import BodySectionC2A from "../components/Layout/BodySectionC2A";
import C2A from "../components/Layout/C2A";

export default function platform() {

  return (
    <>
      <C2A header="About Ward 5: Marysville" button={{ title: "Schedule a Meeting", target:"_blank", href: "https://calendly.com/jacobcloutier/30min" }} buttonSecondary={{ title: "Give Your Feedback", target:"_blank" , href: "https://docs.google.com/forms/d/e/1FAIpQLScpOHV8b15clE_aoBj7Jo_BqqpUWUu49Uhgg27mJFD16yPQOw/viewform" }} >
        <p>As your candidate, I am committed to sharing important information and addressing the needs of our growing community. I want to hear from you! Please fill out the short survey or schedule a meeting using the buttons below, so we can work together to make Marysville a better place for everyone.</p>
      </C2A>
      <BodySection header={"Welcome to Ward 5 – Marysville"}>
          <p>Marysville is a historic and dynamic suburb of Fredericton, home to a growing community of over 5,957 residents as of 2023. Situated along the beautiful Nashwaak River and just a few kilometers northeast of downtown, Marysville combines its rich heritage with modern suburban life, making it an attractive place to live and work.</p>
      </BodySection>
      <BodySection header="A Growing and Diverse Community">
        <p>
        In recent years, Marysville has experienced a population growth of 20%, highlighting the area’s increasing appeal. However, this growth brings new challenges, particularly in housing and affordability. While many families are thriving, 361 households earn less than $39,999 annually and are considered below the poverty line. Affordable housing remains a priority, with legacy rents at $854 per month significantly lower than current market averages, which have risen to $1,275 as of 2024. This increase in housing costs underscores the need for more affordable living options in our community.
        </p>
      </BodySection>
      <BodySection header="Transportation and Connectivity">
        <p>Transportation is also a critical issue for Marysville residents, with many relying on public transit or personal vehicles to commute. Routes 43, 85, and 82 serve the area, helping connect Marysville with the rest of Fredericton. However, there is still room to improve public transit options and make commuting more convenient and affordable for everyone.</p>
      </BodySection>
      <BodySection header="Affordable Housing Initiatives">
        <p>One of my top priorities is addressing the growing need for affordable housing in Ward 5. With 645 renters in the area, many of whom are struggling to keep up with rising rental costs, it is essential to advocate for housing policies that increase affordability and protect vulnerable households. Ensuring that Marysville remains a welcoming community for all income levels is a key focus of my platform.</p>
      </BodySection>
      <BodySection header="Supporting Our Residents">
        <p>Marysville is a place where both homeowners and renters contribute to the community’s vibrancy. With 1,722 homeowners and 645 renters, I am committed to representing the needs of all residents. We must work together to tackle poverty and ensure that every household can maintain a basic standard of living. The average annual spending to meet basic needs in Marysville is a pressing concern for many families, and I will continue to push for policies that support low-income households.</p>
      </BodySection>
      <BodySection header="Looking to the Future">
        <p>As your representative, I am dedicated to ensuring that Marysville remains a connected and thriving community. Expanding the Fredericton free Wi-Fi program to include our area will improve access to online resources, supporting businesses, students, and families. By addressing transportation, housing affordability, and digital connectivity, we can build a stronger, more inclusive Ward 5 that meets the needs of all its residents.</p>
      </BodySection>
      <BodySectionC2A
        header="Community Concerns Survey"
        button={{
          title:"Have Your Voice Heard",
          href:"https://docs.google.com/forms/d/e/1FAIpQLScpOHV8b15clE_aoBj7Jo_BqqpUWUu49Uhgg27mJFD16yPQOw/viewform",
          target:"_blank"
        }}
      >
        <p>
        Your voice matters! Fill out this short survey to share your concerns and ideas for improving our community. Your feedback will help shape policies that reflect our residents&apos; needs. Together, we can build a better future!
        </p>
      </BodySectionC2A>
    </>
  );
}