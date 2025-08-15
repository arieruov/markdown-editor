'use client';

import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import useTextConvert from '../hooks/useTextConvert';

export default function Output() {
    const text = useTextConvert((state) => state);

    return (
        <div className="h-full w-full overflow-y-scroll rounded-md border border-neutral-700 bg-neutral-500/25 p-2 text-white shadow backdrop-blur-xs">
            <Markdown
                remarkPlugins={[remarkGfm]}
                components={{
                    p: ({ children }) => (
                        <p className="mb-4 whitespace-pre-wrap">{children}</p>
                    ),
                    h1: ({ children }) => (
                        <h1 className="mb-4 text-3xl font-bold md:text-4xl">
                            {children}
                        </h1>
                    ),
                    h2: ({ children }) => (
                        <h2 className="mb-3 text-2xl font-bold md:text-3xl">
                            {children}
                        </h2>
                    ),
                    h3: ({ children }) => (
                        <h3 className="mb-2 text-xl font-bold md:text-2xl">
                            {children}
                        </h3>
                    ),
                    h4: ({ children }) => (
                        <h4 className="mb-2 text-lg font-bold md:text-xl">
                            {children}
                        </h4>
                    ),
                    h5: ({ children }) => (
                        <h5 className="mb-1 text-base font-bold md:text-lg">
                            {children}
                        </h5>
                    ),
                    h6: ({ children }) => (
                        <h6 className="mb-1 text-sm font-bold md:text-base">
                            {children}
                        </h6>
                    ),
                }}
            >
                {text.text}
            </Markdown>
        </div>
    );
}
