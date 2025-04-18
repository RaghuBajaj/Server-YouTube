import { Router } from "express"; 
import { registerUser, working } from "../controllers/user.controller.js";
import { upload } from "../middelwares/multer.middleware.js";


const router = Router();

router.route("/register").post(registerUser);
router.route("/working").post(working);

// router.route("/register").post(
//     upload.fields([
//         {
//             name: "avatar",
//             maxCount: 1
//         },
//         {
//             name: "CoverImage", 
//             maxCount: 1
//         }
//     ]),
//     registerUser
// );

export default router
