import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ApiServices from './ApiServices';
import { useEffect } from "react"
const AddSubCategory = () => {
  const [name, setName] = useState("");

  const [image, setImage] = useState(null); // Initialize image state with null
  const [imageName, setImageName] = useState("");

  const changeImage = (e) => {
    // Update image state when file input changes
    setImage(e.target.files[0]);
    setImageName(e.target.files[0].name); // Display file name
  };
const [allCategory,setAllCategory]=useState([])
    const [categoryId,setCategoryId]=useState("")
    
    useEffect(()=>{
        ApiServices.getCategory().then(
            (res)=>{
                console.log(res.data.data);
                setAllCategory(res.data.data)

            }
        ).catch(
            (err)=>{
                console.log(err);
            }
        )
    },[])
  const handleForm = (e) => {
    e.preventDefault();
    if (name.trim() === '' || !categoryId || !image) {
      toast.error('Please fill all fields.');
      return;
    }
    






    let data = new FormData();
    data.append("name", name);
    data.append("categoryId", categoryId);
    data.append("subcategory_image", image);
  
    ApiServices.Addsubcategory(data)
      .then((res) => {
        if (res.data.success === true) {
          toast.success(res.data.message);
          setName("");
          setCategoryId("");
          setImage(null); // Reset image state
          setImageName(""); // Reset image name state
        } else {
          toast.error(res.data.message);
        }
      })
      .catch((err) => {
        console.error(err);
        toast.error("Failed to add subcategory. Please try again later.");
      });
  };
  
  return (
    <main id="main" className="main">
      <div className="pagetitle">
        <h1>Add Subcategory</h1>
      </div>
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="card">
              <div className="card-body">
                <form onSubmit={handleForm}>
                  <div className="form-group">
                    <label>Name</label>
                    <input className="form-control" value={name} onChange={(e) => setName(e.target.value)} />
                  </div>
                  <div className="form-group">
                    <label>Category ID</label>
                    <select value={categoryId} onChange={(e)=>{setCategoryId(e.target.value);}}>
                <option disabled selected value={""}>Choose one</option>
                {allCategory?.map(
                    (el,index)=>(
                        <option value={el._id}>{el.name}</option>
                    )
                )}
            </select>
                  </div>
                  <div className="form-group">
                    <label>Image</label>
                    <input className="form-control" type="file" onChange={changeImage} />
                  </div>
                  <button className="btn btn-primary" type="submit">Submit</button>
                </form>
                {imageName && <p>Selected Image: {imageName}</p>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default AddSubCategory;
