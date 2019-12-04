import gql from 'graphql-tag';

export const ACHIEVEMENT_QUERY = gql`
    { 
        getAllAchievement {
            id
            title
            description
            points
            icon
            criteria {
                id
                description
                orderIndex
                max
            }
            accountWide
            factionId
        }
    }
`;

export const SINGLE_ACHIEVEMENT_QUERY = (achievementId) => {
    return gql`
    { 
        getAchievement (achievementId: ${achievementId}) {
            id
            title
            description
            points
            icon
            criteria {
                id
                description
                orderIndex
                max
            }
            accountWide
            factionId
        }
    }
`};

export const ACHIEVEMENT_COMMENT_QUERY = gql`
    { 
        getAchievementComments {
            id
            achievementId
            userId
            comment
        }
    }
`;
