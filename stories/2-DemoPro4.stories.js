import React, { Component } from 'react';
import { action } from '@storybook/addon-actions';
import { Button } from '@storybook/react/demo';
import { TreeSelect } from 'antd';
import StoryComponents from '../components/storyComponents/index'
const { TreeNode } = TreeSelect;


export default {
    title: 'FullCalendar 日历组件',
    component: Button,
};

export const FullCalendarDemo1 = () => (
     <div>
         <StoryComponents/>
     </div>
)

