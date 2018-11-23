import React ,{Component} from "react"
import RateInput from './RateInput'
import RateList from './RateList'
class Content extends Component{
   constructor(props){
    
    super(props);
       this.state={
           inputValue:'',
           list:[],
           noList:false
       };
       this.handleClickBtn=this.handleClickBtn.bind(this);
       this.handleChangeInput=this.handleChangeInput.bind(this);
       this.handleChangeList=this.handleChangeList.bind(this)
   }
   handleClickBtn(){
       if(this.state.inputValue){
            // var rateList=localStorage.getItem('localRate')
            // var localRate=JSON.parse(rateList)||[];
            // localRate.push(this.state.inputValue)
            // localStorage.setItem('localRate',JSON.stringify(localRate));
        this.setState({
            list:[...this.state.list,this.state.inputValue],
            noList:true,
            //list:localRate,
            inputValue:''
        })
       }
   };
   handleChangeInput(e){
       const value=e.target.value;
       this.setState({
           inputValue:value
       })
   }
   handleChangeList(todoItem){
       var obj=[];
        this.state.list.forEach((item) => {
            if (item!== todoItem) {
                obj.push(item);
            }
        });
     if(obj.length==0){
         //var noList=false;
         this.setState({
             noList:false
         })
     }
        this.setState({
            list:obj,
            //noList:noList
        })
   }
   render(){
    return(
        <div className='content'>
            <div className='rateInputWrap'>
                <RateInput
                 inputValue={this.state.inputValue}
                 handleChangeInput={this.handleChangeInput}
                 handleClickBtn={this.handleClickBtn} />
            </div>
            <div className='contentListWrap'>
            {this.state.noList?<RateList RateList={this.state.list} handleChangeList={this.handleChangeList}/>:(<div>暂无评论数据</div>)}
            </div>
        </div>
    )
   }
}
export default Content;