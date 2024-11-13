const ErrorBoundary = () => {
  return (
    <div className="App">
      <main
        className="main"
        style={{
          display: "flex",
          alignItems: "center",
          minHeight: "100vh",
          background: "#399ACA",
          color: "white",
        }}
      >
        <section className="home">
        <h1 className="title">Что-то пошло не так!</h1>
        <p style={{ marginBottom: "25px" }}>
            Страница не найдена или произошла ошибка сервера. Проверьте
            правильность введенного адреса страницы
        </p>
        </section>
      </main>
    </div>
  );
};

export default ErrorBoundary;
