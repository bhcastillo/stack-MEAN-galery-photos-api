import { Router } from 'express';
import multer from '../libs/multer';
import {
  getPhotos,
  postPhoto,
  getPhoto,
  deletePhoto,
  putPhoto,
} from '../controllers/photo.controller';
const router = Router();

router.route('/photos').get(getPhotos);
router.route('/photo').post(multer.single('image'), postPhoto);
router.route('/photo/:id').get(getPhoto).put(putPhoto).delete(deletePhoto);
export default router;
