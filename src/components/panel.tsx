import type { ReactNode } from "react"

interface PanelProps {
    title: string
    children: ReactNode
}

export default function Panel({ title, children }: PanelProps) {
    return (
        <section className="p-4 flex flex-col justify-center content-center text-center text-2xl text-white bg-red-500 rounded-2xl">
            <h2>{title}</h2>
            <div className="p-2 rounded-2xl border-2 border-dashed">{children}</div>
            <input type="text" />
        </section>
    )
}