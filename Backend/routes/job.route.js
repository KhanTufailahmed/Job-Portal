import { getAdminJobs, getAllJob, getJobById, postJob } from "../controllers/job.controller.js";
import express from 'express'
import isAuthenticated from "../middlewares/isAuthenticated.js"
const router = express.Router();

router.route('/post').post(isAuthenticated,postJob);
router.route('/get').get(getAllJob);
router.route('/getAdminjobs').get(isAuthenticated,getAdminJobs);
router.route('/get/:id').get(isAuthenticated,getJobById);
export default router;