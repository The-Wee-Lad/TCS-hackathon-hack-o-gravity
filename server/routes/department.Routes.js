import { Router } from "express";
import { createDepartment, getalldepart } from "../controller/deparmentController.js";

const router = Router();

router.route("/").post(createDepartment)
  .get(getalldepart);

export default router;