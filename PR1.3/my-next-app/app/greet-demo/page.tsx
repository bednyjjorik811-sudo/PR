"use client";

import { useState } from "react";
import { greet } from "../actions";

export default function GreetDemo() {
  const [message, setMessage] = useState("");

  return (
    <div>
      <button onClick={async () => setMessage(await greet("Студент"))}>
        Поздороваться
      </button>
      <p>{message}</p>
    </div>
  );
}
