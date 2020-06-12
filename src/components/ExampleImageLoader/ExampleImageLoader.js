import React from 'react';

// An example image loading component that contains file loading logic
const ExampleImageLoaderComponent = () => {
  // Reads and returns the image file data
  const readFileUpload = inputFile => {
    const fileReader = new FileReader();

    return new Promise((resolve, reject) => {
      fileReader.readAsDataURL(inputFile);

      fileReader.onloadend = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = () => {
        fileReader.abort();
        reject(new DOMException('Problem parsing input file.'));
      };
    });
  };

  // Handles the file loading logic
  const uploadFile = async event => {
    event.persist();

    if (!event.target || !event.target.files) return;

    const fileList = event.target.files;

    try {
      [...fileList].forEach(async (file, i) => {
        const imageData = await readFileUpload(file);

        /**
         * Utitlize the image data by adding logic below.
         * This data string can be added to the <img src={imageData} />
         * to display the image.
         */
        console.log(`fileList[${i}] data`, imageData);
      });
    } catch (e) {
      console.warn(e);
    }
  };

  // Renders the input field for loading images
  return (
    <input
      type="file"
      name="image-loader"
      multiple
      accept=".jpg, .png, .jpeg|image/*"
      onChange={uploadFile}
    />
  );
};

export default ExampleImageLoaderComponent;
