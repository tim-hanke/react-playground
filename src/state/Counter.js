import React from 'react';

class Counter extends React.Component {
    static defaultProps = {
        step: 1,
        count: 0,
    }
    constructor(props) {
        console.log('props in constructor', props)
        super(props)
        this.state = { count: this.props.count }
    }
    handleButtonClick = () => {
        this.setState({ count: this.state.count + this.props.step })
        console.log('props in handleButtonClick', this.props)
        console.log('state in handleButtonClick', this.state)
    }
    render() {
        return (
            <div>
                <p>The current count: {this.state.count}</p>
                <button
                    onClick={this.handleButtonClick}
                >
                    Add 1
                </button>
            </div>
        )
    }
}

export default Counter;