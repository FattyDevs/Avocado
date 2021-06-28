import React from 'react';
import { withAuth0 } from '@auth0/auth0-react';
import UserInfoForm from './UserInfoForm';
import axios from 'axios';

class Home extends React.Component{

    constructor(props){
        super(props);
        this.state={
            show: true,
            users:[],
            
        }
    }

    hideModal=(event)=>{
        event.preventDefault();
        this.setState({
            show:false,
        });
        // console.log("hide modal");
    }

    componentDidMount=()=>{
        this.checkUserAuth();
       
    }

    checkUserAuth=async()=>{

        const dataURL=await axios.get(`http://localhost:3010/`);
        const data=dataURL.data;
        console.log(data);
        this.setState({
            users:data,
        })
        
        const { user } = this.props.auth0;
        const email= user.email;
        let x = this.state.users.filter((user)=>{return (email === user.email)});
        console.log(x);

        if (x.length !== 0 ){
              this.setState({
                  show:  false,
              });
              console.log("defined");
        }else{           
            // console.log(this.state.users);  
            this.setState({
                show:  true,
            })
            // console.log("undefined user");    
        }
    }
    

    saveUsersInfo=async(event)=>{
        event.preventDefault();
        const { user } = this.props.auth0;
        let newUser= {
            name: user.name,
            email: user.email,
            age: event.target.age.value,
            height: event.target.height.value,
            weight: event.target.weight.value,
            favSport: event.target.favSport.value,
        }
      
        console.log(`data from form ${newUser}`);
        console.log(newUser);
        let addNewUser= await  axios.post(`http://localhost:3010/newUser`, newUser);
     
        // this.state.users.push(addNewUser);
        this.setState({
            users:addNewUser.data,
        })

        console.log(addNewUser);
        console.log(this.state.users);
    }


    render(){
        return(
            <>
            <h1>Hello In Home Page</h1>
            <UserInfoForm show={this.state.show}  hide={this.hideModal} saveUser={this.saveUsersInfo} />
            </>
        )
    }
}

export default withAuth0(Home);