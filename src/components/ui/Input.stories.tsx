import type { Meta, StoryObj } from '@storybook/react';
import Input from './Input';

const meta: Meta<typeof Input> = {
    title: 'UI/Input',
    component: Input,
    parameters: {
        layout: 'centered',
        backgrounds: {
            default: 'dark',
            values: [
                { name: 'dark', value: '#0f172a' },
                { name: 'light', value: '#ffffff' },
            ],
        },
    },
    tags: ['autodocs'],
    argTypes: {
        label: {
            control: { type: 'text' },
        },
        icon: {
            control: { type: 'text' },
        },
        placeholder: {
            control: { type: 'text' },
        },
        type: {
            control: { type: 'select' },
            options: ['text', 'email', 'password', 'number', 'tel', 'url'],
        },
        disabled: {
            control: { type: 'boolean' },
        },
        required: {
            control: { type: 'boolean' },
        },
    },
    decorators: [
        (Story) => (
            <div className="w-80">
                <Story />
            </div>
        ),
    ],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        label: 'Username',
        placeholder: 'Enter your username',
        id: 'username',
    },
};

export const WithIcon: Story = {
    args: {
        label: 'Email',
        icon: '📧',
        placeholder: 'Enter your email',
        type: 'email',
        id: 'email',
    },
};

export const Password: Story = {
    args: {
        label: 'Password',
        icon: '🔒',
        placeholder: 'Enter your password',
        type: 'password',
        id: 'password',
    },
};

export const Disabled: Story = {
    args: {
        label: 'Disabled Input',
        placeholder: 'This input is disabled',
        disabled: true,
        id: 'disabled',
    },
};

export const Required: Story = {
    args: {
        label: 'Required Field',
        placeholder: 'This field is required',
        required: true,
        id: 'required',
    },
};

export const WithValue: Story = {
    args: {
        label: 'Username',
        placeholder: 'Enter your username',
        value: 'john_doe',
        id: 'username-filled',
    },
};

export const Number: Story = {
    args: {
        label: 'Age',
        icon: '🔢',
        placeholder: 'Enter your age',
        type: 'number',
        min: 0,
        max: 120,
        id: 'age',
    },
};
