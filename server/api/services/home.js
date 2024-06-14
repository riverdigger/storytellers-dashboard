import express from 'express';
const router = express.Router();

router.get('', async (_, res) => {
  res.send('Home Page');
});
export default router;