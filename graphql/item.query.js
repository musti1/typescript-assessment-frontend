// import gql from 'graphql-tag';
import { gql } from 'apollo-boost';

export const ITEM_QUERY = gql`
    { 
        getAllItems {
            id
            description
            name
            icon
            stackable
            itemBind
            bonusStats {
                stat
                amount
            }
            itemSpells {
                spellId
                consumable
                categoryId
                trigger
                scaledDescription
            }
            buyPrice
            itemClass
            itemSubClass
            containerSlots
            weaponInfo {
                damage {
                    min
                    max
                    exactMin
                    exactMax
                }
                weaponSpeed
                dps
            }
            inventoryType
            equippable
            itemLevel
            maxCount
            maxDurability
            minFactionId
            minReputation
            quality
            sellPrice
            requiredSkill
            requiredLevel
            requiredSkillRank
            itemSource {
                sourceId
                sourceType
            }
            baseArmor
            hasSockets
            isAuctionable
            armor
            displayInfoId
            nameDescription
            nameDescriptionColor
            upgradable
            heroicTooltip
            context
            bonusLists
            availableContexts
            bonusSummary {
                defaultBonusLists
                chanceBonusLists
                bonusChances
            }
            artifactId
        }
    }
`;

export const SINGLE_ITEM_QUERY = (itemId) => {
    return gql`
        {
            getItem(itemId: ${itemId}) {
            id
            description
            name
            icon
            stackable
            itemBind
            bonusStats {
                stat
                amount
            }
            itemSpells {
                spellId
                consumable
                categoryId
                trigger
                scaledDescription
            }
            buyPrice
            itemClass
            itemSubClass
            containerSlots
            weaponInfo {
                damage {
                    min
                    max
                    exactMin
                    exactMax
                }
                weaponSpeed
                dps
            }
            inventoryType
            equippable
            itemLevel
            maxCount
            maxDurability
            minFactionId
            minReputation
            quality
            sellPrice
            requiredSkill
            requiredLevel
            requiredSkillRank
            itemSource {
                sourceId
                sourceType
            }
            baseArmor
            hasSockets
            isAuctionable
            armor
            displayInfoId
            nameDescription
            nameDescriptionColor
            upgradable
            heroicTooltip
            context
            bonusLists
            availableContexts
            bonusSummary {
                defaultBonusLists
                chanceBonusLists
                bonusChances
            }
            artifactId
        }
    }
`};

export const GET_ITEM_COMMENTS_QUERY = (itemId) => {
    return gql`
    { 
        getItemComments(itemId: ${itemId}){
            itemId
            comment
            userId
            commentId
        }
    }
`};

export const ADD_ITEM_COMMENT_QUERY = (comment, userId, itemId) => {
    return gql`
    { 
        addItemComment(comment:${comment}, userId: ${userId}, itemId: ${itemId})
    }
`};

export const EDIT_ITEM_COMMENT_QUERY = (comment, commentId) => {
    return gql`
    { 
        editItemComment(comment:${comment}, commentId: ${commentId})
    }
`};

export const DELETE_ITEM_COMMENT_QUERY = (commentId) => {
    return gql`
    { 
        deleteItemComment(commentId:${commentId})
    }
`};