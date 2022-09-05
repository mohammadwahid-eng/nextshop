import Link from "next/link"
import { FunctionComponent } from "react"
import { BsGlobe, BsSearch, BsBag, BsHeart, BsFilterRight, BsCashCoin } from "react-icons/bs"

const Header: FunctionComponent = () => {
  return (
    <header>
      <section className="bg-black text-white hidden md:block">
        <div className="flex items-center gap-10 justify-between px-5 lg:px-10 py-2 text-sm">
            <ul className="flex gap-5 items-center">
              <li><a href="#" className="inline-flex items-center gap-2 hover:underline"><BsCashCoin/>USD</a></li>
              <li><a href="#" className="inline-flex items-center gap-2 hover:underline"><BsGlobe/>EN</a></li>
            </ul>
            <div className="tracking-wider hidden lg:flex">Worldwide Express Shipping</div>
            <ul className="flex gap-5 items-center">
              <li><a href="#" className="hover:underline">Login</a></li>
              <li><a href="#" className="hover:underline">Create account</a></li>
            </ul>
        </div>
      </section>
      <nav className="shadow">
        <div className="flex items-center md:gap-5 md:justify-between pr-5 md:px-5 lg:px-10">
          <div className="p-5 cursor-pointer text-2xl md:hidden"><BsFilterRight /></div>
          <Link href={'/'}>
            <a className="py-4 md:py-3.5 text-2xl font-roboto-slab font-black">Nextshop</a>
          </Link>
          <ul className="hidden md:flex items-center uppercase font-semibold">
            <li><Link href={'/'}><a className="inline-flex text-sm p-5 transition hover:bg-slate-100">New Arrival</a></Link></li>
            <li><Link href={'/'}><a className="inline-flex text-sm p-5 transition hover:bg-slate-100">Men Collection</a></Link></li>
            <li><Link href={'/'}><a className="inline-flex text-sm p-5 transition hover:bg-slate-100">Women Collection</a></Link></li>
            <li><Link href={'/'}><a className="inline-flex text-sm p-5 transition hover:bg-slate-100">Kids Collection</a></Link></li>
          </ul>
          <ul className="flex ml-auto md:ml-0 items-center text-xl gap-7 md:gap-6">
            <li className="py-5 cursor-pointer"><BsSearch/></li>
            <li className="py-5 cursor-pointer">
              <div className="relative pr-2">
                <BsHeart />
                <span className="absolute right-0 -bottom-1 bg-black text-white text-xs w-4 h-4 flex rounded-full justify-center items-center">5</span>
              </div>
            </li>
            <li className="py-5 cursor-pointer">
              <div className="relative pr-2">
                <BsBag />
                <span className="absolute right-0 -bottom-1 bg-black text-white text-xs w-4 h-4 flex rounded-full justify-center items-center">2</span>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Header