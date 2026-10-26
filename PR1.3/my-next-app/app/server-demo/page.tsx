// Server Component (по умолчанию) — нет директивы в начале файла
export default async function ServerDemo() {
  const time = new Date().toISOString();
  console.log("Это сообщение появится в терминале, а не в браузере");

  return (
    <div>
      <h1>Server Component</h1>
      <p>Время на сервере: {time}</p>
    </div>
  );
}
