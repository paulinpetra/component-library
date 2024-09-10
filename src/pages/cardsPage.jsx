import React from "react";
import Card from "../components/card";
import img from "../assets/man.jpg";
import woman from "../assets/woman.jpg";

function CardsPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold mb-4">Cards</h1>

      <section>
        <h2 className="text-xl font-semibold mb-2">Basic Cards</h2>
        <div className="flex space-x-4">
          <Card
            href="#"
            imgAlt="A man standing in front of a white brick wall"
            imgSrc={img}
          >
            <h2 className="text-xl font-bold mb-2">Man's Profile</h2>
            <p className="text-gray-700">This is a card about a man.</p>
          </Card>
          <Card
            href="#"
            imgAlt="A woman standing in front of a red brick wall"
            imgSrc={woman}
          >
            <h2 className="text-xl font-bold mb-2">Woman's Profile</h2>
            <p className="text-gray-700">This is a card about a woman.</p>
          </Card>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">
          Cards with Different Layouts
        </h2>
        <div className="flex space-x-4">
          <Card
            href="#"
            imgAlt="A man standing in front of a white brick wall"
            imgSrc={img}
            className="w-full md:w-1/2 lg:w-1/3"
          >
            <h2 className="text-xl font-bold mb-2">Man's Profile</h2>
            <p className="text-gray-700">This card has a responsive width.</p>
          </Card>
          <Card
            href="#"
            imgAlt="A woman standing in front of a red brick wall"
            imgSrc={woman}
            className="w-full md:w-1/2 lg:w-1/3"
          >
            <h2 className="text-xl font-bold mb-2">Woman's Profile</h2>
            <p className="text-gray-700">
              This card also has a responsive width.
            </p>
          </Card>
        </div>
      </section>
    </div>
  );
}

export default CardsPage;
