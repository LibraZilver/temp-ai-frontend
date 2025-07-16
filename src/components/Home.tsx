import { useState } from 'react'
import { Link } from 'react-router-dom'
import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'

function Home(): React.JSX.Element {
    const [greeting, setGreeting] = useState<string>('Hello World! 🌍')

    const greetings: string[] = [
        'Hello World! 🌍',
        'สวัสดีโลก! 🇹🇭',
        'Bonjour le monde! 🇫🇷',
        'Hola Mundo! 🇪🇸',
        '你好世界! 🇨🇳',
        'こんにちは世界! 🇯🇵'
    ]

    const changeGreeting = (): void => {
        const currentIndex = greetings.indexOf(greeting)
        const nextIndex = (currentIndex + 1) % greetings.length
        setGreeting(greetings[nextIndex])
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white flex flex-col items-center justify-center p-8">
            <div className="flex space-x-8 mb-8">
                <a href="https://vite.dev" target="_blank" className="transition-transform hover:scale-110">
                    <img src={viteLogo} className="h-16 w-16 hover:drop-shadow-lg" alt="Vite logo" />
                </a>
                <a href="https://react.dev" target="_blank" className="transition-transform hover:scale-110">
                    <img src={reactLogo} className="h-16 w-16 hover:drop-shadow-lg animate-spin-slow" alt="React logo" />
                </a>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-8 text-center bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                {greeting}
            </h1>

            <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20 shadow-2xl max-w-md w-full text-center">
                <button
                    onClick={changeGreeting}
                    className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg mb-6"
                >
                    เปลี่ยนคำทักทาย 🌟
                </button>

                <p className="text-gray-300 mb-4">
                    สร้างด้วย <strong className="text-cyan-400">React + Vite + Tailwind CSS v4</strong>
                </p>

                <p className="text-gray-400 text-sm mb-6">
                    พร้อมสำหรับการพัฒนาเว็บแอปพลิเคชันที่ทันสมัย ⚡
                </p>

                {/* Login Link */}
                <Link
                    to="/login"
                    className="inline-block bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                    เข้าสู่ระบบ 🔐
                </Link>
            </div>

            <p className="text-center text-gray-400 mt-8 max-w-lg">
                ยินดีต้อนรับสู่โลกของการพัฒนาเว็บด้วย React และ Tailwind CSS v4! 🚀
            </p>
        </div>
    )
}

export default Home
