import React from 'react';
import { Comment, Avatar, Form, Button, List, Input, Icon, Modal } from 'antd';
import moment from 'moment';

const { confirm } = Modal;
const { TextArea } = Input;
const CommentList = ({ comments, showDeleteConfirm }) => (
    <List
        dataSource={comments}
        header={`${comments.length} ${comments.length > 1 ? 'comments' : 'comment'}`}
        itemLayout="horizontal"
        renderItem={props => {
            return (
                <div className='comment' style={{ position: 'relative' }}>
                    <Comment {...props} />
                    <Icon style={{ position: 'absolute', top: 20, left: 190, cursor: 'pointer' }} type="edit" />
                    <Icon onClick={() => showDeleteConfirm(props)} style={{ position: 'absolute', top: 20, left: 210, cursor: 'pointer' }} type="delete" />
                </div>
            )
        }}
    />
);

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
    state = {
        comments: [],
        submitting: false,
        value: '',
    };

    handleSubmit = () => {
        if (!this.state.value) {
            return;
        }

        this.setState({ submitting: true });

        setTimeout(() => {
            this.setState({
                submitting: false,
                value: '',
                comments: [
                    {
                        key: Date.now(),
                        author: 'ali',
                        avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
                        content: <p>{this.state.value}</p>,
                        datetime: moment().fromNow(),
                    },
                    ...this.state.comments,
                ],
            });
        }, 1000);
    };

    handleChange = e => {
        this.setState({ value: e.target.value });
    };

    showDeleteConfirm = (data) => {
        confirm({
            title: 'Are you sure delete this comment?',
            // content: 'Some descriptions',
            okText: 'Yes',
            okType: 'danger',
            cancelText: 'No',
            onOk() {
                console.log('OK', data);
            },
            onCancel() {
                console.log('Cancel', data);
            },
        });
    }

    render() {
        const { comments, submitting, value } = this.state;

        return (
            <div>
                {comments.length > 0 && <CommentList comments={comments} showDeleteConfirm={this.showDeleteConfirm} />}
                <Comment
                    avatar={
                        <Avatar
                            src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                            alt="Han Solo"
                        />
                    }
                    content={
                        <Editor
                            submitting={submitting}
                            value={value}
                        />
                    }
                />
            </div>
        );
    }
}

export default Comments;