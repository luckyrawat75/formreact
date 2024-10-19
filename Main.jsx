import React, { useState } from "react";
import './App.css';

const Data = () => {

    const [Fullname, setFullName] = useState({
        fname: "",
        lname: "",
        email: "",
        phone: "",
    })




    const inputEvent = (event) => {
        console.log(event.target.value);
        console.log(event.target.name);





        const { value, name } = event.target;

        setFullName((prevalue) => {

            if (name === 'fName') {
                return {
                    fname: value,
                    lname: prevalue.lname,
                    email: prevalue.email,
                    phone: prevalue.phone
                };

            } else if (name === "lName") {
                return {
                    fname: prevalue.fname,
                    lname: value,
                    email: prevalue.email,
                    phone: prevalue.phone

                };
            } else if (name === "email") {
                return {
                    fname: prevalue.fname,
                    lname: prevalue.lname,
                    email: value,
                    phone: prevalue.phone,

                };
            } else if (name === "phone") {
                return {
                    fname: prevalue.fname,
                    lname: prevalue.lname,
                    email: prevalue.email,
                    phone: value,

                };
            }
        })
    }



    const onSubmit = (event) => {
        event.preventDefault();

    }


    return (
        <>

            <form onSubmit={onSubmit}>
                <div>
                    <h1>Hello {Fullname.fname} {Fullname.lname}</h1>
                    <p>{Fullname.email}</p>
                    <p>{Fullname.phone}</p>
                    <input type='text' placeholder="Enter Your  First Name"
                        name="fName"
                        onChange={inputEvent}

                        value={Fullname.fname}

                    />
                    <br />

                    <input type='text' placeholder="Enter your Last Name"
                        name="lName"
                        onChange={inputEvent}

                        value={Fullname.lname}
                    />
                    <br />
                    <input type='email' placeholder="Enter your Email"
                        name="email"
                        onChange={inputEvent}

                        value={Fullname.email}
                        autoComplete="off"
                    />
                    <br />
                    <input type='number' placeholder="Enter your Number"
                        name="phone"
                        onChange={inputEvent}

                        value={Fullname.phone}
                    />

                    <button type='submit'>click Me👍</button>
                </div>

            </form>

        </>
    );
}
export default Data;