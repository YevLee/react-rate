import React ,{Component} from 'react';
class RateList extends Component{
   constructor(props){
       super(props);
       //this.handleDelete=this.handleDelete.bind(this)
   }
   handleDelete(item){
      this.props.handleChangeList(item)
       //this.renderList();
   }
   renderList(){
    return this.props.RateList.map((item,index)=>{
         return(
             <li key={index}>{item}----<span onClick={this.handleDelete.bind(this,item)}>删除</span></li>
         )
     })
 }
    render(){
        return(
            <div className='content-list'>
            <ul>
               {this.renderList()}
            </ul>
        </div>
        )
    }
  
}
export default RateList;