export function Skills({
    imageLink,
    imageAlt,
    imageTitle,
}: {
    imageLink: string;
    imageAlt?: string;
    imageTitle: string;
}) {
    return (
        <div className="flex flex-col items-center justify-evenly w-24 h-24 text-slate-700 shadow-xl rounded-xl">
            <img
                src={imageLink}
                alt={imageAlt}
                className="size-12 rounded-xl"
            />
            <h2 className="text-sm">{imageTitle}</h2>
        </div>
    );
}
