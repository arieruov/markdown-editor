'use client';

import { useState } from 'react';
import { PiMarkdownLogo } from 'react-icons/pi';

export default function Capsule() {
    const [expand, setExpand] = useState<boolean>(false);

    return (
        <div className="flex w-fit cursor-pointer flex-row gap-2 self-start rounded-md border border-neutral-700 bg-neutral-100/10 p-1 backdrop-blur-xs">
            <button onClick={() => setExpand(!expand)}>
                <PiMarkdownLogo
                    color="white"
                    size={32}
                    className="cursor-pointer"
                />
            </button>

            {expand && (
                <>
                    <button className="cursor-pointer rounded-sm px-2 text-white hover:bg-neutral-300/20 active:bg-neutral-300/20">
                        Editor
                    </button>
                    <button className="cursor-pointer rounded-sm px-2 text-white hover:bg-neutral-300/20 active:bg-neutral-300/20">
                        Output
                    </button>
                </>
            )}
        </div>
    );
}
