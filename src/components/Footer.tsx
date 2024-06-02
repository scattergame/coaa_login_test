'use client'
import React from 'react'
import { ThemeSwitcher } from './ThemeSwitcher'

export default function Footer() {
  return (
    <div className='flex items-center justify-end px-10'>
      <ThemeSwitcher />
      <p>Footer</p>
    </div>
  )
}
