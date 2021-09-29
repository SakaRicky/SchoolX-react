import React from 'react'

const StudentRegistration = () => {
    return (
        <div class="mt-24 bg-grey-lightest">
            <div class="w-full bg-grey-lightest">
                <div class="container mx-auto py-8">
                    <div class="w-5/6 lg:w-1/2 mx-auto bg-white rounded shadow">
                        <div class="py-4 px-8 text-black text-2xl text-center border-b border-grey-lighter">Student Enrolment Form</div>
                        <div class="py-4 px-8">
                            <div class="flex mb-4">
                                <div class="w-1/2 mr-1">
                                    <label class="block text-grey-darker font-bold mb-2" for="first_name">First Name</label>
                                    <input class="appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="first_name" type="text" placeholder="Your first name" />
                                </div>
                                <div class="w-1/2 ml-1">
                                    <label class="block text-grey-darker font-bold mb-2" for="last_name">Last Name</label>
                                    <input class="appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="last_name" type="text" placeholder="Your last name" />
                                </div>
                            </div>
                            <div class="flex mb-4">
                                <div class="w-1/2 mr-1">
                                    <label class="block text-grey-darker font-bold mb-2" for="date_of_birth">Date of Birth</label>
                                    <input class="appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="date_of_birth" type="date" placeholder="" />
                                </div>
                                <div class="w-1/2 ml-1">
                                    <label class="block text-grey-darker font-bold mb-2" for="place_of_birth">Place of Birth</label>
                                    <input class="appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="place_of_birth" type="text" placeholder="Place of birth" />
                                </div>
                            </div>
                            <div class="flex mb-4">
                                <div class="w-1/2 mr-1">
                                    <label class="block text-grey-darker font-bold mb-2" for="fathers_name">Father's Name</label>
                                    <input class="appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="fathers_name" type="text" placeholder="Your first name" />
                                </div>
                                <div class="w-1/2 ml-1">
                                    <label class="block text-grey-darker font-bold mb-2" for="tel">Father's contact</label>
                                    <input class="appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="tel" type="tel" />
                                </div>
                            </div>
                            <div class="flex mb-4">
                                <div class="w-1/2 mr-1">
                                    <label class="block text-grey-darker font-bold mb-2" for="mothers_name">Mother's Name</label>
                                    <input class="appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="mothers_name" type="text" placeholder="Mother's name"/>
                                </div>
                                <div class="w-1/2 ml-1">
                                    <label class="block text-grey-darker font-bold mb-2" for="mothers_contact">Mother's Contact</label>
                                    <input class="appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="mothers_contact" type="tel" />
                                </div>
                            </div>
                            <div class="flex items-center justify-center">
                                <button class="bg-primary hover:bg-primary-700 text-white font-bold py-2 px-4 rounded-full" type="submit">
                                    Register
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StudentRegistration
