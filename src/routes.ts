import { Router } from 'express';
import { CreateCardController } from './controllers/CreateCardController';
import { CreateImageController } from './controllers/CreateImageController';
import { DeleteCardController } from './controllers/DeleteCardController';
import { GetALLCardController } from './controllers/GetAllCardController';
import { GetAllImageController } from './controllers/GetAllImageController';
import { UpdateCardController } from './controllers/UpdateCardController';


const routes = Router();

routes.post('/cards', new CreateCardController().handle);
routes.get('/cards', new GetALLCardController().handle);
routes.delete('/cards/:id', new DeleteCardController().handle);
routes.put('/cards/:id', new UpdateCardController().handle);


routes.post('/images', new CreateImageController().handle);
routes.get('/images', new GetAllImageController().handle)

export { routes };