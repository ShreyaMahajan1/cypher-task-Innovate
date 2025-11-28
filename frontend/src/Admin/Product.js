import { useEffect, useState } from "react"
import ApiServices from "./ApiServices"


export default function Product(){


    const changeImage = (e) => {
        // Update image state when file input changes
        setImage(e.target.files[0]);
        setImageName(e.target.files[0].name); // Display file name
      };
    const [allCategory,setAllCategory]=useState([])
    const [categoryId,setCategoryId]=useState("")
    const [allSubCat,setAllSubCat]=useState([])
    const[imageName,setImageName]=useState("")
    const[image,setImage]=useState([])
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
    useEffect(()=>{
        let data={
            categoryId:categoryId
        }
        ApiServices.getSubCategory(data).then((res)=>{
            console.log(res);
            setAllSubCat(res.data.data)
        }).catch((err)=>{
            console.log(err);
        })
    },[categoryId]) 
    return(
        <><main id="main" className="main">
        <div className="pagetitle">
          <h1>Add Subcategory</h1>
        </div>
        <div className="container mt-5">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="card">
                <div className="card-body">
        {/* men , women  kurti, saree, pant, shirt */}
        <h1>Add Product</h1>
        <form>
            <label>Category</label>
            <select value={categoryId} onChange={(e)=>{setCategoryId(e.target.value);}}>
                <option>Choose one</option>
                {allCategory?.map(
                    (el,index)=>(
                        <option value={el._id}>{el.name}</option>
                    )
                )}
            </select>
            <br/>
            <label>Sub-Category</label>
            <select>
                <option>Choose Sub-cat</option>
                {allSubCat?.map((el,index)=>(
                    <option>{el.name}-{el.categoryId?.name}</option>
                ))}
            </select>
            <br/>
            <label>Name</label>
            <input/>
            <br/>
            <div className="form-group">
                    <label>Image</label>
                    <input className="form-control" type="file" onChange={changeImage} />
                  </div>
            <br/>
            <label>Price</label>
            <input/>
            <br/>
            <button>submit</button>
        </form>
        </div>
        </div>
        </div>
        </div>
        </div>
        </main>
        </>
    )
}