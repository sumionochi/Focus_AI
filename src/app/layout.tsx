// src/app/layout.tsx
import type { Metadata } from 'next'
import { Lexend } from 'next/font/google'
import './globals.css'
import { cn } from '@/lib/utils'
import { ThemeProvider } from '@/components/ui/ThemeProvider';
import NavHeader from '@/components/NavHeader';
import { ClerkProvider, auth } from "@clerk/nextjs"

const lexend = Lexend({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Resolve.AI',
  description: 'Enhance Interview Skills Using AI.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const {userId} = auth();
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning={true}>
        <body className={cn(lexend.className, 'antialiased min-h-screen border-none outline-none', 'scrollbar scrollbar-thumb scrollbar-thumb-white scrollbar-track-slate-700 bg-gradient-to-tl from-violet-400 to-violet-300 dark:bg-gradient-to-br dark:from-gray-900 dark:via-purple-900 dark:to-violet-600')} suppressHydrationWarning={true}>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
            <NavHeader userId={userId}/>
            {children}
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  )
}
