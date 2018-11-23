import React ,{Component} from "react"
import RateInput from './RateInput'
import RateList from './RateList'
class Content extends Component{
   constructor(props){
    
    super(props);
       this.state={
           name:'',
           content:'',
           list:[],
           noList:false
       };
       this.handleClickBtn=this.handleClickBtn.bind(this);
       this.handleChangeNameInput=this.handleChangeNameInput.bind(this);
       this.handleChangeContentInput=this.handleChangeContentInput.bind(this)
       this.handleChangeList=this.handleChangeList.bind(this);
       
   }
   handleClickBtn(){
       if(this.state.name){
            // var rateList=localStorage.getItem('localRate')
            // var localRate=JSON.parse(rateList)||[];
            // localRate.push(this.state.name)
            // localStorage.setItem('localRate',JSON.stringify(localRate));
        this.setState({
            list:[...this.state.list,{name:this.state.name,content:this.state.content}],
            noList:true,
            //list:localRate,
            name:'',
            content:''
        })
       }
   };
   handleChangeNameInput(e){
       const value=e.target.value;
       this.setState({
           name:value
       })
   }
   handleChangeContentInput(e){
    const value=e.target.value;
    this.setState({
        content:value
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
                 name={this.state.name}
                 content={this.state.content}
                 handleChangeNameInput={this.handleChangeNameInput}
                 handleChangeContentInput={this.handleChangeContentInput}
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