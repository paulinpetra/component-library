import Button from "./components/button";
import Alert from "./components/alert";
import Badge from "./components/badge";
import Card from "./components/card";
import img from "./assets/man.jpg";
import woman from "./assets/woman.jpg";

import { FaCheck, FaCheckDouble } from "react-icons/fa6";

function App() {
  return (
    <>
      <div className="ml-5">
        <h1 className="text-3xl text-gray-700 font-bold underline mb-5 mt-5">
          Button Component
        </h1>
        <Button color="green" size="small">
          Small Green Button
        </Button>
        <Button color="red" size="medium">
          Medium Red Button
        </Button>
        <Button color="blue" size="large">
          Large Blue Button
        </Button>
        <br></br>
        <br></br>
        <Button color="green" size="small" disabled="true">
          Green Disabled Button
        </Button>
        <Button color="red" size="medium" disabled="true">
          Red Disabled Button
        </Button>
        <Button color="blue" size="large" disabled="true">
          Blue Disabled Button
        </Button>
        <h1 className="text-3xl text-gray-700 font-bold underline mb-5 mt-5">
          Alert Component
        </h1>
        <Alert color="info">
          <b>Success!</b> Your account has been updated.
        </Alert>
        <Alert color="warning">
          <b> Warning! </b> There was an issue processing your request.
        </Alert>

        <h1 className="text-3xl text-gray-700 font-bold underline mb-5 mt-5">
          Badge Component
        </h1>
        <Badge icon={FaCheckDouble} color="cyan" size="sm">
          Cyan
        </Badge>
        <Badge icon={FaCheckDouble} color="fuchsia" size="sm">
          Fuchsia
        </Badge>
        <Badge icon={FaCheckDouble} color="orange" size="sm">
          Orange
        </Badge>
        <br></br>
        <br></br>
        <Badge icon={FaCheck} color="cyan" size="xs">
          Cyan
        </Badge>
        <Badge icon={FaCheck} color="fuchsia" size="xs">
          Fuchsia
        </Badge>
        <Badge icon={FaCheck} color="orange" size="xs">
          Orange
        </Badge>
        <h1 className="text-3xl text-gray-700 font-bold underline mb-5 mt-5">
          Card Component
        </h1>
        <Card
          href="http://example.com"
          imgAlt="A man standing in front of a white brick wall"
          imgSrc={img}
        >
          <h2 className="text-xl font-bold mb-2">Card Title</h2>
          <p className="text-gray-700">This is an example card.</p>
        </Card>
        <Card
          href="http://example.com"
          imgAlt="A woman standing in front of a red brick wall"
          imgSrc={woman}
        >
          <h2 className="text-xl font-bold mb-2">Card Title</h2>
          <p className="text-gray-700">This is another example card.</p>
        </Card>
      </div>
    </>
  );
}

export default App;
