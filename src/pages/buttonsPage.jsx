import React from "react";
import Button from "../components/button";

function ButtonsPage() {
  return (
    <div className="space-y-8 p-0 m-0">
      <h1 className="text-3xl font-bold mb-4">Buttons</h1>

      <section>
        <h2 className="text-xl font-semibold mb-2">Button Sizes</h2>
        <div className="space-x-4">
          <Button color="green" size="small">
            Small Green Button
          </Button>
          <Button color="red" size="medium">
            Medium Red Button
          </Button>
          <Button color="blue" size="large">
            Large Blue Button
          </Button>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">Disabled Buttons</h2>
        <div className="space-x-4">
          <Button color="green" size="small" disabled>
            Green Disabled Button
          </Button>
          <Button color="red" size="medium" disabled>
            Red Disabled Button
          </Button>
          <Button color="blue" size="large" disabled>
            Blue Disabled Button
          </Button>
        </div>
      </section>
    </div>
  );
}

export default ButtonsPage;
