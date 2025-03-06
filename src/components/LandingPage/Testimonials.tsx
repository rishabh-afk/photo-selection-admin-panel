import Image from "next/image";

const testimonials = [
  {
    name: "Shubham Mishra",
    role: "Wedding Photographer",
    image: "/assets/products/testimonialProfile.png",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    rating: 5,
  },
  {
    name: "Shubham Mishra",
    role: "Wedding Photographer",
    image: "/assets/products/testimonialProfile.png",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    rating: 5,
  },
  {
    name: "Shubham Mishra",
    role: "Wedding Photographer",
    image: "/assets/products/testimonialProfile.png",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-5xl font-bold">Testimonials</h2>
        <p className="text-gray-600 mt-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-lg text-center"
            >
              <div className="flex justify-center">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={80}
                  height={80}
                  className="rounded-full"
                />
              </div>
              <p className="text-gray-600 mt-4">{testimonial.text}</p>
              <div className="flex justify-center mt-4 text-yellow-500">
                {"★".repeat(testimonial.rating)}
              </div>
              <h3 className="mt-4 font-bold">{testimonial.name}</h3>
              <p className="text-green-600 font-medium">{testimonial.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
