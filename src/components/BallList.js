import React, { Component } from 'react';
import Ball from './Ball';
import { getRandom } from '../utils';

/**
 * 每个一段时间生成一个小球， 各种属性随机
 */
export default class BallList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			ballInfos: []
		}
	}
	componentDidMount() {
		this.create();
	}
	componentWillUnmount() {
		clearInterval(this.timer);
	}
	
	
	render() {
		const balls = this.state.ballInfos.map((it, index) => <Ball {...it} key={index} />)
		return (
			<>
			{ balls }
			</>
		)
	}

	create() {
		this.timer = setInterval(() => {
			let info = {
				left: getRandom(0, document.documentElement.clientWidth - 100),
				top: getRandom(0, document.documentElement.clientTop - 100),
				xSpeed: getRandom(50, 500),
				ySpeed: getRandom(50, 500),
				bg: `rgb(${getRandom(0, 255)},${getRandom(0, 255)},${getRandom(0, 255)})`
			};
			this.setState({
				ballInfos: [...this.state.ballInfos, info]
			});
			// 最多生成10个小球
			if(this.state.ballInfos.length === 10) {
				clearInterval(this.timer)
			}
		}, 1000);

		
	}
}
