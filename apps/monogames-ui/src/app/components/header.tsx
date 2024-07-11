import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" />
          </a>
        </div>
        <div className="flex gap-x-12">
          <Link className="text-sm font-semibold leading-6 text-gray-900" to="/">Home</Link>
          <Link className="text-sm font-semibold leading-6 text-gray-900" to="/games">Games</Link>
        </div>
        <div className="flex lg:flex-1 lg:justify-end">
        </div>
      </nav>
    </header>
  )
}

export default Header;
