import board from '../../assets/board.svg'
import React, { Component } from 'react'
import {King,Pmove,Queen,Bishop,Knight,Rook,Pawn} from './pieces'
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
            selected:"89",
            matrix:[["Rb","Nb","Bb","Qb","Kb","Bb","Nb","Rb"],
                    ['pb','pb','pb','pb','pb','pb','pb','pb'],
                    [0,0,0,0,0,0,0,0],
                    [0,0,0,0,0,0,0,0],
                    [0,0,0,0,0,0,0,0],
                    [0,0,0,0,0,0,0,0],
                    ['pw','pw','pw','pw','pw','pw','pw','pw'],
                    ["Rw","Nw","Bw","Qw","Kw","Bw","Nw","Rw"]],
            pieces:[]
        }
        this.generatePieces()
    }
    setMove=(i,j,c)=>{
        const newmatrix = this.state.matrix.slice()
        newmatrix[j][i]=c
        this.setState({matrix: newmatrix})
    }
    rsselected=()=>this.state.selected
    generatePieces=()=>{
        var L=this.state.pieces
        for(var i=0;i<8;i++)for(var j=0;j<8;j++)if(this.state.matrix[i][j]!==0){
            var pos=String.fromCharCode(j+97)+(8-i).toString()
            if(this.state.matrix[i][j][0]==="p"){
                L.push(
                    <Pawn key={pos} smf={this.setMove} position={pos} select={this.handleSelect} cell={this.rsselected} color={this.state.matrix[i][j][1]} hs={this.state.hs}/>
                )
            }
            else if(this.state.matrix[i][j][0]==="R"){
                L.push(
                    <Rook key={this.state.matrix[i][j][0]+pos} smf={this.setMove} position={pos} select={this.handleSelect} cell={this.state.selected} color={this.state.matrix[i][j][1]} hs={this.state.hs}/>
                )
            }
            else if(this.state.matrix[i][j][0]==="N"){
                L.push(
                    <Knight key={this.state.matrix[i][j][0]+pos} smf={this.setMove} position={pos} select={this.handleSelect} cell={this.state.selected} color={this.state.matrix[i][j][1]} hs={this.state.hs}/>
                )
            }
            else if(this.state.matrix[i][j][0]==="B"){
                L.push(
                    <Bishop key={this.state.matrix[i][j][0]+pos} smf={this.setMove} position={pos} select={this.handleSelect} cell={this.state.selected} color={this.state.matrix[i][j][1]} hs={this.state.hs}/>
                )
            }
            else if(this.state.matrix[i][j][0]==="Q"){
                L.push(
                    <Queen key={this.state.matrix[i][j][0]+pos} smf={this.setMove} position={pos} select={this.handleSelect} cell={this.state.selected} color={this.state.matrix[i][j][1]} hs={this.state.hs}/>
                )
            }
            else if(this.state.matrix[i][j][0]==="K"){
                L.push(
                    <King key={this.state.matrix[i][j][0]+pos} smf={this.setMove} position={pos} select={this.handleSelect} cell={this.state.selected} color={this.state.matrix[i][j][1]} hs={this.state.hs}/>
                )
            }
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
    handleSelect=(abc,i,j,f,c,g,m)=>{
        if(this.state.selected===abc){
            this.setState({selected:""})
            this.setState({moves:[]})
            m()
        }
        else {
            var movesij=f(this.state.matrix,i,j,c)
            this.setState({selected:abc})
            m()
            this.setState({moves:movesij.map((elt,ind)=>{
                return(
                    <Pmove smf={this.setMove} selectedp={abc[0]+c} p={g} key={ind} i={elt[0]} j={elt[1]} hs={this.state.hs}/>
                )
            })})
        }
    }
    handleClick=()=>{
        this.setState({selected:""})
        this.setState({moves:[]})
    }
    render() {
        return (
            <div onClick={this.handleClick} style={styles[0]}>
                {this.state.pieces}
                {this.state.moves}
            </div>
        )
    }
}

export default Board;