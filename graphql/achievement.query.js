// import gql from 'graphql-tag';
import { gql } from 'apollo-boost';

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



export const GET_ACHIEVEMENT_COMMENTS_QUERY = gql`
    mutation($achievementId: Float!){ 
        getAchievementComments(achievementId: $achievementId){
            comment
            commentId
            userId
            achievementId
        }
    }
`

export const ADD_ACHIEVEMENT_COMMENTS_QUERY = (comment, achievementId, userId) => {
    return gql`
    { 
        addAchievementComment(comment:${comment}, achievementId: ${achievementId}, userId: ${userId}) 
    }
`};

export const EDIT_ACHIEVEMENT_COMMENTS_QUERY = (comment, commentId) => {
    return gql`
    { 
        editAchievementComment(comment:${comment}, commentId: ${commentId})
    }
`};

export const DELETE_ACHIEVEMENT_COMMENTS_QUERY = gql`
    mutation($commentId: String!){ 
        deleteAchievementComment(commentId:$commentId)
    }
`;