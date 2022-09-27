import React from 'react'
import Notes from './Notes'
 
const Home = () => {

  return (
  <>
    <h1 className='text-center my-3'>Add a Note</h1>
    <div className="mb-3">
      <label htmlFor="title" className="form-label">Title</label>
      <input type="text" className="form-control" id="title" />
    </div>
    <div className="mb-3">
      <label htmlFor="title" className="form-label">Title</label>
      <input type="text" className="form-control" id="title" />
    </div>
    <div className="mb-3">
      <label htmlFor="description" className="form-label">Description</label>
      <textarea className="form-control" id="description" rows="2"></textarea>
    </div>
    <Notes/>    
  </>
  )
}
export default Home