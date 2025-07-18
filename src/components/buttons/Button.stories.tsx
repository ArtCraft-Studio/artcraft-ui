import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from './Button';
import { PlayIcon } from '../icons';

const meta: Meta<typeof Button> = {
  title: 'Components/Buttons/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'outline', 'text'],
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
    animation: {
      control: 'select',
      options: ['none', 'pulse', 'bounce', 'shake', 'rotate'],
    },
    iconPosition: {
      control: 'radio',
      options: ['left', 'right'],
    },
    impression: {
      control: 'boolean',
      description: 'Show as impression button with play icon',
    },
    impressionIconSize: {
      control: 'number',
      description: 'Size of the impression play icon',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: 'Button',
    variant: 'primary',
    size: 'medium',
  },
};

export const WithIcon: Story = {
  args: {
    children: 'Play',
    icon: <PlayIcon />,
    iconPosition: 'left',
    variant: 'primary',
    size: 'medium',
  },
};

export const IconOnly: Story = {
  args: {
    icon: <PlayIcon />,
    variant: 'primary',
    size: 'medium',
    'aria-label': 'Play',
  },
};

export const WithAnimation: Story = {
  args: {
    children: 'Animated Button',
    icon: <PlayIcon />,
    animation: 'pulse',
    variant: 'primary',
    size: 'medium',
  },
};

export const Variants: Story = {
  render: () => (
    <div className="flex gap-3">
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="text">Text</Button>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="flex gap-3 items-center">
      <Button size="small">Small</Button>
      <Button size="medium">Medium</Button>
      <Button size="large">Large</Button>
    </div>
  ),
};

export const ImpressionButton: Story = {
  args: {
    children: 'View Impressions',
    impression: true,
    impressionIconSize: 14,
  },
};

export const ImpressionButtons: Story = {
  render: () => (
    <div className="flex gap-3 items-center">
      <Button impression>Impressions</Button>
      <Button impression impressionIconSize={16}>
        View All
      </Button>
      <Button impression disabled>
        Disabled
      </Button>
    </div>
  ),
};
