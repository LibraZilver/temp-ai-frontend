import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App(): React.JSX.Element {
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
    <div className="min-h-screen bg-neutral-50 text-neutral-900 flex flex-col items-center justify-center p-8">
      <div className="flex space-x-8 mb-8">
        <a href="https://vite.dev" target="_blank" className="transition-transform hover:scale-110">
          <img src={viteLogo} className="h-16 w-16 hover:drop-shadow-lg" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" className="transition-transform hover:scale-110">
          <img src={reactLogo} className="h-16 w-16 hover:drop-shadow-lg animate-spin-slow" alt="React logo" />
        </a>
      </div>

      <h1 className="text-4xl md:text-6xl font-bold mb-8 text-center bg-gradient-to-r from-web-green-500 to-web-green-600 bg-clip-text text-transparent">
        {greeting}
      </h1>

      <div className="bg-white border border-neutral-200 rounded-lg p-8 shadow max-w-md w-full text-center">
        <button
          onClick={changeGreeting}
          className="bg-web-green-500 hover:bg-web-green-600 text-white font-semibold py-3 px-6 rounded-md transition-all duration-300 transform hover:scale-105 shadow-sm mb-6"
        >
          เปลี่ยนคำทักทาย 🌟
        </button>

        <p className="text-neutral-600 mb-4">
          สร้างด้วย <strong className="text-web-green-600">React + Vite + Tailwind CSS v4</strong>
        </p>

        <p className="text-neutral-500 text-sm">
          พร้อมสำหรับการพัฒนาเว็บแอปพลิเคชันที่ทันสมัย ⚡
        </p>
      </div>

      <p className="text-center text-neutral-500 mt-8 max-w-lg">
        ยินดีต้อนรับสู่โลกของการพัฒนาเว็บด้วย React และ Tailwind CSS v4! 🚀
      </p>
    </div>
  )
}

export default App
