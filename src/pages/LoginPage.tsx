import { useState } from 'react'
import { Link } from 'react-router'
import { Button, Card, Input, LoadingSpinner } from '../components/ui'

function LoginPage(): React.JSX.Element {
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [loading, setLoading] = useState<boolean>(false)

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
        e.preventDefault()
        setLoading(true)

        // Simulate API call
        setTimeout(() => {
            console.log('Login attempt:', { email, password })
            alert(`ยินดีต้อนรับ! อีเมล: ${email}`)
            setLoading(false)
        }, 1000)
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-neutral-900 via-web-green-900 to-neutral-900 text-white flex items-center justify-center p-8">
            <Card className="max-w-md w-full">
                {/* Header */}
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-web-green-400 to-web-green-500 bg-clip-text text-transparent">
                        เข้าสู่ระบบ 🔐
                    </h1>
                    <p className="text-gray-300">
                        กรุณากรอกข้อมูลเพื่อเข้าสู่ระบบ
                    </p>
                </div>

                {/* Login Form */}
                <form onSubmit={handleSubmit} className="space-y-6">
                    <Input
                        type="email"
                        id="email"
                        label="อีเมล"
                        icon="📧"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        placeholder="your@email.com"
                    />

                    <Input
                        type="password"
                        id="password"
                        label="รหัสผ่าน"
                        icon="🔑"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        placeholder="••••••••"
                    />

                    <Button
                        type="submit"
                        disabled={loading}
                        className="w-full disabled:from-gray-500 disabled:to-gray-600 disabled:scale-100"
                    >
                        {loading ? (
                            <span className="flex items-center justify-center">
                                <LoadingSpinner className="h-5 w-5 -ml-1 mr-3" />
                                กำลังเข้าสู่ระบบ...
                            </span>
                        ) : (
                            'เข้าสู่ระบบ ✨'
                        )}
                    </Button>
                </form>

                {/* Footer */}
                <div className="mt-8 text-center">
                    <Link
                        to="/"
                        className="text-web-green-400 hover:text-web-green-300 transition-colors duration-300"
                    >
                        ← กลับสู่หน้าหลัก
                    </Link>
                </div>
            </Card>
        </div>
    )
}

export default LoginPage
