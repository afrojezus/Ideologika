import React from 'react';
import Grid from 'material-ui/Grid';
import {
    HashRouter, Route, Switch, NavLink
} from 'react-router-dom';

import questions from './8values/questions.js';
import ideologies from './8values/ideologies.js';

class EightValues extends React.Component {
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
            <HashRouter>
            <Switch>
            <Route exact path='/' component={Intro} />
            <Route exact path='/questions' component={Quest} />
            <Route exact path='/results' component={Result} />
            </Switch>
            </HashRouter>
        )
    }
}

const Intro = props => (
    <div>
    <div className='bgheader'>
    <div className='gradient'>
        <img src='https://c2.staticflickr.com/6/5462/9599683722_d79450acf2_b.jpg' alt='' />
    </div>
</div>
    <main className='main'>
    <Grid container className='horiPadding vertPadding' spacing={0}>
    <div className='header'>
        <h2 className='large'>Find your ideology</h2>
        <h1 id='mainText' onClick={() => window.scrollTo(0,0)} className='large'>Ideology Test</h1>
    </div>
    <div className='header'>
        <h2>There is a total of {questions.length} questions on this test. Take your time to not pick neutral. <br />
        There is about {ideologies.length} ideologies possible to get. Yes, that includes Nazism.<br /><br />You should use the result as a broad idea of where you stand, the test isn't 100%.</h2>
    </div>
    <NavLink className='glink' to='/questions' exact>Let's begin</NavLink>
</Grid>
    </main>
    </div>
)

class Quest extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            maxEcon: 0,
            maxDipl: 0,
            maxGovt: 0,
            maxScty: 0,
            econ: 0,
            dipl: 0,
            govt: 0,
            scty: 0,
            qn: 0,
            prevAnswer: null,
            question: '',
            questionCount: '',
            ideology: ''
        }
    }
    componentWillMount() {
        for (var i = 0; i < questions.length; i++) {
            this.setState({
                maxEcon: this.state.maxEcon += Math.abs(questions[i].effect.econ),
                maxDipl: this.state.maxDipl += Math.abs(questions[i].effect.dipl),
                maxGovt: this.state.maxGovt += Math.abs(questions[i].effect.govt),
                maxScty: this.state.maxScty += Math.abs(questions[i].effect.scty)
            }, () => this.init());
        }
    }

    init () {
        this.setState({question: questions[this.state.qn].question, questionCount: `Question ${this.state.qn + 1} of ${questions.length}`}, () => {
            let ideodist = Infinity;
            for (var i = 0; i < ideologies.length; i++) {
                let dist = 0;
                dist += Math.pow(Math.abs(ideologies[i].stats.econ - this.calcScore(this.state.econ,this.state.maxEcon)), 2)
                dist += Math.pow(Math.abs(ideologies[i].stats.govt - this.calcScore(this.state.govt,this.state.maxGovt)), 2)
                dist += Math.pow(Math.abs(ideologies[i].stats.dipl - this.calcScore(this.state.dipl,this.state.maxDipl)), 1.73856063)
                dist += Math.pow(Math.abs(ideologies[i].stats.scty - this.calcScore(this.state.scty,this.state.maxScty)), 1.73856063)
                if (dist < ideodist){
                        ideodist = dist
                        this.setState({
                            ideology: ideologies[i].name
                        })
                    }
                }
        });
    }

    nextQuestion (mult) {
        this.setState({
            econ: this.state.econ += mult*questions[this.state.qn].effect.econ,
            dipl: this.state.dipl += mult*questions[this.state.qn].effect.dipl,
            govt: this.state.govt += mult*questions[this.state.qn].effect.govt,
            scty: this.state.scty += mult*questions[this.state.qn].effect.scty,
            qn: this.state.qn + 1,
            prevAnswer: mult
        }, () => {
            if (this.state.qn < questions.length){
                this.init();
                console.log('bazinga')
                }
            else {
                this.results();
                console.log('allah');
            }
        });
        
    }
    

    calcScore (score,max) {
        return (100*(max+score)/(2*max)).toFixed(1)
    }

    results () {
        console.log(this.props.history)
        this.props.history.push(`/results?e=${this.calcScore(this.state.econ,this.state.maxEcon)}&d=${this.calcScore(this.state.dipl,this.state.maxDipl)}&g=${this.calcScore(this.state.govt,this.state.maxGovt)}&s=${this.calcScore(this.state.scty,this.state.maxScty)}`);
    }

    render() {
        return (
            <div>
            <div className='bgheader'>
            <div className='gradient'>
                <img src='' alt='' />
            </div>
        </div>
            <main className='main'>
            <Grid container className='horiPadding vertPadding' spacing={0}>
            <NavLink className='glink' to='/' exact><i className='mdi mdi-arrow-left' /> Back</NavLink>
            <div className='header'>
                <h2 className='large'>{this.state.questionCount}</h2>
                <h1 id='question' className='large'>{this.state.question}</h1>
            </div>
            <div className='header' style={{position: 'fixed', display: 'flex', bottom: 392, textAlign: 'center', justifyContent: 'center', left: '50%', transform: 'translate(-50%, -50%)'}}>
            <h2>You seem to be leaning towards {this.state.ideology}...</h2>
            </div>
            <div className='header' style={{position: 'fixed', display: 'flex', bottom: 256, textAlign: 'center', justifyContent: 'center', left: '50%', transform: 'translate(-50%, -50%)'}}>
            <h2 style={{margin: '0 16px'}}>Economic Axis
            <br />
            <h1>{this.state.econ}</h1></h2>
            <br />
            <br />
            <h2 style={{margin: '0 16px'}}>Diplomatic Axis
            <br />
            <h1>{this.state.dipl}</h1></h2>
            <br />
            <br />
            <h2 style={{margin: '0 16px'}}>Liberty Axis
            <br/>
            <h1>{this.state.govt}</h1></h2>
            <br />
            <br />
            <h2 style={{margin: '0 16px'}}>Society Axis
            <br />
            <h1>{this.state.scty}</h1></h2>
        </div>
            <Grid container className='horiPadding vertPadding' style={{zIndex: 90, position: 'fixed', bottom: 0, left: 0}} spacing={16}>
                <Grid item xs><button className='questButton' onClick={() => this.nextQuestion(1.0)} style={{background: 'green', color: 'white'}}>Strongly Agree</button></Grid>
                <Grid item xs><button className='questButton' onClick={() => this.nextQuestion(0.5)} style={{background: 'lime'}}>Agree</button></Grid>
                <Grid item xs><button className='questButton' onClick={() => this.nextQuestion(0.0)} style={{background: '#bbb'}}>Neutral</button></Grid>
                <Grid item xs><button className='questButton' onClick={() => this.nextQuestion(-0.5)} style={{background: 'pink'}}>Disagree</button></Grid>
                <Grid item xs><button className='questButton' onClick={() => this.nextQuestion(-1.0)} style={{background: 'red', color: 'white'}}>Strongly Disagree</button></Grid>
            </Grid>
        </Grid>
            </main>
            </div>
        )
    }
}

class Result extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            econArray: ["Communist","Socialist","Social","Centrist","Market","Capitalist","Laissez-Faire"],
            diplArray: ["Cosmopolitan","Internationalist","Peaceful","Balanced","Patriotic","Nationalist","Chauvinist"],
            govtArray: ["Anarchist","Libertarian","Liberal","Moderate","Statist","Authoritarian","Totalitarian"],
            sctyArray: ["Revolutionary","Very Progressive","Progressive","Neutral","Traditional","Very Traditional","Reactionary"],
            equality: 0,
            peace: 0,
            liberty: 0,
            progress: 0,
            wealth: 0,
            might: 0,
            authority: 0,
            tradition: 0,
            ideology: '',
            economicLabel: '',
            diplomaticLabel: '',
            stateLabel: '',
            societyLabel: '',
            ideologyBG: '',
            ideologyLogo: ''
        }
    }

    componentWillMount() {
        this.setState({
            equality: this.getQueryVariable("e"),
            peace: this.getQueryVariable("d"),
            liberty: this.getQueryVariable("g"),
            progress: this.getQueryVariable("s")
        }, () => {
            this.setState({
                wealth: (100 - this.state.equality).toFixed(1),
                might: (100 - this.state.peace).toFixed(1),
                authority: (100 - this.state.liberty ).toFixed(1),
                tradition: (100 - this.state.progress).toFixed(1)
            }, () => {
                 /*this.setBarValue("equality", this.state.equality)
            this.setBarValue("wealth", this.state.wealth)
            this.setBarValue("peace", this.state.peace)
            this.setBarValue("might", this.state.might)
            this.setBarValue("liberty", this.state.liberty)
            this.setBarValue("authority", this.state.authority)
            this.setBarValue("progress", this.state.progress)
            this.setBarValue("tradition", this.state.tradition)*/

            this.setState({
                economicLabel: this.setLabel(this.state.equality, this.state.econArray),
                diplomaticLabel: this.setLabel(this.state.peace, this.state.diplArray),
                stateLabel: this.setLabel(this.state.liberty, this.state.govtArray),
                societyLabel: this.setLabel(this.state.progress, this.state.sctyArray)
            }, () => {
                let ideodist = Infinity;
                for (var i = 0; i < ideologies.length; i++) {
                    let dist = 0;
                    dist += Math.pow(Math.abs(ideologies[i].stats.econ - this.state.equality), 2)
                    dist += Math.pow(Math.abs(ideologies[i].stats.govt - this.state.liberty), 2)
                    dist += Math.pow(Math.abs(ideologies[i].stats.dipl - this.state.peace), 1.73856063)
                    dist += Math.pow(Math.abs(ideologies[i].stats.scty - this.state.progress), 1.73856063)
                    if (dist < ideodist){
                            ideodist = dist
                            this.setState({
                                ideology: ideologies[i].name,
                                ideologyBG: ideologies[i].bg
                            }, () => {       
                                    this.visualize();
                            })
                        }
                    
                }
            })
            })
        })   
    }

    getQueryVariable(variable)
    {
           var query = this.props.location.search.substring(1)
           console.log(query)
           var vars = query.split("&")
           for (var i=0;i<vars.length;i++) {
                   var pair = vars[i].split("=")
                   if(pair[0] === variable) {return pair[1]}
           }
           return(NaN);
    }

    setBarValue(name, value) {
        let innerel = document.getElementById(name)
        let outerel = document.getElementById("bar-" + name)
        outerel.style.width = (value + "%")
        innerel.innerHTML = (value + "%")
        if (innerel.offsetWidth + 20 > outerel.offsetWidth) {
            innerel.style.visibility = "hidden"
        }
    }

    setLabel(val,ary) {
        if (val > 100) { return "" } else
        if (val > 90) { return ary[0] } else
        if (val > 75) { return ary[1] } else
        if (val > 60) { return ary[2] } else
        if (val >= 40) { return ary[3] } else
        if (val >= 25) { return ary[4] } else
        if (val >= 10) { return ary[5] } else
        if (val >= 0) { return ary[6] } else
        	{return ""}
    }


    visualize() {

    }

    loadGraphics () {
        var c = document.getElementById("banner")
        var ctx = c.getContext("2d")
        ctx.fillStyle = "#EEEEEE"
        ctx.fillRect(0,0,800,600)
        ctx.fillStyle="#222222"
        ctx.fillRect(120, 130, 560, 80)
        ctx.fillRect(120, 250, 560, 80)
        ctx.fillRect(120, 370, 560, 80)
        ctx.fillRect(120, 490, 560, 80)
        ctx.fillStyle="#f44336"
        ctx.fillRect(120, 134, 5.6*this.state.equality-2, 72)
        ctx.fillStyle="#00897b"
        ctx.fillRect(682-5.6*this.state.wealth, 134, 5.6*this.state.wealth-2, 72)
        ctx.fillStyle="#ff9800"
        ctx.fillRect(120, 254, 5.6*this.state.might-2, 72)
        ctx.fillStyle="#03a9f4"
        ctx.fillRect(682-5.6*this.state.peace, 254, 5.6*this.state.peace-2, 72)
        ctx.fillStyle="#ffeb3b"
        ctx.fillRect(120, 374, 5.6*this.state.liberty-2, 72)
        ctx.fillStyle="#3f51b5"
        ctx.fillRect(682-5.6*this.state.authority, 374, 5.6*this.state.authority-2, 72)
        ctx.fillStyle="#8bc34a"
        ctx.fillRect(120, 494, 5.6*this.state.tradition-2, 72)
        ctx.fillStyle="#9c27b0"
        ctx.fillRect(682-5.6*this.state.progress, 494, 5.6*this.state.progress-2, 72)
        ctx.fillStyle="#222222"
        ctx.font="700 80px SF Display"
        ctx.textAlign="left"
        ctx.fillText("Ideologika", 20, 90)
        ctx.font="40px SF Display"
        ctx.textAlign="right"
        ctx.fillText(this.state.ideology, 780, 87.5)
        ctx.font="50px SF Display"
        ctx.textAlign="left"
        if (this.state.equality  > 30) {ctx.fillText(this.state.equality + "%", 130, 187.5)}
        if (this.state.might     > 30) {ctx.fillText(this.state.might + "%", 130, 307.5)}
        if (this.state.liberty   > 30) {ctx.fillText(this.state.liberty + "%", 130, 427.5)}
        if (this.state.tradition > 30) {ctx.fillText(this.state.tradition + "%", 130, 547.5)}
        ctx.textAlign="right"
        if (this.state.wealth    > 30) {ctx.fillText(this.state.wealth + "%", 670, 187.5)}
        if (this.state.peace     > 30) {ctx.fillText(this.state.peace + "%", 670, 307.5)}
        if (this.state.authority > 30) {ctx.fillText(this.state.authority + "%", 670, 427.5)}
        if (this.state.progress  > 30) {ctx.fillText(this.state.progress + "%", 670, 547.5)}
        ctx.font="300 30px SF Display"
        ctx.fillText("Ideologika", 780, 55)
        ctx.textAlign="center"
        ctx.fillText("Economic Axis: " + document.getElementById("economic-label").innerHTML, 400, 125)
        ctx.fillText("Diplomatic Axis: " + document.getElementById("diplomatic-label").innerHTML, 400, 245)
        ctx.fillText("Civil Axis: " + document.getElementById("state-label").innerHTML, 400, 365)
        ctx.fillText("Societal Axis: " + document.getElementById("society-label").innerHTML, 400, 485)
    }

    render() {
        return (
            <div>
            <div className='bgheader'>
            <div className='gradient'>
                <img src={this.state.ideologyBG ? this.state.ideologyBG : ''} alt='' />
            </div>
        </div>
            <main className='main'>
            <Grid container className='horiPadding vertPadding' spacing={0}>
            <NavLink className='glink' to='/' exact style={{zIndex: 90000000000000, marginTop: 32}}><i className='mdi mdi-arrow-left' /> Back</NavLink>
            <div className='header'>
                <h2 className='large'>Results</h2>
                <h1 id='mainTitle' className='large'>You got {this.state.ideology}</h1>
            </div>
            <div className='header'>
            <h2>{this.state.economicLabel} on Economics</h2>
            <h1>{this.state.wealth + '%'} Markets </h1><progress value={this.state.wealth} max={100} className='axis-line darkgreen' style={{color: 'green'}} />
            <h1>{this.state.equality + '%'} Equality </h1><progress value={this.state.equality} max={100} className='axis-line red' style={{color: 'red'}} />
            <br />
            <br />
            <h2>{this.state.diplomaticLabel} on Diplomatics</h2>
            <h1>{this.state.might + '%'} Nation </h1><progress value={this.state.might} max={100} className='axis-line orange' style={{color: 'orange'}} />
            <h1>{this.state.peace + '%'} World </h1><progress value={this.state.peace} max={100} className='axis-line' style={{color: 'blue'}} />
            <br />
            <br />
            <h2>{this.state.stateLabel} on Liberty</h2>
            <h1>{this.state.liberty + '%'} Freedoms </h1><progress value={this.state.liberty} max={100} className='axis-line yellow' style={{color: 'yellow'}} />
            <h1>{this.state.authority + '%'} Stalins </h1><progress value={this.state.authority} max={100} className='axis-line darkblue' style={{color: 'purple'}} />
            <br />
            <br />
            <h2>{this.state.societyLabel} on Society</h2>
            <h1>{this.state.tradition + '%'} Traditionist </h1><progress value={this.state.tradition} max={100} className='axis-line green' style={{color: 'green'}} />
            <h1>{this.state.progress + '%'} Progressivist </h1><progress value={this.state.progress} max={100} className='axis-line purple' style={{color: 'pink'}} />
        </div>
        <div className='header' style={{textAlign: 'center', justifyContent: 'center', width: '100%', display: 'flex', flexFlow: 'column wrap'}}>
        <h1 style={{marginBottom: 16}}>Your position on the political compass</h1>
        <div style={{
            width: 512,
            height: 512,
            background: '#FFF',
            border: '1px solid rgba(0,0,0,.2)',
            borderRadius: '24px',
            alignSelf: 'center',
            position: 'relative'
        }}>
        <div style={{
            width: '100%',
            background: 'rgba(0,0,0,.2',
            height: 1,
            position: 'absolute',
            top: '50%',
            left: 0,
            right: 0,
            bottom: '50%'
        }} />
        <div style={{
            height: '100%',
            background: 'rgba(0,0,0,.2)',
            width: 1,
            position: 'absolute',
            top: 0,
            left: '50%',
            right: '50%',
            bottom: 0
        }} />
        </div>
        </div>
        <div className='header' style={{textAlign: 'center'}}>
        <h1 style={{marginBottom: 16}}>Recommended literature on about {this.state.ideology}</h1>
        </div>
        <div className='header' style={{textAlign: 'center'}}>
        <h1 style={{marginBottom: 16}}>{this.state.ideology.replace('ism', 'ist')} parties in your country</h1>
        </div>
        <div className='header' style={{textAlign: 'center'}}>
        <h1 style={{marginBottom: 16}}>Don't feel like it's your ideology? Here's the closest alternatives</h1>
        </div>
        </Grid>
            </main>
            </div>
        )
    }
}

export default EightValues;