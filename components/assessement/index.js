import React from 'react';
import {Tabs} from 'antd';
import {useQuery} from '@apollo/react-hooks';
import Achievements from './achivements';
import Items from './items'
import {ACHIEVEMENT_QUERY} from '../../graphql/achievement.query';
import {ITEM_QUERY} from '../../graphql/item.query';

const {TabPane} = Tabs;

const Assessments = () => {

    const achievementData = useQuery(ACHIEVEMENT_QUERY);
    const itemData = useQuery(ITEM_QUERY);

    if(achievementData.loading){
        return <p>Loading...</p>
    }
    if(achievementData.error){
        return <p>error</p>
    }
    return (
        <>
            <div className='wrapper'>
                <Tabs defaultActiveKey="1">
                    <TabPane tab="Achievements" key="1">
                        <Achievements achievements={achievementData.data.getAllAchievement}/>
                    </TabPane>
                    <TabPane tab="Items" key="2">
                        <Items items={itemData.data.getAllItems}/>
                    </TabPane>
                    {/*<TabPane tab="Creatures" key="3">*/}
                    {/*    <Creatures/>*/}
                    {/*</TabPane>*/}
                </Tabs>
            </div>
        </>
    )
};

export default Assessments