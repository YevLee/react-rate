import React ,{Component} from 'react';
import '../css/componentsStyle/rateList.css'
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
             <li className='item' key={index}><i>{item.name}说了</i><p>{item.content}</p><button className='btn' onClick={this.handleDelete.bind(this,item)}>删除</button></li>
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