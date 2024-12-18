import actcampprv1 from "../assets/act-cmp-pv-1.webp";
import actmbprv1 from "../assets/act-mb-pv.webp";

const callouts = [
  {
    name: "Mountain Bike",
    description: "",
    imageSrc: actmbprv1,
    imageAlt: "",
    href: "#",
  },
  {
    name: "Senderismo",
    description: "",
    imageSrc:
      "https://tailwindui.com/plus/img/ecommerce-images/home-page-02-edition-02.jpg",
    imageAlt: "",
    href: "#",
  },
  {
    name: "Camping",
    description: "",
    imageSrc: actcampprv1,
    imageAlt: "",
    href: "#",
  },
  {
    name: "Recolección de Café orgánico",
    description: "",
    imageSrc:
      "https://tailwindui.com/plus/img/ecommerce-images/home-page-02-edition-03.jpg",
    imageAlt: "",
    href: "#",
  },
];

const Actvities = () => {
  return (
    <div className="bg-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
          <h2 className="text-2xl font-bold text-gray-900">
            Actividades en la zona
          </h2>

          <div className="mt-6 space-y-12 lg:grid lg:grid-cols-2 lg:gap-x-6 gap-y-12 lg:space-y-0">
            {callouts.map((callout) => (
              <div key={callout.name} className="group relative">
                <img
                  alt={callout.imageAlt}
                  src={callout.imageSrc}
                  className="w-full rounded-lg bg-white object-cover group-hover:opacity-75 max-sm:h-80 sm:aspect-[2/1] lg:aspect-square"
                />
                <h3 className="mt-6 text-sm text-gray-500">
                  <a href={callout.href}>
                    <span className="absolute inset-0" />
                    {callout.name}
                  </a>
                </h3>
                <p className="text-base font-semibold text-gray-900">
                  {callout.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Actvities;
