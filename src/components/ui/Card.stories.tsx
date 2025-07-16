import type { Meta, StoryObj } from '@storybook/react';
import Card from './Card';

const meta: Meta<typeof Card> = {
    title: 'UI/Card',
    component: Card,
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
        children: {
            control: { type: 'text' },
        },
        className: {
            control: { type: 'text' },
        },
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        children: 'This is a card with default styling',
    },
};

export const WithContent: Story = {
    args: {
        children: (
            <div>
                <h3 className="text-xl font-bold text-white mb-4">Card Title</h3>
                <p className="text-gray-300 mb-4">
                    This is a card with more complex content including a title and paragraph text.
                </p>
                <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
                    Action Button
                </button>
            </div>
        ),
    },
};

export const CustomClass: Story = {
    args: {
        children: 'Card with custom styling',
        className: 'bg-gradient-to-r from-purple-500/20 to-pink-500/20 border-purple-500/30',
    },
};

export const LargeContent: Story = {
    args: {
        children: (
            <div className="max-w-md">
                <h2 className="text-2xl font-bold text-white mb-6">Large Card</h2>
                <p className="text-gray-300 mb-4">
                    This is a larger card with more content to demonstrate how the card component
                    handles different amounts of content. The card will expand to fit the content
                    while maintaining its beautiful glass-morphism design.
                </p>
                <div className="flex gap-2">
                    <button className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded text-sm">
                        Accept
                    </button>
                    <button className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-sm">
                        Decline
                    </button>
                </div>
            </div>
        ),
    },
};
