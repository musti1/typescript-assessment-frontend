import React from 'react';
import { Table } from 'antd';
import Link from 'next/link';

import { ACHIEVEMENT_QUERY } from '../../graphql/achievement.query';
import { graphql } from 'react-apollo';
import * as compose from 'lodash.flowright';


const columns = [
    {
        title: 'Id',
        dataIndex: 'id',
        render: record => <Link href={{ pathname: '/achivement', query: { id: record } }}><a>{record}</a></Link>,
    },
    {
        title: 'Title',
        dataIndex: 'title',
    },
    {
        title: 'Description',
        dataIndex: 'description',
    },
    {
        title: 'Points',
        dataIndex: 'points',
    },
    {
        title: 'Icon',
        dataIndex: 'icon',
    },
    {
        title: 'Faction Id',
        dataIndex: 'factionId',
    },

];

class Achievements extends React.Component {

    render() {
        let data = [];
        if (!this.props.data.loading) {
            data = this.props.data.getAllAchievement.map((achievement, index) => ({ ...achievement, key: index }));
        }
        return (
            <>
                <Table dataSource={data} columns={columns} />
            </>
        )
    }
}

export default compose(
    graphql(ACHIEVEMENT_QUERY)
)(Achievements);