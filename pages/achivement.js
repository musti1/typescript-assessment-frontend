import { withRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link'
import { useQuery } from '@apollo/react-hooks';
import { Icon, Card } from 'antd';
import Nav from '../components/nav';
import Comments from '../components/assessement/comments';

import { SINGLE_ACHIEVEMENT_QUERY } from '../graphql/achievement.query';


const Achievement = (props) => {
    const { data, loading, error } = useQuery(SINGLE_ACHIEVEMENT_QUERY(props.router.query.id));
    if (loading) {
        return (<div>
            <Head>
                <title>Achivement</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <p>Loading...</p></div>)
    }
    if (error) {
        return (<div>
            <Head>
                <title>Achivement</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <p>Loading...</p></div>)
    }
    return (
        <>
            <Head>
                <title>Achivement</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Nav />
            <div className='wrapper'>
                <Link href="/">
                    <span style={{ cursor: 'pointer' }}><Icon type="arrow-left" /> Back</span>
                </Link>
                <Card style={{ marginTop: 30, marginBottom: 10 }}>
                    <div className='wrapper details'>
                        <h1>Achivement details</h1>
                        <div className='cloumn'>
                            <div className='row'>
                                <label>Title</label>
                                <span>{data.getAchievement.title}</span>
                            </div>
                            <div className='row'>
                                <label>Description</label>
                                <span>{data.getAchievement.description}</span>
                            </div>
                            <div className='row'>
                                <label>Points</label>
                                <span>{data.getAchievement.points}</span>
                            </div>
                            <div className='row'>
                                <label>Account Wide</label>
                                <span>{data.getAchievement.accountWide ? 'available' : 'unavailable'}</span>
                            </div>
                        </div>
                        <div className='cloumn'>
                            <div className='row'>
                                <h3>Criteria</h3>
                            </div>
                            <div className='row'>
                                <label>Order Index</label>
                                <span>{data.getAchievement.criteria[0].orderIndex}</span>
                            </div>
                            <div className='row'>
                                <label>Max</label>
                                <span>{data.getAchievement.criteria[0].max}</span>
                            </div>
                            <div className='row'>
                                <label>Description</label>
                                <span>{data.getAchievement.criteria[0].description}</span>
                            </div>
                        </div>
                    </div>
                </Card>
                <Card>
                    <Comments achievementId={props.router.query.id} type='achievement' />
                </Card>
            </div>
        </>
    )

}


export default withRouter(Achievement)