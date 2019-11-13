var Counter = React.createClass({
    getDefaultProps: function() {
        console.log('getDefaultProps - pobieranie domyślnych właściwości');
    },

    getInitialState: function() {
        console.log('getInitialState - określenie stanów początkowych');
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

    componentWillMount: function() {
        console.log('componentWillMount - metoda przestarzała');
    },

    render: function() {
        console.log('render');
        return React.createElement('div', {className: 'container'},
            React.createElement('h3', {className: 'counter'}, 'Counter: ' + this.state.counter),
            React.createElement('div', {className: 'buttons'}, 
                React.createElement('button', {onClick: this.increment}, '+'),
                React.createElement('button', {onClick: this.decrement}, '-')
            )
        );
    },

    componentDidMount: function() {
        console.log('componentDidMount - wywoływana po zrenderowaniu komponentu, miejsce na funkcje polegające na DOM lub na subskrypcje');
    },

    componentWillReceiveProps: function() {
        console.log('componentWillReceiveProps - metoda przestarzała');
    },

    shouldComponentUpdate: function(nextState) {
        console.log('shouldComponentUpdate - sprawdza czy powinien przerenderować');
        if(this.state.counter !== nextState.counter) {
            return true;
        } else return false;
    },

    componentWillUpdate: function() {
        console.log('componentWillUpdate - metoda przestarzała');
    },

    componentDidUpdate: function() {
        console.log('componentDidUpdate - wywoływana zaraz po zrenderowaniu');
    },

    componentWillUnmount: function() {
        console.log('componentWillUnmount  - wywoływana przed usunięciem komponentu z DOM, czyszczenie subskrypcji, anulowanie zapytań, czyszczenie liczników czasu');
    }

});



var element = React.createElement('div', {},
    React.createElement('h4', {className: 'instructions'}, 'To increase or decrease counter, click on corresponding buttons'),
    React.createElement(Counter),
    React.createElement(Counter),
    React.createElement(Counter)
);

ReactDOM.render(element, document.getElementById('app'));
