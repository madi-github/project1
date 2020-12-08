import { useState } from 'react'
import './App.css';

function App() {
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [data, setData] = useState([])

  const handleChangeTitle = (event) => {
    // console.log(event.target.value)
    setTitle(event.target.value)
  }

  const handleChangeAuthor = (event) => {
    // console.log(event.target.value)
    setAuthor(event.target.value)
  }

  const handleButtonClick = (event) => {
    console.log(title)
    console.log(author)

    const newData = {
      title: title,
      author: author
    }

    console.log(newData)
    const currentData = [...data]
    currentData.push(newData)
    console.log(currentData)
    setData(currentData)
  }

  const handleButtonRemove = (index) => {
    console.log(index)
    const currentData = [ ... data]
    currentData.splice(index,)
    setData(currentData)
  }

  const reverse = (str) => {
    let x = ''

    for (let i=str.length-1; i>=0; i--) {
      x += str[i]
    }
    return x
  }

  return (
    <div>
      <div>
        <label>Title</label>
        <input type="text" value={title} onChange={handleChangeTitle} />
      </div>
      <label>Author</label>
      <input type="text" value={author} onChange={handleChangeAuthor} />
      <button onClick={handleButtonClick}> Submit</button>
      <div>
        {
          data.map((x, index) => {
            return (
              <div key={index}>
                <p>Title : {data[index]?.title}</p>
                <p>Author: {reverse(data[index]?.author)}</p>
                <button
                  onClick={
                    (event) => {
                      handleButtonRemove(index)
                    }
                  }>
                  Remove
                </button>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default App;