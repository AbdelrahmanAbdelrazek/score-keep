import { Input, Form, Button } from 'antd';
import React, { Component } from 'react';
import { Players } from './api';

class NewPlayerForm extends Component {
    state={}
    addNewPlayer(e) {
        e.preventDefault();
        const {name} = this.state;
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
            <Form onSubmit={this.addNewPlayer.bind(this)}>
                <Form.Item {...this.state}>
                    <Input placeholder='New player' onChange={e=>this.setState({name:e.target.value})}/>
                    <Button shape='circle' icon='check-circle' htmlType='submit'  />
                </Form.Item>
            </Form>
        );
    }
}

export default NewPlayerForm;