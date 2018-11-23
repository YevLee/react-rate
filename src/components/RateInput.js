
import React ,{Component} from "react"
class RateInput extends Component{
    constructor(props){
        super(props);
       
       };
      
    render(){
        return(
           <div>
                <input
                value={this.props.name}
                onChange={this.props.handleChangeNameInput} 
                placeholder='留下您的大名'
                />
                <input
                value={this.props.inputValue}
                onChange={this.props.handleChangeContentInput} 
                placeholder='留下点评论吧'
                />
                <button onClick={this.props.handleClickBtn}>添加</button>
           </div>
        )
    }
}
export default RateInput;