
import React ,{Component} from "react"
class RateInput extends Component{
    constructor(props){
        super(props);
       
       };
      
    render(){
        return(
           <div>
                <input
                value={this.props.inputValue}
                onChange={this.props.handleChangeInput} />
                <button onClick={this.props.handleClickBtn}>添加</button>
           </div>
        )
    }
}
export default RateInput;