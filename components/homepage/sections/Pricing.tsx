import Card from "@/components/global/Card";
import Section from "@/components/global/Section";

export default function Services() {
  return (
    <Section id="pricing">
      <h2 className="mb-6 text-2xl text-center">Pricing</h2>
      <div className="grid sm:grid-cols-3 grid-cols-1 gap-4">
        <Card outline={true} color="blue">
          <div className="flex sm:flex-col flex-row-reverse justify-between w-full">
            <p className="text-sm text-center">$2,500</p>
            <p className="text-sm text-center">Starter</p>
          </div>
          <ul className="text-sm font-normal flex flex-col gap-2  w-full">
            <li>5 Custom Pages</li>
            <li>Mobile-Responsive Design</li>
            <li>Basic SEO</li>
            <li>Social Media Integration</li>
            <li>6 Month Support</li>
          </ul>
        </Card>
        <Card outline={false} color="yellow">
          <div className="flex sm:flex-col flex-row-reverse justify-between w-full">
            <p className="text-sm text-center">$15,500</p>
            <p className="text-sm text-center ">Professional</p>
          </div>
          <ul className="text-sm font-normal flex flex-col gap-2 w-full">
            <li>15 Custom Pages</li>
            <li>Mobile-Responsive Design</li>
            <li>Advanced SEO & Performance</li>
            <li>E-Commerce Integrations</li>
            <li>1 Year Support</li>
          </ul>
        </Card>
        <Card outline={true} color="yellow">
          {/* Full-Stack Web Development
Custom Web Application
Cloud Service IntegrationCybersecurity Compliance
12 Month Support */}
          <div className="flex sm:flex-col flex-row-reverse justify-between w-full">
            <p className="text-sm text-center">$45,500+</p>
            <p className="text-sm text-center">Enterprise</p>
          </div>
          <ul className="text-sm font-normal flex flex-col gap-2 w-full">
            <li>Full-Stack Web Development</li>
            <li>Custom Web Application</li>
            <li>Cloud Service Integration</li>
            <li>Cybersecurity Compliance</li>
            <li>2 Year Support</li>
          </ul>
        </Card>
      </div>
    </Section>
  );
}
