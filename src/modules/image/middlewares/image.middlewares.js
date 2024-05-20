import { catchAsyncError } from "../../../utils/error.handler.js"
import { makeImage } from "../utils/image.utils.js"
export const attachCoverImage = () =>
	catchAsyncError(async (req, res, next) => {
		//console.log(req.files)
		if (!req.files?.cover_image) return next()
		const image = await makeImage(req.File.cover_image[0].path)
	    //console.log(image)
	 	req.body.cover_image = image._id
		next()
	})


    export const attachImage = (fieldName) =>
	catchAsyncError(async (req, res, next) => {
		if (!req.file) {
			return next()}
		const image = await makeImage(req.file.path)
		console.log("iam here")
		req.body[fieldName]  = image._id
		next()
	})