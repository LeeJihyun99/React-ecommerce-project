import "./categories.styles.scss";

const App = () => {
  const categories = [
    {
      id: 1,
      title: "Hats",
    },
    {
      id: 2,
      title: "Jackets",
    },
    {
      id: 3,
      title: "Sneakers",
    },
    {
      id: 4,
      title: "Womens",
    },
    {
      id: 5,
      title: "Mens",
    },
  ];
  return (
    <div className="categories-container">
      {categories.map(({ id, title }) => {
        return (
          <div key={id} className="category-container">
            <div className="category-body-container">
              <h2>{title}</h2>
              <p>Show now</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default App;
