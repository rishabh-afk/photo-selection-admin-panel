import React from "react";

const PerfectPlans = () => {
  return (
    <section className="py-16 bg-white text-center">
      <h2 className="text-3xl font-bold">Pick your Perfect Plan</h2>
      <p className="text-gray-600 max-w-2xl mx-auto mt-2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto ">
        {/* Plan Card */}
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`border rounded-lg p-6 shadow-md relative border-[#00897B]`}
          >
            {plan.mostPopular && (
              <span className="absolute top-[-18] left-1/2 transform -translate-x-1/2 bg-[#00897B] text-white px-6 py-3 text-lg rounded-lg">
                Most Popular
              </span>
            )}
            <h3 className="text-2xl font-semibold mt-10">{plan.name}</h3>
            <p className="text-gray-500 font-medium mt-3">Monthly Charge</p>
            <p className="text-6xl font-bold text-[#00897B] my-10 mb-10">
              {plan.price}
            </p>
            <hr className="my-4 border-gray-300" />
            <ul className="text-gray-600 space-y-8">
              {plan.features.map((feature, idx) => (
                <li
                  key={idx}
                  className={`${
                    feature.included
                      ? "text-black-400 font-bold"
                      : "text-gray-400"
                  }  mt-5
                  `}
                >
                  {feature.name}
                </li>
              ))}
            </ul>

            <hr className="my-4 border-gray-300" />

            <button
              className={`mt-6 w-8/12 py-4 px-8 rounded-3xl border font-bold ${
                plan.mostPopular
                  ? "bg-[#00897B] text-white"
                  : "border-[#00897B] text-[#00897B]"
              } hover:opacity-80`}
            >
              Buy Now
            </button>

            <p className="text-sm text-black-500 mt-10 underline cursor-pointer font-bold">
              Start Your 30 Day Free Trial
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

const plans = [
  {
    name: "Basic",
    price: "$14.99",
    mostPopular: false,
    features: [
      { name: "Free Setup", included: true },
      { name: "Bandwidth Limit 10 GB", included: true },
      { name: "20 User Connection", included: true },
      { name: "Analytics Report", included: false },
      { name: "Public API Access", included: false },
      { name: "Plugins Integration", included: false },
      { name: "Custom Content Management", included: false },
    ],
  },
  {
    name: "Basic",
    price: "$49.99",
    mostPopular: true,
    features: [
      { name: "Free Setup", included: true },
      { name: "Bandwidth Limit 10 GB", included: true },
      { name: "20 User Connection", included: true },
      { name: "Analytics Report", included: false },
      { name: "Public API Access", included: false },
      { name: "Plugins Integration", included: false },
      { name: "Custom Content Management", included: false },
    ],
  },
  {
    name: "Basic",
    price: "$14.99",
    mostPopular: false,
    features: [
      { name: "Free Setup", included: true },
      { name: "Bandwidth Limit 10 GB", included: true },
      { name: "20 User Connection", included: true },
      { name: "Analytics Report", included: false },
      { name: "Public API Access", included: false },
      { name: "Plugins Integration", included: false },
      { name: "Custom Content Management", included: false },
    ],
  },
];

export default PerfectPlans;
