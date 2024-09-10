import React from "react";
import Alert from "../components/alert";

function AlertsPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold mb-4">Alerts</h1>

      <section>
        <h2 className="text-xl font-semibold mb-2">Alert Variations</h2>
        <div className="space-y-4">
          <Alert color="info">
            <b>Info!</b> This is an informational alert.
          </Alert>
          <Alert color="success">
            <b>Success!</b> Operation completed successfully.
          </Alert>
          <Alert color="warning">
            <b>Warning!</b> Be cautious about proceeding.
          </Alert>
          <Alert color="danger">
            <b>Error!</b> An unexpected error occurred.
          </Alert>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">Alert with Icons</h2>
        <div className="space-y-4">
          <Alert color="info" icon={<span>&#9888;</span>}>
            This alert has an info icon.
          </Alert>
          <Alert color="success" icon={<span>&#10004;</span>}>
            This alert has a success icon.
          </Alert>
          <Alert color="warning" icon={<span>&#10140;</span>}>
            This alert has a warning icon.
          </Alert>
          <Alert color="danger" icon={<span>&#10006;</span>}>
            This alert has a danger icon.
          </Alert>
        </div>
      </section>
    </div>
  );
}

export default AlertsPage;
