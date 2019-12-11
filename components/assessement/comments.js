import React from 'react';
import {Comment, Avatar, Form, Button, List, Input, Icon, Modal} from 'antd';
import {
    GET_ACHIEVEMENT_COMMENTS_QUERY,
    ADD_ACHIEVEMENT_COMMENTS_QUERY,
    EDIT_ACHIEVEMENT_COMMENTS_QUERY,
    DELETE_ACHIEVEMENT_COMMENTS_QUERY
} from '../../graphql/achievement.query';
import {
    GET_ITEM_COMMENTS_QUERY,
    ADD_ITEM_COMMENT_QUERY,
    EDIT_ITEM_COMMENT_QUERY,
    DELETE_ITEM_COMMENT_QUERY
} from '../../graphql/item.query';
import {graphql} from 'react-apollo';
import * as compose from 'lodash.flowright';

const {confirm} = Modal;
const {TextArea} = Input;

const Editor = ({onChange, onSubmit, submitting, value, flag, onSubmitEdit}) => (
    <div>
        <Form.Item>
            <TextArea rows={4} onChange={onChange} value={value}/>
        </Form.Item>
        <Form.Item>
            {
                flag ?
                    <Button htmlType="submit" loading={submitting} onClick={onSubmitEdit} type="primary">
                        Edit Comment
                    </Button>
                :
                <Button htmlType="submit" loading={submitting} onClick={onSubmit} type="primary">
                    Add Comment
                </Button>
            }
        </Form.Item>
    </div>
);

class Comments extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: [],
            submitting: false,
            value: '',
            userDetails: undefined,
            category: props.type,
            editFlag: false,
            commentId: ''
        };
    }

    getComments = async () => {
        let comments = [];
        if (this.state.category === 'achievement') {
            const data = await this.props.getAchievementComments({
                variables: {
                    achievementId: Number(this.props.achievementId)
                }
            });
            comments = data.data.getAchievementComments;
        }
        if (this.state.category === 'item') {
            const data = await this.props.getItemComments({
                variables: {
                    itemId: Number(this.props.itemId)
                }
            });
            comments = data.data.getItemComments;
        }
        return comments;
    };

    setUserDetail = () => {
        let userDetails = sessionStorage.getItem("userDetails");
        userDetails = JSON.parse(userDetails);
        return userDetails;
    };

    async componentDidMount() {
        const userDetails = this.setUserDetail();
        const comments = await this.getComments();
        this.setState({userDetails, comments});
    }

    handleSubmit = async () => {
        if (!this.state.value) {
            return;
        }

        this.setState({submitting: true});
        if (this.state.category === 'item') {
            console.log('hereeeeeeeeee')
            await this.props.addItemComment({
                variables: {
                    comment: this.state.value,
                    userId: this.state.userDetails.userId,
                    itemId: Number(this.props.itemId)
                }
            })
        }
        if (this.state.category === 'achievement') {
            await this.props.addAchievementComment({
                variables: {
                    comment: this.state.value,
                    userId: this.state.userDetails.userId,
                    achievementId:  Number(this.props.achievementId)
                }
            })
        }
        const comments = await this.getComments();
        this.setState({submitting: false, comments, value: ''});
    };

    handleChange = e => {
        this.setState({value: e.target.value});
    };

    showDeleteConfirm = async (id) => {
        if (this.state.category === 'item') {
            await this.props.deleteItemComment({
                variables: {
                    commentId: id
                }
            });
        }
        if (this.state.category === 'achievement') {
            await this.props.deleteAchievementComment({
                variables: {
                    commentId: id
                }
            });
        }

        const comments = await this.getComments();
        this.setState({comments});
    };
    editIconClicked = (comment) => {
        this.setState({value: comment.comment, editFlag: true, commentId: comment.commentId})
    };

    editHandler = async () => {
        if (!this.state.value) {
            return;
        }

        this.setState({submitting: true});
        if (this.state.category === 'item') {
            await this.props.editItemComment({
                variables: {
                    comment: this.state.value,
                    commentId: this.state.commentId
                }
            })
        }
        if (this.state.category === 'achievement') {
            await this.props.editAchievementComment({
                variables: {
                    comment: this.state.value,
                    commentId: this.state.commentId
                }
            })
        }
        const comments = await this.getComments();
        this.setState({submitting: false, comments, value: '', editFlag: false});
    }

    render() {
        const {comments, submitting, value} = this.state;
        return (
            <div>
                <div className='comments'>
                    {
                        comments.length > 0 &&
                        comments.map(comment => {
                            return (
                                <div key={comment.commentId} className='comment' style={{ marginBottom: 10 }}>
                                    <div className='user'>
                                        <Avatar size="small" icon="user" />
                                        <span style={{ marginLeft: 10 }}>{`${comment.userDetail.firstName} ${comment.userDetail.lastName || ''}`}</span>
                                    </div>
                                    <span style={{ marginLeft: 30, backgroundColor: '#ccc', padding: 10, borderRadius: 10, display: 'inline-block' }}>{comment.comment}</span>
                                    {
                                        this.state.userDetails.userId === comment.userId &&
                                        <Icon onClick={() => this.editIconClicked(comment)} style={{marginLeft: 20, marginRight: 10}} type="edit"/>
                                    }
                                    {
                                        this.state.userDetails.userId === comment.userId &&
                                        <Icon onClick={() => this.showDeleteConfirm(comment.commentId)} type="delete"/>
                                    }
                                </div>
                            )
                        })
                    }
                </div>
                <Editor
                    onChange={this.handleChange}
                    onSubmit={this.handleSubmit}
                    onSubmitEdit={this.editHandler}
                    submitting={submitting}
                    value={value}
                    flag={this.state.editFlag}
                />
            </div>
        );
    }
}

export default compose(
    graphql(GET_ACHIEVEMENT_COMMENTS_QUERY, {name: "getAchievementComments"}),
    graphql(DELETE_ACHIEVEMENT_COMMENTS_QUERY, {name: "deleteAchievementComment"}),
    graphql(ADD_ACHIEVEMENT_COMMENTS_QUERY, {name: "addAchievementComment"}),
    graphql(EDIT_ACHIEVEMENT_COMMENTS_QUERY, {name: "editAchievementComment"}),
    graphql(GET_ITEM_COMMENTS_QUERY, {name: "getItemComments"}),
    graphql(ADD_ITEM_COMMENT_QUERY, {name: "addItemComment"}),
    graphql(EDIT_ITEM_COMMENT_QUERY, {name: "editItemComment"}),
    graphql(DELETE_ITEM_COMMENT_QUERY, {name: "deleteItemComment"})
)
(Comments);