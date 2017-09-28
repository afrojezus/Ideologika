import React from 'react';
import {
    NavLink
} from 'react-router-dom';
import Img from 'react-image';
import localForage from 'localforage';

export default class AppBar extends React.Component {
    state = {

    }
    
    async componentWillMount() {
        try {
            const ideologyData = await localForage.getItem('yourIdeology');
            if (ideologyData)
                this.setState(ideologyData);
            else 
                throw new Error('No ideology detected.')
        } catch (error) {
            console.error(error);
        }
    }

    componentDidMount() {
            document.body.addEventListener('scroll', () => {
                if (document.body.scrollTop > 150) {
                    /*if (document.getElementById('mainTitle'))
                        document.getElementById('mainTitle').classList.add('fixed');*/

                        if (document.querySelector('.constantBar'))
                        document.querySelector('.constantBar').classList.add('hovering');

                        if (document.querySelector('.bgheader'))
                        document.querySelector('.bgheader').classList.add('oof');
                } else {
                    /*if (document.getElementById('mainTitle'))
                        document.getElementById('mainTitle').classList.remove('fixed');*/

                        if (document.querySelector('.constantBar'))
                        document.querySelector('.constantBar').classList.remove('hovering');

                        if (document.querySelector('.bgheader'))
                        document.querySelector('.bgheader').classList.remove('oof');
                }
            })
        }
    
    render () {
        return (
            <div className='appbar'>
            <div className='constantBar center'>
                <NavButton name='Feed' icon='view-dashboard' path='/' />
                <NavButton name='Ideology Test' icon='checkbox-marked-circle-outline' path='/8values' />
                <NavButton name='Globe' icon='compass' path='/explore' />
                <NavButton name='You' icon='account-circle' path='/you' />
                <IconButton name='Source' icon='github-circle' do={() => window.open('https://github.com/afrojezus/ideologika')} />
            </div>
            <div className='constantBar'>
                <div className='identity'>
                <h2>{this.state.ideology ? 'Your ideology' : 'You might be a'}</h2>
                <h1>{this.state.ideology ? this.state.ideology : 'Cuck'}</h1>
                </div>
            </div>
        </div>
        )
    }
}

const TabButton = props => (
    <NavLink exact to={props.path}>
    <button title={props.name}>
    {props.icon ? <i className={`mdi mdi-${props.icon}`}></i> : null}
    {props.children}</button>
    </NavLink>
)

export const NavButton = (props) => (
    <NavLink onClick={props.do} title={props.name} to={props.path} className='btn-flat' style={props.style} exact>
        {props.img ? <Img src={props.img} alt='' className='btn-with-img' /> : <i style={{ color: props.color }} className={`mdi mdi-${props.icon}`} />}
        {props.withLabel ? <span>{props.name}</span> : null}
        {props.children}
    </NavLink>
)

export const IconButton = (props) => (
    <a onClick={props.do} title={props.name} className='btn-flat' style={props.style}>
        {props.img ? <Img src={props.img} alt='' className='btn-with-img' /> : <i style={{ color: props.color }} className={`mdi mdi-${props.icon}`} />}
        {props.withLabel ? <span>{props.name}</span> : null}
        {props.children}
    </a>
)