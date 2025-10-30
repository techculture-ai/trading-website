import React from 'react';
import Link from 'next/link';
import { FaChartLine, FaBuilding, FaIndustry, FaTruck, FaFlask, FaMicrochip, FaShoppingCart, FaHospital, FaCar, FaTractor, FaHardHat, FaBox } from 'react-icons/fa';

interface StockCategory {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  slug: string;
  stockCount: number;
}

const stockCategories: StockCategory[] = [
  {
    id: '1',
    title: 'Banking and Finance Sector Stocks',
    description: 'Banking and finance sector stocks include companies involved in providing financial services, such as commercial banks, investment banks, insurance companies, and asset management firms.',
    icon: <FaBuilding className="w-8 h-8" />,
    slug: 'banking-finance',
    stockCount: 45,
  },
  {
    id: '2',
    title: 'Realty Sector Stocks',
    description: 'Realty sector stocks include companies involved in the development, acquisition, management, and sale of real estate properties.',
    icon: <FaBuilding className="w-8 h-8" />,
    slug: 'realty',
    stockCount: 32,
  },
  {
    id: '3',
    title: 'Chemical Sector Stocks',
    description: 'Chemical sector stocks include companies involved in the production, distribution, and sale of chemicals used in various industries.',
    icon: <FaFlask className="w-8 h-8" />,
    slug: 'chemical',
    stockCount: 58,
  },
  {
    id: '4',
    title: 'Transportation Sector Stocks',
    description: 'Transportation sector stocks include companies involved in the movement of goods and people through various modes such as air, rail, road, and sea.',
    icon: <FaTruck className="w-8 h-8" />,
    slug: 'transportation',
    stockCount: 28,
  },
  {
    id: '5',
    title: 'FMCG Sector Stocks',
    description: 'FMCG (Fast-Moving Consumer Goods) sector stocks include companies that produce and sell everyday consumer products.',
    icon: <FaShoppingCart className="w-8 h-8" />,
    slug: 'fmcg',
    stockCount: 42,
  },
  {
    id: '6',
    title: 'Metal Sector Stocks',
    description: 'Metal sector stocks include companies involved in the extraction, production, and distribution of metals such as steel, aluminum, copper, and zinc.',
    icon: <FaIndustry className="w-8 h-8" />,
    slug: 'metal',
    stockCount: 36,
  },
  {
    id: '7',
    title: 'Logistics Sector Stocks',
    description: 'Logistics sector stocks include companies involved in the planning, implementation, and control of the movement and storage of goods, services, and information.',
    icon: <FaBox className="w-8 h-8" />,
    slug: 'logistics',
    stockCount: 24,
  },
  {
    id: '8',
    title: 'Consumer Discretionary Sector Stocks',
    description: 'Consumer discretionary sector stocks include companies that provide goods and services that are non-essential but highly desired by consumers.',
    icon: <FaShoppingCart className="w-8 h-8" />,
    slug: 'consumer-discretionary',
    stockCount: 38,
  },
  {
    id: '9',
    title: 'IT Sector Stocks',
    description: 'IT sector stocks include companies involved in the development, production, and distribution of technology products and services.',
    icon: <FaMicrochip className="w-8 h-8" />,
    slug: 'it',
    stockCount: 52,
  },
  {
    id: '10',
    title: 'Engineering Sector Stocks',
    description: 'Engineering sector stocks encompass companies involved in various engineering disciplines, including civil, mechanical, electrical, and chemical engineering.',
    icon: <FaHardHat className="w-8 h-8" />,
    slug: 'engineering',
    stockCount: 46,
  },
  {
    id: '11',
    title: 'Building Material Sector Stocks',
    description: 'Building material sector stocks include companies involved in the production, distribution, and sale of materials used in construction.',
    icon: <FaHardHat className="w-8 h-8" />,
    slug: 'building-material',
    stockCount: 30,
  },
  {
    id: '12',
    title: 'Infra Sector Stocks',
    description: 'Infra sector stocks include companies engaged in the development, construction, and maintenance of infrastructure projects such as roads, bridges, and airports.',
    icon: <FaHardHat className="w-8 h-8" />,
    slug: 'infra',
    stockCount: 34,
  },
  {
    id: '13',
    title: 'Auto Sector Stocks',
    description: 'Auto sector stocks include companies involved in the manufacturing, design, development, marketing, and sale of motor vehicles.',
    icon: <FaCar className="w-8 h-8" />,
    slug: 'auto',
    stockCount: 40,
  },
  {
    id: '14',
    title: 'Pharma Sector Stocks',
    description: 'Pharma sector stocks include companies involved in the research, development, manufacturing, and distribution of pharmaceutical products.',
    icon: <FaHospital className="w-8 h-8" />,
    slug: 'pharma',
    stockCount: 48,
  },
  {
    id: '15',
    title: 'Agriculture Sector Stocks',
    description: 'Agriculture sector stocks include companies involved in farming, crop production, agricultural machinery, fertilizers, and related services.',
    icon: <FaTractor className="w-8 h-8" />,
    slug: 'agriculture',
    stockCount: 26,
  },
];

export default function StocksPage() {
  return (
    <div className="min-h-screen bg-white">

      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#0A2745] via-[#0F2744] to-[#0A1929] pt-32 pb-16">
        <div className="max-w-8xl mx-auto px-5 md:px-10 lg:px-24">
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <FaChartLine className="w-10 h-10 text-[#EF9309]" />
              <h1 className="text-4xl lg:text-5xl font-bold text-white">
                Stock Categories
              </h1>
            </div>
            <p className="text-[#8E8E8E] text-lg lg:text-xl max-w-3xl mx-auto">
              Explore stocks across different sectors and industries. Find the perfect investment opportunity that aligns with your portfolio strategy.
            </p>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-16 lg:py-20">
        <div className="max-w-8xl mx-auto px-5 md:px-10 lg:px-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {stockCategories.map((category) => (
              <Link key={category.id} href={`/invest/stocks/${category.slug}`}>
                <div className="group bg-white border border-[#E2E8FE] rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer h-full">
                  {/* Icon */}
                  <div className="bg-gradient-to-br from-[#0A2745] to-[#1A3A5C] text-[#EF9309] w-16 h-16 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                    {category.icon}
                  </div>

                  {/* Title */}
                  <h3 className="text-gray-dark text-xl font-bold mb-3 group-hover:text-[#EF9309] transition-colors">
                    {category.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[#8E8E8E] text-sm leading-relaxed mb-4 line-clamp-3">
                    {category.description}
                  </p>

                  {/* Stock Count & Arrow */}
                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-[#E2E8FE]">
                    <span className="text-[#8E8E8E] text-sm font-medium">
                      {category.stockCount} Stocks
                    </span>
                    <svg
                      className="w-6 h-6 text-[#EF9309] transform group-hover:translate-x-2 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[#0A2745] via-[#0F2744] to-[#0A1929] py-16">
        <div className="max-w-4xl mx-auto px-5 md:px-10 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Ready to Start Investing?
          </h2>
          <p className="text-[#8E8E8E] text-lg mb-8">
            Open your free demat account and start trading in stocks today!
          </p>
          <Link href="/open-demat-account/">
            <button className="px-10 py-4 bg-[#EF9309] hover:bg-[#D68108] text-white font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 flex items-center gap-2 mx-auto">
              Open Free Account
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 512 512">
                <path d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z" />
              </svg>
            </button>
          </Link>
        </div>
      </section>

    </div>
  );
}