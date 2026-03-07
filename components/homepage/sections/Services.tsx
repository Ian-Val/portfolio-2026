import Card from "@/components/global/Card";

export default function Services() {
  return (
    <section
      id="services"
      className="
      
      px-20 pb-15 
      font-semibold 
      items-center justify-between
      text-neutral-900"
    >
      <h2 className="mb-6 text-2xl text-center">My Web Development Services</h2>
      <div className="grid grid-cols-4 gap-4">
        <Card>
          <p className="text-sm text-center">Mobile-Responsive Design</p>
        </Card>
        <Card>
          <p className="text-sm text-center">SEO & Performance Optimization</p>
        </Card>
        <Card>
          <p className="text-sm text-center">E-Commerce Integration</p>
        </Card>
        <Card>
          <p className="text-sm text-center">Custom Web App Development</p>
        </Card>
        <Card>
          <p className="text-sm text-center">Cloud Service Integration</p>
        </Card>
        <Card>
          <p className="text-sm text-center">Cybersecurity Compliance</p>
        </Card>
        <Card>
          <p className="text-sm text-center">Long-Term Technical Support</p>
        </Card>
        <Card>
          <p className="text-sm text-center">E-Commerce Integration</p>
        </Card>
      </div>
    </section>
  );
}
