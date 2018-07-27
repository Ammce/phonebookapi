import { Router } from 'express';
import * as PersonController from './controller';

const router = new Router();

//Route for getting all persons
router.get('/allPersons', PersonController.getPersons);

//Route for creating a Person record
router.post('/createPerson', PersonController.createPerson);

//Route for updating particular Person record
router.patch('/updatePerson', PersonController.editPerson);

//Route for deleting a particular Person record
router.delete('/deletePerson/:id', PersonController.deletePerson);

export default router;