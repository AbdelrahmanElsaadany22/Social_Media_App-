env.config()
import env from 'dotenv'
import express from 'express'
import morgan from 'morgan'
import { AppError, catchAsyncError } from './utils/error.handler.js'
import router from './routers/v1.routes.js'
const bootstrap = (app) =>
 {

	app.use(express.json())
	app.use(morgan('dev'))
	app.use('/api/v1',router)
	app.all('*', (req, res, next) => {
		throw new AppError('Route not found', 404)
	})
    //glopal error handler middleware that comes from catchAsync and app error
	app.use((err, req, res, next) => {
		const { message, status, stack } = err
		res.status(status || 500).json({
			message,
			...(process.env.MODE === 'development'&& { stack }),
		})
	})
}

export default bootstrap
