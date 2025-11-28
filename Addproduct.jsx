import React from 'react'
import{ useForm} from 'react-hook-form'
import{ useNavigate } from 'react-router-dom'

const AddProduct = () => {

    const{register,handleSubmit,reset} =useForm()
    const Navigate = useNavigate()

    const onSubmit = async(data)=>{
        console.log(data)
        const response = await fetch("http://localhost:3000/product",{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify(data)

      })
      if(!response.ok){
        throw new Error("Failed to add product")
      }
        alert('Product Added!')
        reset()
       Navigate('/products')//go to Products page on client side

    }


  return (
    <div className='flex justify-center items-center min-h-screen bg-gray-100'>
        <form className='bg-white p-6 rounded-1g shadow-md w-96 space-y-4'
        onSubmit={handleSubmit(onSubmit)}>
        <h2 className='text -x1 font-semibold text-center'>Add products</h2>
    <input 
    placeholder='Enter product name'
    className='w-full border p-2 rounded'
    {...register("name")} 
    />

    <input 
    placeholder='Enter product price'
    className='w-full border p-2 rounded'
    {...register("price")} 
    /><input 
    placeholder='Enter product image'
    className='w-full border p-2 rounded'
    {...register("image")} 
    />

  

    <textarea
    placeholder='Enter product description'
    className='w-full border p-2 rounded'
    {...register("description")} 
    />

    <button className='w-full bg-blue-950 
     hover:bg-blue-50 text-white py-2 rounded'>Add product</button>
    

        </form>



    </div>
  )
}

export default AddProduct