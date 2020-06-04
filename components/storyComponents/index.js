import React, { Component } from 'react';
import { Tooltip } from 'antd';
import classNames from 'classnames';
import { Calendar } from '@fullcalendar/core';
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import moment from 'moment';
import './index.less'
moment.locale('zh-cn');

export default class StoryComponents extends Component {
    state = {
        obj: {}
    };
    render() {
        return (
            <div>
                <FullCalendar
                    defaultView="dayGridMonth"
                    plugins={[ dayGridPlugin ]}
                />
            </div>
        )
    }
}
