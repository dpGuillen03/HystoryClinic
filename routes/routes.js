import  express  from "express";
import { aggHistory, aggOrder, aggPatient, cancelOrder,  getAllPatient, getOrderAndHistory, getPatient, singIn, updateHistory, updatePatient } from "../controllers/clinicHistory.js";

const router = express.Router()



router.post('/singIn/',singIn)// validacion -inicio de sesion

router.post('/aggPatient/', aggPatient)//agregar un nuevo paciente

router.get('/allPatient/', getAllPatient)//lista de todos los pacientes registrados

router.get('/getPatient/:document', getPatient)//Obtener un los datos de un paciente con su numero de identificion

router.put('/updatPatient/:document', updatePatient) //actualizar los datos de un paciente mediante su id

router.post('/aggHistory/', aggHistory) // agregar una Historia y devuelve el id de la historia

router.post('/aggOrder/', aggOrder) // Agregar una orden

router.get('/orderAndHistory/:document', getOrderAndHistory) // Trae todas las hsitorias y ordenes activas de 1 paciente

router.put('/updateHystory/:id', updateHistory)//Se actualizan los datos de la historia se envia el id de la misma

router.put('/cancelOrder/:id', cancelOrder) //Se anula una orden enviando el id de la misma


export default router

