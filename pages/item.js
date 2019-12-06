import { withRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link'
import { Icon, Card } from 'antd';
import { useQuery } from '@apollo/react-hooks';
import Nav from '../components/nav';
import Comments from '../components/assessement/comments';
import { SINGLE_ITEM_QUERY } from '../graphql/item.query'

const Item = (props) => {
    const { data, loading, error } = useQuery(SINGLE_ITEM_QUERY(props.router.query.id));
    if (loading) {
        return <div>Loading...</div>
    }
    if (error) {
        return <div>Error...</div>
    }


    return (
        <>
            <Head>
                <title>Item</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Nav />
            <div className='wrapper'>
                <Link href="/">
                    <span style={{ cursor: 'pointer' }}><Icon type="arrow-left" /> Back</span>
                </Link>
                <Card style={{ marginTop: 30, marginBottom: 10 }}>
                    <div className='wrapper details'>
                        <h1>Item details</h1>
                        <div className='cloumn'>
                            <div className='row'>
                                <label>Id</label>
                                <span>{data.getItem.id}</span>
                            </div>
                            <div className='row'>
                                <label>Name</label>
                                <span>{data.getItem.name}</span>
                            </div>
                            <div className='row'>
                                <label>Name Description</label>
                                <span>{data.getItem.nameDescription}</span>
                            </div>
                            <div className='row'>
                                <label>Name Description Color</label>
                                <span>{data.getItem.nameDescriptionColor}</span>
                            </div>
                            <div className='row'>
                                <label>Armor</label>
                                <span>{data.getItem.armor}</span>
                            </div>
                            <div className='row'>
                                <label>Artifact Id</label>
                                <span>{data.getItem.artifactId}</span>
                            </div>
                            <div className='row'>
                                <label>Base Armor</label>
                                <span>{data.getItem.baseArmor}</span>
                            </div>
                            <div className='row'>
                                <label>Buy Price</label>
                                <span>{data.getItem.buyPrice}</span>
                            </div>
                            <div className='row'>
                                <label>containerSlots</label>
                                <span>{data.getItem.containerSlots}</span>
                            </div>
                            <div className='row'>
                                <label>Context</label>
                                <span>{data.getItem.context}</span>
                            </div>
                            <div className='row'>
                                <label>description</label>
                                <span>{data.getItem.description}</span>
                            </div>
                            <div className='row'>
                                <label>Display Info Id</label>
                                <span>{data.getItem.displayInfoId}</span>
                            </div>
                            <div className='row'>
                                <label>Equippable</label>
                                <span>{data.getItem.equippable ? 'Yes' : 'No'}</span>
                            </div>
                            <div className='row'>
                                <label>Has Sockets</label>
                                <span>{data.getItem.hasSockets ? 'Yes' : 'No'}</span>
                            </div>
                            <div className='row'>
                                <label>Heroic Tooltip</label>
                                <span>{data.getItem.heroicTooltip ? 'Yes' : 'No'}</span>
                            </div>
                            <div className='row'>
                                <label>Icon</label>
                                <span>{data.getItem.icon}</span>
                            </div>
                            <div className='row'>
                                <label>Inventory Type</label>
                                <span>{data.getItem.inventoryType}</span>
                            </div>
                            <div className='row'>
                                <label>Auctionable</label>
                                <span>{data.getItem.isAuctionable ? 'Yes' : "No"}</span>
                            </div>
                            <div className='row'>
                                <label>Item Bind</label>
                                <span>{data.getItem.itemBind}</span>
                            </div>
                            <div className='row'>
                                <label>Item Class</label>
                                <span>{data.getItem.itemClass}</span>
                            </div>
                            <div className='row'>
                                <label>Item Level</label>
                                <span>{data.getItem.itemLevel}</span>
                            </div>
                            <div className='row'>
                                <label>Item Sub-Class</label>
                                <span>{data.getItem.itemSubClass}</span>
                            </div>
                            <div className='row'>
                                <label>maxCount</label>
                                <span>{data.getItem.maxCount}</span>
                            </div>
                            <div className='row'>
                                <label>Max Durability</label>
                                <span>{data.getItem.maxDurability}</span>
                            </div>
                            <div className='row'>
                                <label>Min Faction Id</label>
                                <span>{data.getItem.minFactionId}</span>
                            </div>
                            <div className='row'>
                                <label>Min Reputation</label>
                                <span>{data.getItem.minReputation}</span>
                            </div>
                            <div className='row'>
                                <label>Quality</label>
                                <span>{data.getItem.quality}</span>
                            </div>
                            <div className='row'>
                                <label>Required Level</label>
                                <span>{data.getItem.requiredLevel}</span>
                            </div>
                            <div className='row'>
                                <label>Required Skill</label>
                                <span>{data.getItem.requiredSkill}</span>
                            </div>
                            <div className='row'>
                                <label>Required Skill Rank</label>
                                <span>{data.getItem.requiredSkillRank}</span>
                            </div>
                            <div className='row'>
                                <label>Sell Price</label>
                                <span>{data.getItem.sellPrice}</span>
                            </div>
                            <div className='row'>
                                <label>Stackable</label>
                                <span>{data.getItem.stackable}</span>
                            </div>
                            <div className='row'>
                                <label>Upgradable</label>
                                <span>{data.getItem.upgradable ? 'Yes' : 'No'}</span>
                            </div>
                        </div>
                        <div className='cloumn'>
                            <div className='row'>
                                <h3>Item Source</h3>
                            </div>
                            <div className='row'>
                                <label>Source Id</label>
                                <span>{data.getItem.itemSource.sourceId}</span>
                            </div>
                            <div className='row'>
                                <label>Source Type</label>
                                <span>{data.getItem.itemSource.sourceType}</span>
                            </div>
                        </div>
                        <div className='cloumn'>
                            <div className='row'>
                                <h3>Item Spells</h3>
                            </div>
                            <div className='row'>
                                <label>Category Id</label>
                                <span>{data.getItem.itemSpells[0].categoryId}</span>
                            </div>
                            <div className='row'>
                                <label>Consumable</label>
                                <span>{data.getItem.itemSpells[0].consumable ? 'Yes' : 'No'}</span>
                            </div>
                            <div className='row'>
                                <label>Scaled Description</label>
                                <span>{data.getItem.itemSpells[0].scaledDescription}</span>
                            </div>
                            <div className='row'>
                                <label>Spell Id</label>
                                <span>{data.getItem.itemSpells[0].spellId}</span>
                            </div>
                            <div className='row'>
                                <label>Trigger</label>
                                <span>{data.getItem.itemSpells[0].trigger}</span>
                            </div>
                        </div>
                        <div className='cloumn'>
                            <div className='row'>
                                <h3>Weapon Info</h3>
                            </div>
                            <div className='row'>
                                <label>Exact Max</label>
                                <span>{data.getItem.weaponInfo.damage.exactMax}</span>
                            </div>
                            <div className='row'>
                                <label>Exact Min</label>
                                <span>{data.getItem.weaponInfo.damage.exactMin}</span>
                            </div>
                            <div className='row'>
                                <label>Max</label>
                                <span>{data.getItem.weaponInfo.damage.max}</span>
                            </div>
                            <div className='row'>
                                <label>Min</label>
                                <span>{data.getItem.weaponInfo.damage.min}</span>
                            </div>
                            <div className='row'>
                                <label>DPS</label>
                                <span>{data.getItem.weaponInfo.dps}</span>
                            </div>
                        </div>
                    </div>
                </Card>
                <Card>
                    <Comments itemId={props.router.query.id} type='item' />
                </Card>
            </div>
        </>
    )

};

export default withRouter(Item)