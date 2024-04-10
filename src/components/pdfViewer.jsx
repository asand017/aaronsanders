import React from "react";
import useFetchPortfolio from "../hooks/useFetchPortfolio";

const PDFViewer = () => {
    const {resume} = useFetchPortfolio();

    // TODO get pdf viewer working
  return (
    <div style={{ width: "100%", height: "800px" }}>
      <iframe
        src={resume}
        title="PDF Viewer"
        width="100%"
        height="100%"
      ></iframe>
    </div>
  );
};

export default PDFViewer;
