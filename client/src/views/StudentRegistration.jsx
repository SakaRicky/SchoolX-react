import React, {useState} from 'react';
import studentServices from '../services/student';
import Notification from '../components/notification/Notification';

const StudentRegistration = () => {
    // student's state
    const [studentState, setStudentState] = useState({});
    const [notification, setNotification] = useState({})

    const notify = (notification) => {
        setNotification(notification)
        setTimeout(() => {
            setNotification({})
        }, 5000)
    }

    const updateState = (e) => {
        setStudentState({...studentState, [e.target.id]:e.target.value});
    }

    const saveGender = (e) => {
        setStudentState({...studentState, [e.target.name]:e.target.id});
    }

    const saveStudent = async (e) => {
        e.preventDefault()
        const response = await studentServices.registerStudent(studentState)
        if (response.status === 201) {
            notify({
                message: "Student saved successfully",
                tag: "He/She can now go to class",
                nature: "success"
            })
        } else {
            notify({
                message: "Something went wrong",
                tag: "Couldn't save student to system",
                nature: "fail"
            })
        }
    }

    return (
        <>
            {Object.keys(notification).length === 0 ? null : <div className="row">
                                                <div>
                                                    <Notification message={notification.message} tag={notification.tag} nature={notification.nature}/>
                                                </div>
                                            </div>}
            <div className="mt-24 bg-grey-lightest">
                <div className="w-full bg-grey-lightest">
                    <div className="container mx-auto py-8">
                        <div className="w-5/6 lg:w-1/2 mx-auto bg-white rounded shadow">
                            <div className="py-4 px-8 text-black text-2xl text-center border-b border-grey-lighter">Student Enrolment Form</div>
                            <div className="py-4 px-8">
                                <div className="flex mb-4">
                                    <div className="w-1/2 mr-1">
                                        <label className="block text-grey-darker font-bold mb-2" htmlFor="first_name">First Name</label>
                                        <input className="appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="first_name" type="text" placeholder="Your first name" onChange={updateState}/>
                                    </div>
                                    <div className="w-1/2 ml-1">
                                        <label className="block text-grey-darker font-bold mb-2" htmlFor="last_name">Last Name</label>
                                        <input className="appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="last_name" type="text" placeholder="Your last name" onChange={updateState}/>
                                    </div>
                                </div>
                                <div>
                                    <div className="w-1/2 my-2" onChange={saveGender}>
                                        <span className="font-bold">Gender:</span>

                                        <label className="text-grey-darker mx-2 mb-2" htmlFor="male">Male</label>
                                        <input className="" id="male" name="gender" type="radio" />

                                        <label className="text-grey-darker mx-2 mb-2" htmlFor="female">Female</label>
                                        <input className="" id="female" name="gender" type="radio" />
                                    </div>
                                </div>
                                <div className="flex mb-4">
                                    <div className="w-1/2 mr-1">
                                        <label className="block text-grey-darker font-bold mb-2" htmlFor="date_of_birth">Date of Birth</label>
                                        <input className="appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="date_of_birth" type="date" placeholder="" onChange={updateState}/>
                                    </div>
                                    <div className="w-1/2 ml-1">
                                        <label className="block text-grey-darker font-bold mb-2" htmlFor="place_of_birth">Place of Birth</label>
                                        <input className="appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="place_of_birth" type="text" placeholder="Place of birth" onChange={updateState}/>
                                    </div>
                                </div>
                                <div className="flex mt-6 mb-1">
                                    <div className="w-1/2 mr-1">
                                        <label className="block text-grey-darker font-bold mb-1" htmlFor="fathers_name">Father's Name</label>
                                        <input className="appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="fathers_name" type="text" placeholder="Father's name" onChange={updateState}/>
                                    </div>
                                    <div className="w-1/2 ml-1">
                                        <label className="block text-grey-darker font-bold mb-1" htmlFor="tel">Father's contact</label>
                                        <input className="appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="fathers_contact" type="tel" onChange={updateState}/>
                                    </div>
                                </div>
                                <div className="w-1/2">
                                    <label className="block text-grey-darker font-bold mb-1" htmlFor="fathers_profession">Father's Profession</label>
                                    <input className="appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="fathers_profession" type="text" onChange={updateState}/>
                                </div>
                                <div className="flex mt-6 mb-1">
                                    <div className="w-1/2 mr-1">
                                        <label className="block text-grey-darker font-bold mb-2" htmlFor="mothers_name">Mother's Name</label>
                                        <input className="appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="mothers_name" type="text" placeholder="Mother's name" onChange={updateState}/>
                                    </div>
                                    <div className="w-1/2 ml-1">
                                        <label className="block text-grey-darker font-bold mb-2" htmlFor="mothers_contact">Mother's Contact</label>
                                        <input className="appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="mothers_contact" type="tel" onChange={updateState}/>
                                    </div>
                                </div>
                                <div className="w-1/2">
                                    <label className="block text-grey-darker font-bold mb-1" htmlFor="fathers_profession">Mother's Profession</label>
                                    <input className="appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="mothers_profession" type="text" onChange={updateState}/>
                                </div>

                                <div className="w-1/2 mt-4">
                                    <label className="block text-grey-darker font-bold mb-1" htmlFor="studentClass">Class</label>
                                    <input className="appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="studentClass" type="text" onChange={updateState}/>
                                </div>
                                <div className="flex items-center justify-center mt-6">
                                    <button className="bg-primary hover:bg-primary-700 text-white font-bold py-2 px-4 rounded-full" type="submit" onClick={saveStudent}>
                                        Register
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default StudentRegistration
