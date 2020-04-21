import React from 'react';
import socket from '../socket';

export default function JoinBlock() {
    return (
    <div className="join-block">
        <input type="text" placehoolder="Room ID"/>
        <input type="text" placehoolder="Name"/>
        <button className="button-enter">Enter</button>
    </div>
    )
}
