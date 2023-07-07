import githubLogo from './assets/github-mark-white.png'

export const Footer = () => {
    return (
        <div className="flex justify-center w-full p-3 space-x-2 backdrop-blur-xl bg-slate-800/70">
            <a href="https://github.com/davnig" target="_blank" className="w-7"><img src={githubLogo}
                                                                                     alt="Github profile"></img></a>
            <p>Davide Nigri</p>
        </div>
    )
}