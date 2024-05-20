## E-commerce app
## Description
   simple E-commerce API.
## Technologies

<div>
    
  ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E) ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white) ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB) ![JWT](https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens) ![Nodemon](https://img.shields.io/badge/NODEMON-%23323330.svg?style=for-the-badge&logo=nodemon&logoColor=%BBDEAD) ![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white)
  <br>
  <center>
  
  <img src="https://camo.githubusercontent.com/2dbe8dc3b8fa5ac59437c9d8c94323ad3f0052d3ff5ac0e9c258ceb5daba76f8/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f31362e332e312d646f74656e762d726564">
  <img src="https://camo.githubusercontent.com/71fe39e1c67b1793f22d11c188a2cdd86438a84e5635b783ed1d1691f8e1c8d2/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f312e34312e302d636c6f7564696e6172792d626c7565">
  <img src="https://camo.githubusercontent.com/a3ff2a5d02a913cdf673537dea66873aecaf58cb8c770f9225e2d2959712ed6b/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f312e342e352d2d6c74732e312d6d756c7465722d726564">
  <img src="https://camo.githubusercontent.com/e098806c441efac8d7c44cbb0cf5000f113dfc54db28d16bbfcbeddc3ba316ed/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f312e31302e302d6d6f7267616e2d726564">
  <img src="https://camo.githubusercontent.com/b9fe7b2faa1b963c1d1b77ee18a4a7689a0d46d18cf38a48ae464f2a03357eba/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f362e392e342d6e6f64656d61696c65722d726564">
  <img src="https://camo.githubusercontent.com/2aa8d320fc8552d10a9f66e1076360d1f0c9ef2ee5adaea034cd13f68ca1efdc/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f352e312e302d6263727970742d726564">
  <img src="https://camo.githubusercontent.com/f73e41f53709208ed3f07c001ccb103454212e26e6d296fa823e02cde579b205/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f312e322e302d657870726573732d2d6173796e632d2d68616e646c65722d726564">
  <img src="https://camo.githubusercontent.com/bdd58addfeff8b18867ab6606b24bd158319885f8c1918ec13c5786259b6c5ab/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f372e302e312d657870726573732d2d76616c696461746f722d726564">

  </center>
</dev>

## **Key Features:**

- **User Authentication:** Secure user authentication endpoints using JWT tokens.
- **Cart Option:** Create, retrieve, update, delete and ensure stock is available.
- **User Profiles:** Fetch and update user profiles,fetch all users,including profile pictures,and contact information.
- **Order Option:** Fetch all orders to user, make online payment with Stripe, make COD order.
- **Coupon:** Fetch all Coupuns,specific coupon,update and delete.
- **Brand:** Fetch all Brands,specific Brand,add with image or no,update and delete.
- **Category:** Fetch all Categories,specific Category,add,update and delete.
- **SubCategory:** Fetch all Subcategories,specific subcategory,add,update and delete.
- **Product:** Fetch all Products,specific Product,add with image,update and delete.
- **Rewiew:** Fetch all Reviews,add,update and delete.
- **Upload Images:** Upload and manage images to be included in Product or Brands.
- **Pagination:** Paginate large data sets for efficient retrieval and presentation.
- **Search:** Field that you want to search by it.

## Installation
1. **Clone the Repository:**
   Use the `git clone` command to clone the GitHub repository to your local machine.
   ```bash
   git clone https://github.com/AbdelrahmanElsaadany22/Social_Media_App-
2. **Initialize a Package.json File (if not already done):**
   If your project doesn't already have a `package.json` file, you can create one by running:
   ```bash
   npm init
   # or
   yarn init
3. **Install depends**
   ```bash
      npm install
5. **Setting up env variables**<br>
   - **Please first specifiy your database engine**
    ```properties
    ## PORT
    PORT=number 
    
    ## Prisma URI
    DB_STRING=connection-string   
    
    ## JWT access token
    SECRET=secret string
    SALT=number
    
    ## CLOUD CONFIG
    CLOUDINARY_CLOUD_NAME=cloud name
    CLOUDINARY_API_KEY=cloud-api-key
    CLOUDINARY_API_SECRET=cloud-api-secret
## Project Structure
 ```
c:/Users/hp/Desktop/social_app/
  ├─ db/
  │  └─ connection.js
  ├─]node_modules/ (ignored)
  ├─ src/
  │  ├─ middlewares/
  │  │  ├─ upload.middleware.js
  │  │  └─ validation.js
  │  ├─ modules/
  │  │  ├─ auth/
  │  │  │  ├─ auth.controller.js
  │  │  │  ├─ auth.middleware.js
  │  │  │  ├─ auth.routes.js
  │  │  │  └─ auth.validate.js
  │  │  ├─ comment/
  │  │  │  ├─ controllers/
  │  │  │  │  └─ comment.controller.js
  │  │  │  ├─ model/
  │  │  │  │  └─ comment.model.js
  │  │  │  ├─ routes/
  │  │  │  │  └─ comment.routes.js
  │  │  │  └─ validations/
  │  │  │     └─ comment.validations.js
  │  │  ├─ friend/
  │  │  │  ├─ controller/
  │  │  │  │  └─ friend.controller.js
  │  │  │  ├─ model/
  │  │  │  │  └─ friend.model.js
  │  │  │  ├─ routes/
  │  │  │  │  └─ friend.routes.js
  │  │  │  └─ validations/
  │  │  │     └─ friend.validations.js
  │  │  ├─ image/
  │  │  │  ├─ middlewares/
  │  │  │  │  └─ image.middlewares.js
  │  │  │  ├─ model/
  │  │  │  │  └─ image.model.js
  │  │  │  └─ utils/
  │  │  │     └─ image.utils.js
  │  │  ├─ like/
  │  │  │  ├─ controller/
  │  │  │  │  └─ reaction.controller.js
  │  │  │  ├─ model/
  │  │  │  │  └─ reaction.model.js
  │  │  │  ├─ routes/
  │  │  │  │  └─ reaction.routes.js
  │  │  │  └─ validations/
  │  │  │     └─ reaction.validation.js
  │  │  ├─ post/
  │  │  │  ├─ controller/
  │  │  │  │  └─ post.controller.js
  │  │  │  ├─ model/
  │  │  │  │  └─ post.model.js
  │  │  │  ├─ routes/
  │  │  │  │  └─ post.routes.js
  │  │  │  └─ validation/
  │  │  │     └─ post.validation.js
  │  │  ├─ story/
  │  │  │  ├─ controller/
  │  │  │  │  └─ story.controller.js
  │  │  │  ├─ model/
  │  │  │  │  └─ story.model.js
  │  │  │  ├─ routes/
  │  │  │  │  └─ story.routes.js
  │  │  │  └─ validation/
  │  │  │     └─ story.validations.js
  │  │  └─ user/
  │  │     └─ model/
  │  │        └─ user.model.js
  │  ├─ routers/
  │  │  └─ v1.routes.js
  │  ├─ utils/
  │  │  ├─ error.handler.js
  │  │  └─ image.js
  │  └─ bootstrab.js
  ├─].env (ignored)
  ├─ .env.example
  ├─ .gitignore
  ├─ index.js
  ├─ package-lock.json
  ├─ package.json
  └─ README.md

```