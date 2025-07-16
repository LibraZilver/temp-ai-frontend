import { useState, useMemo } from 'react'

interface Day {
    date: Date
    otherMonth: boolean
}

interface DatePickerProps {
    value?: Date | null
    onChange?: (date: Date) => void
    placeholder?: string
    className?: string
    label?: string
    icon?: string
}

function DatePicker({
    value = null,
    onChange,
    placeholder = "Select date",
    className = "",
    label,
    icon
}: DatePickerProps): React.JSX.Element {
    const [selectedDate, setSelectedDate] = useState<Date | null>(value)
    const [showCalendar, setShowCalendar] = useState<boolean>(false)
    const today = new Date()
    const [currentMonth, setCurrentMonth] = useState<number>(today.getMonth())
    const [currentYear, setCurrentYear] = useState<number>(today.getFullYear())

    const formattedDate = useMemo(() =>
        selectedDate ? selectedDate.toLocaleDateString('th-TH') : '',
        [selectedDate]
    )

    const weekdays = ['อา', 'จ', 'อ', 'พ', 'พฤ', 'ศ', 'ส']

    const daysInMonth = (year: number, month: number): number =>
        new Date(year, month + 1, 0).getDate()

    const calendarDays = useMemo(() => {
        const days: Day[] = []
        const firstDayOfWeek = new Date(currentYear, currentMonth, 1).getDay()

        // Previous month days
        const prevMonthDays = daysInMonth(currentYear, currentMonth - 1)
        for (let i = firstDayOfWeek - 1; i >= 0; i--) {
            days.push({
                date: new Date(currentYear, currentMonth - 1, prevMonthDays - i),
                otherMonth: true,
            })
        }

        // Current month days
        const thisMonthDays = daysInMonth(currentYear, currentMonth)
        for (let i = 1; i <= thisMonthDays; i++) {
            days.push({
                date: new Date(currentYear, currentMonth, i),
                otherMonth: false
            })
        }

        // Next month days (fill to 6 weeks grid)
        const nextDays = 42 - days.length
        for (let i = 1; i <= nextDays; i++) {
            days.push({
                date: new Date(currentYear, currentMonth + 1, i),
                otherMonth: true
            })
        }

        return days
    }, [currentYear, currentMonth])

    const currentMonthName = useMemo(() =>
        new Date(currentYear, currentMonth).toLocaleString('th-TH', { month: 'long' }),
        [currentYear, currentMonth]
    )

    const toggleCalendar = (): void => setShowCalendar(!showCalendar)

    const prevMonth = (): void => {
        if (currentMonth === 0) {
            setCurrentMonth(11)
            setCurrentYear(currentYear - 1)
        } else {
            setCurrentMonth(currentMonth - 1)
        }
    }

    const nextMonth = (): void => {
        if (currentMonth === 11) {
            setCurrentMonth(0)
            setCurrentYear(currentYear + 1)
        } else {
            setCurrentMonth(currentMonth + 1)
        }
    }

    const selectDate = (day: Day): void => {
        if (day.otherMonth) return
        setSelectedDate(day.date)
        setShowCalendar(false)
        onChange?.(day.date)
    }

    const isSelected = (day: Day): boolean =>
        selectedDate !== null &&
        day.date.toDateString() === selectedDate.toDateString()

    return (
        <div className={`space-y-2 ${className}`}>
            {label && (
                <label className="block text-sm font-medium text-gray-300">
                    {icon && <span className="mr-2">{icon}</span>}
                    {label}
                </label>
            )}
            <div className="relative inline-block w-full">
                <input
                    type="text"
                    readOnly
                    value={formattedDate}
                    onClick={toggleCalendar}
                    placeholder={placeholder}
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-400 cursor-pointer focus:outline-none focus:ring-2 focus:ring-web-green-400 focus:border-transparent transition-all duration-300"
                />
                {showCalendar && (
                    <div className="absolute top-full left-0 mt-2 bg-neutral-900/95 backdrop-blur-sm border border-white/20 rounded-lg shadow-xl z-50 p-4 min-w-[280px]">
                        {/* Header */}
                        <div className="flex justify-between items-center mb-4">
                            <button
                                onClick={prevMonth}
                                className="p-2 hover:bg-white/10 rounded-lg transition-colors duration-200 text-white"
                                type="button"
                            >
                                ←
                            </button>
                            <span className="font-medium text-white">
                                {currentMonthName} {currentYear + 543}
                            </span>
                            <button
                                onClick={nextMonth}
                                className="p-2 hover:bg-white/10 rounded-lg transition-colors duration-200 text-white"
                                type="button"
                            >
                                →
                            </button>
                        </div>

                        {/* Weekdays */}
                        <div className="grid grid-cols-7 text-center mb-2">
                            {weekdays.map((day) => (
                                <span
                                    key={day}
                                    className="font-semibold text-gray-400 text-sm py-2"
                                >
                                    {day}
                                </span>
                            ))}
                        </div>

                        {/* Days */}
                        <div className="grid grid-cols-7 text-center">
                            {calendarDays.map((day, index) => (
                                <button
                                    key={index}
                                    onClick={() => selectDate(day)}
                                    type="button"
                                    className={`
                                        p-2 cursor-pointer rounded-lg transition-all duration-200 text-sm
                                        ${day.otherMonth ? 'text-gray-500' : 'text-white'}
                                        ${isSelected(day)
                                            ? 'bg-web-green-400 text-white shadow-lg'
                                            : 'hover:bg-white/10'
                                        }
                                        ${!day.otherMonth ? 'hover:bg-web-green-400/20' : ''}
                                    `}
                                >
                                    {day.date.getDate()}
                                </button>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default DatePicker
