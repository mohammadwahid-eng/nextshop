import { FunctionComponent } from "react"
import { BsEnvelope, BsMap, BsTelephone } from "react-icons/bs"
import { FaCcAmex, FaCcDiscover, FaCcJcb, FaCcMastercard, FaCcPaypal, FaCcStripe, FaCcVisa } from "react-icons/fa"

const Footer: FunctionComponent = () => {
  return (
    <footer className="bg-black text-white lg:text-sm">
      <section className="container grid px-5 gap-10 md:gap-8 md:grid-cols-2 lg:grid-cols-4 py-10">
        <div>
          <h4 className="font-roboto-slab text-xl lg:text-lg mb-3">Quick shop</h4>
          <ul className="grid gap-1.5">
            <li><a href="#" className="hover:underline">Women</a></li>
            <li><a href="#" className="hover:underline">Men</a></li>
            <li><a href="#" className="hover:underline">Kids</a></li>
            <li><a href="#" className="hover:underline">Sportswear</a></li>
            <li><a href="#" className="hover:underline">Sale</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-roboto-slab text-xl lg:text-lg mb-3">Informations</h4>
          <ul className="grid gap-1.5">
            <li><a href="#" className="hover:underline">About us</a></li>
            <li><a href="#" className="hover:underline">Careers</a></li>
            <li><a href="#" className="hover:underline">Privacy policy</a></li>
            <li><a href="#" className="hover:underline">Terms &amp; condition</a></li>
            <li><a href="#" className="hover:underline">My account</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-roboto-slab text-xl lg:text-lg mb-3">Customer services</h4>
          <ul className="grid gap-1.5">
            <li><a href="#" className="hover:underline">Request personal data</a></li>
            <li><a href="#" className="hover:underline">FAQ</a></li>
            <li><a href="#" className="hover:underline">Contact us</a></li>
            <li><a href="#" className="hover:underline">Orders and returns</a></li>
            <li><a href="#" className="hover:underline">Support center</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-roboto-slab text-xl lg:text-lg mb-3">Contact us</h4>
          <ul className="grid gap-2">
            <li><a href="https://goo.gl/maps/eBBPGMkW6N5i3rM39" target="_blank" rel="noreferrer" className="flex gap-3 hover:underline"><BsMap className="mt-1"/>2391 Scenic Way, Springfield, IL 62704</a></li>
            <li><a href="tel:(555) 555-1234" className="flex items-center gap-3 hover:underline"><BsTelephone/>(555) 555-1234</a></li>
            <li><a href="mailto:sales@nextshop.com" className="flex items-center gap-3 hover:underline"><BsEnvelope/>sales@nextshop.com</a></li>
          </ul>
        </div>
      </section>
      <div className="container px-5">
        <div className=" border-t border-cyan-50/25"></div>
      </div>
      <section className="container px-5 flex flex-col gap-3 md:flex-row items-center py-4">
        <div className="grow">&copy; 2022 Nextshop. All Rights Reserved.</div>
        <div className="flex gap-1 text-3xl lg:text-2xl">
          <FaCcMastercard/>
          <FaCcVisa/>
          <FaCcStripe/>
          <FaCcPaypal/>
          <FaCcAmex/>
          <FaCcDiscover/>
          <FaCcJcb/>
        </div>
      </section>
    </footer>
  )
}

export default Footer