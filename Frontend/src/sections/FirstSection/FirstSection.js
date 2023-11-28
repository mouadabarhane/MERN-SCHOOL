import {useState, useEffect} from 'react'
import Axios from "axios"
import './FirstSection.css'
const FirstSection = ({user}) => {
  const api = "http://localhost:3001"
  const [users, setUsers] = useState([])
  const [name, setName] = useState("")
  const [age, setAge] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8; // Number of items to display per page (3 rows of 4 items each)

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const totalPageCount = Math.ceil(users.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  useEffect(()=>{
    Axios.get(`${api}/users`)
    .then(res =>{setUsers(res.data)})  
  },[users])



  const createUser = () => {
    if(name && age && email && message){
      Axios.post(`${api}/createUser`,{name, age,email,message})
      .then(res => res.data)  
    }
  }


  return (
  <>
  <br/>
  <div className='SectionOne container'>
      <div className="row">
        {users.slice(startIndex, endIndex).map(({ _id, name, age, email, message }) => (
          <div className="col-md-3" key={_id}>
            <div className="FirstSection">
              <ul className="list-groupe" style={{ listStyleType: 'none' }}>
                <li>Name: {name}</li>
                <li>Age: {age}</li>
                <li>Email: {email}</li>
                <li>Message: {message}</li>
              </ul>
            </div>
          </div>
        ))}
      </div>
      <nav aria-label="Page navigation">
        <ul className="pagination justify-content-center">
          {Array.from({ length: totalPageCount }, (_, index) => (
            <li className={`page-item ${index + 1 === currentPage ? 'active' : ''}`} key={index}>
              <button
                className="page-link"
                onClick={() => handlePageChange(index + 1)}
              >
                {index + 1}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>

    </>
  )
}

export default FirstSection