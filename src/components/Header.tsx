'use client'
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"


export default function Header() {
  const [showMenu, setShowMenu] = useState(false)
  const [showCollapse, setShowCollapse] = useState(false)
  const [showCollapse1, setShowCollapse1] = useState(false)

  const toggleMenu = () => setShowMenu(!showMenu)

  const toggleCollapse = () => {
    setShowCollapse1(false)
    setShowCollapse(!showCollapse)
  }

  const toggleCollapse1 = () => {
    setShowCollapse(false)
    setShowCollapse1(!showCollapse1)
  }


  return (
    <div
      className="
      ud-header
      sticky
      bg-transparent
      bg-white
      top-0
      left-0
      z-40
      w-full
      min-w-screen
      flex
      items-center
    "
    >
      <div className="container">
        <div className="flex mx-4 items-center justify-between relative w-100">
          <div className="px-2 mx-16 w-60 max-w-full">
            <Link href="/" className="navbar-logo w-full block py-5">
              <Image
                src="/images/logopagina_1.png"
                alt="logo da linkedpay"
                className="w-full header-logo"
                priority
                width={400}
                height={400}
              />
            </Link>
          </div>
          <div className="flex px-4justify-between items-center w-full justify-end">
            <div>
              <button
                onClick={toggleMenu}
                id="navbarToggler"
                className="
                block
                absolute
                right-4
                top-1/2
                -translate-y-1/2
                lg:hidden
                focus:ring-2
                ring-primary
                px-3
                py-[6px]
                rounded-lg
              "
              >
                <span
                  className="relative w-[30px] h-[2px] my-[6px] block bg-black"
                ></span>
                <span
                  className="relative w-[30px] h-[2px] my-[6px] block bg-black"
                ></span>
                <span
                  className="relative w-[30px] h-[2px] my-[6px] block bg-black"
                ></span>
              </button>
              <nav
                id="navbarCollapse"
                className={`
                absolute
                py-5
                lg:py-0 lg:px-4
                xl:px-6
                bg-white
                lg:bg-transparent
                shadow-lg
                rounded-lg
                max-w-[250px]
                w-full
                lg:max-w-full lg:w-full
                right-4
                top-full
                ${showMenu ? '' : 'hidden'}
                lg:block lg:static lg:shadow-none
              `}
              >
                <ul className="block lg:flex">
                  <li className="relative group submenu-item">
                    <a
                      className="
                      cursor-pointer
                      text-base text-dark
                      lg:text-gray-700
                      lg:group-hover:opacity-70
                      lg:group-hover:text-gray-900
                      group-hover:text-gray-900
                      tracking-wide
                      font-bold
                      py-2
                      lg:py-6 lg:inline-flex lg:pl-0 lg:pr-4
                      flex
                      mx-8
                      lg:mr-0 lg:ml-8
                      xl:ml-12
                      relative
                      after:absolute
                      after:w-2
                      after:h-2
                      after:border-b-2
                      after:border-r-2
                      after:border-current
                      after:rotate-45
                      lg:after:right-0
                      after:right-1
                      after:top-1/2
                      after:-translate-y-1/2
                      after:mt-[-2px]
                    "
                      onClick={toggleCollapse}
                    >
                      Início
                    </a>
                    <div
                      className={`
                      submenu
                      ${showCollapse ? '' : 'hidden'}
                      relative
                      lg:absolute
                      w-[250px]
                      top-full
                      lg:top-[110%]
                      left-0
                      rounded-sm
                      lg:shadow-lg
                      p-4
                      lg:block lg:opacity-0 lg:invisible
                      group-hover:opacity-100
                      lg:group-hover:visible lg:group-hover:top-full
                      bg-white
                      transition-[top]
                      duration-300
                    `}
                    >
                      <Link
                        href="/inicio/app"
                        className="
                        block
                        text-sm text-body-color
                        rounded
                        tracking-wide
                        text-gray-700
                        font-bold
                        hover:text-violet-800
                        hover:bg-gray-50
                        py-[10px]
                        px-4
                      "
                      >
                        LinkedPay App
                      </Link>
                    </div>
                  </li>
                  <li className="relative group">
                    <Link
                      href="/agentes"
                      className="
                      ud-menu-scroll
                      text-lg text-dark
                      tracking-wide
                      text-gray-700
                      font-semibold
                      lg:text-gray-700
                      lg:group-hover:opacity-70
                      lg:group-hover:text-gray-700
                      group-hover:text-primary
                      py-2
                      lg:py-6 lg:inline-flex lg:px-0
                      flex
                      mx-8
                      lg:mr-0 lg:ml-7
                      xl:ml-12
                    "
                    >
                      Agentes
                    </Link>
                  </li>
                  <li className="relative group submenu-item">
                    <a
                      className="
                      cursor-pointer
                      text-base text-dark
                      lg:text-gray-700
                      lg:group-hover:opacity-70
                      lg:group-hover:text-gray-900
                      group-hover:text-gray-900
                      tracking-wide
                      font-bold
                      py-2
                      lg:py-6 lg:inline-flex lg:pl-0 lg:pr-4
                      flex
                      mx-8
                      lg:mr-0 lg:ml-8
                      xl:ml-12
                      relative
                      after:absolute
                      after:w-2
                      after:h-2
                      after:border-b-2
                      after:border-r-2
                      after:border-current
                      after:rotate-45
                      lg:after:right-0
                      after:right-1
                      after:top-1/2
                      after:-translate-y-1/2
                      after:mt-[-2px]
                    "
                    onClick={toggleCollapse1}
                    >
                      Empresa
                    </a>
                    <div
                      className={`
                      submenu
                      ${showCollapse1 ? '' : 'hidden'}
                      relative
                      lg:absolute
                      w-[250px]
                      top-full
                      lg:top-[110%]
                      left-0
                      rounded-sm
                      lg:shadow-lg
                      p-4
                      lg:block lg:opacity-0 lg:invisible
                      group-hover:opacity-100
                      lg:group-hover:visible lg:group-hover:top-full
                      bg-white
                      transition-[top]
                      duration-300
                    `}
                    >
                      <Link
                        href="/aempresa/sobrenos"
                        className="
                        block
                        text-sm text-body-color
                        rounded
                        tracking-wide
                        text-gray-700
                        font-bold
                        hover:text-violet-800
                        hover:bg-gray-50
                        items-center
                        py-[10px]
                        px-4
                      "
                      >
                        Sobre Nós

                      </Link>
                      <Link
                        href="/aempresa/carreira"
                        className="
                        block
                        text-sm text-body-color
                        rounded
                        tracking-wide
                        text-gray-700
                        font-bold
                        hover:text-violet-800
                        hover:bg-gray-50
                        py-[10px]
                        px-4
                      "
                      >
                        Carreiras
                      </Link>
                      <Link
                        href="/aempresa/blog"
                        className="
                        block
                        text-sm text-body-color
                        rounded
                        tracking-wide
                        text-gray-700
                        font-bold
                        hover:text-violet-800
                        hover:bg-gray-50
                        py-[10px]
                        px-4
                      "
                      >
                        Blog
                      </Link>
                      <Link
                        href="/aempresa/contactos"
                        className="
                        block
                        text-sm text-body-color
                        rounded
                        tracking-wide
                        text-gray-700
                        font-bold
                        hover:text-violet-800
                        hover:bg-gray-50
                        items-center
                        py-[10px]
                        px-4
                      "
                      >
                        Contacte-nos

                      </Link>
                    </div>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>)
}
