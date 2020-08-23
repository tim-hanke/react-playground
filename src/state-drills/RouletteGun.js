import React from 'react';

class RouletteGun extends React.Component {
    static defaultProps = {
        bulletInChamber: 8,
    }
    constructor(props) {
        super(props)
        this.state = {
            chamber: null,
            spinningTheChamber: false,
        }
    }
    handlePullTrigger = () => {
        this.setState({spinningTheChamber: true})
        this.timeout = setTimeout(() => {
            this.setState({
                chamber: Math.ceil(Math.random() * 8),
                spinningTheChamber: false,
            })
        }, 2000)
    }
    componentWillUnmount() {
        clearTimeout(this.timeout)
    }
    render() {
        return (
            <div>
                <button onClick={this.handlePullTrigger}>Pull the trigger!</button>
                <p>{this.state.spinningTheChamber 
                    ? "spinning the chamber and pulling the trigger! ..." 
                    : (this.props.bulletInChamber === this.state.chamber 
                        ? "BANG!!!" 
                        : "you're safe!")}
                </p>
            </div>
        )
    }
}

export default RouletteGun;