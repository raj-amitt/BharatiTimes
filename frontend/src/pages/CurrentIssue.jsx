import PdfCard from "../components/PdfCard";

const newspapers = [
  {
    id: 1,
    title: "Newspaper 1",
    date: "2025-02-07",
    pdfLink: "/Volume-1-Issue-63.pdf",
  }
];

const CurrentIssue = () => {
  return (
    <div className="flex gap-4 !px-6 !py-10 bg-white">
      <main className="flex flex-col w-full gap-8 md:gap-10">
        <div>
          <h2 className="text-xl font-medium inline tracking-widest">
            CURRENT ISSUE
          </h2>
        </div>

        <section className="flex flex-col gap-10 !px-30 sm:!px-50 md:!px-70 lg:!px-100">
          <div className="grid grid-cols-1 gap-8">
            {newspapers.map((paper) => (
              <PdfCard
                key={paper.id}
                title={paper.title}
                date={paper.date}
                pdfUrl={paper.pdfLink}
              />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default CurrentIssue;
