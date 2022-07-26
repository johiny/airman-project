import React, { Component } from "react";

export default class Register extends Component {
  //style
  inputStyle =
    "border-[2px] border-silver rounded-lg outline-[#2A2550] p-2 focus:border-[#2A2550] ease-linear duration-200 min-w-0";

  buttonStyle = "mt-5 flex justify-center bg-[#2A2550] text-white font-medium rounded-md p-2 ease-linear duration-200"
  activeButtonStyle = ' hover:bg-white hover:text-[#2A2550] hover:scale-[1.0.5] hover:border-[2px] hover:shadow-md hover:border-[#2A2550] cursor-pointer'
  disableButtonStyle = ' opacity-50'
  //states
  state = {
    first: "",
    last: "",
    email: "",
    pass: "",
    confirm: "",
    errors: {
      confirm: false,
    },
  };

  checkPass = () => {
     if(this.state.pass === this.state.confirm)
     {
         this.setState({...this.state, errors : {confirm : false}})
     }
     else
     {
       this.setState({...this.state, errors : {confirm : 'No es el mismo'}})
       ;
     }
 }
  handleChange = (evt) => {
    const fields = Object.assign({}, this.state);
    fields[evt.target.name] = evt.target.value;
    this.setState({ ...fields }, this.checkPass);
  };

  render() {
    return (
      <div className="flex justify-center w-[100%] h-[100vh] ">
        <div className="flex flex-col absolute top-[20%] shadow-lg border-silver border-[2px] bg-white rounded-lg p-5 mobile:w-[90%]">
          <text className="text-2xl ">REGISTRO</text>

          {/* First Name Last Name */}
          <div className="flex mt-7 w-auto">
            <input
              className={this.inputStyle + ` mr-3`}
              name="first"
              type="text"
              placeholder="Nombre"
              onChange={this.handleChange}
              value={this.state.first}
              required
            />
            <input
              className={this.inputStyle}
              name="last"
              type="text"
              placeholder="Apellido"
              onChange={this.handleChange}
              value={this.state.last}
            />
          </div>

          {/* Email */}
          <input
            className={this.inputStyle + ` mt-7 mobile:w-[100%]`}
            name="email"
            type="email"
            placeholder="Correo"
            onChange={this.handleChange}
            value={this.state.email}
            required
          />

          {/* Password */}
          <div className="flex mt-7">
            <input
              className={this.inputStyle + ` mr-3`}
              name="pass"
              type="password"
              placeholder="Contraseña"
              onChange={this.handleChange}
              value={this.state.pass}
              required
            />
            <input
              className={this.inputStyle}
              name="confirm"
              type="password"
              placeholder="Confirmar Contraseña"
              onChange={this.handleChange}
              value={this.state.confirm}
              required
            />
          </div>
          <div className="flex justify-center">
            <span className="flex-1 mr-3"></span>
            <span className="flex-1 text-red-500">
              {this.state.errors.confirm}
            </span>
          </div>

          {/* Submit button */}
          <input
            type="button"
            className={(this.state.errors.confirm)? this.buttonStyle+this.disableButtonStyle: this.buttonStyle+this.activeButtonStyle}
            value="Registrarse"
          />
        </div>
      </div>
    );
  }
}