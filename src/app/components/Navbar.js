import Link from 'next/link';
const Navbar = () => {
  return (
    <header>
      <nav className='flex items-center justify-between bg-gray-800 text-white py-4 px-6'>
        <div className='text-2xl font-bold'>WeatherNow</div>
        
        <ul className='flex space-x-8 text-xl' >
          <li>
            <Link href="/">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about">
              About
            </Link>
          </li>
          <li>
            <Link href="/services">
              Services
            </Link>
          </li>
          <li>
            <Link href="/contact">
              Contact
            </Link>
          </li>
        </ul>
        
        <div className="space-x-4">
          <button className='bg-white text-gray-800 py-2 px-4 rounded-lg hover:bg-gray-300 transition duration-300'>
            Login
          </button>
          <button className='bg-white text-gray-800 py-2 px-4 rounded-lg hover:bg-gray-300 transition duration-300'>
            Sign up
          </button>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
