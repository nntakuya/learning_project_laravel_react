import React, {Component} from 'react'
import ReactDOM from 'react-dom';


function RenderRows(props){
    return props.todos.map(todo =>{
        return (
            <tr key={todo.id}>
                <td>{todo.id}</td>
                <td>{todo.title}</td>
                <td><button className="btn btn-secondary">完了</button></td>
            </tr>
        );
    });
}


export default class TodoApp extends Component {
    constructor(){
        super();
        this.state={
            todos:[]
        }
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

    render(){
        return(
            <React.Fragment>
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
                        />
                    </tbody>
                </table>
            </React.Fragment>
        );
    }


}

ReactDOM.render(<TodoApp />,document.getElementById('todoApp'));
