interface Iprops{
    arr:string []
}
const ListTodo=({arr}:Iprops)=>{
    return arr.map((item,index)=> {
        return <li key={index}>{item}</li>
    }
        )

}

export default ListTodo;