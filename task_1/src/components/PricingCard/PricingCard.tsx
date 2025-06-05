import React from "react";

export interface PricingCardProps {
  plan: string;
  price: string;
  features: string[];
  isFeatured?: boolean;
}

export const PricingCard: React.FC<PricingCardProps> = ({
  plan,
  price,
  features,
  isFeatured = false,
}) => {
  return (
    <div
      tabIndex={0}
      className={`
        flex flex-col items-center justify-between
        w-full max-w-xs mx-auto
        rounded-lg
        transition-shadow
        outline-none
        ${
          isFeatured
            ? "bg-slate-700 text-white shadow-2xl scale-105 z-10"
            : "bg-white text-slate-800 shadow-md"
        }
        focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
        hover:shadow-xl
        p-8
        sm:mx-2
        my-4
      `}
      aria-label={`${plan} plan`}
    >
      <div className="flex flex-col items-center">
        <span className="text-lg font-medium mb-2">{plan}</span>
        <span
          className={`text-4xl font-extrabold mb-6 ${
            isFeatured ? "text-white" : "text-slate-700"
          }`}
        >
          {price}
        </span>
        <ul className="mb-8 w-full">
          {features.map((feature, idx) => (
            <li
              key={idx}
              className={`text-center py-2 border-b last:border-b-0 ${
                isFeatured ? "border-slate-600" : "border-slate-200"
              } font-medium`}
            >
              {feature}
            </li>
          ))}
        </ul>
      </div>
      <button
        className={`
          w-full py-2 mt-2 rounded-md font-semibold transition
          ${
            isFeatured
              ? "bg-white text-slate-700 hover:bg-slate-100"
              : "bg-slate-700 text-white hover:bg-slate-800"
          }
          focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
        `}
      >
        SUBSCRIBE
      </button>
    </div>
  );
};
