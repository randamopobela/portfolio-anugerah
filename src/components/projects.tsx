export function Projects({
    projectName,
    projectDesc,
    projectLink,
    projectRepo,
    projectImageLink,
    projectImageAlt,
}: {
    projectName: string;
    projectDesc?: string;
    projectLink?: string;
    projectRepo?: string;
    projectImageLink?: string;
    projectImageAlt?: string;
}) {
    return (
        <div className="flex flex-col items-center justify-evenly w-24 h-24 text-slate-700 shadow-xl rounded-xl hover:scale-110 ease-out duration-300">
            <img
                src={projectImageLink}
                alt={projectImageAlt}
                className="size-12 rounded-xl"
            />
            <h2 className="text-sm">{projectName}</h2>
        </div>
    );
}
