import './about-me.css';
import {
    GitHubIcon,
    LinkedInIcon,
} from '../components/Icons';

function SocialLink({ href, children, icon: Icon }) {
    return (
      <li>
        <a
          href={href}
          target="_blank"
          className="mt-4 group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
        >
          <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
          <span className="ml-4">{children}</span>
        </a>
      </li>
    )
}

function MailIcon(props) {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
        <path
          fillRule="evenodd"
          d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
        />
      </svg>
    )
}

function AboutMe() {

    return (
        <div className="relative bg-white page-margins">
            <div className="mx-auto max-w-7xl lg:flex lg:justify-between lg:px-8 xl:justify-end">
                <div className="lg:flex lg:w-1/2 lg:shrink lg:grow-0 xl:absolute xl:inset-y-0 xl:right-1/2 xl:w-1/2">
                <div className="relative h-80 lg:-ml-8 lg:h-auto lg:w-full lg:grow xl:ml-0">
                    <img
                    className="absolute inset-0 h-full w-full bg-gray-50 object-cover"
                    src="self-portrait.jpg"
                    alt=""
                    />
                </div>
                </div>
                <div className="px-6 lg:contents">
                    <div className="mx-auto max-w-2xl pb-24 pt-16 sm:pb-32 sm:pt-20 lg:ml-8 lg:mr-0 lg:w-full lg:max-w-lg lg:flex-none lg:pt-32 xl:w-1/2">
                        <p className="text-base font-semibold leading-7 text-indigo-600">Software Engineer</p>
                        <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Zein Youssef</h1>
                        <p className="mt-8">
                            Hello, My name is Zein and I'm a Full Stack Software Engineer that has worked for large corporations
                            like Amazon and Rocket Mortgage. I believe that as an Engineer it's very important to always be learning.
                            Even this website that you're on was a huge learning opportunity for me. It takes advantage of
                            Tailwind CSS for easy to use components and styling and is deployed to the web using AWS CodePipeline
                            to handle the automated deployment of changes to this app. I hope you enjoy your stay here!
                        </p>
                        <ul className="mt-8" role="list">
                            <SocialLink href="https://github.com/ZeinYoussef97" icon={GitHubIcon}>
                            Follow on GitHub
                            </SocialLink>
                            <SocialLink href="https://www.linkedin.com/in/zein-al-abbedine-youssef-3788b9160/" icon={LinkedInIcon}>
                            Follow on LinkedIn
                            </SocialLink>
                            <SocialLink
                                href="mailto:zein_youssef@hotmail.com"
                                icon={MailIcon}
                                className="border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
                            >
                            zein_youssef@hotmail.com
                            </SocialLink>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutMe;