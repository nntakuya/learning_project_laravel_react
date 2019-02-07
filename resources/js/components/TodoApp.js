import React, {Component} from 'react'
import ReactDOM from 'react-dom';


function RenderRows(props){
    console.log(props);
    return props.todos.map(todo =>{
        return (
            <tr key={todo.id}>
                <td>{todo.id}</td>
                <td>{todo.title}</td>
                <td><button className="btn btn-secondary" onClick={()=> props.deleteTask(todo)}>完了</button></td>
            </tr>
        );
    });
}


export default class TodoApp extends Component {
    constructor(){
        super();
        this.state={
            todos:[],
            todo:''
        }

        this.inputChange = this.inputChange.bind(this);
        this.addTodo = this.addTodo.bind(this);
        this.deleteTask = this.deleteTask.bind(this);
    }

    componentDidMount(){
        axios
            .get('/api/get')
            .then((res)=>{
                this.setState({
                    todos: res.data
                });
            })
            .catch(error=>{
                console.log('componentDidMount error',error);
            })
    }

    //入力されたら（都度）
    inputChange(event){
        switch (event.target.name) {
            case 'todo':
                this.setState({
                    todo: event.target.value
                });

                break;

            default:
                break;
        }
    }


    addTodo(){
        //空の場合、弾く
        if (this.state.todo == '') {
            return;
        }

        //入力値を投げる
        axios
            .post('/api/add',{
                title: this.state.todo
            })
            .then((res)=>{
                //戻り値をtodosにセット
                this.setState({
                    todos:res.data,
                    todo:''
                });
            })
            .catch(error=>{
                console.log(error);
            })
    }

    //完了ボタンがクリックされると、指定されたタスクを削除する
    deleteTask(todo){
        axios
            .post('/api/del',{
                id: todo.id
            })
            .then((res)=>{
                this.setState({
                    todos: res.data
                })
            })
            .catch(error=>{
                console.log(error);
            });
    }



    render(){
        return(
            <React.Fragment>
                <div className="form-group mt-4">
                    <label htmlFor="todo">新規Todo</label>
                    <input type="text" className="form-control" name="todo" value={this.state.todo} onChange={this.inputChange} />
                </div>
                <button className="btn btn-primary" onClick={this.addTodo}>
                    登録
                </button>


                <table className="table mt-5">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>タスク</th>
                            <th>完了</th>
                        </tr>
                    </thead>
                    <tbody>
                        <RenderRows
                            todos={this.state.todos}
                            deleteTask = {this.deleteTask}
                        />
                    </tbody>
                </table>
            </React.Fragment>
        );
    }
}

ReactDOM.render(<TodoApp />,document.getElementById('todoApp'));
