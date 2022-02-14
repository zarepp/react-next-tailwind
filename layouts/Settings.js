
import { Fragment, useContext, useState, useEffect } from 'react'
import { Dialog, Menu, Transition } from '@headlessui/react'
import { useRouter } from 'next/router'

import {
  BellIcon,
  ArrowCircleLeftIcon
} from '@heroicons/react/outline'

import CompanyLogo from '../components/CompanyLogo'
import ProfileDropdown from '../components/ProfileDropdown'
import { ProfileContext } from '../context/ProfileContext'


const userNavigation = [
  { name: 'Tetapan', onClick: '#' },
  { name: 'Log Keluar', onClick: '#' },
]

export default function SettingsLayout({ children }) {
  const router = useRouter()
  const { profile } = useContext(ProfileContext)
  const [loading, setLoadig] = useState(true)

  useEffect(() => {
    if (profile !== null) {
      setLoadig(false)
    }
  }, [profile])

  return (
    <>
      <div className="flex flex-col flex-1">
        <div className="sticky top-0 z-10 flex-shrink-0 flex h-16 bg-white shadow">
          <div className="flex-shrink-0 flex items-center px-4">
            <CompanyLogo className="h-8 w-auto"/>
          </div>
          <div className="flex-1 px-4 flex justify-between">
            <div className="flex-1 flex">

            </div>
            <div className="ml-4 flex items-center md:ml-6">
              <button
                type="button"
                className="bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <span className="sr-only">View notifications</span>
                <BellIcon className="h-6 w-6" aria-hidden="true" />
              </button>

              {/* Profile dropdown */}
              <ProfileDropdown />
            </div>
          </div>
        </div>
      </div>


      <div className="mx-56 my-5">
        <div className="pb-5 sm:pb-0">
          <div
            className="flex flex-row cursor-pointer"
            onClick={() => router.push("/sawah")}
          >
            <ArrowCircleLeftIcon className="h-6 w-6 text-gray-500" aria-hidden="true" />
            <h3 className="text-lg ml-2 leading-6 font-medium text-gray-500">Dashboard</h3>
          </div>
        </div>
        { children }
      </div>

    </>
  )
}