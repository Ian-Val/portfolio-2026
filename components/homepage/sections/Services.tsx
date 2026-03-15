import Card from "@/components/global/Card";
import Section from "@/components/global/Section";

export default function Services() {
  return (
    <Section id="services">
      <h2 className="mb-6 text-2xl text-center">My Web Development Services</h2>
      <div className="grid sm:grid-cols-4 grid-cols-2 gap-4">
        <Card outline={false} color="blue">
          <p className="text-sm text-center">Mobile-Responsive Design</p>
        </Card>
        <Card outline={true} color="blue">
          <p className="text-sm text-center">SEO & Performance Optimization</p>
        </Card>
        <Card outline={false} color="yellow">
          <p className="text-sm text-center">E-Commerce Integration</p>
        </Card>
        <Card outline={true} color="yellow">
          <p className="text-sm text-center">Custom Web App Development</p>
        </Card>
        <Card outline={true} color="yellow">
          <p className="text-sm text-center">Cloud Service Integration</p>
        </Card>
        <Card outline={false} color="blue">
          <p className="text-sm text-center">Cybersecurity Compliance</p>
        </Card>
        <Card outline={true} color="blue">
          <p className="text-sm text-center">Long-Term Technical Support</p>
        </Card>
        <Card outline={false} color="yellow">
          <p className="text-sm text-center">E-Commerce Integration</p>
        </Card>
      </div>
    </Section>
  );
}
