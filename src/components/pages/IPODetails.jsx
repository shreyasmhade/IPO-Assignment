import { useParams, Link } from "react-router-dom";
import { FaChevronRight, FaChevronLeft, FaCheck } from "react-icons/fa";
import ipoData from "../data/IPOData";

const IPODetails = () => {
  const { id } = useParams();
  const ipo = ipoData.find((item) => item.id === id);
  return (
    <div className="p-4 max-w-7xl mx-auto">
      <nav className="flex items-center gap-2 text-sm text-gray-600 mb-4">
        <Link to="/" className="hover:underline">Home</Link>
        <FaChevronRight size={12} />
        <span>Market watch</span>
      </nav>

      <div className="flex items-center justify-between gap-4 p-4 rounded-3xl shadow-sm mb-5">
        <div className="flex items-center gap-4">
          <Link to="/">
            <div className="hidden sm:flex items-center justify-center h-10 w-10 border-2 border-gray-300 rounded">
              <FaChevronLeft />
            </div>
          </Link>

          <img
            src={ipo.logo}
            alt={ipo.companyName}
            className="h-12 w-12 rounded-full object-contain shadow"
          />

          <div>
            <h3 className="text-2xl font-semibold text-indigo-950">
              {ipo.companyName}
            </h3>
            <p className="text-gray-600">{ipo.legalName}</p>
          </div>
        </div>

        <div className="hidden sm:flex items-center gap-5">
          <button className="cursor-pointer">
          <img
            src="https://www.svgviewer.dev/static-svgs/367397/document-download.svg"
            className="h-10 w-10"
          />
          </button>

          <button className="px-10 py-4 border rounded-xl bg-indigo-950 text-white font-bold hover:bg-white hover:text-indigo-950 hover:border-indigo-900">
            Apply now
          </button>
        </div>
      </div>

      <div className="border-2 border-gray-300 rounded-xl p-5 mb-5">
        <h3 className="font-bold text-indigo-950">IPO details</h3>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 rounded-xl p-5 mt-4">
          <div>
            <p className="text-sm text-gray-500">Issue size</p>
            <p className="font-semibold text-indigo-950">₹36,00 - ₹37,00 Cr.</p>
          </div>

          <div>
            <p className="text-sm text-gray-500">Price Range</p>
            <p className="font-semibold text-indigo-950">{ipo.priceRange}</p>
          </div>

          <div>
            <p className="text-sm text-gray-500">Minimum amount</p>
            <p className="font-semibold text-indigo-950">{ipo.minInvestment}</p>
          </div>

          <div>
            <p className="text-sm text-gray-500">Lot size</p>
            <p className="font-semibold text-indigo-950">
              {ipo.shares} shares/lots
            </p>
          </div>

          <div>
            <p className="text-sm text-gray-500">Issue dates</p>
            <p className="font-semibold text-indigo-950">
              {ipo.timeline[0].date} – {ipo.timeline[1].date}
            </p>
          </div>

          <div>
            <p className="text-sm text-gray-500">Listed On</p>
            <p className="font-semibold text-indigo-950">
              {ipo.timeline.at(-1).date}
            </p>
          </div>

          <div>
            <p className="text-sm text-gray-500">Listed Price</p>
            <p className="font-semibold text-indigo-950">{ipo.listedPrice}</p>
          </div>

          <div>
            <p className="text-sm text-gray-500">Listed gain</p>
            <p className="font-semibold text-indigo-950">
              {ipo.gain.split(" ")[0]} (
              <span className="text-orange-600">
                {ipo.gain.match(/\((.*)\)/)[1]}
              </span>
              )
            </p>
          </div>
        </div>
      </div>

      <div className="border-2 border-gray-300 rounded-xl p-5 mb-5">
        <h3 className="font-bold text-indigo-950 mb-6">IPO timeline</h3>

        <ul className="flex flex-col sm:hidden">
  {ipo.timeline.map((step, index) => {
    const isLast = index === ipo.timeline.length - 1;

    return (
      <li key={index} className="flex gap-4">
        <div className="flex flex-col items-center">
          <div
            className={`w-10 h-10 rounded-full flex items-center justify-center
              ${step.completed ? "bg-green-600" : "bg-gray-300"}`}
          >
            {step.completed && <FaCheck className="text-white" />}
          </div>

          {!isLast && (
            <div className="w-0.5 flex-1 bg-gray-300" />
          )}
        </div>

        <div className="pb-6">
          <p className="font-bold text-indigo-950">{step.label}</p>
          <p className="text-sm text-gray-500">{step.date}</p>
        </div>
      </li>
    );
  })}
</ul>


        <ul className="hidden sm:flex justify-between items-center relative">
          {ipo.timeline.map((step, index) => {
            const isLast = index === ipo.timeline.length - 1;

            return (
              <li key={index} className="flex-1 flex flex-col items-center relative">
                {!isLast && (
                  <div className="absolute top-5 left-1/2 w-full h-0.5 bg-gray-300" />
                )}

                <div className={`w-10 h-10 rounded-full flex items-center justify-center z-10 ${step.completed ? "bg-green-600" : "bg-gray-300"}`}>
                  {step.completed && <FaCheck className="text-white" />}
                </div>

                <p className="mt-3 font-bold text-indigo-950 text-center">{step.label}</p>
                <p className="text-sm text-gray-500 text-center">{step.date}</p>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="border-2 border-gray-300 rounded-xl p-5">
        <h3 className="font-bold text-indigo-950 mb-6">About the Company</h3>
        <p className="text-gray-500">{ipo.about}</p>
      </div>
    </div>
  );
};

export default IPODetails;
