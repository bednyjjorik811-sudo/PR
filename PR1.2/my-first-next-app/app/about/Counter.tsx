"use client"; // Директива делает компонент клиентским

import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return <button onClick={() => setCount(count + 1)}>Кликов: {count}</button>;
}
