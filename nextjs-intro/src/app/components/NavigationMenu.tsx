import Link from "next/link"

const NavigationMenu = () => {
  return (
    <nav>
      <menu className="flex gap-4 p-3 bg-emerald-100">
        <li><Link href="/">Home</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/services">Services</Link></li>
        <li><Link href="/contact">Contact</Link></li>
      </menu>
    </nav>
  )
}

export default NavigationMenu