'use client'

import Image from 'next/image'
import { useState, Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import clsx from 'clsx'

import { Icon } from '@/components/Icon'
import { Button } from '@/components/Button'
import heroImage from '/public/images/stock/hero-home.png'

const ratings = [
  { label: 'Great Schools', stars: 5 },
  { label: 'Private School Review', stars: 5 },
  { label: 'Google Reviews', stars: 5 },
]

export const HomeHero = () => {
  let [isOpen, setIsOpen] = useState(false)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  return (
    <section className="bg-gradient-to-b from-purple-25 to-purple-50 px-4 pt-16 sm:px-6 lg:px-8">
      {/* Hero container */}
      <div
        className="mx-auto max-w-screen-xl lg:grid lg:grid-cols-12 lg:gap-8"
        x-data="{ modalOpen: false }"
      >
        {/* Hero text content */}
        <div className="flex flex-col items-center justify-center lg:col-span-6 lg:items-start">
          <div>
            <span className="inline-block -rotate-1 rounded-full bg-purple-200 px-4 py-2 font-medium text-purple-700 shadow-md">
              Welcome to Bright School
            </span>
          </div>
          <h1 className="h1 mt-4 max-w-xl text-center text-purple-900 sm:mt-5 lg:max-w-none lg:text-left">
            Creating a brighter future for your child
          </h1>
          <p className="mt-3 max-w-2xl text-center text-xl leading-loose text-purple-800 lg:text-left">
            At Bright School, we believe every child deserves a brighter future.
            and strive to give every student a personalized education that will
            promote their individual strengths and creativity.
          </p>
          {/* Hero buttons */}
          <div className="mt-8 flex flex-col items-center overflow-hidden sm:flex-row">
            <Button href="#0">
              Enroll today
              <Icon
                icon="arrowNarrowRight"
                className="ml-3 h-6 w-6 group-hover:animate-horizontal-bounce"
                stroke={2}
              />
            </Button>
            <Button
              variant="secondary"
              className="mt-6 sm:ml-6 sm:mt-0"
              onClick={() => openModal()}
            >
              <Icon
                icon="playFilled"
                className="mr-3 h-7 w-7 text-purple-600 duration-300 ease-in-out group-hover:text-purple-50"
              />
              Watch video
            </Button>
          </div>
          {/* Social proof */}
          <p className="mt-14 hidden text-sm font-medium uppercase tracking-wider text-purple-900 sm:block lg:hidden xl:block">
            Rated 5 stars by over{' '}
            <span className="font-semibold text-purple-600">100 parents</span>
          </p>
          <div className="mt-8 hidden flex-col divide-y divide-purple-400/20 overflow-hidden sm:mt-5 sm:flex sm:flex-row sm:divide-x sm:divide-y-0 lg:hidden xl:flex">
            {ratings.map((rating, index) => (
              <div
                key={`primary-${rating.label}`}
                className={clsx(
                  index == 0 && 'pb-5 sm:pb-0 sm:pr-10',
                  index == 1 && 'py-5 sm:px-10 sm:py-0',
                  index == 2 && 'pt-5 sm:pl-10 sm:pt-0',
                  'flex flex-col items-center',
                )}
              >
                <div className="flex w-full justify-center space-x-1">
                  {[...Array(rating.stars)].map((e, i) => (
                    <Icon
                      icon="starFilled"
                      className="h-4 w-4 text-yellow-500"
                      key={`primary-${rating.label}-star-${i}`}
                    />
                  ))}
                </div>
                <p className="mt-2.5 text-xs font-bold uppercase tracking-wide text-purple-700">
                  {rating.label}
                </p>
              </div>
            ))}
          </div>
        </div>
        {/* Hero image & video */}
        <div className="mx-auto mt-16 flex max-w-3xl flex-col justify-center lg:col-span-6 lg:mt-0 lg:max-w-none">
          <div className="relative">
            <Image
              src={heroImage}
              priority
              className="h-auto w-full"
              alt="Bright Photo Collage"
              sizes="(min-width: 1280px) 39rem, (min-width: 1024px) 50vw, (min-width: 768px) 48rem, 100vw"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="absolute inline-flex h-20 w-20 animate-ping rounded-full bg-purple-400 opacity-60" />
              {/* Video modal button */}
              <button
                className="group relative z-10 flex h-20 w-20 items-center justify-center rounded-full bg-purple-600/90 outline-none duration-300 ease-in-out hover:bg-purple-600/95"
                onClick={() => openModal()}
              >
                <Icon
                  icon="playFilled"
                  className="h-12 w-12 text-white/90 duration-300 ease-in-out group-hover:text-white/95"
                />
              </button>
            </div>
          </div>
        </div>
        {/* Video modal*/}
        <Transition appear show={isOpen} as={Fragment}>
          <Dialog
            as="div"
            className="fixed inset-0 z-10 h-full w-full overflow-hidden px-4 transition duration-150 ease-linear"
            aria-modal="true"
            onClose={closeModal}
          >
            {/* Modal overlay */}
            <Transition.Child
              as={Fragment}
              enter="transition ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-50"
              leave="transition ease-in duration-200"
              leaveFrom="opacity-50"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 h-screen w-screen bg-black opacity-50 transition-opacity duration-300 ease-linear" />
            </Transition.Child>
            <div className="mx-auto flex min-h-screen w-auto items-center justify-center">
              {/* Modal Content */}
              <Transition.Child
                as={Fragment}
                enter="transition ease-out duration-300"
                enterFrom="opacity-0 scale-95 translate-y-24"
                enterTo="opacity-100 scale-100 translate-y-0"
                leave="transition ease-out duration-200"
                leaveFrom="opacity-100 scale-100 translate-y-0"
                leaveTo="opacity-0 scale-95 translate-y-24"
              >
                <Dialog.Panel className="max-h-full w-full max-w-6xl overflow-auto rounded-2xl bg-white">
                  <div className="aspect-h-9 aspect-w-16 relative">
                    <iframe
                      className="absolute h-full w-full"
                      src="https://www.youtube.com/embed/oRcNS5CCbnc"
                      title="Video"
                      webkitallowfullscreen
                      mozallowfullscreen
                      allowFullScreen
                    />
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition>
      </div>
      {/* Visible only on sm screens ( <= 640px ) and lg screens ( >= 1024px	< 1280px ) */}
      <div className="mt-20 flex flex-col items-center sm:hidden lg:mt-24 lg:flex xl:hidden">
        {/* Social proof */}
        <p className="text-sm font-semibold uppercase tracking-wider text-purple-900">
          Rated 5 stars by over{' '}
          <span className="font-semibold text-purple-600">100 parents</span>
        </p>
        <div className="mt-8 flex flex-col divide-y divide-purple-400/20 overflow-hidden sm:flex-row sm:divide-x sm:divide-y-0">
          {ratings.map((rating, index) => (
            <div
              key={`secondary-${rating.label}`}
              className={clsx(
                index == 0 && 'pb-5 sm:pb-0 sm:pr-10',
                index == 1 && 'py-5 sm:px-10 sm:py-0',
                index == 2 && 'pt-5 sm:pl-10 sm:pt-0',
                'flex flex-col items-center',
              )}
            >
              <div className="flex w-full justify-center space-x-1">
                {[...Array(rating.stars)].map((e, i) => (
                  <Icon
                    icon="starFilled"
                    className="h-4.5 w-4.5 text-yellow-500 lg:h-5 lg:w-5"
                    key={`secondary-${rating.label}-star-${i}`}
                  />
                ))}
              </div>

              <p className="mt-2.5 text-xs font-bold uppercase tracking-wide text-purple-700">
                {rating.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
