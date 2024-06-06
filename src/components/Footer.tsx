'use client'
import React from 'react'
import { ThemeSwitcher } from './ThemeSwitcher'
import { Link } from "@nextui-org/react";
export default function Footer() {
  return (
    <div className='flex items-center justify-between px-10 py-4 bg-gray-100 shadow-sm dark:bg-gray-900 fixed bottom-0 left-0 w-full'>
      <div className='flex space-x-6 text-inherit font-serif'>
        <Link color="foreground" href="/about"> About</Link>
        <Link color="foreground" href="/contact"> Contact</Link>
        <Link color="foreground" href="/people"> People</Link>
      </div>
      <div className='flex items-center space-x-4'>
        <p>© {new Date().getFullYear()} COAA</p>
        <ThemeSwitcher />
      </div>
    </div>
  )
}
