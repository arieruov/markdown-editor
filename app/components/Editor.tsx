export default function Editor() {
    return (
        <div className="h-full w-full rounded-md border border-neutral-700 bg-neutral-100/10 p-2 shadow backdrop-blur-xs">
            <textarea
                placeholder="Markdown Text..."
                className="h-full w-full resize-none border-none bg-transparent text-white outline-none"
            ></textarea>
        </div>
    );
}
