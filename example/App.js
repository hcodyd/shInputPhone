import React from 'react'
import ReactDOM from 'react-dom';
import ShInputPhone from '../src/sh-input-phone';
import ShInputText from 'sh-input-text';
import ShForm from 'sh-form';
import '../node_modules/sh-core/bin/main.css';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            val: ''
        };
        this.handleOneChange = this.handleOneChange.bind(this);
    }

    handleOneChange(number) {
        this.setState({val: number});
    }

    render() {
        return <div>
            <ShForm >
                <ShInputPhone  label="Office Phone" value={this.state.val} onChange={this.handleOneChange} />
                {this.state.val}
                <ShInputText label="Favorite Color"/>
            </ShForm>
        </div>
    }
}

ReactDOM.render(<App/>, document.getElementById('app'));