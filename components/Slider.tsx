import Link from "next/link"
import { FunctionComponent } from "react"

const Slider: FunctionComponent = () => {
  return (
    <Link href="/">
      <a className="flex w-full h-96 bg-slate-400 items-center text-3xl font-bold font-roboto-slab justify-center">
        Explore now
      </a>
    </Link>
  )
}

export default Slider