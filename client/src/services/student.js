import axios from 'axios'

const baseUrl = '/'

const registerStudent = async (student) => {
    const response = await axios.post(`${baseUrl}students`, student)
    return response
}

const studentServices = {registerStudent}

export default studentServices