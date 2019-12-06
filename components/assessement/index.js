import React from 'react';
import { Tabs } from 'antd';
import Achievements from './achivements';
import Items from './items';

const { TabPane } = Tabs;

const Assessments = () => {
    return (
        <>
            <div className='wrapper'>
                <Tabs defaultActiveKey="1">
                    <TabPane tab="Achievements" key="1">
                        <Achievements />
                    </TabPane>
                    <TabPane tab="Items" key="2">
                        <Items />
                    </TabPane>
                </Tabs>
            </div>
        </>
    )
};

export default Assessments;