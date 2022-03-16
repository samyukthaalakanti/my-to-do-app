import axios from 'axios'

class ToDoDataService{

retriveAllTodos(){
    return axios.get('http://localhost:8080/api/todos') 
   }

}
export default new ToDoDataService;