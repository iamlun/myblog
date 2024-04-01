import Image from "next/image";
import { Footer, HomePage, Navbar } from "@/components";
export default function Home() {
  return (
    <div className="overflow-hidden">
        <Navbar/>
        <HomePage></HomePage>
        <Footer/>
    </div>
  );
}
