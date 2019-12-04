import {withRouter} from 'next/router';
import Head from 'next/head';
import Link from 'next/link'
import {Icon, Card} from 'antd';
import {useQuery} from '@apollo/react-hooks';
import Nav from '../components/nav';
import Comments from '../components/assessement/comments';
import {SINGLE_ITEM_QUERY} from '../graphql/item.query'

const Item = (props) => {
    const {data, loading, error} = useQuery(SINGLE_ITEM_QUERY(props.router.query.id));
    if (loading) {
        return <p>Loading...</p>
    }
    if (error) {
        return <p>Error...</p>
    }


    return (
        <>
            <Head>
                <title>Item</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <Nav/>
            <div className='wrapper'>
                <Link href="/">
                    <span style={{cursor: 'pointer'}}><Icon type="arrow-left"/> Back</span>
                </Link>
                <Card style={{marginTop: 30, marginBottom: 10}}>
                    <h1>Item foo {data.getItem.id}</h1>
                </Card>
                <Card>
                    <Comments/>
                </Card>

            </div>
        </>
    )

};

export default withRouter(Item)