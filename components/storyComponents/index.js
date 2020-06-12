import React, { Component } from 'react';
import { Tooltip } from 'antd';
import classNames from 'classnames';
import { Calendar } from '@fullcalendar/core';
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import moment from 'moment';
import style from './storyComponents.less'
import './index.less'
import emitter from '../../utils/Evt';

moment.locale('zh-cn');

export default class StoryComponents extends Component {
    state = {
        obj: {}
    };
    render() {
        return (
            <div className={style.FullcalendarWarp}>
                <div className={style.FullcalendarLeft}>
                    <div>11111</div>
                    <div>11111</div>
                    <div>11111</div>
                </div>
                <div className={style.FullcalendarRigth}>
                    <FullCalendar
                      defaultView="dayGridMonth"
                      plugins={[ dayGridPlugin ]}
                    />
                </div>
                <div>
            </div>
            </div>
        )
    }

    componentDidMount () { //在组件挂载完成后声明一个自定义事件
        emitter.addListener('callCustom', (msg) => {
            this.setState({
                msg: msg
            });
        })
    }

    componentWillUnmount () { //组件销毁前移除事件监听
        emitter.removeListener('callCustom', (msg) => {
            this.setState({
                msg:  msg
            });
        })
    }
}
