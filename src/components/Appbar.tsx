'use client';
import React, { useEffect, useState } from 'react';
import { useClerk, useUser } from '@clerk/nextjs';
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, Link, NavbarMenu, NavbarMenuItem } from "@nextui-org/react";
import { useTheme } from "next-themes";

export default function Appbar() {
    const { signOut } = useClerk();
    const { isLoaded, isSignedIn } = useUser();
    const [mounted, setMounted] = useState(false);
    const { systemTheme, theme } = useTheme();
    const currentTheme = theme === "system" ? systemTheme : theme;
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const menuItems = isSignedIn ? [
        "My COAA",
        "Service",
        "Activity",
        "Research",
        "Highlight",
        "Opportunity",
        "Sign Out"
    ] : [
        "Sign In",
        "Service",
        "Activity",
        "Research",
        "Highlight",
        "Opportunity"
    ];

    const handleSignOut = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        event.preventDefault();
        signOut();
    };

    return (
        <Navbar className='bg-gray-100 shadow-sm dark:bg-gray-900' onMenuOpenChange={setIsMenuOpen} isMenuOpen={isMenuOpen}>
            <NavbarContent className="sm:flex" justify="start">
                <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
                <NavbarBrand>
                    <Link className="text-xl font-serif font-bold text-inherit" href="/coaa_service" aria-current="page">
                        COAA
                    </Link>
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent className="sm:flex gap-4" justify="end">
                <NavbarItem className='hidden sm:block text-inherit font-serif'>
                    <Link color="foreground" href="/coaa_service" aria-current="page">
                        Service
                    </Link>
                </NavbarItem>
                <NavbarItem className='hidden sm:block text-inherit font-serif'>
                    <Link color="foreground" href="/coaa_activity" aria-current="page">
                        Activity
                    </Link>
                </NavbarItem>
                <NavbarItem className='hidden sm:block text-inherit font-serif'>
                    <Link color="foreground" href="/coaa_research">
                        Research
                    </Link>
                </NavbarItem>
                <NavbarItem className='hidden sm:block text-inherit font-serif'>
                    <Link color="foreground" href="/coaa_seminar">
                        Highlights
                    </Link>
                </NavbarItem>
                <NavbarItem className='hidden sm:block text-inherit font-serif'>
                    <Link color="foreground" href="/coaa_opportunity">
                        Opportunity
                    </Link>
                </NavbarItem>


            </NavbarContent>

            <NavbarMenu>
                {menuItems.map((item, index) => (
                    <NavbarMenuItem key={`${item}-${index}`}>
                        <Link
                            className="w-full font-serif"
                            color="foreground"
                            href={
                                item === "Sign In" ? "/sign-in" : 
                                item === "Sign Out" ? "#" : 
                                item === "My COAA" ? "/mycoaa" : 
                                item === "Service" ? "/coaa_service" :
                                item === "Activity" ? "/coaa_activity" :
                                item === "Research" ? "/coaa_research" :
                                item === "Highlight" ? "/coaa_seminar" :                   
                                "/"
                            }
                            onClick={item === "Sign Out" ? handleSignOut : undefined}
                            size="lg"
                        >
                            {item}
                        </Link>
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>
        </Navbar>
    );
}
