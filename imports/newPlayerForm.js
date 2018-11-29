import { Input, Form, Button } from 'antd';
import React, { Component } from 'react';
import { Players } from './api';
import { get } from 'lodash';

class NewPlayerForm extends Component {
    state = {}
    handleSubmit(e) {
        e.preventDefault();
        const name = get(e, 'target.playerName.value')
        if (!name) {
            this.setState({ help: 'Please enter a name', validateStatus: 'error' });
            return
        }
        Players.insert({
            name,
            points: 0,
            avatarUrl: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
        })
    }

    render() {
        return (
            <Form style={{margin:'20px 0'}} onSubmit={this.handleSubmit.bind(this)}>
                <Form.Item {...this.state}>
                    <div style={{ display: 'flex' }}>
                        <Input style={{width:'24%'}} placeholder='New player' name='playerName' />
                        <Button shape='circle' icon='check' htmlType='submit' />
                    </div>
                </Form.Item>
            </Form>
        );
    }
}

export default NewPlayerForm;