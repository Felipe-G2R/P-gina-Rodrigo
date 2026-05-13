import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { EmotionalHook } from './components/EmotionalHook';
import { Problem } from './components/Problem';
import { Product } from './components/Product';
import { Journey } from './components/Journey';
import { Authority } from './components/Authority';
import { Curriculum } from './components/Curriculum';
import { ValueStack } from './components/ValueStack';
import { Bonuses } from './components/Bonuses';
import { Guarantee } from './components/Guarantee';
import { Urgency } from './components/Urgency';
import { FAQ } from './components/FAQ';
import { CTASection } from './components/CTASection';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <EmotionalHook />
        <Problem />
        <Product />
        <Journey />
        <Authority />
        <Curriculum />
        <ValueStack />
        <Bonuses />
        <Guarantee />
        <Urgency />
        <FAQ />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
