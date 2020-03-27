import React, { useState, useEffect } from "react";
import { IMAGES } from "./../const";
import { ImageGrid } from "./../ImageGrid";
import { ImageDetail } from "./../ImageDetail";

export function App() {
  const [images, setImages] = useState(IMAGES);
  const [selectedId, setSelectedId] = useState(null);

  useEffect(() => {
    document.title = "Image Grid Application";
  }, []);

  function removeImage(removedImage) {
    unselectImage();
    setImages(images.filter(image => image.id !== removedImage.id));
  }
  function updateImage(updatedImage) {
    unselectImage();
    setImages(
      images.map(image => (image.id === updatedImage.id ? updatedImage : image))
    );
  }
  function unselectImage() {
    setSelectedId(null);
  }

  return (
    <React.Fragment>
      {selectedId === null ? null : (
        <ImageDetail
          id={selectedId}
          image={images.find(image => image.id === selectedId)}
          updateImage={updateImage}
          removeImage={removeImage}
          close={unselectImage}
        />
      )}

      <ImageGrid
        images={images}
        setSelectedId={selectedId === null ? setSelectedId : () => null}
      />
    </React.Fragment>
  );
}
