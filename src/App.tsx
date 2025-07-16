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
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>{greeting}</h1>
      <div className="card">
        <button onClick={changeGreeting}>
          เปลี่ยนคำทักทาย 🌟
        </button>
        <p>
          สร้างด้วย <strong>React + Vite</strong>
        </p>
        <p>
          พร้อมสำหรับการพัฒนาเว็บแอปพลิเคชันที่ทันสมัย ⚡
        </p>
      </div>
      <p className="read-the-docs">
        ยินดีต้อนรับสู่โลกของการพัฒนาเว็บด้วย React! 🚀
      </p>
    </>
  )
}

export default App
