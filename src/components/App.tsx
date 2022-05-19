import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import Featured from './Featured'
import Podium from '../assets/images/islandthemepodium.jpg'
import Matilda from '../assets/images/matildaconceptv1.png'

const navigation = [
  { name: 'Game', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' }
]

function App() {
  return (
    <>
      <div className="overflow-hidden relative bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:pb-28 lg:w-full lg:max-w-2xl xl:pb-32">
            <svg
              className="hidden absolute inset-y-0 right-0 w-48 h-full text-white translate-x-1/2 lg:block"
              fill="currentColor"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <polygon points="50,0 100,0 50,100 0,100" />
            </svg>

            <Popover>
              <div className="relative px-4 pt-6 sm:px-6 lg:px-8">
                <nav
                  className="flex relative justify-between items-center sm:h-10 lg:justify-start"
                  aria-label="Global"
                >
                  <div className="flex grow shrink-0 items-center lg:grow-0">
                    <div className="flex justify-between items-center w-full md:w-auto">
                      <a href="#">
                        <span className="sr-only">Workflow</span>
                        <img
                          alt="Workflow"
                          className="w-auto h-8 sm:h-10"
                          src=""
                        />
                      </a>
                      <div className="flex items-center -mr-2 md:hidden">
                        <Popover.Button className="inline-flex justify-center items-center p-2 text-gray-400 hover:text-gray-500 bg-white hover:bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                          <span className="sr-only">Open main menu</span>
                          <MenuIcon className="w-6 h-6" aria-hidden="true" />
                        </Popover.Button>
                      </div>
                    </div>
                  </div>
                  <div className="hidden md:block md:pr-4 md:ml-10 md:space-x-8">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="font-medium text-gray-500 hover:text-gray-900"
                      >
                        {item.name}
                      </a>
                    ))}
                    <a
                      href="#"
                      className="font-medium text-indigo-600 hover:text-indigo-500"
                    >
                      Log in
                    </a>
                  </div>
                </nav>
              </div>

              <Transition
                as={Fragment}
                enter="duration-150 ease-out"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="duration-100 ease-in"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Popover.Panel
                  focus
                  className="absolute inset-x-0 top-0 z-10 p-2 transition origin-top-right md:hidden"
                >
                  <div className="overflow-hidden bg-white rounded-lg ring-1 ring-black shadow-md opacity-5">
                    <div className="flex justify-between items-center px-5 pt-4">
                      <div>
                        <img
                          className="w-auto h-8"
                          src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                          alt=""
                        />
                      </div>
                      <div className="-mr-2">
                        <Popover.Button className="inline-flex justify-center items-center p-2 text-gray-400 hover:text-gray-500 bg-white hover:bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                          <span className="sr-only">Close main menu</span>
                          <XIcon className="w-6 h-6" aria-hidden="true" />
                        </Popover.Button>
                      </div>
                    </div>
                    <div className="px-2 pt-2 pb-3 space-y-1">
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="block py-2 px-3 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md"
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                    <a
                      href="#"
                      className="block py-3 px-5 w-full font-medium text-center text-indigo-600 bg-gray-50 hover:bg-gray-100"
                    >
                      Log in
                    </a>
                  </div>
                </Popover.Panel>
              </Transition>
            </Popover>

            <main className="px-4 mx-auto mt-10 max-w-7xl sm:px-6 sm:mt-12 md:mt-16 lg:px-8 lg:mt-20 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                  <span className="block xl:inline">
                    H4G Game Studios Presents
                  </span>{' '}
                  <span className="block text-indigo-600 xl:inline">
                    The Carnival
                  </span>
                </h1>
                <p className="mt-3 text-base text-gray-500 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0">
                  More than your lifetime in its creation…
                </p>
                <p className="mt-3 text-base text-gray-500 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0">
                  H4G delivers a modern take on your favourite carnival games
                  but with a twist at every turn.
                </p>
                <div className="mt-5 sm:flex sm:justify-center sm:mt-8 lg:justify-start">
                  <div className="rounded-md shadow">
                    <a
                      href="#"
                      className="flex justify-center items-center py-3 px-8 w-full text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-md border border-transparent md:py-4 md:px-10 md:text-lg"
                    >
                      Get started
                    </a>
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-3">
                    <a
                      href="#"
                      className="flex justify-center items-center py-3 px-8 w-full text-base font-medium text-indigo-700 bg-indigo-100 hover:bg-indigo-200 rounded-md border border-transparent md:py-4 md:px-10 md:text-lg"
                    >
                      Live demo
                    </a>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img
            className="object-cover w-full h-56 sm:h-72 md:h-96 lg:w-full lg:h-full"
            src={Podium}
            alt=""
          />
        </div>
      </div>
      <div>
        <Featured />
      </div>
      <div className="grid grid-flow-col auto-cols-max justify-center place-items-center">
        <div className="p-2">
          <img className="w-auto h-60" src={Matilda} alt="" />
        </div>
        <div className="p-2">
          <img className="w-auto h-60" src={Matilda} alt="" />
        </div>
        <div className="p-2">
          <img className="w-auto h-60" src={Matilda} alt="" />
        </div>
      </div>
    </>
  )
}

export default App
