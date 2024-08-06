const express=require('express');
const router= express.Router();
const mainController=require('../controllers/mainControllers');

//main routes

router.get('/',mainController.homepage);
//router.get('/*',mainController.page404);
router.get('/about',mainController.aboutpage);

module.exports=router;