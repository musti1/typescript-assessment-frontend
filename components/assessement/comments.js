import React from 'react';
import { Comment, Avatar, Form, Button, List, Input, Icon, Modal } from 'antd';
import { GET_ACHIEVEMENT_COMMENTS_QUERY, ADD_ACHIEVEMENT_COMMENTS_QUERY, EDIT_ACHIEVEMENT_COMMENTS_QUERY, DELETE_ACHIEVEMENT_COMMENTS_QUERY } from '../../graphql/achievement.query';
// import { GET_ITEM_COMMENTS_QUERY, ADD_ITEM_COMMENT_QUERY, EDIT_ITEM_COMMENT_QUERY, DELETE_ITEM_COMMENT_QUERY } from '../../graphql/item.query';
import { graphql } from 'react-apollo';
import * as compose from 'lodash.flowright';

const { confirm } = Modal;
const { TextArea } = Input;

const Editor = ({ onChange, onSubmit, submitting, value }) => (
    <div>
        <Form.Item>
            <TextArea rows={4} onChange={onChange} value={value} />
        </Form.Item>
        <Form.Item>
            <Button htmlType="submit" loading={submitting} onClick={onSubmit} type="primary">
                Add Comment
            </Button>
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
            userDetails: undefined
        };
    }

    async componentDidMount() {
        let userDetails = sessionStorage.getItem("userDetails");
        userDetails = JSON.parse(userDetails);

        const data = await this.props.getAchivementComments({
            variables: {
                achievementId: 6
            }
        })
        this.setState({ userDetails, comments: data.data.getAchievementComments });
    }

    handleSubmit = () => {
        if (!this.state.value) {
            return;
        }

        this.setState({ submitting: true });
        let data = {
            comment: this.state.value,
            userId: this.state.userDetails.userId,
            itemId: this.props.itemId
        }
        this.setState({ submitting: false });
    };

    handleChange = e => {
        this.setState({ value: e.target.value });
    };

    showDeleteConfirm = async (data) => {
        const res = await this.confirmModal();
        if (res) {
            const data = await this.props.deleteAchivementComment({
                variables: {
                    commentId: '4df7e360-1782-11ea-9330-9d25b1d72cac'
                }
            })
            if (data.data.deleteAchievementComment) {
                const data = await this.props.getAchivementComments({
                    variables: {
                        achievementId: 6
                    }
                });
                this.setState({ comments: data.data.getAchievementComments });
            }
        }
    }

    confirmModal = () => {
        return new Promise((resolve) => {
            confirm({
                title: 'Are you sure delete this comment?',
                okText: 'Yes',
                okType: 'danger',
                cancelText: 'No',
                onOk() {
                    return resolve(true);
                },
                onCancel() {
                    return resolve(false);
                }
            });
        });
    }

    render() {
        const { comments, submitting, value } = this.state;
        return (
            <div>
                <div className='comments'>
                    {
                        comments.length > 0 &&
                        comments.map(comment => {
                            return (
                                <div key={comment.commentId} className='comment'>
                                    <span>{comment.comment}</span>
                                    <Icon style={{ marginLeft: 20, marginRight: 10 }} type="edit" />
                                    <Icon onClick={() => this.showDeleteConfirm(comment.commentId)} type="delete" />
                                </div>
                            )
                        })
                    }
                </div>
                <Editor
                    onChange={this.handleChange}
                    onSubmit={this.handleSubmit}
                    submitting={submitting}
                    value={value}
                />
            </div>
        );
    }
}

export default compose(
    graphql(GET_ACHIEVEMENT_COMMENTS_QUERY, { name: "getAchivementComments" }),
    graphql(DELETE_ACHIEVEMENT_COMMENTS_QUERY, { name: "deleteAchivementComment" })
)(Comments);