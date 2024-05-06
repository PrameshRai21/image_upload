import { useState, useEffect } from 'react'
import axios from "axios"

function App() {
  const [title, setTitle] = useState("")
  const [image, setImage] = useState("")
  const [data, setData] = useState([])

  const getImageData = async () => {
    await axios.get("/api/v1/image/imageData")
    .then((res)=> (
      setData(res.data)
    ))
    .catch((error) => (
      console.log("Unable to get data")
    ))
  }

  useEffect(()=>{
      getImageData();
  }, [data])

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title)
    formData.append("image", image)

    const config = {
      headers: {
        "Content-Type" : "multipart/form-data"
      }
    }

    const res = await axios.post("/api/v1/image/upload", formData, config)
  }

  return (
    <>
      <div>
        <h1>Image Upload</h1>
        <hr />
        <form onSubmit={handleSubmit}>
         <div>
            <label htmlFor="">
              Title
            </label>
            <input type="text" name='title' onChange={(e)=>setTitle(e.target.value)}/>
         </div>
         <div>
            <label htmlFor="">
                Image
            </label>
            <input type="file" name='title' onChange={(e)=>setImage(e.target.files[0])}/>
         </div>
         <div>
          <button type='submit'>
            Upload Image
          </button>
         </div>
        </form>
        <hr />
        <div>
          {data.map((dt, index)=> (
            <div key={index}>
                <h2>{dt.title}</h2>
                <img src={dt.image} alt={dt.title} width={"300px"} height={"200px"}/>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default App
