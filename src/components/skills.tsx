export function Skills({
    skillImageLink,
    skillImageAlt,
    skillImageTitle,
}: {
    skillImageLink: string;
    skillImageAlt?: string;
    skillImageTitle: string;
}) {
    return (
        <div className="flex flex-col items-center justify-evenly w-24 h-24 text-slate-700 shadow-xl rounded-xl hover:scale-110 ease-out duration-300">
            <img
                src={skillImageLink}
                alt={skillImageAlt}
                className="size-12 rounded-xl"
            />
            <h2 className="text-sm">{skillImageTitle}</h2>
        </div>
    );
}
