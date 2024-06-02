// app/providers.tsx
"use client";
import { ReactNode } from 'react';
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes/dist/types"

interface Props extends ThemeProviderProps {
  children: ReactNode;
}

export function ThemeProvider({ children, ...props }: Props) {
  return (
      <NextUIProvider>
        <NextThemesProvider {...props} attribute="class" defaultTheme="light">
            {children}
          </NextThemesProvider>
      </NextUIProvider>
  );
}