'use client';
import React from 'react';
import { useClerk, useUser, UserButton } from '@clerk/nextjs';
import {
    Navbar, NavbarBrand, NavbarContent, NavbarItem,
    Link, DropdownItem, DropdownTrigger, Dropdown,
    DropdownMenu, Avatar
} from "@nextui-org/react";
import { ThemeSwitcher } from '@/components/ThemeSwitcher';
import { dark, shadesOfPurple } from '@clerk/themes';
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";


export default function Appbar() {
    const { signOut } = useClerk();
    const { isLoaded, isSignedIn, user } = useUser();
    const [mounted, setMounted] = useState(false)
    const { systemTheme, theme, setTheme } = useTheme()
    const currentTheme = theme === "system" ? systemTheme : theme;

  useEffect(() => {
    setMounted(true)
  }, [])

    return (
        <Navbar className='bg-gray-100 shadow-sm dark:bg-gray-900'>
            <NavbarContent className="sm:flex" justify="start">
                <NavbarBrand>
                    <p className="text-xl font-serif font-bold text-inherit">COAA</p>
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent className="sm:flex gap-4" justify="end">
                <NavbarItem className='hidden sm:block text-inherit font-serif'>
                    <Link color="foreground" href="#" aria-current="page">
                        Service
                    </Link>
                </NavbarItem>
                <NavbarItem className='hidden sm:block text-inherit font-serif'>
                    <Link color="foreground" href="#" aria-current="page">
                        Activity
                    </Link>
                </NavbarItem>
                <NavbarItem className='hidden sm:block text-inherit font-serif'>
                    <Link color="foreground" href="#">
                        Research
                    </Link>
                </NavbarItem>
                <NavbarItem className='hidden sm:block text-inherit font-serif'>
                    <Link color="foreground" href="#">
                        Opportunity
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <ThemeSwitcher />
                </NavbarItem>
                <NavbarItem className='text-inherit'>
                    {isSignedIn ? (
                        <UserButton
                            showName
                            appearance={
                                currentTheme === "dark" ? { baseTheme: dark } : undefined
                            } />
                    ): (
                    <Link className='font-serif' color="foreground" href='/sign-in'>Sign In</Link> 
                    )}
                </NavbarItem>
                
            </NavbarContent>
        </Navbar>
    );
}
