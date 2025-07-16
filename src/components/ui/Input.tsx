interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string
    icon?: string
}

function Input({ label, icon, className = '', ...props }: InputProps): React.JSX.Element {
    return (
        <div>
            <label htmlFor={props.id} className="block text-sm font-medium text-gray-300 mb-2">
                {label} {icon}
            </label>
            <input
                className={`w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-web-green-400 focus:border-transparent transition-all duration-300 ${className}`}
                {...props}
            />
        </div>
    )
}

export default Input
