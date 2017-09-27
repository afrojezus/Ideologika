import React from 'react';
import {
    NavLink
} from 'react-router-dom';
import Img from 'react-image';
import ReactTooltip from 'react-tooltip';

export default class AppBar extends React.Component {
    componentDidMount() {
            document.querySelector('.context').addEventListener('scroll', () => {
                if (document.querySelector('.context').scrollTop > 150) {
                    if (document.getElementById('mainTitle'))
                        document.getElementById('mainTitle').classList.add('fixed');

                        if (document.querySelector('.constantBar'))
                        document.querySelector('.constantBar').classList.add('hovering');

                        if (document.querySelector('.bgheader'))
                        document.querySelector('.bgheader').classList.add('oof');
                } else {
                    if (document.getElementById('mainTitle'))
                        document.getElementById('mainTitle').classList.remove('fixed');

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
            <ReactTooltip place='bottom' effect='solid' />
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
    <NavLink onClick={props.do} data-tip={props.name} to={props.path} className='btn-flat' style={props.style} exact>
        {props.img ? <Img src={props.img} alt='' className='btn-with-img' /> : <i style={{ color: props.color }} className={`mdi mdi-${props.icon}`} />}
        {props.withLabel ? <span>{props.name}</span> : null}
        {props.children}
    </NavLink>
)

export const IconButton = (props) => (
    <a onClick={props.do} data-tip={props.name} className='btn-flat' style={props.style}>
        {props.img ? <Img src={props.img} alt='' className='btn-with-img' /> : <i style={{ color: props.color }} className={`mdi mdi-${props.icon}`} />}
        {props.withLabel ? <span>{props.name}</span> : null}
        {props.children}
    </a>
)