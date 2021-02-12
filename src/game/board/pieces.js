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
import pt from '../../assets/point.svg'
import React, { Component } from 'react'

class Pmove extends Component{
    constructor(props){
        super(props)
        this.state={
            hs:Math.min(window.innerWidth,window.innerHeight)*0.9/8
        }
    }
    move=()=>{
        var move_to=this.props.p
        this.props.smf(this.props.i,this.props.j,this.props.selectedp)
        move_to([this.props.i,this.props.j])
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
    render(){
        var hs=this.state.hs
        return(
            <div onClick={this.move} style={{width:"12.5%",height:"12.5%",position:"absolute",transform:"translate("+this.props.i*hs+"px,"+this.props.j*hs+"px)",backgroundSize: "90% 90%",backgroundRepeat: "no-repeat",backgroundImage:"url("+pt+")",cursor:"pointer",backgroundPosition:"center center"}}></div>
        )
    }
}
class King extends Component{
    constructor(props){
        super(props)
        this.state={
            type:"K",
            image:props.color==='w'?kw:kb,
            pos:[props.position.charCodeAt(0)-97,8-parseInt(props.position[1])],
            color:props.color,
            taken:false,
            hs:Math.min(window.innerWidth,window.innerHeight)*0.9/8
        }
    }
    king_moves=(matrix,i,j,c)=>{
        var L=[]
        if(i<8 && i>=0 && j+1<8 && j+1>=0 && matrix[j+1][i]===0){
                L.push([i,j+1])
            }
        if(i<8 && i>=0 && j-1<8 && j-1>=0 && matrix[j-1][i]===0){
                L.push([i,j-1])
            }
        if(i+1<8 && i+1>=0 && j<8 && j>=0 && matrix[j][i+1]===0){
                L.push([i+1,j])
            }
        if(i-1<8 && i-1>=0 && j<8 && j>=0 && matrix[j][i-1]===0){
                L.push([i-1,j])
            }
        if(i+1<8 && i+1>=0 && j+1<8 && j+1>=0 && matrix[j+1][i+1]===0){
                L.push([i+1,j+1])
            }
        if(i+1<8 && i+1>=0 && j-1<8 && j-1>=0 && matrix[j-1][i+1]===0){
                L.push([i+1,j-1])
            }
        if(i-1<8 && i-1>=0 && j+1<8 && j+1>=0 && matrix[j+1][i-1]===0){
                L.push([i-1,j+1])
            }
        if(i-1<8 && i-1>=0 && j-1<8 && j-1>=0 && matrix[j-1][i-1]===0){
                L.push([i-1,j-1])
            }
        return L
    }
    cellSelected=(e)=>{
        e.stopPropagation()
        this.props.select(this.state.type+this.props.position,this.state.pos[0],this.state.pos[1],this.king_moves,this.state.color,this.move_to)
    }
    move_to=(arr)=>{
        this.setState({pos:[arr[0],arr[1]]})
        this.props.smf(this.state.pos[0],this.state.pos[1],0)
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
    render(){
        var hs=this.state.hs
        return(
            <div key={this.state.type+this.props.position} onClick={this.cellSelected} style={{width:"12.5%",height:"12.5%",position:"absolute",transform:"translate("+this.state.pos[0]*hs+"px,"+this.state.pos[1]*hs+"px)",transition:"transform 0.5s",backgroundColor:this.props.cell===this.state.type+this.props.position?"rgba(0,255,0,0.5)":"rgba(0,255,0,0)"}}>
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
            pos:[props.position.charCodeAt(0)-97,8-parseInt(props.position[1])],
            color:props.color,
            taken:false,
            hs:Math.min(window.innerWidth,window.innerHeight)*0.9/8
        }
    }
    queen_moves=(matrix,i,j,c)=>{
        var L=[]
        var l1=(a,b)=>{
            if(a<8 && a>=0 && b<8 && b>=0 && matrix[b][a]===0){
                L.push([a,b])
                l1(a+1,b)
            }
        }
        var l2=(a,b)=>{
            if(a<8 && a>=0 && b<8 && b>=0 && matrix[b][a]===0){
                L.push([a,b])
                l2(a-1,b)
            }
        }
        var l3=(a,b)=>{
            if(a<8 && a>=0 && b<8 && b>=0 && matrix[b][a]===0){
                L.push([a,b])
                l3(a,b+1)
            }
        }
        var l4=(a,b)=>{
            if(a<8 && a>=0 && b<8 && b>=0 && matrix[b][a]===0){
                L.push([a,b])
                l4(a,b-1)
            }
        }
        var l5=(a,b)=>{
            if(a<8 && a>=0 && b<8 && b>=0 && matrix[b][a]===0){
                L.push([a,b])
                l5(a+1,b+1)
            }
        }
        var l6=(a,b)=>{
            if(a<8 && a>=0 && b<8 && b>=0 && matrix[b][a]===0){
                L.push([a,b])
                l6(a+1,b-1)
            }
        }
        var l7=(a,b)=>{
            if(a<8 && a>=0 && b<8 && b>=0 && matrix[b][a]===0){
                L.push([a,b])
                l7(a-1,b+1)
            }
        }
        var l8=(a,b)=>{
            if(a<8 && a>=0 && b<8 && b>=0 && matrix[b][a]===0){
                L.push([a,b])
                l8(a-1,b-1)
            }
        }
        l5(i+1,j+1)
        l6(i+1,j-1)
        l7(i-1,j+1)
        l8(i-1,j-1)
        l1(i+1,j)
        l2(i-1,j)
        l3(i,j+1)
        l4(i,j-1)
        return L
    }
    cellSelected=(e)=>{
        e.stopPropagation()
        this.props.select(this.state.type+this.props.position,this.state.pos[0],this.state.pos[1],this.queen_moves,this.state.color,this.move_to)
    }
    move_to=(arr)=>{
        this.setState({pos:[arr[0],arr[1]]})
        this.props.smf(this.state.pos[0],this.state.pos[1],0)
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
    render(){
        var hs=this.state.hs
        return(
            <div key={this.state.type+this.state.position} onClick={this.cellSelected} style={{width:"12.5%",height:"12.5%",position:"absolute",transform:"translate("+this.state.pos[0]*hs+"px,"+this.state.pos[1]*hs+"px)",transition:"transform 0.5s",backgroundColor:this.props.cell===this.state.type+this.state.pos?"rgba(0,255,0,0.5)":"rgba(0,255,0,0)"}}>
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
            pos:[props.position.charCodeAt(0)-97,8-parseInt(props.position[1])],
            color:props.color,
            taken:false,
            hs:Math.min(window.innerWidth,window.innerHeight)*0.9/8
        }
    }
    bishop_moves=(matrix,i,j,c)=>{
        var L=[]
        var l1=(a,b)=>{
            if(a<8 && a>=0 && b<8 && b>=0 && matrix[b][a]===0){
                L.push([a,b])
                l1(a+1,b+1)
            }
        }
        var l2=(a,b)=>{
            if(a<8 && a>=0 && b<8 && b>=0 && matrix[b][a]===0){
                L.push([a,b])
                l2(a+1,b-1)
            }
        }
        var l3=(a,b)=>{
            if(a<8 && a>=0 && b<8 && b>=0 && matrix[b][a]===0){
                L.push([a,b])
                l3(a-1,b+1)
            }
        }
        var l4=(a,b)=>{
            if(a<8 && a>=0 && b<8 && b>=0 && matrix[b][a]===0){
                L.push([a,b])
                l4(a-1,b-1)
            }
        }
        l1(i+1,j+1)
        l2(i+1,j-1)
        l3(i-1,j+1)
        l4(i-1,j-1)
        return L
    }
    cellSelected=(e)=>{
        e.stopPropagation()
        this.props.select(this.state.type+this.props.position,this.state.pos[0],this.state.pos[1],this.bishop_moves,this.state.color,this.move_to)
    }
    move_to=(arr)=>{
        this.setState({pos:[arr[0],arr[1]]})
        this.props.smf(this.state.pos[0],this.state.pos[1],0)
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
    render(){
        var hs=this.state.hs
        return(
            <div key={this.state.type+this.state.position} onClick={this.cellSelected} style={{width:"12.5%",height:"12.5%",position:"absolute",transform:"translate("+this.state.pos[0]*hs+"px,"+this.state.pos[1]*hs+"px)",transition:"transform 0.5s",backgroundColor:this.props.cell===this.state.type+this.state.pos?"rgba(0,255,0,0.5)":"rgba(0,255,0,0)"}}>
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
            pos:[props.position.charCodeAt(0)-97,8-parseInt(props.position[1])],
            color:props.color,
            taken:false,
            hs:Math.min(window.innerWidth,window.innerHeight)*0.9/8
        }
    }
    knight_moves=(matrix,i,j,c)=>{
        var L=[]
        if(i+2<8 && j+1<8 && i+2>=0 && j+1>=0 && matrix[j+1][i+2]===0){
            L.push([i+2,j+1])
        }
        if(i+2<8 && j-1<8 && i+2>=0 && j-1>=0 && matrix[j-1][i+2]===0){
            L.push([i+2,j-1])
        }
        if(i+1<8 && j+2<8 && i+1>=0 && j+2>=0 && matrix[j+2][i+1]===0){
            L.push([i+1,j+2])
        }
        if(i+1<8 && j-2<8 && i+1>=0 && j-2>=0 && matrix[j-2][i+1]===0){
            L.push([i+1,j-2])
        }
        if(i-2<8 && j+1<8 && i-2>=0 && j+1>=0 && matrix[j+1][i-2]===0){
            L.push([i-2,j+1])
        }
        if(i-2<8 && j-1<8 && i-2>=0 && j-1>=0 && matrix[j-1][i-2]===0){
            L.push([i-2,j-1])
        }
        if(i-1<8 && j+2<8 && i-1>=0 && j+2>=0 && matrix[j+2][i-1]===0){
            L.push([i-1,j+2])
        }
        if(i-1<8 && j-2<8 && i-1>=0 && j-2>=0 && matrix[j-2][i-1]===0){
            L.push([i-1,j-2])
        }
        return L
    }
    cellSelected=(e)=>{
        e.stopPropagation()
        this.props.select(this.state.type+this.props.position,this.state.pos[0],this.state.pos[1],this.knight_moves,this.state.color,this.move_to)
    }
    move_to=(arr)=>{
        this.setState({pos:[arr[0],arr[1]]})
        this.props.smf(this.state.pos[0],this.state.pos[1],0)
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
    render(){
        var hs=this.state.hs
        return(
            <div key={this.state.type+this.state.position} onClick={this.cellSelected} style={{width:"12.5%",height:"12.5%",position:"absolute",transform:"translate("+this.state.pos[0]*hs+"px,"+this.state.pos[1]*hs+"px)",transition:"transform 0.5s",backgroundColor:this.props.cell===this.state.type+this.state.pos?"rgba(0,255,0,0.5)":"rgba(0,255,0,0)"}}>
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
            pos:[props.position.charCodeAt(0)-97,8-parseInt(props.position[1])],
            color:props.color,
            taken:false,
            hs:Math.min(window.innerWidth,window.innerHeight)*0.9/8
        }
    }
    rook_moves=(matrix,i,j,c)=>{
        var L=[]
        var l1=(a,b)=>{
            if(a<8 && a>=0 && b<8 && b>=0 && matrix[b][a]===0){
                L.push([a,b])
                l1(a+1,b)
            }
        }
        var l2=(a,b)=>{
            if(a<8 && a>=0 && b<8 && b>=0 && matrix[b][a]===0){
                L.push([a,b])
                l2(a-1,b)
            }
        }
        var l3=(a,b)=>{
            if(a<8 && a>=0 && b<8 && b>=0 && matrix[b][a]===0){
                L.push([a,b])
                l3(a,b+1)
            }
        }
        var l4=(a,b)=>{
            if(a<8 && a>=0 && b<8 && b>=0 && matrix[b][a]===0){
                L.push([a,b])
                l4(a,b-1)
            }
        }
        l1(i+1,j)
        l2(i-1,j)
        l3(i,j+1)
        l4(i,j-1)
        return L
    }
    cellSelected=(e)=>{
        e.stopPropagation()
        this.props.select(this.state.type+this.props.position,this.state.pos[0],this.state.pos[1],this.rook_moves,this.state.color,this.move_to)
    }
    move_to=(arr)=>{
        this.setState({pos:[arr[0],arr[1]]})
        this.props.smf(this.state.pos[0],this.state.pos[1],0)
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
    render(){
        var hs=this.state.hs
        return(
            <div key={this.state.type+this.state.position} onClick={this.cellSelected} style={{width:"12.5%",height:"12.5%",position:"absolute",transform:"translate("+this.state.pos[0]*hs+"px,"+this.state.pos[1]*hs+"px)",transition:"transform 0.5s",backgroundColor:this.props.cell===this.state.type+this.state.pos?"rgba(0,255,0,0.5)":"rgba(0,255,0,0)"}}>
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
            pos:[props.position.charCodeAt(0)-97,8-parseInt(props.position[1])],
            color:props.color,
            taken:false,
            first_move:true,
            hs:Math.min(window.innerWidth,window.innerHeight)*0.9/8
        }
    }
    pawn_moves=(matrix,i,j,c)=>{
        var L=[]
        if(j<8 && j>=0 && ((this.state.color==='w' && matrix[j-1][i]===0) || (this.state.color==='b' && matrix[j+1][i]===0))){
            L.push([i,this.state.color==='w'?j-1:j+1])
        }
        if(this.state.first_move){
            L.push([i,this.state.color==='w'?j-2:j+2])
        }
        return L
    }
    cellSelected=(e)=>{
        e.stopPropagation()
        this.props.select(this.state.type+this.props.position,this.state.pos[0],this.state.pos[1],this.pawn_moves,this.state.color,this.move_to,this.modifybg)
    }
    move_to=(arr)=>{
        this.setState({pos:[arr[0],arr[1]]})
        this.setState({first_move:false})
        this.props.smf(this.state.pos[0],this.state.pos[1],0)
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
    modifybg=()=>{
        this.setState({cell:this.props.cell()})
    }
    render(){
        var hs=this.state.hs
        return(
            <div onClick={this.cellSelected} style={{width:"12.5%",height:"12.5%",position:"absolute",transform:"translate("+this.state.pos[0]*hs+"px,"+this.state.pos[1]*hs+"px)",transition:"transform 0.5s",backgroundColor:this.state.cell===this.state.type+this.props.position?"rgba(0,255,0,0.5)":"rgba(0,255,0,0)"}}>
                <div style={{backgroundSize: "90% 90%",backgroundRepeat: "no-repeat",backgroundImage:"url("+this.state.image+")",cursor:"pointer",backgroundPosition:"center center",width:"100%",height:"100%"}}></div>
            </div>
        )
    }
}
export {King,Pmove,Queen,Bishop,Knight,Rook,Pawn}