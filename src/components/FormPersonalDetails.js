import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

export class FormPersonalDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  }
  back = e => {
    e.preventDefault();
    this.props.prevStep();
  }
  render() {
    const {values, handleChange} = this.props;
    return (
      <MuiThemeProvider>
        <React.Fragment> 
          <AppBar title="Enter your personal Details"/>
          <TextField hintText="Enter your occupation:" 
                      floatingLabelText="Occupation"
                      onChange={handleChange('occupation')}
                      defaultValue={values.occupation}/>
          <br/>
          <TextField hintText="Enter your city name:"
                      floatingLabelText="City"
                      onChange={handleChange('city')}
                      defaultValue={values.city}/>
          <br/>
          <TextField hintText="Enter your bio:"
                      floatingLabelText="Bio"
                      onChange={handleChange('bio')}
                      defaultValue={values.bio}/>
          <br/>
          <RaisedButton label="Back"
                        primary="false"
                        onClick={this.back}
                        style ={styles.button}/>
                        &nbsp;
                        &nbsp;
          <RaisedButton label="Continue"
                        primary="true"
                        onClick={this.continue}
                        style ={styles.button}/>

         
        </React.Fragment>
      </MuiThemeProvider>
    )
  }
}
const styles ={
  button: {
    margin: 15
  }
}
export default FormPersonalDetails