import { ArrowDownIcon, BriefcaseIcon } from "../components/Icons";
import { JobDescription } from "../components/JobDescription";
import { Role } from "../components/Role";

function Experience() {
    let resume = [
        {
          company: 'Rocket Mortgage',
          title: 'Full Stack Software Developer',
          logo: 'rocket.png',
          start: '2021',
          end: '2023',
          description: `At Rocket I developed web applications using popular web technologies including Angular12, NodeJS and .Net.
          The applications I worked on were used by partners that were looking to create mortgage loans for their clients`,
        },
        {
          company: 'Amazon',
          title: 'Software Engineer I',
          logo: 'amazon.png',
          start: '2020',
          end: '2021',
          description: `While at Amazon I was responsible for Researching, designing and implementing code in Java for the back-end of an
          automated accounting system.`,
        },
    ];

    return (
        <div className="relative bg-white page-margins">
            {/* <h1 className="mb-10 text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
                Zein Youssef
            </h1> */}
            <div className="flex justify-center mb-10">
                <img
                    className="h-96 w-auto bg-gray-50"
                    src="self-portrait2.jpg"
                    alt=""
                />
            </div>
            <div className="flex lg:justify-center">
                <div className="mx-auto max-w-7xl lg:flex lg:justify-center lg:px-8">
                    <div>
                    <ol className="space-y-4">
                            {resume.map((role) => (
                                <JobDescription role={role} />
                            ))}
                        </ol>
                    </div>
                    <div className="w-7xl lg:pl-16">
                        <div className="lg:flex">
                            <BriefcaseIcon className="h-6 w-6 flex-none" />
                            <span className="ml-3 font-semibold text-sm self-center">Work</span>
                        </div>
                        <ol className="mt-6 space-y-4">
                            {resume.map((role) => (
                                <Role role={role} />
                            ))}
                        </ol>
                        <button className="flex justify-center font-semibold text-sm w-full mt-6 transition hover:text-gray-500">
                            <span>Download CV</span>
                            <ArrowDownIcon className="mt-1 h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Experience;