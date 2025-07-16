interface CardProps {
    children: React.ReactNode
    className?: string
}

function Card({ children, className = '' }: CardProps): React.JSX.Element {
    return (
        <div className={`bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20 shadow-2xl ${className}`}>
            {children}
        </div>
    )
}

export default Card
