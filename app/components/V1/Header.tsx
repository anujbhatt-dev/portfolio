import Link from "next/link"
import Navigation from "./Navigation"
import Logo from "./Logo"
import { ArrowDownOnSquareStackIcon } from "@heroicons/react/16/solid"


export default function Header() {
  return (
    <header className="w-full h-[4rem] backdrop-blur-sm px-[1rem] md:px-[4rem] flex justify-between items-center border border-t-0 border-[#3C3D37] rounded-b-[30px] sticky top-0 shadow-sm shadow-black z-50">
      <Logo/>
      <Navigation/>
      <div className="cta text-[0.9rem] bg-[#2E073F] rounded py-2 px-4 shadow">
        <Link href="/anuj_bhatt_resume.pdf" target="_blank" className="button flex items-center" download={true}>Resume<ArrowDownOnSquareStackIcon className="h-[1.2rem] ml-[0.5rem]"/></Link>
      </div>
    </header>
  )
}
