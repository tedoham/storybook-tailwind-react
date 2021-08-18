import React from 'react';
import TButton from './TButton';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
title: 'Tailwind/TButton',
component: TButton,
argTypes: {
    backgroundColor: { control: 'color' },
},
} as ComponentMeta<typeof TButton>;


const Template: ComponentStory<typeof TButton> = (args) => <TButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    variant: 'primary',
    label: "Primary",
    size: "medium",
    backgroundColor: "#F36F21"
};

export const Secondary = Template.bind({});
Secondary.args = {
    variant: 'secondary',
    label: "Secondary",
    size: "large",
    backgroundColor: "white"
}

export const Small = Template.bind({});
Small.args = {
    variant: 'primary',
    label: "Small",
    size: "small",
    backgroundColor: "#F36F21"
}

export const Medium = Template.bind({});
Medium.args = {
    variant: 'primary',
    label: "Medium",
    size: "medium",
    backgroundColor: "#F36F21"
}
export const Large = Template.bind({});
Large.args = {
    variant: 'primary',
    label: "Large",
    size: "large",
    backgroundColor: "#F36F21"
}

export const Disabled = Template.bind({});
Disabled.args = {
    variant: 'primary',
    label: "Disabled",
    size: "medium",
    backgroundColor: "#949496"
}

export const Pressed = Template.bind({});
Pressed.args = {
    variant: 'primary',
    label: "Pressed",
    size: "medium",
    backgroundColor: "#BE4915"
}