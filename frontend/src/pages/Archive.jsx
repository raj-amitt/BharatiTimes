import { useState } from "react";
import { Document, Page } from "react-pdf";
import { pdfjs } from "react-pdf";
import HTMLFlipBook from "react-pageflip";

pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const Archive = () => {
  const [selectedPDF, setSelectedPDF] = useState(null);

  const newspaperVolumes = [
    { id: 1, title: "Volume 1 - Jan 2025", file: "../../Volume-1-Issue-67.pdf" },
    { id: 2, title: "Volume 2 - Feb 2025", file: "/pdfs/volume2.pdf" },
    { id: 3, title: "Volume 3 - Mar 2025", file: "/pdfs/volume3.pdf" },
  ];

  return (
    <div className="!p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center !mb-6">Newspaper Archives</h1>

      {/* Newspaper Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {newspaperVolumes.map((volume) => (
          <div
            key={volume.id}
            className="bg-white shadow-lg p-4 rounded-lg text-center cursor-pointer hover:shadow-xl transition"
            onClick={() => setSelectedPDF(volume.file)}
          >
            <h2 className="text-lg font-semibold">{volume.title}</h2>
          </div>
        ))}
      </div>

      {/* PDF Viewer */}
      {selectedPDF && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center !p-4">
          <div className="bg-white !p-6 rounded-lg shadow-lg max-w-3xl !w-full">
            <button
              className="absolute top-4 right-4 text-red-500 font-bold"
              onClick={() => setSelectedPDF(null)}
            >
              ✖ Close
            </button>

            {/* Flipbook */}
            <HTMLFlipBook width={500} height={700} className="border shadow-md">
              {[1, 2, 3, 4, 5].map((page) => (
                <div key={page} className="!p-4 bg-white">
                  <Document file={selectedPDF}>
                    <Page pageNumber={page} />
                  </Document>
                </div>
              ))}
            </HTMLFlipBook>
          </div>
        </div>
      )}
    </div>
  );
};

export default Archive;
