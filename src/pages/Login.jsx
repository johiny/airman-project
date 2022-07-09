import React, {Component} from 'react';

export default class Login extends Component {

    inputStyle="border-[2px] rounded-lg w-[100%] p-2 outline-[#2A2550] focus:border-[#2A2550] ease-liner duration-200";

    state={
        username:'',
        pass:'',
    }

    handleChange=(evt)=>{
        const fields = Object.assign({}, this.state);
        field[evt.target.name] = evt.target.value;
        this.setState({...fields})
    }

  render() {
    return(
        <div className='flex justify-center w-[100%] h-[100vh]'>
            <div className='flex flex-col absolute top-[30%] bg-white shadow-lg border-silver border-[2px] rounded-lg p-5 w-[40%]'>
                
                <text className='text-2xl'> Login</text>

                <div className='flex mt-3'>
                    <input 
                    className={this.inputStyle + ` mt-2 w-[100%]`}
                    placeholder='username'
                    name='username'
                    value={this.state.username}
                    onChange={this.handleChange}
                    required
                    />
                </div>

                <div>
                    <input
                    className={this.inputStyle + ` mt-2 w-[100%]`}
                    placeholder='password'
                    name='pass'
                    value={this.state.pass}
                    onChange={this.handleChange}
                    />
                </div>
                <input type="button" className='btn mt-7 hover:scale-[1.02]' value="Login"/>
            </div>
        </div>
    )
  }
}
