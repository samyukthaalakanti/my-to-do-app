import React,{Component} from 'react'
import ToDoListComponent from './ToDoListComponent'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import WelcomeComponent from './WelcomeComponent'
import ErrorComponent from './ErrorComponent'
import LoginComponent from './LoginComponent'
import HeaderComponent from './HeaderComponent'
import LogoutComponent from './LogoutComponent'

import FooterComponent from './FooterComponent'
import withNavigation from './WithNavigate.jsx'


class TodoApp extends Component{
    render(){
        const LoginComponentWithNavigation = withNavigation(LoginComponent);
        return(
            <div>
                 <BrowserRouter>
                <HeaderComponent/>
                <Routes>
                    <Route Route path="/" element={<LoginComponentWithNavigation />} />
                    <Route Route path="/login" element={<LoginComponentWithNavigation />}/>
                    <Route Route path="/welcome" element={<WelcomeComponent/>}/>
                    <Route Route path="/todos" element={<ToDoListComponent/>}/>
                    <Route Route path="*" element={<ErrorComponent/>}/>
                    <Route Route path="/logout" element={<LogoutComponent/>}/>

                </Routes>
                <FooterComponent/>
                </BrowserRouter> 
            </div>
 )
}
}
export default TodoApp