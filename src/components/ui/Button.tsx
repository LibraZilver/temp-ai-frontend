interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode
    variant?: 'primary' | 'secondary'
    size?: 'sm' | 'md' | 'lg'
    className?: string
}

function Button({
    children,
    variant = 'primary',
    size = 'md',
    className = '',
    ...props
}: ButtonProps): React.JSX.Element {
    const baseClasses = 'font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg'

    const variantClasses = {
        primary: 'bg-gradient-to-r from-web-green-500 to-web-green-600 hover:from-web-green-600 hover:to-web-green-700 text-white',
        secondary: 'bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20'
    }

    const sizeClasses = {
        sm: 'py-2 px-4 text-sm',
        md: 'py-3 px-6',
        lg: 'py-4 px-8 text-lg'
    }

    const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`

    return (
        <button className={classes} {...props}>
            {children}
        </button>
    )
}

export default Button
