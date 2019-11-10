var Counter = React.createClass({
    getInitialState: function() {
        return {
            counter: 0
        };
    },

    increment: function() {
        this.setState({
            counter: this.state.counter + 1
        });
    },

    decrement: function() {
        this.setState({
            counter: this.state.counter - 1
        });
    },

    render: function() {
        return React.createElement('div', {className: 'container'},
            React.createElement('h4', {className: 'instructions'}, 'To increase or decrease counter, click on corresponding buttons'),
            React.createElement('h3', {className: 'counter'}, 'Counter: ' + this.state.counter),
            React.createElement('div', {className: 'buttons'}, 
                React.createElement('button', {onClick: this.increment}, '+'),
                React.createElement('button', {onClick: this.decrement}, '-')
            )
        );
    }
});

var element = React.createElement(Counter);
ReactDOM.render(element, document.getElementById('app'));