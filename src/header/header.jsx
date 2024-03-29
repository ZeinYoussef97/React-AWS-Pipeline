import './header.css';

function Header() {
    return (
        <div class="header">
            <nav class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
                <div class="hidden lg:flex lg:gap-x-12">
                    <a href="/" class="text-sm font-semibold leading-6 text-gray-900">About Me</a>
                    <a href="experience" class="text-sm font-semibold leading-6 text-gray-900">Experience</a>
                    <a href="projects" class="text-sm font-semibold leading-6 text-gray-900">Projects</a>
                </div>
            </nav>
        </div>
    );
}

export default Header;
        