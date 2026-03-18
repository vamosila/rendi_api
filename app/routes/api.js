import Router from 'express'
const router = Router()

import AuthController from '../controllers/authController.js';
import UserController from '../controllers/userController.js';
import verifyToken from '../middleware/authjwt.js';
import VisitController from '../controllers/visitController.js';
 
router.post('/register', AuthController.register)
router.post('/login', AuthController.login)
router.get('/users', [verifyToken], UserController.index)
router.get('/users/:id', [verifyToken], UserController.show)
router.put('/users/:id/password', [verifyToken], UserController.updatePassword)
router.delete('/users/:id', [verifyToken], UserController.destroy)

router.get('/visits', VisitController.index);
router.get('/visits/:id', VisitController.show);
router.post('/visits', VisitController.store);
router.put('/visits/:id', VisitController.update);
router.delete('/visits/:id', VisitController.destroy);

export default router
