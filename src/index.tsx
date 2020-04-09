import * as React from "react";
import { render } from "react-dom";
import "./assets/main.css";

import "./styles.css";
import { Card } from "./components/Card";
import { ImageSearch } from "./components/ImageSearch";

function App() {
  const [images, setImages] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [term, setTerm] = React.useState("");

  React.useEffect(() => {
    fetch(
      `https://pixabay.com/api/?key=${process.env.REACT_APP_KEY}&q=${term}&image_type=photo&pretty=true`
    )
      .then(res => res.json())
      .then(data => {
        setImages(data.hits);
        setIsLoading(false);
      })
      .catch(err => console.log(err));
  }, [term]);

  return (
    <div className="container mx-auto">
      <ImageSearch searchText={setTerm} />
      {isLoading ? (
        <h1 className="text-6xl text-center mx-auto mt-32">Loading...</h1>
      ) : (
        <div className="grid grid-cols-3 gap-4">
          {images.map((image: any) => (
            <Card key={image.id} image={image} />
          ))}
        </div>
      )}
    </div>
  );
}

const rootElement = document.getElementById("root");

render(<App />, rootElement);
