/* eslint-disable react/jsx-no-undef */
import React from 'react';
import { Primary } from '../Button/Button.stories';
import { Large } from '../Input/Input.stories';

export default {
    title: 'Form/Subscription'
}

export const PrimarySubscription = () => (
    <>
        <Large />
        <Primary />
    </>
)