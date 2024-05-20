import { v2 as cloudinary} from "cloudinary";

export const uploadImage=async(path)=>{
    try{
        const{public_id:imageName,secure_url:imageUrl}=
        await cloudinary.uploader.upload(path)
        return{imageName,imageUrl}
    }catch(error){
        console.error('Error uploading image to Cloudinary:', error);
        throw new Error('Failed to upload image to Cloudinary');
    }
}

export const deleteImage = async (imageName) => {
	await cloudinary.uploader.destroy(imageName)
}
