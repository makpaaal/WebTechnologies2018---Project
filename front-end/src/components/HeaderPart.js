import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../styles/HeaderPart.css';
import {BrowserRouter as Router, 
  Switch,
  Route, 
  Link} from 'react-router-dom';
import Home from './Home.js'
import Courses from './Courses.js'
import SignForm from './SignForm'
import helpers from '../utils/helpers'

class HeaderPart extends Component {

  constructor(props) {
    super(props);

    this.state = {
      courses: [
        {
          name: "General English",
          numOfStudents: 60,
          description: "This course is designed for mature, motivated adults who need to improve their English language skills either for general use or more specifically for their work or study.",
          oldPrice: 2500 ,
          newPrice: 2500,
        },
        {
          name: "Business English",
          numOfStudents: 20,
          description: "Course is designed to develop your professional communication skills in small, focused groups. Through realistic scenarios and simulations, you’ll gain confidence in making presentations, taking part in international meetings, cross-cultural networking and other professional contexts.",
          oldPrice: 3000,
          newPrice: 2800,
        },
        {
          name: "English for accounting ",
          numOfStudents: 10,
          description: "This course is ideal for experienced professionals who wish to improve their professional English skills in accounting area in a commercial context in the shortest possible time.",
          oldPrice: 3000,
          newPrice: 3000,
        },
        {
          name: "English for IT",
          numOfStudents: 7,
          description: "This course is ideal for experienced professionals who wish to improve their professional English skills in IT area in a commercial context in the shortest possible time",
          oldPrice: 3500,
          newPrice: 3500,
        },
        {
          name: "English for financial sector",
          numOfStudents: 45,
          description: "This course is ideal for experienced professionals who wish to improve their professional English skills in financial sector in a commercial context in the shortest possible time",
          oldPrice: 3500,
          newPrice: 3100,
        },
        {
          name: "English for job hunting",
          numOfStudents: 45,
          description: "A short course for professionals and students who need to apply for jobs in English.",
          oldPrice: 2000,
          newPrice: 2000,
        },
        {
          name: "Preparation for IELTS",
          numOfStudents: 80,
          description: "A course is led by expert English teachers to improve your reading, writing, listening and speaking skills",
          oldPrice: 4000,
          newPrice: 4000,
        },
        {
          name: "Preparation for TOEFL",
          numOfStudents: 57,
          description: "The TOEFL test is the world's most trusted and widely accepted English-language assessment. This test preparation course, developed by the experts who create, administer and score the TOEFLtest, will help English language learners improve their skills.",
          oldPrice: 4500,
          newPrice: 4200,
        },
        {
          name: "Preparation for CAE",
          numOfStudents: 12,
          description: "During lessons for this CAE preparation course, you will cover all sections of the CAEin detail. This includes taking practice tests, learning the best exam techniques, and improving yourgeneral level of English.",
          oldPrice: 3500,
          newPrice: 3500,
        },
        {
          name: "Preparation for FCE",
          numOfStudents: 4,
          description: "Students who successfully complete this course will have a very good grasp of the four macro skills and solid knowledge of grammar and vocabulary.",
          oldPrice: 3500,
          newPrice: 3500,
        },
        {
          name: "Preparation for CPE",
          numOfStudents: 0,
          description: "Prepare for the CPE English test in a short time or customise your CPE course to suit your specific learning objectives and needs.",
          oldPrice: 3500,
          newPrice: 3500,
        },
        {
          name: "English for kids",
          numOfStudents: 42,
          description: "lessons online by level and topic with fun English games for kids, ESL dialogue videos and learner-driven interactive tests. Join thousands of happy educators who run English classes for kids using our fun & engagin courses ",
          oldPrice: 4000,
          newPrice: 4000,
        },
        {
          name: "English for teenagers",
          numOfStudents: 10,
          description: "Our reputable English Programs for Teens welcome students aged 12+ to study English in a friendly, safe, and fun environment.",
          oldPrice: 3000,
          newPrice: 3000,
        }
      ],
      isSignFormOpen: false,
      students: [],
      currentUserName: "",
    	};
	}

  handleSignUpButtonClick  = () => {
    this.setState({
      isSignFormOpen: true
  });
  }

  hamdleHomeClick = ()=> {
    this.setState({
      isSignFormOpen: false
  });
  }
 
 handleSignUpFormSubmit = (student) => {
    this.createStudent(student);
    this.setState({
      currentUserName: student.firstName,
  });

 }

 min = 1;
 max = 100;

  createStudent = (student) => {

    const s = {
      id: this.min + (Math.random() * (this.max - this.min)),
      firstName: student.firstName || 'First name',
      lastName: student.lastName || 'Last name',
      level: student.level || "Level",
      email: student.email || "Email",
      password: student.password || "Password"
      
    };

    //const s = helpers.newStudent(student);
    this.setState({
      students: this.state.students.concat(s),
    });
};
	render(){
    if(!this.state.isSignFormOpen){
		return(
			<div className = "HeaderPart">
      <Router>
      <div>
      <table className ="RouterPart"  >
          <tr >
            <td width = "20pt"></td>
            <td width = "100pt"> <Link to = '/'>Home</Link></td>
            <td width = "300pt"> <Link to = '/courses'>Courses</Link></td>
            <td width = "660pt"></td>
            <td width = "120pt">Hello! {this.state.currentUserName}</td>
            <td><input type = "submit" value = "Sign up" onClick = {this.handleSignUpButtonClick}/></td>
            <td><input type = "submit" value = "Sign in" onClick = {this.handleSignInButtonClick}/></td>
          </tr>
        </table>          
          <Switch>
        <Route exact path='/' render={() => ( <Home courses = {this.state.courses} />)}/>
        <Route exact path='/courses' render={() => ( <Courses courses = {this.state.courses} />)}/>
        </Switch>
      </div>
      </Router>
      </div>
		);}
        else {
          return(
      <div className = "HeaderPart">
      <Router>
      <div>
      <table className ="RouterPart"  >
          <tr >
            <td width = "20pt"></td>
            <td width = "100pt"> <Link to = '/' onClick = {this.hamdleHomeClick}>Home</Link></td>
            <td width = "300pt"> <Link to = '/courses' onClick = {this.hamdleHomeClick}>Courses</Link></td>
            <td width = "660pt"></td>
            <td width = "120pt">Hello! {this.state.currentUserName}</td>
            <td><input type = "submit" value = "Sign up" onClick = {this.handleSignUpButtonClick}/></td>
            <td><input type = "submit" value = "Sign in" onClick = {this.handleSignUButtonClick}/></td>
          </tr>
        </table>          
         <SignForm onSignUpFormSubmit = {this.handleSignUpFormSubmit}></SignForm>
      </div>
      </Router>
      </div>
    );
        }
	}
}

export default HeaderPart;