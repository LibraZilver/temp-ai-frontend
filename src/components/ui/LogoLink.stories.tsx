import type { Meta, StoryObj } from '@storybook/react';
import LogoLink from './LogoLink';

const meta: Meta<typeof LogoLink> = {
    title: 'UI/LogoLink',
    component: LogoLink,
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
        href: {
            control: { type: 'text' },
        },
        src: {
            control: { type: 'text' },
        },
        alt: {
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
        href: 'https://reactjs.org',
        src: '/vite.svg',
        alt: 'React Logo',
    },
};

export const ReactLogo: Story = {
    args: {
        href: 'https://reactjs.org',
        src: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
        alt: 'React Logo',
    },
};

export const ViteLogo: Story = {
    args: {
        href: 'https://vitejs.dev',
        src: 'https://vitejs.dev/logo.svg',
        alt: 'Vite Logo',
    },
};

export const CustomSize: Story = {
    args: {
        href: 'https://example.com',
        src: '/vite.svg',
        alt: 'Custom Size Logo',
        className: 'opacity-80',
    },
};

export const WithCustomStyling: Story = {
    args: {
        href: 'https://example.com',
        src: '/vite.svg',
        alt: 'Custom Styled Logo',
        className: 'grayscale hover:grayscale-0',
    },
};

export const MultipleLogos: Story = {
    render: () => (
        <div className="flex gap-6">
            <LogoLink
                href="https://reactjs.org"
                src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
                alt="React"
            />
            <LogoLink
                href="https://vitejs.dev"
                src="https://vitejs.dev/logo.svg"
                alt="Vite"
            />
            <LogoLink
                href="https://storybook.js.org"
                src="https://storybook.js.org/images/placeholders/350x150.png"
                alt="Storybook"
            />
        </div>
    ),
};
