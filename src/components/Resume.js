import React from "react";
import { Document, Page } from "react-pdf";

import "react-pdf/dist/esm/Page/AnnotationLayer.css";

function Resume(resume) {
  return (
    <div>
      <Document file={resume}>
        <Page pageNumber={1} />
      </Document>
    </div>
  );
}

export default Resume;
