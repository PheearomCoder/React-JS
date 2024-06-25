import React, {  useEffect, useState } from 'react'
import { FileUploadToSever, fetchCategories, insertProduct } from '../services/productAction'

export default function ProductsForm() {
    const [categories, setCategories] = useState([])
    const [source, setSource] = useState ("")
    const [product, setProduct] = useState ({
        title:"",
        price: 0,
        description: "",
        categoryId: 1,
        images: 
            [
                "https://i.imgur.com/cHddUCu.jpeg"

            ]

    })
    const onChangeHandler = (e) =>{
        console.log(e.target.value)
        const {name, value} = e.target
        console.log(name)
        console.log(value)
        setProduct(prevState => {
            return {
                ...prevState,
                [name]: value
            }
        })
        console.log(product)
    }


    const onFileUpload = (e) => {
        console.log(e.target.files)
        setSource(e.target.files[0])
    }

   
    const handleOnSubmit = () =>{
        console.log('on submit')

     // Create image object as a form data
     const formData = new FormData()
     formData.append("file", source)

     // Function to Upload image data to server
     FileUploadToSever(formData)
     .then(res => {
        product.images = [res.data.location]
        console.log(product.images)
        insertProduct(product)
        .then(res => res.json())
        .then(res => console.log(res))
     })
     //End Function 


        
        // insertProduct(product)
        // .then(res => {
        //     if (res.status === 201){
        //         alert("Created")
        //     }
        // })

    }

    useEffect(() => {
        fetchCategories()
        .then(res => setCategories(res))
    },[])



  return (
    <main className='container'>
        <div className="mb-3">
            <label for="title" className="form-label">Title</label>
            <input 
                type="text" 
                className="form-control" 
                name="title" 
                onChange={onChangeHandler}
            />
        </div>
        <div className="mb-3">
            <label for="price" className="form-label">Price $ </label>
            <input 
                type="text" 
                className="form-control" 
                name="price" 
                placeholder='300$'
                onChange={onChangeHandler}
            />
        </div>
        <div className="mb-3">
        <label for="category" className="form-label">Category</label>
            <select 
            className="form-select" 
            aria-label="Default select example"
            onChange={onChangeHandler}
            name="categoryId"
            >
                <option selected>Choose Category</option>
                {
                    categories && categories.map(cat =>(
                        <option value={cat.id}>{cat.name}</option>
                    ))
                }
                
            </select>
        </div>
        <div className="mb-3">
            <label 
                for="exampleFormControlTextarea1" 
                className="form-label"
                >Descripton</label>
            <textarea 
                className="form-control" 
                name="description"
                rows="3"
                onChange={onChangeHandler}
                >
            </textarea>
        </div>
        <div className="mb-3 preview">
                <img 
                src={source && URL.createObjectURL(source)} 
                alt='preview image'
                style={{width:200}}
                />
        </div>
        <div className="mb-3">
                <input type='file' onChange={onFileUpload}/>
        </div>
        <button 
            type="button" 
            class="btn btn-outline-info"
            onClick={() => handleOnSubmit()}
        >Create</button>
    </main>
  )
}
