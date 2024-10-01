import AnimatedList from "../components/Layout/AnimatedList";
import BodySection from "../components/Layout/BodySection";
import BodySectionC2A from "../components/Layout/BodySectionC2A";
import BodySectionWithCard from "../components/Layout/BodySectionWithCard";
import C2A from "../components/Layout/C2A";
import Card from "../components/Layout/Card";

export default function platform() {

  const platformList = [
    "Not charging property tax on shelters and properties used to serve our homeless.",
    "Collaborating closely with non-profit organizations to enhance the support services available to the homeless population.",
    "Facilitating employment opportunities for the homeless, fostering their integration as productive members of our community.",
    "Partnering with the provincial government to enhance housing and healthcare services tailored to the needs of the homeless.",
    "Streamlining shelter operations to prioritize emergency overflow situations, ensuring efficient utilization of resources.",
    "Aligning our efforts with the policies and initiatives of both federal and provincial authorities.",
    "Promoting greater understanding and empathy within the community towards homelessness, fostering a supportive environment for individuals seeking assistance and rehabilitation."
  ]

  return (
    <>
      <C2A header="Platform" button={{ title: "Schedule a Meeting", target:"_blank", href: "https://calendly.com/jacobcloutier/30min" }} buttonSecondary={{ title: "Give Your Feedback", target:"_blank" , href: "https://docs.google.com/forms/d/e/1FAIpQLScpOHV8b15clE_aoBj7Jo_BqqpUWUu49Uhgg27mJFD16yPQOw/viewform" }} >
        <p>I will be visiting door to door throughout 2024 to learn about your needs and desires for Marysville and Fredericton in general. This will help me to focus on what matters most to you. I intend to follow up in 2025 and 2026 with additional outreach and surveys to make sure I am on track and stay aligned with community needs.</p>
        <p>If elected, I will continue to listen and stay on course to support all of Ward 5 and Fredericton.</p>
      </C2A>
      <BodySection header={"Homelessness"}>
          <p dir="ltr">Currently, there are approximately <b>150</b> individuals experiencing homelessness in Fredericton. My approach to addressing this issue involves several key strategies:</p>
          <AnimatedList list={platformList}/>
      </BodySection>
      <BodySectionWithCard
        header="Responsible Budget and Investing in Growth"
        button={{
          title:"Read Fredericton Municiple Budget",
          href:"https://www.fredericton.ca/en/your-government/budget-finance",
          target:"_blank"
        }}
        card={
          <Card
            header={"Fredericton councillors vote for pay raise"}
            button={{ title: "Read More", href: "https://www.cbc.ca/news/canada/new-brunswick/fredericton-city-hall-remuneration-1.6310576#:~:text=City%20councillors%20in%20Fredericton%20voted,near%2023%20per%20cent%20raise.", target: "_blank" }}
            img={{
              src: "https://i.cbc.ca/1.3832351.1666669136!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_780/fredericton-city-hall.jpg",
              alt: "Fredericton councillors held regular meeting at city hall.",
              width: 720,
              height: 405,
            }}>
            <p>
              Councillors' earnings will go from $26,000 a year to $35,000, an increase of nearly 35 per cent...
            </p>
          </Card>
        }>
        <h3 className="mb-2 mt-6 text-xl tracking-tight font-bold text-black-500">Councillor Wage Control</h3>
        <p>
          The recent decision by Fredericton's councillors and mayor to approve a pay raise for themselves (34% increase) is concerning to me. I share Councilor Hicks' sentiment that this was not the appropriate time or manner to address such a matter. I believe there should be a structured system in place to regulate the wages of councilors and the mayor. In a gesture of goodwill, I am committed to addressing this issue and hopefully even reverse the decision until a more appropriate time or until a structured system is in place.
        </p>
        <h3 className="mb-2 mt-6 text-xl tracking-tight font-bold text-black-500">Investing in Growth</h3>
        <p>
          I advocate for directing additional spending towards growth initiatives aimed at enhancing the prosperity and wealth of the city. Funds generated from these successful endeavors should then be allocated to various projects, ensuring a continuous focus on growth in our budgetary allocations. This approach enables us to afford luxuries that may otherwise be beyond our reach compared to other cities. Additionally, there should be a mandate to set aside a portion of funds as a contingency reserve for unforeseeable emergencies.
        </p>
      </BodySectionWithCard>
      <BodySection header="">
        <h3 className="mb-2 mt-6 text-xl tracking-tight font-bold text-black-500">The Right Business Ecosystem</h3>
        <p>Fredericton needs a more diverse Ecosystem for businesses and workers to thrive and I plan to invest time in helping develop this area of opportunity for Fredericton. Ignite, Planet Hatch, ACOA  and ONB have done an amazing job so far but there are still areas of opportunity for us to do more and become better. This is going to come down to connecting with all kinds of professionals, listening to input, and taking the best advice that will align with our vision for a healthy ecosystem. I would like to see Ignite better align with the goals of ONB and have them help fill gaps that ONB has.</p>
        <h3 className="mb-2 mt-6 text-xl tracking-tight font-bold text-black-500">Workers Support</h3>
        <p>While I may not endorse all the outcomes associated with unions, I consider myself a supporter. My previous career involved actively participating in a union, including strikes and picketing alongside fellow members of CUPE. Even after leaving, I continue to demonstrate my support for those still affiliated with unions. My backing extends to hardworking individuals striving for fair wages, decent benefits, and better working conditions. I plan to ensure that city workers are treated fairly And get what they deserve as well as anyone within our City I can support on this objective.</p>
      </BodySection>
      <BodySectionWithCard header="Provincal Accountability" 
        card={
          <Card
            header="Transparency lacking in implementation of N.B. housing strategy, auditor general says"
            img={{src:"https://i.cbc.ca/1.6670033.1715794688!/cumulusImage/httpImage/image.jpg_gen/derivatives/16x9_780/new-housing-development-brampton.jpg",width:720, height: 405, alt:"Construction workers on scaffolding in front of new housing build"}}
            button={{title:"Read More", href:"https://www.cbc.ca/news/canada/new-brunswick/auditor-general-housing-new-brunswick-1.7223805", target:"_blank"}}
          >
            Paul Martin says completion timelines, specific costs missing from action items to create more housing
          </Card>}
      >
        <h3 className="mb-2 mt-6 text-xl tracking-tight font-bold text-black-500">Provincial Support</h3>
        <p>As May 2026 approaches I am preparing to run for Ward 5 city Council. Change is needed as our city has faced growing challenges in social programs such as welfare and housing, and we should not be left to shoulder this burden alone. As your councilor, I’ll work to make the province more accountable. We need better cooperation between city and provincial authorities to address these pressing issues. Together, we will advocate for a fairer distribution of resources and support for our community.</p>
        <h3 className="mb-2 mt-6 text-xl tracking-tight font-bold text-black-500">Roads & bridges</h3>
        <p>The ongoing problems with several bridges and roads in recent years have been a significant concern that requires urgent resolution. Many of these issues seem to stem from provincial jurisdiction over these bridges and roads. I believe it's time for Fredericton to negotiate with the province to gain control over these infrastructures, allowing us to ensure their proper maintenance and upkeep. </p>
        <h3 className="mb-2 mt-6 text-xl tracking-tight font-bold text-black-500">Provincial Respect</h3>
        <p>It may seem I do not have respect for our province and government officials within the province but I really do have the greatest respect for them and the hard choices they need to make but they need to be reminded of their duty to their cities.</p>
      </BodySectionWithCard>
      <BodySectionWithCard
        header="Infrastructure Improvement" 
        card={
          <Card
            header="Snow way, snow how? How Fredericton refuses to make winter sidewalks accessible"
            img={{src:"https://nbmediacoop.org/wp-content/uploads/2023/02/snow-removal-750x536.jpg",width:720, height: 405, alt:"A sidewalk in downtown Fredericton by the legislature. Photo: Kyra Wilson"}}
            button={{title:"Read More", href:"https://nbmediacoop.org/2023/02/23/commentary-snow-way-snow-how-how-fredericton-refuses-to-make-winter-sidewalks-accessible/", target:"_blank"}}
          >
            Winter snow removal is an issue every year and yet, somehow, the city of Fredericton relegates sidewalks to the back burner...
          </Card>}
        >
          <h3 className="mb-2 mt-6 text-xl tracking-tight font-bold text-black-500">Sidewalks</h3>
          <p>The City has struggled to prioritize addressing the glaring issue of our sidewalks during the winter months. These pathways are relied upon by some of our most vulnerable residents for travel, yet they often become dangerous and impassable. If voted councilor, I am committed to dedicating the necessary time and effort to tackle this issue head-on. I have already engaged with engineers who believe there are simple and cost-effective solutions available. They are prepared to draft these plans for as little as $1000. I am determined to raise the funds required to bring these plans to the city immediately, rather than delaying any further. It's imperative that we take action now to address this problem and ensure the safety and accessibility of our city for all residents.</p>
          <h3 className="mb-2 mt-6 text-xl tracking-tight font-bold text-black-500">Roads & Bridges</h3>
          <p>The ongoing problems with several bridges and roads in recent years have been a significant concern that requires urgent resolution. Many of these issues seem to stem from provincial jurisdiction over these bridges and roads. I believe it's time for Fredericton to negotiate with the province to gain control over these infrastructures, allowing us to ensure their proper maintenance and upkeep. </p>
      </BodySectionWithCard>
      <BodySectionWithCard
        header="Access to Information"
        button={{
          title:"Fredericton's Current Wifi Coverage",
          href:"http://gofred.ca/services/zone",
          target:"_blank"
        }}
        card={
          <Card
            header="Engage Fredericton is our City's new public engagement platform."
            img={{
              src:"https://s3.ca-central-1.amazonaws.com/ehq-production-canada/4a44efc1b94f361de0697b835828d251ec002f91/original/1597693254/logo_resize_pjeg.jpg_5722477ab184305bb243bcdd47e0fada?1597693254",
              alt:"Engage Fredericton",
              width:720,
              height:200,
            }}
            button={{
              title:"Read More",
              href:"https://engagefredericton.ca/",
              target:"_blank"
            }}
          >
            <p>Welcome! Engage Fredericton is our City's new public engagement platform. We want to hear what you have to say. Take a look at the projects below, and let your voice be heard!</p>
          </Card>
        }
      >
        <h3 className="mb-2 mt-6 text-xl tracking-tight font-bold text-black-500">Community Information Sharing</h3>
        <p>I believe there's room for improvement in how Fredericton educates its residents about city events and activities. Engage Fredericton is a valuable resource, but the city hasn't effectively encouraged citizen participation. People seek information conveniently, and unless we adapt to deliver it when, how, and where they prefer, our engagement efforts will fall short.</p>
        <h3 className="mb-2 mt-6 text-xl tracking-tight font-bold text-black-500">Wifi Access</h3>
        <p>As part of my commitment to enhancing connectivity and access to information across our community, I would seek to expand the Fredericton free Wi-Fi program to include Maryville. This initiative would bridge what I see as a gap with the current service, ensuring that residents in all parts of our city have equal access to online resources for education, business, and communication. By expanding free Wi-Fi to Maryville, we will support local businesses, increase access to essential services, and create more opportunities for residents to engage with their community and the broader world. This is a crucial step towards making Fredericton a more connected and inclusive place.</p>
      </BodySectionWithCard>
      <BodySectionC2A
        header="Community Concerns Survay"
        button={{
          title:"Have Your Voice Heard",
          href:"https://docs.google.com/forms/d/e/1FAIpQLScpOHV8b15clE_aoBj7Jo_BqqpUWUu49Uhgg27mJFD16yPQOw/viewform",
          target:"_blank"
        }}
      >
        <p>
        Your voice matters! Fill out this short survey to share your concerns and ideas for improving our community. Your feedback will help shape policies that reflect our residents' needs. Together, we can build a better future!
        </p>
      </BodySectionC2A>
    </>
  );
}