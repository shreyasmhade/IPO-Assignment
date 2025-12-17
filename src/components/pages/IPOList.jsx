import { Link } from "react-router-dom";
import ipoData from "../data/IPOData";

const IPOList = () => {
  return (
    <div className="m-3 sm:m-5">
      <h2 className="mb-3 text-lg sm:text-xl font-bold">IPO List</h2>

      <div className="overflow-x-auto">
        <table className="min-w-[800px] w-full border border-gray-300 border-collapse text-center shadow-lg">
          <thead className="bg-gray-100 text-xs sm:text-sm text-gray-600">
            <tr>
              <th className="border-b border-gray-300 p-3 sm:p-4 font-normal text-left">
                Company / Issue date
              </th>
              <th className="border-b border-gray-300 p-3 sm:p-4 font-normal">
                Issue size
              </th>
              <th className="border-b border-gray-300 p-3 sm:p-4 font-normal">
                Price range
              </th>
              <th className="border-b border-gray-300 p-3 sm:p-4 font-normal">
                Min invest / qty
              </th>
            </tr>
          </thead>

          <tbody>
            {ipoData.map((ipo) => (
              <tr key={ipo.id} className="hover:bg-gray-50">
                <td className="border-b border-gray-100 px-3 sm:px-4 py-3 text-left">
                  <Link to={`/ipo/${ipo.id}`} className="block">
                    <div className="flex items-center gap-3">
                      <img
                        src={ipo.logo}
                        className="h-10 w-10 sm:h-12 sm:w-12 border border-gray-300 rounded-full object-contain"
                      />
                      <div>
                        <h3 className="font-bold text-sm sm:text-lg text-indigo-950">
                          {ipo.companyName}
                        </h3>
                        <p className="text-gray-600 text-xs sm:text-sm">
                          {ipo.issueDate}
                        </p>
                      </div>
                    </div>
                  </Link>
                </td>

                <td className="border-b border-gray-100 px-3 sm:px-4 py-3">
                  <h3 className="font-bold text-sm sm:text-lg text-indigo-950">
                    {ipo.issueSize}
                  </h3>
                </td>

                <td className="border-b border-gray-100 px-3 sm:px-4 py-3">
                  <h3 className="font-bold text-sm sm:text-lg text-indigo-950">
                    {ipo.priceRange}
                  </h3>
                </td>

                <td className="border-b border-gray-100 px-3 sm:px-4 py-3">
                  <h3 className="font-bold text-sm sm:text-lg text-indigo-950">
                    {ipo.minInvestment}
                  </h3>
                  <p className="text-gray-600 text-xs sm:text-sm">
                    {ipo.shares} shares / {ipo.lots} lots
                  </p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default IPOList;
