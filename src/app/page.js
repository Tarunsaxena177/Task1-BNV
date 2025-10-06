import Header from "./components/Header";
import OurStory from "./components/OurStory";
import ProductCard from './components/ProductCard';
import WhyUs from './components/WhyUs'
import WhatWeDo from './components/WhatWeDo'
import OurTeam from './components/OurTeam'
import VisitUs from './components/VisitUs'
import Testimonial from './components/Testimonial' 
import WhatNew from './components/WhatNew'
import Footer from './components/Footer'


export default function Home() {
 return (
 <main >
 <Header className="relative h-screen w-full"/> 
 <OurStory />
  <ProductCard/>
 <WhyUs/>
 <WhatWeDo/>
 <VisitUs/>
 <OurTeam/>
 <Testimonial/>
 <WhatNew/>
 <Footer/>
 </main>
 );
};