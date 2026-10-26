"use client"; // Директива делает компонент клиентским

import { useState } from "react";

export default function ClientDemo() {
  const [count, setCount] = useState(0);
  console.log("Это сообщение появится в консоли браузера");

  return (
    <div>
      <h1>Client Component</h1>
      <button onClick={() => setCount(count + 1)}>Кликов: {count}</button>
    </div>
  );
}
