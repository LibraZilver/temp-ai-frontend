import type { Meta, StoryObj } from '@storybook/react'
import DatePicker from './DatePicker'

const meta: Meta<typeof DatePicker> = {
    title: 'UI/DatePicker',
    component: DatePicker,
    parameters: {
        layout: 'centered',
        backgrounds: {
            default: 'dark',
            values: [
                {
                    name: 'dark',
                    value: '#171717'
                }
            ]
        }
    },
    tags: ['autodocs'],
    argTypes: {
        onChange: { action: 'changed' },
        value: { control: 'date' },
        placeholder: { control: 'text' },
        label: { control: 'text' },
        icon: { control: 'text' },
        className: { control: 'text' }
    },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        placeholder: 'เลือกวันที่'
    },
}

export const WithLabel: Story = {
    args: {
        label: 'วันเกิด',
        icon: '🎂',
        placeholder: 'เลือกวันเกิดของคุณ'
    },
}

export const WithIcon: Story = {
    args: {
        label: 'วันที่เข้าร่วม',
        icon: '📅',
        placeholder: 'เลือกวันที่'
    },
}

export const WithPreselectedDate: Story = {
    args: {
        value: new Date(),
        label: 'วันที่ปัจจุบัน',
        icon: '📆'
    },
}
