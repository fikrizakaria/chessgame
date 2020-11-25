import kb from '../../assets/king_black.svg';
import qb from '../../assets/queen_black.svg';
import bb from '../../assets/bishop_black.svg';
import nb from '../../assets/knight_black.svg';
import rb from '../../assets/rook_black.svg';
import pb from '../../assets/pawn_black.svg';
import kw from '../../assets/king_white.svg';
import qw from '../../assets/queen_white.svg';
import bw from '../../assets/bishop_white.svg';
import nw from '../../assets/knight_white.svg';
import rw from '../../assets/rook_white.svg';
import pw from '../../assets/pawn_white.svg';
import React, { Component } from 'react'

class King extends Component{
    constructor(props){
        super(props)
        this.state={
            type:"K",
            image:props.color==='w'?kw:kb,
            pos:props.position,
            color:props.color,
            taken:false
        }
    }
    cellSelected=(e)=>{
        e.stopPropagation()
        this.props.select(this.state.type+this.state.pos)
    }
    render(){
        var i=this.state.pos.charCodeAt(0)-97
        var j=8-parseInt(this.state.pos[1])
        var hs=this.props.hs
        return(
            <div key={this.state.type+this.state.pos} onClick={this.cellSelected} style={{width:"12.5%",height:"12.5%",position:"absolute",transform:"translate("+i*hs+"px,"+j*hs+"px)",backgroundColor:this.props.cell===this.state.type+this.state.pos?"rgba(0,255,0,0.5)":"rgba(0,255,0,0)"}}>
                <div style={{backgroundSize: "90% 90%",backgroundRepeat: "no-repeat",backgroundImage:"url("+this.state.image+")",cursor:"pointer",backgroundPosition:"center center",width:"100%",height:"100%"}}></div>
            </div>
        )
    }
}
class Queen extends Component{
    constructor(props){
        super(props)
        this.state={
            type:"Q",
            image:props.color==='w'?qw:qb,
            pos:props.position,
            color:props.color,
            taken:false
        }
    }
    cellSelected=(e)=>{
        e.stopPropagation()
        this.props.select(this.state.type+this.state.pos)
    }
    render(){
        var i=this.state.pos.charCodeAt(0)-97
        var j=8-parseInt(this.state.pos[1])
        var hs=this.props.hs
        return(
            <div key={this.state.type+this.state.pos} onClick={this.cellSelected} style={{width:"12.5%",height:"12.5%",position:"absolute",transform:"translate("+i*hs+"px,"+j*hs+"px)",backgroundColor:this.props.cell===this.state.type+this.state.pos?"rgba(0,255,0,0.5)":"rgba(0,255,0,0)"}}>
                <div style={{backgroundSize: "90% 90%",backgroundRepeat: "no-repeat",backgroundImage:"url("+this.state.image+")",cursor:"pointer",backgroundPosition:"center center",width:"100%",height:"100%"}}></div>
            </div>
        )
    }
}
class Bishop extends Component{
    constructor(props){
        super(props)
        this.state={
            type:"B",
            image:props.color==='w'?bw:bb,
            pos:props.position,
            color:props.color,
            taken:false
        }
    }
    cellSelected=(e)=>{
        e.stopPropagation()
        this.props.select(this.state.type+this.state.pos)
    }
    render(){
        var i=this.state.pos.charCodeAt(0)-97
        var j=8-parseInt(this.state.pos[1])
        var hs=this.props.hs
        return(
            <div key={this.state.type+this.state.pos} onClick={this.cellSelected} style={{width:"12.5%",height:"12.5%",position:"absolute",transform:"translate("+i*hs+"px,"+j*hs+"px)",backgroundColor:this.props.cell===this.state.type+this.state.pos?"rgba(0,255,0,0.5)":"rgba(0,255,0,0)"}}>
                <div style={{backgroundSize: "90% 90%",backgroundRepeat: "no-repeat",backgroundImage:"url("+this.state.image+")",cursor:"pointer",backgroundPosition:"center center",width:"100%",height:"100%"}}></div>
            </div>
        )
    }
}
class Knight extends Component{
    constructor(props){
        super(props)
        this.state={
            type:"N",
            image:props.color==='w'?nw:nb,
            pos:props.position,
            color:props.color,
            taken:false
        }
    }
    knight_moves=(matrix,i,j,c)=>{
        var L=[]
        console.log("("+i+","+j+")")
        if(i+2<8 && j+1<8 && i+2>=0 && j+1>=0 && matrix[j+1][i+2]==0){
            L.push([i+2,j+1])
            console.log("true1")
        }
        if(i+2<8 && j-1<8 && i+2>=0 && j-1>=0 && matrix[j-1][i+2]==0){
            L.push([i+2,j-1])
            console.log("true2")
        }
        if(i+1<8 && j+2<8 && i+1>=0 && j+2>=0 && matrix[j+2][i+1]==0){
            L.push([i+1,j+2])
            console.log("true3")
        }
        if(i+1<8 && j-2<8 && i+1>=0 && j-2>=0 && matrix[j-2][i+1]==0){
            L.push([i+1,j-2])
            console.log("true4")
        }
        if(i-2<8 && j+1<8 && i-2>=0 && j+1>=0 && matrix[j+1][i-2]==0){
            L.push([i-2,j+1])
            console.log("true5")
        }
        if(i-2<8 && j-1<8 && i-2>=0 && j-1>=0 && matrix[j-1][i-2]==0){
            L.push([i-2,j-1])
            console.log("true6")
        }
        if(i-1<8 && j+2<8 && i-1>=0 && j+2>=0 && matrix[j+2][i-1]==0){
            L.push([i-1,j+2])
            console.log("true7")
        }
        if(i-1<8 && j-2<8 && i-1>=0 && j-2>=0 && matrix[j-2][i-1]==0){
            L.push([i-1,j-2])
            console.log("true8")
        }
        return L
    }
    cellSelected=(e)=>{
        e.stopPropagation()
        this.props.select(this.state.type+this.state.pos,this.knight_moves,this.state.color)
    }
    render(){
        var i=this.state.pos.charCodeAt(0)-97
        var j=8-parseInt(this.state.pos[1])
        var hs=this.props.hs
        return(
            <div key={this.state.type+this.state.pos} onClick={this.cellSelected} style={{width:"12.5%",height:"12.5%",position:"absolute",transform:"translate("+i*hs+"px,"+j*hs+"px)",backgroundColor:this.props.cell===this.state.type+this.state.pos?"rgba(0,255,0,0.5)":"rgba(0,255,0,0)"}}>
                <div style={{backgroundSize: "90% 90%",backgroundRepeat: "no-repeat",backgroundImage:"url("+this.state.image+")",cursor:"pointer",backgroundPosition:"center center",width:"100%",height:"100%"}}></div>
            </div>
        )
    }
}
class Rook extends Component{
    constructor(props){
        super(props)
        this.state={
            type:"R",
            image:props.color==='w'?rw:rb,
            pos:props.position,
            color:props.color,
            taken:false
        }
    }
    cellSelected=(e)=>{
        e.stopPropagation()
        this.props.select(this.state.type+this.state.pos)
    }
    render(){
        var i=this.state.pos.charCodeAt(0)-97
        var j=8-parseInt(this.state.pos[1])
        var hs=this.props.hs
        return(
            <div key={this.state.type+this.state.pos} onClick={this.cellSelected} style={{width:"12.5%",height:"12.5%",position:"absolute",transform:"translate("+i*hs+"px,"+j*hs+"px)",backgroundColor:this.props.cell===this.state.type+this.state.pos?"rgba(0,255,0,0.5)":"rgba(0,255,0,0)"}}>
                <div style={{backgroundSize: "90% 90%",backgroundRepeat: "no-repeat",backgroundImage:"url("+this.state.image+")",cursor:"pointer",backgroundPosition:"center center",width:"100%",height:"100%"}}></div>
            </div>
        )
    }
}
class Pawn extends Component{
    constructor(props){
        super(props)
        this.state={
            type:"p",
            image:props.color==='w'?pw:pb,
            pos:props.position,
            color:props.color,
            taken:false,
            first_move:true
        }
    }
    pawn_moves=(matrix,i,j,c)=>{
        var L=[]
        if(j<7 && j>0 && ((this.state.color==='w' && matrix[j-1][i]==0) || (this.state.color==='b' && matrix[j+1][i]==0))){
            L.push([i,this.state.color==='w'?j-1:j+1])
        }
        if(this.state.first_move && ((this.state.color==='w' && matrix[j-1][i]==0 && matrix[j-2][i]==0) || (this.state.color==='b' && matrix[j+1][i]==0 && matrix[j+2][i]==0))){
            L.push([i,this.state.color==='w'?j-2:j+2])
            this.first_move=false
        }
        return L
    }
    cellSelected=(e)=>{
        e.stopPropagation()
        this.props.select(this.state.type+this.state.pos,this.pawn_moves,this.state.color)
    }
    render(){
        var i=this.state.pos.charCodeAt(0)-97
        var j=8-parseInt(this.state.pos[1])
        var hs=this.props.hs
        return(
            <div key={this.state.type+this.state.pos} onClick={this.cellSelected} style={{width:"12.5%",height:"12.5%",position:"absolute",transform:"translate("+i*hs+"px,"+j*hs+"px)",backgroundColor:this.props.cell===this.state.type+this.state.pos?"rgba(0,255,0,0.5)":"rgba(0,255,0,0)"}}>
                <div style={{backgroundSize: "90% 90%",backgroundRepeat: "no-repeat",backgroundImage:"url("+this.state.image+")",cursor:"pointer",backgroundPosition:"center center",width:"100%",height:"100%"}}></div>
            </div>
        )
    }
}
export {King,Queen,Bishop,Knight,Rook,Pawn}