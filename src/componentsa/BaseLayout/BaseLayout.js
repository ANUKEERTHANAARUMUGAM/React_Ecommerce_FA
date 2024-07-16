// Dependencies
import React, { Component } from 'react';
// Externals
import './BaseLayout.css'


import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';
import Header from './Header/Header';

const classNames = [
  "first-header",
  "second-header",
  "third-header"
];//creating array of strings represting images in  header



export default class BaseLayout extends Component {
  constructor(props) {//constructor
    super(props);//calling parent class constructor ie Component n setting the props
    this.state = {//this.state n this.setState is used to initialize,get and update the state of a component respectively
      index: 0,
    };
  }

  incrementIndex = () => {
    const newIndex = this.state.index + 1;
    this.setState({ index: newIndex })
  }

  componentDidMount = () => {//one of the class component lifecycle methods
                              //invoked after the component have been mounted

    setInterval(this.incrementIndex, 3000);//this is a method which will repeatedly
                                            // execute after the component have been mounted


          //Personal ref->  Note**** this.incrementIndex->this incrementIndex method is not explicity binded
                            //but still it is called with this keyword
                            //how?
                            //ans is arrow func
                            //arrow function automatically binds itself to the parent 

          
  }

  render() {
    const index = this.state.index % classNames.length;
    const className = classNames[index];
    return(
      <div>
        <div className={className}>
          <Navbar />
          <Header />
        </div>
        <div className="content">
          {this.props.children}
        </div>
        <Footer />
      </div>
    )
  }
}







/* 
<<<<<<<<Personal NOTES to remember>>>>>>>>>>>>>
<component lc>
  mounting->constructor,synchronisation of prop n state,render(),didMount
  updating->synchronisation of prop n state,shouldUpdate?,render(),snapshot,didUpadte
  unmounting->didUnmount
  errors->fallback ui,catch


 */