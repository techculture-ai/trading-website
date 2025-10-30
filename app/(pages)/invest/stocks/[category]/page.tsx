'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { FaChevronRight, FaArrowUp, FaArrowDown, FaFilter, FaSortUp, FaSortDown, FaChartLine, FaStar } from 'react-icons/fa';

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
];

export default function CategoryPage({ params }: { params: { category: string } }) {
  const [sortColumn, setSortColumn] = useState<string>('name');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');
  const [viewMode, setViewMode] = useState<'table' | 'cards'>('table');

  const categoryNames: { [key: string]: string } = {
    'logistics': 'Logistics',
    'banking-finance': 'Banking and Finance',
    'it': 'Information Technology',
    'pharma': 'Pharmaceuticals',
  };

  const categoryName = categoryNames[params.category] || 'Stocks';

  const handleSort = (column: string) => {
    if (sortColumn === column) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortColumn(column);
      setSortDirection('asc');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#0A2745] via-[#0F2744] to-[#0A1929] pb-12 pt-32">
        <div className="max-w-8xl mx-auto px-5 md:px-10 lg:px-24">
          {/* Breadcrumb */}
          {/* <div className="flex items-center gap-2 text-sm text-[#8E8E8E] mb-8">
            <Link href="/" className="hover:text-[#EF9309] transition-colors">Home</Link>
            <FaChevronRight className="w-3 h-3" />
            <Link href="/invest/stocks" className="hover:text-[#EF9309] transition-colors">Stocks</Link>
            <FaChevronRight className="w-3 h-3" />
            <span className="text-white">{categoryName} Sector</span>
          </div> */}

          {/* Category Info */}
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
                    {sampleStocks.length} stocks available
                  </p>
                </div>
              </div>
              <p className="text-[#DADADA] text-base leading-relaxed max-w-4xl">
                Logistics sector stocks include companies involved in the planning, implementation, and control of the movement and storage of goods, services, and information. This sector encompasses shipping, warehousing, supply chain management, and transportation services.
              </p>
            </div>

            {/* View Toggle */}
            {/* <div className="flex items-center gap-2 bg-[#ffffff0d] backdrop-blur-sm rounded-lg p-1 border border-[#ffffff1a]">
              <button
                onClick={() => setViewMode('table')}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                  viewMode === 'table'
                    ? 'bg-[#EF9309] text-white'
                    : 'text-[#8E8E8E] hover:text-white'
                }`}
              >
                Table View
              </button>
              <button
                onClick={() => setViewMode('cards')}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                  viewMode === 'cards'
                    ? 'bg-[#EF9309] text-white'
                    : 'text-[#8E8E8E] hover:text-white'
                }`}
              >
                Card View
              </button>
            </div> */}
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
                  <button className="text-xs text-[#EF9309] hover:text-[#D68108] font-semibold">
                    Clear
                  </button>
                </div>

                {/* Price Range */}
                <div className="mb-5 pb-5 border-b border-gray-200">
                  <h4 className="text-xs font-bold text-gray-dark mb-3 uppercase tracking-wide">Price Range</h4>
                  <div className="space-y-2.5">
                    {['₹0 - ₹50', '₹50 - ₹100', '₹100 - ₹500', '₹500 - ₹1000', 'Above ₹1000'].map((range) => (
                      <label key={range} className="flex items-center gap-2.5 cursor-pointer group">
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
                  <h4 className="text-xs font-bold text-gray-dark mb-3 uppercase tracking-wide">Market Cap</h4>
                  <div className="space-y-2.5">
                    {[
                      { label: 'Small Cap', desc: '< ₹5,000 Cr' },
                      { label: 'Mid Cap', desc: '₹5K - ₹20K Cr' },
                      { label: 'Large Cap', desc: '> ₹20,000 Cr' },
                    ].map((cap) => (
                      <label key={cap.label} className="flex items-start gap-2.5 cursor-pointer group">
                        <input
                          type="checkbox"
                          className="w-3.5 h-3.5 text-[#EF9309] border-gray-300 rounded focus:ring-[#EF9309] cursor-pointer mt-0.5"
                        />
                        <div className="flex-1">
                          <span className="text-xs text-[#666] group-hover:text-gray-dark transition-colors block">
                            {cap.label}
                          </span>
                          <span className="text-[10px] text-[#999]">{cap.desc}</span>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>

                {/* P/E Ratio */}
                <div>
                  <h4 className="text-xs font-bold text-gray-dark mb-3 uppercase tracking-wide">P/E Ratio</h4>
                  <div className="space-y-2.5">
                    {['< 15', '15 - 25', '25 - 40', '> 40'].map((pe) => (
                      <label key={pe} className="flex items-center gap-2.5 cursor-pointer group">
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
              {viewMode === 'table' ? (
                /* Table View */
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="bg-gradient-to-r from-[#0A2745] to-[#1A3A5C] text-white">
                          <th className="text-left py-4 px-4 font-semibold text-sm whitespace-nowrap">
                            <button
                              onClick={() => handleSort('name')}
                              className="flex items-center gap-2 hover:text-[#EF9309] transition-colors"
                            >
                              Company
                              {sortColumn === 'name' && (
                                sortDirection === 'asc' ? <FaSortUp /> : <FaSortDown />
                              )}
                            </button>
                          </th>
                          <th className="text-right py-4 px-4 font-semibold text-sm whitespace-nowrap">
                            <button
                              onClick={() => handleSort('price')}
                              className="flex items-center gap-2 ml-auto hover:text-[#EF9309] transition-colors"
                            >
                              Price
                              {sortColumn === 'price' && (
                                sortDirection === 'asc' ? <FaSortUp /> : <FaSortDown />
                              )}
                            </button>
                          </th>
                          <th className="text-right py-4 px-4 font-semibold text-sm whitespace-nowrap">Change</th>
                          <th className="text-right py-4 px-4 font-semibold text-sm whitespace-nowrap">
                            <button
                              onClick={() => handleSort('marketCap')}
                              className="flex items-center gap-2 ml-auto hover:text-[#EF9309] transition-colors"
                            >
                              Market Cap (Cr)
                              {sortColumn === 'marketCap' && (
                                sortDirection === 'asc' ? <FaSortUp /> : <FaSortDown />
                              )}
                            </button>
                          </th>
                          <th className="text-right py-4 px-4 font-semibold text-sm whitespace-nowrap">P/E</th>
                          <th className="text-right py-4 px-4 font-semibold text-sm whitespace-nowrap">P/B</th>
                          <th className="text-right py-4 px-4 font-semibold text-sm whitespace-nowrap">ROE %</th>
                          <th className="text-right py-4 px-4 font-semibold text-sm whitespace-nowrap">Volume</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-100">
                        {sampleStocks.map((stock, index) => (
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
                                  <p className="text-[#666] text-xs">{stock.symbol}</p>
                                </div>
                              </div>
                            </td>
                            <td className="py-3.5 px-4 text-right">
                              <p className="text-gray-dark font-bold text-sm">₹{stock.price.toLocaleString('en-IN', { minimumFractionDigits: 2 })}</p>
                            </td>
                            <td className="py-3.5 px-4 text-right">
                              <div className="flex flex-col items-end gap-0.5">
                                <span className={`text-sm font-semibold ${stock.changePercent > 0 ? 'text-green-600' : 'text-red-600'}`}>
                                  {stock.changePercent > 0 ? '+' : ''}{stock.changePercent.toFixed(2)}%
                                </span>
                                <span className={`text-xs ${stock.changePercent > 0 ? 'text-green-600' : 'text-red-600'}`}>
                                  {stock.change > 0 ? '+' : ''}₹{stock.change.toFixed(2)}
                                </span>
                              </div>
                            </td>
                            <td className="py-3.5 px-4 text-right text-gray-dark text-sm">
                              ₹{stock.marketCap.toLocaleString('en-IN')}
                            </td>
                            <td className="py-3.5 px-4 text-right text-gray-dark text-sm">
                              {stock.pe.toFixed(2)}
                            </td>
                            <td className="py-3.5 px-4 text-right text-gray-dark text-sm">
                              {stock.pb.toFixed(2)}
                            </td>
                            <td className="py-3.5 px-4 text-right">
                              <span className={`text-sm font-medium ${stock.roe > 15 ? 'text-green-600' : 'text-gray-dark'}`}>
                                {stock.roe.toFixed(2)}%
                              </span>
                            </td>
                            <td className="py-3.5 px-4 text-right text-[#666] text-sm">
                              {stock.volume}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              ) : (
                /* Card View */
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {sampleStocks.map((stock) => (
                    <div
                      key={stock.id}
                      className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1 min-w-0">
                          <h3 className="text-lg font-bold text-gray-dark mb-1 hover:text-[#EF9309] transition-colors truncate">
                            {stock.name}
                          </h3>
                          <p className="text-sm text-[#666]">{stock.symbol}</p>
                        </div>
                        <button className="text-[#666] hover:text-[#EF9309] transition-colors flex-shrink-0 ml-2">
                          <FaStar className="w-5 h-5" />
                        </button>
                      </div>

                      <div className="flex items-end justify-between mb-4 pb-4 border-b border-gray-100">
                        <div>
                          <p className="text-3xl font-bold text-gray-dark">
                            ₹{stock.price.toLocaleString('en-IN', { minimumFractionDigits: 2 })}
                          </p>
                          <p className="text-xs text-[#666] mt-1">Current Price</p>
                        </div>
                        <div className={`px-3 py-1 rounded-lg ${stock.changePercent > 0 ? 'bg-green-50' : 'bg-red-50'}`}>
                          <p className={`text-sm font-bold flex items-center gap-1 ${stock.changePercent > 0 ? 'text-green-600' : 'text-red-600'}`}>
                            {stock.changePercent > 0 ? <FaArrowUp className="w-3 h-3" /> : <FaArrowDown className="w-3 h-3" />}
                            {Math.abs(stock.changePercent).toFixed(2)}%
                          </p>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <p className="text-xs text-[#666] mb-1">Market Cap</p>
                          <p className="text-sm font-semibold text-gray-dark">₹{stock.marketCap.toLocaleString('en-IN')} Cr</p>
                        </div>
                        <div>
                          <p className="text-xs text-[#666] mb-1">P/E Ratio</p>
                          <p className="text-sm font-semibold text-gray-dark">{stock.pe.toFixed(2)}</p>
                        </div>
                        <div>
                          <p className="text-xs text-[#666] mb-1">ROE</p>
                          <p className="text-sm font-semibold text-green-600">{stock.roe.toFixed(2)}%</p>
                        </div>
                        <div>
                          <p className="text-xs text-[#666] mb-1">Volume</p>
                          <p className="text-sm font-semibold text-gray-dark">{stock.volume}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

     
    </div>
  );
}