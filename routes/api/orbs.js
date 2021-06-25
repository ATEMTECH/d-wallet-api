const express = require('express');

const router = express.Router();
const orbsController = require('../../controllers/orbs');
const mw = require('../../controllers/middleWares');

router.get('/guardians', mw.web3, orbsController.getGuardians);

router.get('/stakedInfo', mw.web3, orbsController.getStakedInfo);

router.get('/unstakeStatus', mw.web3, orbsController.getUnstakeStatus);

router.post('/approve', mw.web3, orbsController.postApprove);

router.post('/delegate', mw.web3, orbsController.postDelegate);

router.post('/stake', mw.web3, orbsController.postStake);

module.exports = router;
