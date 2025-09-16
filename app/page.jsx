import { Button } from "@/components/ui/button";
import {FiDownload} from "react-icons/fi"

const Home = () => {
  return (
  <section className="h-full">
    <div className="container mx-auto">
      <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
        {/* text */}
        <div>
          <span>Software Developer</span>
        </div>
        {/* photo*/}
        <div>photo</div>
        {/* text */}
        <div>text</div>
      </div>
    </div>
  </section>
  );
}

export default Home