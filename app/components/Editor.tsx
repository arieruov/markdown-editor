'use client';

import useTextConvert from '../hooks/useTextConvert';

export default function Editor() {
    const text = useTextConvert((state) => state);

    return (
        <div className="h-full w-full rounded-md border border-neutral-700 bg-neutral-500/25 p-2 shadow backdrop-blur-xs">
            <textarea
                placeholder="Markdown Text..."
                value={text.text}
                onChange={(event) => text.setText(event.target.value)}
                className="h-full w-full resize-none border-none bg-transparent text-white outline-none"
            ></textarea>
        </div>
    );
}
