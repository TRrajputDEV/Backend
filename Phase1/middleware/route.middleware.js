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