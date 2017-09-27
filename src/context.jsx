import React from 'react';
import Grid from 'material-ui/Grid';
import {
  Switch, Route
} from 'react-router-dom';
import Moment from 'moment';
import EightValues from './ideologytest.jsx';

export default class Context extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentWillMount () {
    }
    render() {
        return (
            <main className='context'>
                <Routes />
            </main>
        );
    }
}

const Routes = props => (
    <Switch>
        <Route exact path='/' component={Feed} />
        <Route exact path='/explore' component={Explore} />
        <Route exact path='/you' component={You} />
        <Route exact path='/8values' component={EightValues} />
    </Switch>
)

class Feed extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: ''
        }

        this.timer = setInterval(() => {this.setState({date: Moment().format('MMMM Do, YYYY')})})
    }
    componentWillMount() {
       
    }
    componentDidMount() {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 150) {
                if (document.getElementById('mainTitle'))
                    document.getElementById('mainTitle').classList.add('fixed');
            } else {
                if (document.getElementById('mainTitle'))
                    document.getElementById('mainTitle').classList.remove('fixed');
            }
        })
    }
    componentWillUnmount() {
        clearInterval(this.timer);
    }
    render() {
        return(
            <main className='main'>
                <Grid container className='horiPadding vertPadding' spacing={0}>
                    <div className='header'>
                        <h2 className='large'>{this.state.date}</h2>
                        <h1 id='mainText' onClick={() => window.scrollTo(0,0)} className='large'>Feed</h1>
                    </div>
                </Grid>
            </main>
        )
    }
}

class Explore extends React.Component {
    componentDidMount() {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 150) {
                if (document.getElementById('mainTitle'))
                    document.getElementById('mainTitle').classList.add('fixed');
            } else {
                if (document.getElementById('mainTitle'))
                    document.getElementById('mainTitle').classList.remove('fixed');
            }
        })
    }
    render() {
        return(
            <main className='main'>
            <Grid container className='horiPadding vertPadding' spacing={0}>
            <div className='header'>
                <h2 className='large'>Real-time tweets around the world</h2>
                <h1 id='mainText' onClick={() => window.scrollTo(0,0)} className='large'>Globe</h1>
            </div>
        </Grid>
            </main>
        )
    }
}


class You extends React.Component {
    componentDidMount() {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 150) {
                if (document.getElementById('mainTitle'))
                    document.getElementById('mainTitle').classList.add('fixed');
            } else {
                if (document.getElementById('mainTitle'))
                    document.getElementById('mainTitle').classList.remove('fixed');
            }
        })
    }
    render() {
        return(
            <main className='main'>
            <Grid container className='horiPadding vertPadding' spacing={0}>
            <div className='header'>
                <h1 id='mainText' onClick={() => window.scrollTo(0,0)} className='large'>You</h1>
            </div>
        </Grid>
            </main>
        )
    }
}