import type { Meta, StoryObj } from '@storybook/react';
import LoadingSpinner from './LoadingSpinner';

const meta: Meta<typeof LoadingSpinner> = {
    title: 'UI/LoadingSpinner',
    component: LoadingSpinner,
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
        className: {
            control: { type: 'text' },
        },
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {},
};

export const Small: Story = {
    args: {
        className: 'h-4 w-4',
    },
};

export const Large: Story = {
    args: {
        className: 'h-8 w-8',
    },
};

export const ExtraLarge: Story = {
    args: {
        className: 'h-12 w-12',
    },
};

export const CustomColor: Story = {
    args: {
        className: 'h-8 w-8 text-blue-500',
    },
};

export const InButton: Story = {
    render: () => (
        <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded flex items-center gap-2">
            <LoadingSpinner className="h-4 w-4" />
            Loading...
        </button>
    ),
};

export const InCard: Story = {
    render: () => (
        <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20 shadow-2xl">
            <div className="flex flex-col items-center gap-4">
                <LoadingSpinner className="h-8 w-8" />
                <p className="text-white">Loading content...</p>
            </div>
        </div>
    ),
};
