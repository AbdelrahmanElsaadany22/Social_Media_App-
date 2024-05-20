import { uploadImage } from "../../../utils/image.js"
import imageModel from "../model/image.model.js"

export const makeImage=async(path)=>{
const {imageName,imageUrl}=await uploadImage(path)
//the return to use the model in another purposes
return imageModel.create({ name: imageName, path: imageUrl })
}