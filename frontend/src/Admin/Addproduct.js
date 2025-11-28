import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ApiServices from './ApiServices';

const AddProduct = () => {
  const [name, setName] = useState("");
  const [image, setImage] = useState(null);
  const [imageName, setImageName] = useState("");
  const [price, setPrice] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [subCategoryId, setSubCategoryId] = useState("");
  const [allCategory, setAllCategory] = useState([]);
  const [allSubCat, setAllSubCat] = useState([]);

  useEffect(() => {
    ApiServices.getCategory()
      .then((res) => {
        setAllCategory(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    if (categoryId) {
      let data = {
        categoryId: categoryId
      };
      ApiServices.getSubCategory(data)
        .then((res) => {
          setAllSubCat(res.data.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [categoryId]);

  const handleForm = (e) => {
    e.preventDefault();
    if (name.trim() === '' || !categoryId || !subCategoryId || !image || price.trim() === '') {
      toast.error('Please fill all fields.');
      return;
    }

    let data = new FormData();
    data.append("name", name);
    data.append("categoryId", categoryId);
    data.append("subcategoryId", subCategoryId);
    data.append("price", price);
    data.append("product_image", image);

    ApiServices.AddProduct(data)
      .then((res) => {
        if (res.data.success === true) {
          toast.success(res.data.message);
          setName("");
          setCategoryId("");
          setSubCategoryId("");
          setPrice("");
          setImage(null);
          setImageName("");
        } else {
          toast.error(res.data.message);
        }
      })
      .catch((err) => {
        console.error(err);
        toast.error("Failed to add product. Please try again later.");
      });
  };

  const changeImage = (e) => {
    setImage(e.target.files[0]);
    setImageName(e.target.files[0].name);
  };

  return (
    <main id="main" className="main">
      <div className="pagetitle">
        <h1>Add Product</h1>
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
                    <label>Category</label>
                    <select className="form-control" value={categoryId} onChange={(e) => setCategoryId(e.target.value)}>
                      <option disabled value="">Choose one</option>
                      {allCategory.map((category) => (
                        <option key={category._id} value={category._id}>{category.name}</option>
                      ))}
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Sub-Category</label>
                    <select className="form-control" value={subCategoryId} onChange={(e) => setSubCategoryId(e.target.value)}>
                      <option disabled value="">Choose one</option>
                      {allSubCat.map((subCategory) => (
                        <option key={subCategory._id} value={subCategory._id}>{subCategory.name}</option>
                      ))}
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Price</label>
                    <input className="form-control" value={price} onChange={(e) => setPrice(e.target.value)} />
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

export default AddProduct;
