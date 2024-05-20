import Link from "next/link"
import { RiChat1Fill, RiMusic2Fill, RiToolsFill } from "@remixicon/react"
import { Suspense } from "react"
import Music from "@/app/music"

export default function Home() {
    return (
        <>

            <h1 className="font-semibold text-2xl">hii! i’m wappx :з</h1>
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
                <section className="md:border-r-2 border-dotted border-neutral-900 max-md:border-b-2 max-md:pb-4">
                    <h2 className="text-xl font-medium flex items-center gap-2">
                        <RiToolsFill size={20} />
                        skills
                    </h2>
                    <ul className="text-neutral-300">
                        <li>python</li>
                        <li>sleeping</li>
                    </ul>
                </section>
                <section>
                    <h2 className="text-xl font-medium flex items-center gap-2">
                        <RiChat1Fill size={18} />
                        socials
                    </h2>
                    <ul className="text-neutral-300">
                        <li>
                            <Link href="https://github.com/w2ppx" target="_blank">
                                github
                            </Link>
                        </li>
                        <li>
                            <Link href="https://t.me/kindacoral" target="_blank">
                                telegram
                            </Link>
                        </li>
                        <li>
                            <Link href="https://twitter.com/wappx" target="_blank">
                                twitter
                            </Link>
                        </li>
                    </ul>
                </section>
            </div>
            <section>
                <h2 className="text-xl font-medium flex items-center gap-2">
                    <RiMusic2Fill size={18} />
                    listening to
                </h2>
                <Suspense
                    fallback={(
                        <p className="animate-pulse text-sm">hold on! updating info...</p>
                    )}
                >
                    <Music />
                </Suspense>
            </section>
        </>
    )
}
