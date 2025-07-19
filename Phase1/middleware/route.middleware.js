import { getCars } from "../controllers/product.controller.js";
const CustomURLPath = (req, res, next) => {
    console.log("REQ PATH:", req.path);
    if (req.path.toLowerCase().includes("car")) {
        console.log("MATCHED → Triggering getCars()");
        return getCars(req, res);
    }
    next();
};

export default CustomURLPath;

/* 
    SO lets talk about middlewares -
    they have the acceses to our Request object and response object.. and application - request response cycle -> next.
    - they can execute the code.
    -can make changes in the req res objectn and can end the application req-res cycle.
    next() function is not a part of NOde.js or Express API, its just a third argument passed in the middleware function
*/