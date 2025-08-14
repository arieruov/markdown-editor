import Capsule from './components/Capsule';
import Editor from './components/Editor';

export default function App() {
    return (
        <main className="flex h-[100dvh] w-full justify-center bg-[url(https://w.wallhaven.cc/full/5g/wallhaven-5g22q5.png)] bg-cover bg-center p-2 text-sm lg:p-4 lg:text-base">
            <div className="flex w-full max-w-3xl flex-col gap-2">
                <Capsule />
                <Editor />
            </div>
        </main>
    );
}
