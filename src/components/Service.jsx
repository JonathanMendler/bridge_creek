import { BoltIcon } from "@heroicons/react/20/solid";

const services = [
  {
    name: "New Construction",
    description:
      "Building from the ground up? Let us get you set up with the latest in electrical panels, circuits, wiring, outlets, and switches. Site security lighting for builders also available.",
    href: "#",
    icon: BoltIcon,
  },
  {
    name: "Existing Structures (Remodels and Retrofits)",
    description:
      "Modernize and improve your electrical system with upgraded amperage capacity, GFCI/AFCI circuits, and energy efficient outlets. We are well-versed in interior and exterior remodels, redesigns of all shapes and sizes.",
    href: "#",
    icon: BoltIcon,
  },
  {
    name: "Other Electrical Services",
    description:
      "Improve efficiency, functionality, and aesthetic appeal with accent lighting, smart lighting, solar photovoltaic installation, or LED retrofit. Scheduled maintenance services are always an option!",
    href: "#",
    icon: BoltIcon,
  },
];

const Service = () => {
  return (
    <section id="service">
      <div className="bg-primary text-white py-24 sm:py-32 ">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 ">
          <div className="mx-auto max-w-2xl lg:text-center ">
            <p className="text-4xl font-bold mb-5 border-b-[5px] w-[200px] mx-auto border-indigo-600 pb-2">Services</p>
            <p className="mt-6 text-lg leading-8 text-white">
              As a licensed and insured electrician specializing in residential existing structures and new construction
              services, I bring expertise and dedication to every project. Whether you are redesigning your dream home
              or building it from the ground up, I am here to ensure your electrical systems are safe, efficient, and
              perfectly tailored to your needs.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              {services.map((service) => (
                <div key={service.name} className="flex flex-col">
                  <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-white">
                    <service.icon className="h-5 w-5 flex-none text-indigo-400" aria-hidden="true" />
                    {service.name}
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-white">
                    <p className="flex-auto">{service.description}</p>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
