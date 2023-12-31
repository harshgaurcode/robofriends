import React ,{Component}from 'react';
import CardList from './CardList';
import {robots} from './robots';
import Searchbox from './Searchbox';


class App extends Component{
    constructor(){
        super()
        this.state={
            robots:robots,
            searchfield:''
        }
    }
onSearchChange= (event) => {
    this.setState({searchfield: event.target.value})
    console.log(event.target.value);
    
}

    render(){
        const filteredRobot=this.state.robots.filter(robots =>{
            return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
return( 
    <div className="tc">
    <h1>RoboFriend</h1>
    <Searchbox searchChange={this.onSearchChange}/>
    <CardList robots={filteredRobot}/>
    </div>
);


}}

export default App;