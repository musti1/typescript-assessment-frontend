import React from 'react';
import { Table } from 'antd';
import Link from 'next/link';
const columns = [
    {
        title: 'Id',
        dataIndex: 'id',
        render: record => <Link href={{pathname: '/item', query: {id: record}}}><a>{record}</a></Link>,
    },
    {
        title: 'Name',
        dataIndex: 'name',
    },
    {
        title: 'Description',
        dataIndex: 'description',
    },

    {
        title: 'Icon',
        dataIndex: 'icon',
    },
    {
        title: 'Buy Price',
        dataIndex: 'buyPrice',
    },
    {
        title: 'Sell Price',
        dataIndex: 'sellPrice',
    },

];

class Creatures extends React.Component {
    constructor(props){
        super(props)
    }
    render() {
        const data = this.props.items.map((item, index) => ({ ...item, key: index}));
        return (
            <>
                <Table dataSource={data} columns={columns} />
            </>
        )
    }
}

export default Creatures;