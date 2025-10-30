import Header from '@/components/Header';
import Hero from '@/components/Hero';
import AppSection from '@/components/AppSection';
import SuperTraders from '@/components/SuperTraders';
import LongTermInvestors from '@/components/LongTermInvestors';
import AlwaysKeepingFirst from '@/components/AlwaysKeepingFirst';
import Testimonials from '@/components/Testimonials';
import Partners from '@/components/Partners';
import News from '@/components/News';
import FAQ from '@/components/FAQ';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';
import TradingFeatures from '@/components/TradingFeatures';
import Awards from '@/components/Awards';
import InvestmentOptions from '@/components/InvestmentOptions';
import TrendingStocks from '@/components/TrendingStocks';

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* <Header /> */}
      <Hero />
      {/* <AppSection /> */}
      <InvestmentOptions/>
      <TrendingStocks/>
      {/* <TradingFeatures/> */}
      {/* <LongTermInvestors />
      <AlwaysKeepingFirst /> */}
      {/* <Testimonials />
      <Awards />
      <News />
      <FAQ /> */}
      {/* <Partners /> */}
      <CTASection />
      {/* <Footer /> */}
    </main>
  );
}