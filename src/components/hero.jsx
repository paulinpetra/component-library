import React from "react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <main className="max-w-screen">
      <section className="bg-gradient-to-r from-custom-dark to-custom-green text-white p-40">
        <div className="container mx-auto flex flex-wrap items-center">
          <div className="w-full md:w-1/2">
            <h1 className="text-4xl font-bold mb-4">
              ReactBoost: Elevate Your UI Development
            </h1>
            <p className="text-lg mb-8">
              Supercharge your projects with our customizable, responsive React
              components and start building stunning interfaces effortlessly.
            </p>
          </div>
          <div className="w-full md:w-1/2 mt-8 md:mt-0">
            <div className="flex flex-wrap justify-center md:justify-end space-x-4">
              <Link
                to="/buttons"
                className="px-4 py-2 bg-white rounded hover:bg-gray-200 transition-colors duration-300 text-custom-dark font-semibold"
              >
                Buttons
              </Link>
              <Link
                to="/alerts"
                className="px-4 py-2 bg-white rounded hover:bg-gray-200 transition-colors duration-300 text-custom-dark font-semibold"
              >
                Alerts
              </Link>
              <Link
                to="/badges"
                className="px-4 py-2 bg-white rounded hover:bg-gray-200 transition-colors duration-300 text-custom-dark font-semibold"
              >
                Badges
              </Link>
              <Link
                to="/cards"
                className="px-4 py-2 bg-white rounded hover:bg-gray-200 transition-colors duration-300 text-custom-dark font-semibold"
              >
                Cards
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
