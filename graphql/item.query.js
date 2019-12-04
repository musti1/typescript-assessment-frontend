import gql from 'graphql-tag';

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

export const ITEM_COMMENT_QUERY = gql`
    { 
        getItemComments {
            id
            achievementId
            userId
            comment
        }
    }
`;
