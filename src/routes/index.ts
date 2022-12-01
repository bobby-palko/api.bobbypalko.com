import { Router } from 'express';
import makePingController from '../controllers/ping';

const router = Router();

router.get('/ping', async (_, res) => {
  const controller = makePingController();
  const response = await controller.getMessage();
  return res.send(response);
});

export default router;
