import React from 'react';

class Bomb extends React.Component {
    constructor() {
        super()
        this.state = {
            count: 0,
        }
    }
    ticker() {
        this.setState({
            count: this.state.count + 1,
            message: this.state.count % 2 === 0 ? 'tick' : 'tock',
        })
        if (this.state.count >= 8) {
            this.setState({message: 'BOOOM!!!!'})
            clearInterval(this.interval)
        }
    }
    componentDidMount() {
        this.interval = setInterval(() => this.ticker(), 1000)
    }
    componentWillUnmount() {
        clearInterval(this.interval)
    }
    render() {
        return(
            <div>
                <p>{this.state.message}</p>
            </div>
        )
    }
}

export default Bomb;