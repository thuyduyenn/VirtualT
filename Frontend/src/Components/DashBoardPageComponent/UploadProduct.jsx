import { useContext, useState } from "react";
import { AllContext } from "../../context/allContext";

const UploadProduct = () => {
    const {
        infoUploadProduct,
        handleChangeInfoUploadProduct,
        handlePressUploadProduct
    } = useContext(AllContext)
    const [nameImage,setNameImage] = useState(null)
    const handleTransformFileImage = (e) => {
        const file = e.target.files[0]
        setNameImage(e.target.files[0].name)
        const reader = new FileReader();
        if(file){
           reader.readAsDataURL(file)
           reader.onloadend = () => {
              handleChangeInfoUploadProduct({
                ...infoUploadProduct,
                imageProduct:reader.result
              })
           }
        }
    }

    return ( 
        <div className="upload-product">
               <div className="upload-product-container">
                     <h1>Upload Product</h1>
                    <div className="form-upload">
                         <div>
                              <strong>Tên sản phẩm</strong>
                              <input type="text" placeholder="typing here" onChange={(e)=>handleChangeInfoUploadProduct({
                                   ...infoUploadProduct,
                                   nameProduct:e.target.value
                              })}/>
                         </div>
                          <div>

                               <strong>Giá</strong>
                               <input type="text" placeholder="typing here" onChange={(e)=>handleChangeInfoUploadProduct({
                                   ...infoUploadProduct,
                                   price:e.target.value
                              })}/>
                          </div>
                          <div>
                               <strong>Số sao</strong>
                                <input type="text" placeholder="typing here" onChange={(e)=>handleChangeInfoUploadProduct({
                                   ...infoUploadProduct,
                                   rating:e.target.value
                              })}/>
  
                         </div>
                         <div>
                              <strong>Ảnh sản phẩm</strong>
                              <input type="file" accept="/image" hidden id="image-product" onChange={(e)=>handleTransformFileImage(e)}/>
                              <label htmlFor="image-product">Nhấn vào đây để chọn ảnh đẹp nhất</label>
                         </div>
                         <textarea placeholder="Chi tiết sản phẩm" onChange={(e)=>handleChangeInfoUploadProduct({
                                   ...infoUploadProduct,
                                   commend:e.target.value
                              })}></textarea>
                         <div className="upload-btn" onClick={()=>handlePressUploadProduct()}>Upload</div>
                    </div>
               </div>
        </div>
     );
}
 
export default UploadProduct;