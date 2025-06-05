import React, { useState, useEffect } from "react";

export default function Dashboard() {
  const [d, setD] = useState<number | null>(null);
  useEffect(() => {
    // Create a new web worker
    const worker = new Worker(new URL("./calcWorker.ts", import.meta.url));

    // Set up a listener for messages from the worker
    worker.onmessage = (event) => {
      setD(event.data);
    };

    // Send a message to the worker to start computation (optional for this worker, but good practice)
    worker.postMessage("start");

    // Clean up the worker when the component unmounts
    return () => {
      worker.terminate();
    };
  }, []);
  return <div>{d}</div>;
}
