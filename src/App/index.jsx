import React, { useState } from "react";
import { IMAGES } from "./../const";
import { ImageGrid } from "./../ImageGrid";

export function App() {
  const [images, setImages] = useState(IMAGES);
  console.log("images are");
  console.log(images);

  return <ImageGrid images={images} />;
}
