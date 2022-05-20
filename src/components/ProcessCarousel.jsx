import { useState, useRef, useEffect } from 'react'

// Data
import data from '../assets/data/processcaroucel.json'

const Carousel = () => {
  const maxScrollWidth = useRef(0)
  const [currentIndex, setCurrentIndex] = useState(0)
  const carousel = useRef(null)

  const movePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 1)
    }
  }

  const moveNext = () => {
    if (
      carousel.current !== null &&
      carousel.current.offsetWidth * currentIndex <= maxScrollWidth.current
    ) {
      setCurrentIndex((prevState) => prevState + 1)
    }
  }

  const isDisabled = (direction) => {
    if (direction === 'prev') {
      return currentIndex <= 0
    }

    if (direction === 'next' && carousel.current !== null) {
      return (
        carousel.current.offsetWidth * currentIndex >= maxScrollWidth.current
      )
    }

    return false
  }

  useEffect(() => {
    if (carousel !== null && carousel.current !== null) {
      carousel.current.scrollLeft = carousel.current.offsetWidth * currentIndex
    }
  }, [currentIndex])

  useEffect(() => {
    maxScrollWidth.current = carousel.current
      ? carousel.current.scrollWidth - carousel.current.offsetWidth
      : 0
  }, [])

  return (
    <div className="justify-center place-items-center my-12 mx-auto carousel">
      <h2 className="justify-center mb-12 text-4xl font-semibold leading-8 text-center text-slate-700">
        Our Design Process
      </h2>
      <div className="overflow-hidden relative">
        <div className="flex absolute justify-between w-full h-full top left">
          <button
            onClick={movePrev}
            className="z-10 p-0 m-0 w-10 h-full text-center text-white hover:bg-blue-900/75 opacity-75 hover:opacity-100 disabled:opacity-25 transition-all duration-300 ease-in-out disabled:cursor-not-allowed"
            disabled={isDisabled('prev')}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="-ml-5 w-20 h-12"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
            <span className="sr-only">Prev</span>
          </button>
          <button
            onClick={moveNext}
            className="z-10 p-0 m-0 w-10 h-full text-center text-white hover:bg-blue-900/75 opacity-75 hover:opacity-100 disabled:opacity-25 transition-all duration-300 ease-in-out disabled:cursor-not-allowed"
            disabled={isDisabled('next')}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="-ml-5 w-20 h-12"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
            <span className="sr-only">Next</span>
          </button>
        </div>
        <div
          ref={carousel}
          className="flex overflow-hidden relative z-0 gap-1 justify-center place-items-center scroll-smooth snap-x snap-mandatory touch-pan-x carousel-container"
        >
          {data.resources.map((resource, index) => {
            return (
              <div
                key={index}
                className="relative w-64 h-64 text-center snap-start carousel-item"
              >
                <a
                  href={resource.link}
                  className="aspect-square block z-0 w-full h-full bg-origin-padding bg-left-top bg-no-repeat bg-cover"
                  style={{ backgroundImage: `url(${resource.imageUrl || ''})` }}
                >
                  <img
                    src={resource.imageUrl || ''}
                    alt={resource.title}
                    className="aspect-square hidden w-full"
                  />
                </a>
                <a
                  href={resource.link}
                  className="aspect-square block absolute top-0 left-0 z-10 w-full h-full bg-blue-800/75 opacity-0 hover:opacity-100 transition-opacity duration-300"
                >
                  <h3 className="py-6 px-3 mx-auto text-xl text-white">
                    {resource.title}
                  </h3>
                </a>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Carousel
