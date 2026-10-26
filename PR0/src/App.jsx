export const Greeting = () => {
  return (
    <section>
      <h1>Привет, мир!</h1>
      <p>Это мой первый React-компонент</p>
    </section>
  );
}

export const TaskList = () => {
  const tasks = [
    "Позавтракать",
    "Проверить почту",
    "Сделать зарядку",
    "Выпить стакан воды",
  ];

  return (
    <section>
      <h2>Список задач</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task}>{task}</li>
        ))}
      </ul>
    </section>
  );
}

export const ActionButton = () => {
  return (
    <section>
      <h2>Кнопка действия</h2>
      <button type="button">Нажми меня</button>
      <p>Кнопка пока не нажата</p>
    </section>
  );
}

export const ProfileCard = () => {
  return (
    <section>
      <h2>Анна Иванова</h2>
      <h3>Веб-разработчик</h3>
      <p>Люблю писать чистый код и изучать новые технологии</p>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>React</li>
      </ul>
    </section>
  );
}

export const ImageGallery = () => {
  const images = [
    {
      src: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=600&q=80",
    },
    {
      src: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=600&q=80",
    },
    {
      src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=600&q=80",
    },
  ];

  const galleryStyle = {
    display: "flex",
    flexWrap: "wrap",
    gap: "12px",
  };

  const imageStyle = {
    width: "240px",
    height: "160px",
    objectFit: "cover",
    borderRadius: "8px",
  };

  return (
    <section>
      <h2>Галерея</h2>
      <div style={galleryStyle}>
        {images.map((image) => (
          <img
            key={image.src}
            src={image.src}
            alt={image.alt}
            style={imageStyle}
          />
        ))}
      </div>
    </section>
  );
}

export const App = () => {
  const appStyle = {
    maxWidth: "900px",
    margin: "0 auto",
    padding: "32px 20px",
    fontFamily: "Arial, sans-serif",
    lineHeight: 1.5,
  };

  return (
    <main style={appStyle}>
      <Greeting />
      <TaskList />
      <ActionButton />
      <ProfileCard />
      <ImageGallery />
    </main>
  );
}

export default App
