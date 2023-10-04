import ServiceCard from "../components/ServiceCard";
import { services } from "../constants";

const Services = () => {
  return (
    <section className="max-container flex justify-center flex-wrap gap-9">
      {services.map((service) => {
        const { label } = service;
        return <ServiceCard key={label} {...service} />;
      })}
    </section>
  );
};
export default Services;