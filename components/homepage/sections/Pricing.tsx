import Card from "@/components/global/Card";

export default function Services() {
  return (
    <section
      id="pricing"
      className="
      max-w-280 mx-auto
      py-15
      px-10
      font-semibold 
      items-center justify-between
      text-neutral-900"
    >
      <h2 className="mb-6 text-2xl text-center">Pricing Plans</h2>
      <div className="grid sm:grid-cols-3 grid-cols-1 gap-4">
        <Card>
          <div className="flex sm:flex-col flex-row-reverse justify-between w-full">
            <p className="text-sm text-center">$2,500</p>
            <p className="text-sm text-center">Starter</p>
          </div>
          <ul className="text-sm font-normal flex flex-col gap-2 sm:w-auto w-full">
            <li>5 Custom Pages</li>
            <li>Mobile-Responsive Design</li>
            <li>Basic SEO</li>
            <li>Social Media Integration</li>
            <li>6 Month Support</li>
          </ul>
        </Card>
        <Card>
          <div className="flex sm:flex-col flex-row-reverse justify-between w-full">
            <p className="text-sm text-center">$15,500</p>
            <p className="text-sm text-center ">Professional</p>
          </div>
          <ul className="text-sm font-normal flex flex-col gap-2 sm:w-auto w-full">
            <li>15 Custom Pages</li>
            <li>Mobile-Responsive Design</li>
            <li>Advanced SEO & Performance</li>
            <li>E-Commerce Integrations</li>
            <li>1 Year Support</li>
          </ul>
        </Card>
        <Card>
          {/* Full-Stack Web Development
Custom Web Application
Cloud Service IntegrationCybersecurity Compliance
12 Month Support */}
          <div className="flex sm:flex-col flex-row-reverse justify-between w-full">
            <p className="text-sm text-center">$45,500+</p>
            <p className="text-sm text-center">Enterprise</p>
          </div>
          <ul className="text-sm font-normal flex flex-col gap-2 sm:w-auto w-full">
            <li>Full-Stack Web Development</li>
            <li>Custom Web Application</li>
            <li>Cloud Service Integration</li>
            <li>Cybersecurity Compliance</li>
            <li>2 Year Support</li>
          </ul>
        </Card>
      </div>
    </section>
  );
}
