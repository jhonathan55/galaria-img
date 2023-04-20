import './App.css';
import Header from './components/header/Header';
import Card from './components/card/Card';
import data from './data/cardData';
function App() {
  return (
    <>
      <Header title="Galeria de imagenes" />
      {data.map((card) => {
        return (
          <Card
            key={card.id}
            title={card.title}
            description={card.description}
            imageUrl={card.url}
          />
        )
      }
      )}
    </>
  );
}

export default App;
