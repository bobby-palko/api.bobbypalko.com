import { Router } from 'express';
import PingController from '../controllers/ping';

const router = Router();

router.get('/ping', async (_, res) => {
  const response = await PingController.getMessage();
  return res.send(response);
});

export default router;
