import React from "react";
import Badge from "../components/badge";
import { FaCheck, FaCheckDouble } from "react-icons/fa";

function BadgesPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold mb-4">Badges</h1>

      <section>
        <h2 className="text-xl font-semibold mb-2">Badge Sizes</h2>
        <div className="space-x-4">
          <Badge icon={FaCheckDouble} color="cyan" size="sm">
            Cyan Small Badge
          </Badge>
          <Badge icon={FaCheckDouble} color="fuchsia" size="md">
            Fuchsia Medium Badge
          </Badge>
          <Badge icon={FaCheckDouble} color="orange" size="lg">
            Orange Large Badge
          </Badge>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">Badge Variations</h2>
        <div className="space-x-4">
          <Badge icon={FaCheck} color="cyan" size="sm">
            Cyan Badge
          </Badge>
          <Badge icon={FaCheck} color="fuchsia" size="md">
            Fuchsia Badge
          </Badge>
          <Badge icon={FaCheck} color="orange" size="lg">
            Orange Badge
          </Badge>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">Badge with Text</h2>
        <div className="space-x-4">
          <Badge icon={FaCheckDouble} color="cyan" size="sm">
            New
          </Badge>
          <Badge icon={FaCheckDouble} color="fuchsia" size="md">
            Featured
          </Badge>
          <Badge icon={FaCheckDouble} color="orange" size="lg">
            Popular
          </Badge>
        </div>
      </section>
    </div>
  );
}

export default BadgesPage;
