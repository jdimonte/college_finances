import React, {useContext} from 'react';

const Signup = () => {

    const {handleSignup, inputs, setInputs} = useContext(firebaseAuth)
    console.log(handleSignup)

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('handleSubmit')
    
    }
      
    const handleChange = e => {
        const {name, value} = e.target
        console.log(inputs)
        setInputs(prev => ({...prev, [name]: value}))
    }

  return (
    <form>
        Signup
          <label htmlFor="userEmail" className="block">
            Email:
          </label>
          <input
            type="email"
            className=""
            name="userEmail"
            value={inputs.email}
            placeholder="example@email.com"
            id="userEmail"
            onChange={handleChange}
          />
          <label htmlFor="userPassword" className="block">
            Password:
          </label>
          <input
            type="password"
            className=""
            name="userPassword"
            value={inputs.password}
            placeholder="Your Password"
            id="userPassword"
            onChange={handleChange}
          />
        <button>signup</button>
    </form>
    
  );
};

export default Signup;