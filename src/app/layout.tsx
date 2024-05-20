import type { Metadata } from "next"
import type { ReactNode } from "react"
import { Inter } from "next/font/google"
import "./globals.css"
import Link from "next/link"
import { env } from "@/env.mjs"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
    title: {
        default: "wappx",
        template: "%s | wappx",
    },
    other: {
        "darkreader-lock": "true",
    },
}

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html
            lang="en"
            className="bg-gradient-to-bl from-pink-300 to-pink-200 selection:bg-pink-400 selection:text-pink-100
            min-h-screen"
        >
            <body className={inter.className}>
                <main
                    className="p-4 mx-auto w-11/12 max-w-xl bg-neutral-950/80 rounded-lg mt-32 flex flex-col gap-4
                    backdrop-blur-lg border border-neutral-900 animate-appear text-white"
                >
                    {children}
                </main>
                <footer className="mx-auto my-2 w-fit text-xs flex flex-col items-center gap-1">
                    {env.WEBRING_BASE_URL && (
                        <div className="flex gap-2 text-sm">
                            <Link href={`${env.WEBRING_BASE_URL}/prev`}>
                                {"<- prev"}
                            </Link>
                            <span className="text-pink-600">
                                webringy thingy
                            </span>
                            <Link href={`${env.WEBRING_BASE_URL}/next`}>
                                {"next -->"}
                            </Link>
                        </div>
                    )}
                    <Link href="https://otomir23.me" target="_blank" className="text-pink-400">
                        made with {"<3"} by otomir23
                    </Link>
                </footer>
                <div className="w-screen h-screen overflow-hidden fixed -z-10 inset-0 pointer-events-none">
                    {[...Array(96)].map((_, i) => (
                        <span
                            key={i}
                            className="absolute w-1 h-1.5 bg-pink-400 rounded-[100%] animate-leaf -top-8"
                            style={{
                                left: `${Math.random() * 100}%`,
                                animationDelay: `${i * 100}ms`,
                            }}
                        />
                    ))}
                </div>
            </body>
        </html>
    )
}
