import { Project } from '../components/Project';
import './projects.css';

function Projects() {
    let projects = [
        {
          title: 'Quikyr',
          logo: 'quikyr.png',
          description: `An online appointment scheduling app that revolutionizes how small businesses operate.`,
          link: 'https://quikyr.com',
          linkName: 'quikyr.com',
        },
        {
            title: 'Split Action',
            logo: 'splitaction.png',
            description: `A sports betting app that makes analyzing betting odds simpler, easier and more transparent.`,
            link: 'https://splitaction.com',
            linkName: 'splitaction.com',
        },
    ];

    return (
        <div>
            <div className="justify-center grid mt-12">
                <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Projects</h1>
                <p className="mt-8 project-description">
                    Here's a list of some of the projects I've worked on in the past few years. Feel free to check them
                    out if any of them peak your interest!
                </p>
            </div>
            <div className="flex justify-center mt-16">
                <div className="mt-6 columns-2 w-6/12">
                    {projects.map((project) => (
                        <Project project={project} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Projects;