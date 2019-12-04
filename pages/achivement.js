import {withRouter} from 'next/router';
import Head from 'next/head';
import Link from 'next/link'
import {useQuery} from '@apollo/react-hooks';
import {Icon, Card} from 'antd';
import Nav from '../components/nav';
import Comments from '../components/assessement/comments';
import {SINGLE_ACHIEVEMENT_QUERY} from '../graphql/achievement.query'

const Achievement = (props) => {
    const {data, loading, error} = useQuery(SINGLE_ACHIEVEMENT_QUERY(props.router.query.foo));
    if(loading){
        return <p>Loading...</p>
    }
    if(error){
        return <p>Error...</p>
    }
    return (
        <>
            <Head>
                <title>Achivement</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <Nav/>
            <div className='wrapper'>
                <Link href="/">
                    <span style={{cursor: 'pointer'}}><Icon type="arrow-left"/> Back</span>
                </Link>
                <Card style={{marginTop: 30, marginBottom: 10}}>
                    <h1>Achivement foo {data.getAchievement.id}</h1>
                </Card>
                <Card>
                    <Comments/>
                </Card>

            </div>
        </>
    )

}

export default withRouter(Achievement)