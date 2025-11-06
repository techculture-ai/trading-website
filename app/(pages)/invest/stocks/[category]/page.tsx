'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { FaChevronRight, FaArrowUp, FaArrowDown, FaFilter, FaSortUp, FaSortDown, FaChartLine, FaStar, FaSearch, FaRocket } from 'react-icons/fa';

interface Stock {
  id: string;
  name: string;
  symbol: string;
  price: number;
  change: number;
  changePercent: number;
  marketCap: number;
  pe: number;
  pb: number;
  roe: number;
  roce: number;
  volume: string;
  weekHigh52: number;
  weekLow52: number;
}

// Sample stock data
const sampleStocks: Stock[] = [
  {
    id: '1',
    name: 'Brace Port Logistics Ltd',
    symbol: 'BRACEPORT',
    price: 373.00,
    change: 5.20,
    changePercent: 1.41,
    marketCap: 825,
    pe: 12.03,
    pb: 2.09,
    roe: 17.35,
    roce: 23.86,
    volume: '2.5M',
    weekHigh52: 425.50,
    weekLow52: 310.25,
  },
  {
    id: '2',
    name: 'Delivery Limited',
    symbol: 'DELHIVERY',
    price: 480.80,
    change: -8.40,
    changePercent: -1.72,
    marketCap: 35588,
    pe: 178.95,
    pb: 3.77,
    roe: 1.72,
    roce: 2.61,
    volume: '5.8M',
    weekHigh52: 520.00,
    weekLow52: 425.30,
  },
  {
    id: '3',
    name: 'Future Supply Chain Solutions',
    symbol: 'FSCSL',
    price: 294.50,
    change: 12.30,
    changePercent: 4.36,
    marketCap: 917,
    pe: 24.5,
    pb: 1.85,
    roe: 18.4,
    roce: 13.18,
    volume: '1.2M',
    weekHigh52: 315.00,
    weekLow52: 245.80,
  },
  {
    id: '4',
    name: 'Blue Dart Express Ltd',
    symbol: 'BLUEDART',
    price: 6825.50,
    change: 85.20,
    changePercent: 1.26,
    marketCap: 16254,
    pe: 42.8,
    pb: 8.45,
    roe: 22.5,
    roce: 28.4,
    volume: '0.8M',
    weekHigh52: 7200.00,
    weekLow52: 5850.00,
  },
  {
    id: '5',
    name: 'VRL Logistics Ltd',
    symbol: 'VRL',
    price: 548.30,
    change: -3.50,
    changePercent: -0.63,
    marketCap: 4956,
    pe: 18.6,
    pb: 2.1,
    roe: 14.2,
    roce: 16.8,
    volume: '1.5M',
    weekHigh52: 620.00,
    weekLow52: 485.50,
  },
  // Generate more sample data
  ...Array.from({ length: 40 }, (_, i) => ({
    id: `${i + 6}`,
    name: `Stock Company ${i + 6}`,
    symbol: `STOCK${i + 6}`,
    price: 548.30 + (i * 10),
    change: -3.50 + (i * 0.5),
    changePercent: -0.63 + (i * 0.1),
    marketCap: 4956 + (i * 100),
    pe: 18.6 + (i * 0.5),
    pb: 2.1 + (i * 0.1),
    roe: 14.2 + (i * 0.3),
    roce: 16.8 + (i * 0.2),
    volume: '1.5M',
    weekHigh52: 620.00 + (i * 5),
    weekLow52: 485.50 + (i * 3),
  })),
];

const ITEMS_PER_PAGE = 10;

export default function CategoryPage({ params }: any) {
  const [sortColumn, setSortColumn] = useState<string>('name');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');
  const [viewMode, setViewMode] = useState<'table' | 'cards'>('table');
  const [displayCount, setDisplayCount] = useState(ITEMS_PER_PAGE);
  
  // Individual search states for each column
  const [searchFilters, setSearchFilters] = useState({
    company: '',
    price: '',
    change: '',
    marketCap: '',
    pe: '',
    pb: '',
    roe: '',
    volume: '',
  });
  
  const { category }: { category: string } = React.use(params);

  const categoryNames: { [key: string]: string } = {
    'logistics': 'Logistics',
    'banking-finance': 'Banking and Finance',
    'it': 'Information Technology',
    'pharma': 'Pharmaceuticals',
  };

  const categoryName = categoryNames[category] || 'Stocks';

  const handleSort = (column: string) => {
    if (sortColumn === column) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortColumn(column);
      setSortDirection('asc');
    }
  };

  const handleSearchChange = (field: string, value: string) => {
    setSearchFilters(prev => ({
      ...prev,
      [field]: value
    }));
    setDisplayCount(ITEMS_PER_PAGE); // Reset to first page when searching
  };

  const clearAllFilters = () => {
    setSearchFilters({
      company: '',
      price: '',
      change: '',
      marketCap: '',
      pe: '',
      pb: '',
      roe: '',
      volume: '',
    });
    setDisplayCount(ITEMS_PER_PAGE);
  };

  // Filter stocks based on all search filters
  const filteredStocks = useMemo(() => {
    return sampleStocks.filter(stock => {
      const matchesCompany = stock.name.toLowerCase().includes(searchFilters.company.toLowerCase()) ||
                            stock.symbol.toLowerCase().includes(searchFilters.company.toLowerCase());
      const matchesPrice = searchFilters.price === '' || 
                          stock.price.toString().includes(searchFilters.price);
      const matchesChange = searchFilters.change === '' || 
                           stock.changePercent.toString().includes(searchFilters.change);
      const matchesMarketCap = searchFilters.marketCap === '' || 
                              stock.marketCap.toString().includes(searchFilters.marketCap);
      const matchesPE = searchFilters.pe === '' || 
                       stock.pe.toString().includes(searchFilters.pe);
      const matchesPB = searchFilters.pb === '' || 
                       stock.pb.toString().includes(searchFilters.pb);
      const matchesROE = searchFilters.roe === '' || 
                        stock.roe.toString().includes(searchFilters.roe);
      const matchesVolume = searchFilters.volume === '' || 
                           stock.volume.toLowerCase().includes(searchFilters.volume.toLowerCase());

      return matchesCompany && matchesPrice && matchesChange && matchesMarketCap && 
             matchesPE && matchesPB && matchesROE && matchesVolume;
    });
  }, [searchFilters]);

  // Get stocks to display based on displayCount
  const displayedStocks = useMemo(() => {
    return filteredStocks.slice(0, displayCount);
  }, [filteredStocks, displayCount]);

  const hasMore = displayCount < filteredStocks.length;
  const hasActiveFilters = Object.values(searchFilters).some(value => value !== '');

  const handleLoadMore = () => {
    setDisplayCount(prev => Math.min(prev + ITEMS_PER_PAGE, filteredStocks.length));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      {/* <section className="bg-gradient-to-br from-[#0A2745] via-[#0F2744] to-[#0A1929] pb-12 pt-32">
        <div className="max-w-8xl mx-auto px-5 md:px-10 lg:px-24">
          
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex-1">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-[#EF9309] p-3 rounded-xl">
                  <FaChartLine className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h1 className="text-4xl lg:text-5xl font-bold text-white mb-2">
                    {categoryName} Sector Stocks
                  </h1>
                  <p className="text-[#8E8E8E] text-sm">
                    {filteredStocks.length} stocks available
                  </p>
                </div>
              </div>
              <p className="text-[#DADADA] text-base leading-relaxed max-w-4xl">
                Logistics sector stocks include companies involved in the
                planning, implementation, and control of the movement and
                storage of goods, services, and information. This sector
                encompasses shipping, warehousing, supply chain management, and
                transportation services.
              </p>
            </div>
          </div>
        </div>
      </section> */}
      <section className="relative bg-gradient-to-br from-[#0A2745] via-[#0F2744] to-[#0A1929] pt-32 pb-20 overflow-hidden min-h-[50vh]">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[url('/patterns/grid.svg')] bg-repeat"></div>
        </div>

        <div className="max-w-8xl mx-auto px-5 md:px-10 lg:px-24 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-[#EF9309]/10 backdrop-blur-sm border border-[#EF9309]/20 rounded-full px-4 py-2 mb-6">
              <FaRocket className="w-4 h-4 text-[#EF9309]" />
              <span className="text-sm font-semibold text-[#EF9309]">
                Stocks
              </span>
            </div>

            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              {categoryName}{" "}
              <span className="text-[#EF9309]">Sector Stocks</span>
            </h1>
            <p className="text-lg lg:text-xl text-[#DADADA] leading-relaxed">
              Logistics sector stocks include companies involved in the
              planning, implementation, and control of the movement and storage
              of goods, services, and information.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content - Fixed Layout */}
      <section className="py-8">
        <div className="max-w-8xl mx-auto px-5 md:px-10 lg:px-24">
          <div className="flex gap-6">
            {/* Filters Sidebar - Fixed Width */}
            <div className="w-1/5 flex-shrink-0">
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-5 sticky top-24">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-base font-bold text-gray-dark flex items-center gap-2">
                    <FaFilter className="w-3.5 h-3.5 text-[#EF9309]" />
                    Filters
                  </h3>
                  <button
                    onClick={clearAllFilters}
                    className="text-xs text-[#EF9309] hover:text-[#D68108] font-semibold"
                  >
                    Clear
                  </button>
                </div>

                {/* Active Filters Indicator */}
                {hasActiveFilters && (
                  <div className="mb-4 p-2 bg-[#EF9309]/10 rounded-lg">
                    <p className="text-xs text-[#EF9309] font-semibold">
                      {
                        Object.values(searchFilters).filter((v) => v !== "")
                          .length
                      }{" "}
                      filter(s) active
                    </p>
                  </div>
                )}

                {/* Price Range */}
                <div className="mb-5 pb-5 border-b border-gray-200">
                  <h4 className="text-xs font-bold text-gray-dark mb-3 uppercase tracking-wide">
                    Price Range
                  </h4>
                  <div className="space-y-2.5">
                    {[
                      "₹0 - ₹50",
                      "₹50 - ₹100",
                      "₹100 - ₹500",
                      "₹500 - ₹1000",
                      "Above ₹1000",
                    ].map((range) => (
                      <label
                        key={range}
                        className="flex items-center gap-2.5 cursor-pointer group"
                      >
                        <input
                          type="checkbox"
                          className="w-3.5 h-3.5 text-[#EF9309] border-gray-300 rounded focus:ring-[#EF9309] cursor-pointer"
                        />
                        <span className="text-xs text-[#666] group-hover:text-gray-dark transition-colors">
                          {range}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Market Cap */}
                <div className="mb-5 pb-5 border-b border-gray-200">
                  <h4 className="text-xs font-bold text-gray-dark mb-3 uppercase tracking-wide">
                    Market Cap
                  </h4>
                  <div className="space-y-2.5">
                    {[
                      { label: "Small Cap", desc: "< ₹5,000 Cr" },
                      { label: "Mid Cap", desc: "₹5K - ₹20K Cr" },
                      { label: "Large Cap", desc: "> ₹20,000 Cr" },
                    ].map((cap) => (
                      <label
                        key={cap.label}
                        className="flex items-start gap-2.5 cursor-pointer group"
                      >
                        <input
                          type="checkbox"
                          className="w-3.5 h-3.5 text-[#EF9309] border-gray-300 rounded focus:ring-[#EF9309] cursor-pointer mt-0.5"
                        />
                        <div className="flex-1">
                          <span className="text-xs text-[#666] group-hover:text-gray-dark transition-colors block">
                            {cap.label}
                          </span>
                          <span className="text-[10px] text-[#999]">
                            {cap.desc}
                          </span>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>

                {/* P/E Ratio */}
                <div>
                  <h4 className="text-xs font-bold text-gray-dark mb-3 uppercase tracking-wide">
                    P/E Ratio
                  </h4>
                  <div className="space-y-2.5">
                    {["< 15", "15 - 25", "25 - 40", "> 40"].map((pe) => (
                      <label
                        key={pe}
                        className="flex items-center gap-2.5 cursor-pointer group"
                      >
                        <input
                          type="checkbox"
                          className="w-3.5 h-3.5 text-[#EF9309] border-gray-300 rounded focus:ring-[#EF9309] cursor-pointer"
                        />
                        <span className="text-xs text-[#666] group-hover:text-gray-dark transition-colors">
                          {pe}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Stock Content - Flexible Width */}
            <div className="flex-1 min-w-0 w-4/5">
              {viewMode === "table" ? (
                /* Table View */
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        {/* Header Row */}
                        <tr className="bg-gradient-to-r from-[#0A2745] to-[#1A3A5C] text-white">
                          <th className="text-left py-4 px-4 font-semibold text-sm whitespace-nowrap">
                            <button
                              onClick={() => handleSort("name")}
                              className="flex items-center gap-2 hover:text-[#EF9309] transition-colors"
                            >
                              Company
                              {sortColumn === "name" &&
                                (sortDirection === "asc" ? (
                                  <FaSortUp />
                                ) : (
                                  <FaSortDown />
                                ))}
                            </button>
                          </th>
                          <th className="text-right py-4 px-4 font-semibold text-sm whitespace-nowrap">
                            <button
                              onClick={() => handleSort("price")}
                              className="flex items-center gap-2 ml-auto hover:text-[#EF9309] transition-colors"
                            >
                              Price
                              {sortColumn === "price" &&
                                (sortDirection === "asc" ? (
                                  <FaSortUp />
                                ) : (
                                  <FaSortDown />
                                ))}
                            </button>
                          </th>
                          <th className="text-right py-4 px-4 font-semibold text-sm whitespace-nowrap">
                            Change
                          </th>
                          <th className="text-right py-4 px-4 font-semibold text-sm whitespace-nowrap">
                            <button
                              onClick={() => handleSort("marketCap")}
                              className="flex items-center gap-2 ml-auto hover:text-[#EF9309] transition-colors"
                            >
                              Market Cap (Cr)
                              {sortColumn === "marketCap" &&
                                (sortDirection === "asc" ? (
                                  <FaSortUp />
                                ) : (
                                  <FaSortDown />
                                ))}
                            </button>
                          </th>
                          <th className="text-right py-4 px-4 font-semibold text-sm whitespace-nowrap">
                            P/E
                          </th>
                          <th className="text-right py-4 px-4 font-semibold text-sm whitespace-nowrap">
                            P/B
                          </th>
                          <th className="text-right py-4 px-4 font-semibold text-sm whitespace-nowrap">
                            ROE %
                          </th>
                          <th className="text-right py-4 px-4 font-semibold text-sm whitespace-nowrap">
                            Volume
                          </th>
                        </tr>

                        {/* Search Filter Row */}
                        <tr className="bg-gray-50 border-b-2 border-gray-200">
                          <th className="py-2 px-4">
                            <input
                              type="text"
                              placeholder="Search company..."
                              value={searchFilters.company}
                              onChange={(e) =>
                                handleSearchChange("company", e.target.value)
                              }
                              className="w-full px-2 py-1.5 text-xs border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-[#EF9309] focus:border-[#EF9309]"
                            />
                          </th>
                          <th className="py-2 px-4">
                            <input
                              type="text"
                              placeholder="Price..."
                              value={searchFilters.price}
                              onChange={(e) =>
                                handleSearchChange("price", e.target.value)
                              }
                              className="w-full px-2 py-1.5 text-xs border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-[#EF9309] focus:border-[#EF9309] text-right"
                            />
                          </th>
                          <th className="py-2 px-4">
                            <input
                              type="text"
                              placeholder="Change..."
                              value={searchFilters.change}
                              onChange={(e) =>
                                handleSearchChange("change", e.target.value)
                              }
                              className="w-full px-2 py-1.5 text-xs border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-[#EF9309] focus:border-[#EF9309] text-right"
                            />
                          </th>
                          <th className="py-2 px-4">
                            <input
                              type="text"
                              placeholder="Market Cap..."
                              value={searchFilters.marketCap}
                              onChange={(e) =>
                                handleSearchChange("marketCap", e.target.value)
                              }
                              className="w-full px-2 py-1.5 text-xs border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-[#EF9309] focus:border-[#EF9309] text-right"
                            />
                          </th>
                          <th className="py-2 px-4">
                            <input
                              type="text"
                              placeholder="P/E..."
                              value={searchFilters.pe}
                              onChange={(e) =>
                                handleSearchChange("pe", e.target.value)
                              }
                              className="w-full px-2 py-1.5 text-xs border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-[#EF9309] focus:border-[#EF9309] text-right"
                            />
                          </th>
                          <th className="py-2 px-4">
                            <input
                              type="text"
                              placeholder="P/B..."
                              value={searchFilters.pb}
                              onChange={(e) =>
                                handleSearchChange("pb", e.target.value)
                              }
                              className="w-full px-2 py-1.5 text-xs border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-[#EF9309] focus:border-[#EF9309] text-right"
                            />
                          </th>
                          <th className="py-2 px-4">
                            <input
                              type="text"
                              placeholder="ROE..."
                              value={searchFilters.roe}
                              onChange={(e) =>
                                handleSearchChange("roe", e.target.value)
                              }
                              className="w-full px-2 py-1.5 text-xs border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-[#EF9309] focus:border-[#EF9309] text-right"
                            />
                          </th>
                          <th className="py-2 px-4">
                            <input
                              type="text"
                              placeholder="Volume..."
                              value={searchFilters.volume}
                              onChange={(e) =>
                                handleSearchChange("volume", e.target.value)
                              }
                              className="w-full px-2 py-1.5 text-xs border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-[#EF9309] focus:border-[#EF9309] text-right"
                            />
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-100">
                        {displayedStocks.length > 0 ? (
                          displayedStocks.map((stock, index) => (
                            <tr
                              key={stock.id}
                              className="hover:bg-gray-50 transition-colors cursor-pointer group"
                            >
                              <td className="py-3.5 px-4">
                                <div className="flex items-center gap-3">
                                  <div className="w-8 h-8 bg-gradient-to-br from-[#0A2745] to-[#1A3A5C] rounded-lg flex items-center justify-center text-white font-bold text-xs flex-shrink-0">
                                    {index + 1}
                                  </div>
                                  <div className="min-w-0">
                                    <p className="text-gray-dark font-semibold text-sm group-hover:text-[#EF9309] transition-colors truncate">
                                      {stock.name}
                                    </p>
                                    <p className="text-[#666] text-xs">
                                      {stock.symbol}
                                    </p>
                                  </div>
                                </div>
                              </td>
                              <td className="py-3.5 px-4 text-right">
                                <p className="text-gray-dark font-bold text-sm">
                                  ₹
                                  {stock.price.toLocaleString("en-IN", {
                                    minimumFractionDigits: 2,
                                  })}
                                </p>
                              </td>
                              <td className="py-3.5 px-4 text-right">
                                <div className="flex flex-col items-end gap-0.5">
                                  <span
                                    className={`text-sm font-semibold ${
                                      stock.changePercent > 0
                                        ? "text-green-600"
                                        : "text-red-600"
                                    }`}
                                  >
                                    {stock.changePercent > 0 ? "+" : ""}
                                    {stock.changePercent.toFixed(2)}%
                                  </span>
                                  <span
                                    className={`text-xs ${
                                      stock.changePercent > 0
                                        ? "text-green-600"
                                        : "text-red-600"
                                    }`}
                                  >
                                    {stock.change > 0 ? "+" : ""}₹
                                    {stock.change.toFixed(2)}
                                  </span>
                                </div>
                              </td>
                              <td className="py-3.5 px-4 text-right text-gray-dark text-sm">
                                ₹{stock.marketCap.toLocaleString("en-IN")}
                              </td>
                              <td className="py-3.5 px-4 text-right text-gray-dark text-sm">
                                {stock.pe.toFixed(2)}
                              </td>
                              <td className="py-3.5 px-4 text-right text-gray-dark text-sm">
                                {stock.pb.toFixed(2)}
                              </td>
                              <td className="py-3.5 px-4 text-right">
                                <span
                                  className={`text-sm font-medium ${
                                    stock.roe > 15
                                      ? "text-green-600"
                                      : "text-gray-dark"
                                  }`}
                                >
                                  {stock.roe.toFixed(2)}%
                                </span>
                              </td>
                              <td className="py-3.5 px-4 text-right text-[#666] text-sm">
                                {stock.volume}
                              </td>
                            </tr>
                          ))
                        ) : (
                          <tr>
                            <td colSpan={8} className="py-12 text-center">
                              <div className="flex flex-col items-center gap-3">
                                <FaSearch className="w-12 h-12 text-gray-300" />
                                <p className="text-gray-dark font-semibold">
                                  No stocks found
                                </p>
                                <p className="text-sm text-[#666]">
                                  Try adjusting your search filters
                                </p>
                                <button
                                  onClick={clearAllFilters}
                                  className="mt-2 text-sm text-[#EF9309] hover:text-[#D68108] font-semibold"
                                >
                                  Clear all filters
                                </button>
                              </div>
                            </td>
                          </tr>
                        )}
                      </tbody>
                    </table>
                  </div>

                  {/* Load More Button */}
                  {hasMore && displayedStocks.length > 0 && (
                    <div className="p-6 bg-gray-50 border-t border-gray-200 flex justify-center">
                      <button
                        onClick={handleLoadMore}
                        className="px-8 py-3 bg-[#EF9309] hover:bg-[#D68108] text-white font-semibold rounded-lg transition-all duration-300 shadow-md hover:shadow-lg flex items-center gap-2"
                      >
                        Load More Stocks
                        <span className="text-sm font-normal">
                          (
                          {Math.min(
                            ITEMS_PER_PAGE,
                            filteredStocks.length - displayCount
                          )}{" "}
                          more)
                        </span>
                      </button>
                    </div>
                  )}

                  {/* Showing count */}
                  {displayedStocks.length > 0 && (
                    <div className="px-6 py-3 bg-white border-t border-gray-200 flex justify-between items-center text-sm text-[#666]">
                      <span>
                        Showing {displayedStocks.length} of{" "}
                        {filteredStocks.length} stocks
                      </span>
                      {!hasMore && filteredStocks.length > ITEMS_PER_PAGE && (
                        <button
                          onClick={() => setDisplayCount(ITEMS_PER_PAGE)}
                          className="text-[#EF9309] hover:text-[#D68108] font-medium"
                        >
                          Show Less
                        </button>
                      )}
                    </div>
                  )}
                </div>
              ) : (
                /* Card View - Similar implementation */
                <div>Card View Implementation</div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}