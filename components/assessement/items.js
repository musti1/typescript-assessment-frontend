import React from 'react';
import { Table } from 'antd';
import Link from 'next/link';

import { ITEM_QUERY } from '../../graphql/item.query';
import { graphql } from 'react-apollo';
import * as compose from 'lodash.flowright';

const columns = [
    {
        title: 'Id',
        dataIndex: 'id',
        render: record => <Link href={{ pathname: '/item', query: { id: record } }}><a>{record}</a></Link>,
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
    render() {
        let data = [];
        if (!this.props.data.loading) {
            data = this.props.data.getAllItems.map((item, index) => ({ ...item, key: index }));
        }
        return (
            <>
                <Table dataSource={data} columns={columns} />
            </>
        )
    }
}

export default compose(
    graphql(ITEM_QUERY)
)(Creatures);