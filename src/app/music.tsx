import { unstable_noStore as noStore } from "next/cache"
import Link from "next/link"
import { getNowPlaying } from "@/data/music"
import { formatDistanceToNow } from "date-fns"

export default async function Music() {
    noStore()

    const data = await getNowPlaying()
    return (
        <div className="flex flex-col gap-px">
            {data.tracks.map((t, i) => (
                <Link href={t.url ?? ""} target="_blank" key={i} className="w-full flex justify-between items-center">
                    <span className="text-neutral-100">
                        {t.artist?.name ?? "unknown artist"} - {t.name}
                    </span>
                    <span className="text-neutral-300 text-right">
                        {t.dateAdded
                            ? formatDistanceToNow(t.dateAdded, { includeSeconds: true, addSuffix: true })
                            : "right now"}
                    </span>
                </Link>
            ))}
        </div>
    )
}
