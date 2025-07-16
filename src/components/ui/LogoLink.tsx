interface LogoLinkProps {
    href: string
    src: string
    alt: string
    className?: string
}

function LogoLink({ href, src, alt, className = '' }: LogoLinkProps): React.JSX.Element {
    return (
        <a
            href={href}
            target="_blank"
            className={`transition-transform hover:scale-110 ${className}`}
        >
            <img
                src={src}
                className="h-16 w-16 hover:drop-shadow-lg"
                alt={alt}
            />
        </a>
    )
}

export default LogoLink
