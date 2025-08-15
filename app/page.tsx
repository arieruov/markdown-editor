'use client';

import { ReactNode } from 'react';
import Capsule from './components/Capsule';
import Editor from './components/Editor';
import Output from './components/Output';
import useTabs from './hooks/useTabs';

export default function App() {
    const tabs = useTabs((state) => state);
    let component: ReactNode | null = null;

    switch (tabs.tab) {
        case 'editor':
            component = <Editor />;
            break;
        case 'output':
            component = <Output />;
            break;
        default:
            component = <h1>Component does not exist</h1>;
            break;
    }

    return (
        <main className="flex h-[100dvh] w-full justify-center bg-[url(https://w.wallhaven.cc/full/5g/wallhaven-5g22q5.png)] bg-cover bg-center p-2 text-sm lg:p-4 lg:text-base">
            <div className="flex w-full max-w-3xl flex-col gap-2">
                <Capsule />
                {component}
            </div>
        </main>
    );
}
