import { Hero, Experience, Feature, Price } from "../sections";
import { Navbar, SignupBox, Footer } from "../components";

export default function Home() {
  return (
    <div>
      <Hero />
      <Feature />
      <Experience />
      <Price />
      <SignupBox />
      <Footer />
    </div>
  )
}
