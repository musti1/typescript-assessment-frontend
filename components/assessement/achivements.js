import React from 'react';
import {Table} from 'antd';
import Link from 'next/link';

const columns = [
    {
        title: 'Id',
        dataIndex: 'id',
        render: record => <Link href={{pathname: '/achivement', query: {id: record}}}><a>{record}</a></Link>,
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

class Creatures extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const data = this.props.achievements.map((achievement, index) => ({ ...achievement, key: index}));
        return (
            <>
                <Table dataSource={data} columns={columns}/>
            </>
        )
    }
}

export default Creatures;