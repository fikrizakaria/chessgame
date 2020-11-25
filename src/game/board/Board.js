import board from '../../assets/board.svg'
import pt from '../../assets/point.svg'
import React, { Component } from 'react'
import {King,Queen,Bishop,Knight,Rook,Pawn} from './pieces'
const styles=[{
    height:"90vmin",
    width:"90vmin",
    position:"relative",
    backgroundImage:"url("+board+")",},
]

class Board extends Component {
    constructor(props) {
        super(props);
        this.state={
            hs:Math.min(window.innerWidth,window.innerHeight)*0.9/8,
            matrix:[[1,1,1,1,1,1,1,1],
                    [1,1,1,1,1,1,1,1],
                    [0,0,0,0,0,0,0,0],
                    [0,0,0,0,0,0,0,0],
                    [0,0,0,0,0,0,0,0],
                    [0,0,0,0,0,0,0,0],
                    [1,1,1,1,1,1,1,1],
                    [1,1,1,1,1,1,1,1]],
        }
    }
    updatehs=()=>{
        this.setState({hs:Math.min(window.innerWidth,window.innerHeight)*0.9/8});
    }
    componentDidMount() {
        window.addEventListener('resize', this.updatehs)
    }
    componentWillUnmount() {
        window.removeEventListener('resize', this.updatehs)
    }
    handleSelect=(abc,f,c)=>{
        if(this.state.selected===abc){
            this.setState({selected:""})
            this.setState({moves:[]})
        }
        else {
            var i=abc.charCodeAt(1)-97
            var j=8-parseInt(abc[2])
            var movesij=f(this.state.matrix,i,j,c)
            this.setState({moves:movesij.map((elt,i)=>{
                return(
                    <div key={i} style={{width:"12.5%",height:"12.5%",position:"absolute",transform:"translate("+elt[0]*this.state.hs+"px,"+elt[1]*this.state.hs+"px)",backgroundSize: "90% 90%",backgroundRepeat: "no-repeat",backgroundImage:"url("+pt+")",cursor:"pointer",backgroundPosition:"center center"}}>
                    </div>
                )
            })})
            this.setState({selected:abc})
        }
    }
    handleClick=()=>this.setState({selected:""})
    render() {
        return (
            <div onClick={this.handleClick} style={styles[0]}>
                <King position="e1" select={this.handleSelect} cell={this.state.selected} color="w" hs={this.state.hs}/>
                <Queen position="d1" select={this.handleSelect} cell={this.state.selected} color="w" hs={this.state.hs}/>
                <Bishop position="c1" select={this.handleSelect} cell={this.state.selected} color="w" hs={this.state.hs}/>
                <Bishop position="f1" select={this.handleSelect} cell={this.state.selected} color="w" hs={this.state.hs}/>
                <Knight position="b1" select={this.handleSelect} cell={this.state.selected} color="w" hs={this.state.hs}/>
                <Knight position="g1" select={this.handleSelect} cell={this.state.selected} color="w" hs={this.state.hs}/>
                <Rook position="h1" select={this.handleSelect} cell={this.state.selected} color="w" hs={this.state.hs}/>
                <Rook position="a1" select={this.handleSelect} cell={this.state.selected} color="w" hs={this.state.hs}/>
                <Pawn position="a2" select={this.handleSelect} cell={this.state.selected} color="w" hs={this.state.hs}/>
                <Pawn position="b2" select={this.handleSelect} cell={this.state.selected} color="w" hs={this.state.hs}/>
                <Pawn position="c2" select={this.handleSelect} cell={this.state.selected} color="w" hs={this.state.hs}/>
                <Pawn position="d2" select={this.handleSelect} cell={this.state.selected} color="w" hs={this.state.hs}/>
                <Pawn position="e2" select={this.handleSelect} cell={this.state.selected} color="w" hs={this.state.hs}/>
                <Pawn position="f2" select={this.handleSelect} cell={this.state.selected} color="w" hs={this.state.hs}/>
                <Pawn position="g2" select={this.handleSelect} cell={this.state.selected} color="w" hs={this.state.hs}/>
                <Pawn position="h2" select={this.handleSelect} cell={this.state.selected} color="w" hs={this.state.hs}/>
                {this.state.moves}
                <King position="e8" select={this.handleSelect} cell={this.state.selected} color="b" hs={this.state.hs}/>
                <Queen position="d8" select={this.handleSelect} cell={this.state.selected} color="b" hs={this.state.hs}/>
                <Bishop position="c8" select={this.handleSelect} cell={this.state.selected} color="b" hs={this.state.hs}/>
                <Bishop position="f8" select={this.handleSelect} cell={this.state.selected} color="b" hs={this.state.hs}/>
                <Knight position="b8" select={this.handleSelect} cell={this.state.selected} color="b" hs={this.state.hs}/>
                <Knight position="g8" select={this.handleSelect} cell={this.state.selected} color="b" hs={this.state.hs}/>
                <Rook position="h8" select={this.handleSelect} cell={this.state.selected} color="b" hs={this.state.hs}/>
                <Rook position="a8" select={this.handleSelect} cell={this.state.selected} color="b" hs={this.state.hs}/>
                <Pawn position="a7" select={this.handleSelect} cell={this.state.selected} color="b" hs={this.state.hs}/>
                <Pawn position="b7" select={this.handleSelect} cell={this.state.selected} color="b" hs={this.state.hs}/>
                <Pawn position="c7" select={this.handleSelect} cell={this.state.selected} color="b" hs={this.state.hs}/>
                <Pawn position="d7" select={this.handleSelect} cell={this.state.selected} color="b" hs={this.state.hs}/>
                <Pawn position="e7" select={this.handleSelect} cell={this.state.selected} color="b" hs={this.state.hs}/>
                <Pawn position="f7" select={this.handleSelect} cell={this.state.selected} color="b" hs={this.state.hs}/>
                <Pawn position="g7" select={this.handleSelect} cell={this.state.selected} color="b" hs={this.state.hs}/>
                <Pawn position="h7" select={this.handleSelect} cell={this.state.selected} color="b" hs={this.state.hs}/>
            </div>
        )
    }
}

export default Board;