import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import ImagePopup from "./ImagePopup";

function App() {
  const [selectedItem, setSelectedItem] = React.useState({ visibility: false });

  function handleItemClick(itemData) {
    setSelectedItem({
      ...selectedItem,
      visibility: true,
      name: itemData.name,
      image: itemData.image,
    });
  }

  function closePopup() {
    setSelectedItem({
      ...selectedItem,
      visibility: false,
    });
  }

  return (
    <div className="page">
      <Header />
      <Main onItemClick={handleItemClick}>
        <ImagePopup item={selectedItem} onClose={closePopup} />
      </Main>
      <Footer />
    </div>
  );
}

export default App;
