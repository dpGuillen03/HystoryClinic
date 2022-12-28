import { Sequelize } from "sequelize";
import login from "../models/modelUser.js";
import patient from "../models/modelPatient.js"
import documentType from "../models/modelDocumentType.js";
import gender from "../models/modelGender.js";
import orderType from "../models/modelOrderType.js";
import diagnosi from "../models/modelDiagnosis.js";
import diagnosiTp from "../models/modelDiagnosisType.js";
import queryPurpos from "../models/modelQueryPurpose.js";
import externalcause from "../models/modelExternalCauses.js";
import medicalHistory from "../models/modelMedicalHistory.js";
import medicalOrder from "../models/modelMedicalOrder.js";
import popul from "../models/modelPopulation.js"
import disa from "../models/modelDisability.js"
import disabilityTP from "../models/modelDisabilityType.js"
import ethnical from "../models/modelEthicGroup.js"
import zonal from "../models/modelZone.js"



const Op = Sequelize.Op


//Inciar sesion en la plataforma -- valida si el usuario existe y devuelve los datos de este
export const singIn = async (req, res) => {
    try {
        const user = await login.findOne({
            where: { userId: req.body.identification}// where: { userId: req.body.identification} //, password: req.body.password
        })

        const pat = await patient.findAll({attributes: ['id' ,'documentTypeId', 'document', 'nameOne', 
        'nameTwo', 'lastNameOne', 'lastNameTwo', 'dateOfBirth', 'gender', 'address', 'telephone']})// todos los pacientes
        const doc = await documentType.findAll({attributes: ['id', 'description']}) //los tipos de documentos
        const gen = await gender.findAll({attributes: ['id', 'description']}) //los generos
        const order = await orderType.findAll({attributes:['id', 'description']}) //los tipos de ordenes
        const diagnosis = await diagnosi.findAll({attributes: ['id', 'description']}) //Todos los diagnositicos
        const diagnosistypes = await diagnosiTp.findAll({attributes: ['id', 'description']}) //Todos los tipos de diagnosticos
        const queryP = await queryPurpos.findAll({attributes: ['id', 'description']}) // Todos los queryspurpose
        const external = await externalcause.findAll({attributes: ['id', 'description']}) //Todas las causas externas

        const popu = await popul.findAll({attributes:['id', 'description']})
        const disal = await disa.findAll({attributes:['id', 'description']})
        const disatipe = await disabilityTP.findAll({attributes:['id', 'description']})
        const etnico = await ethnical.findAll({attributes:['id', 'description']})
        const zon = await zonal.findAll({attributes:['id', 'description']})
        
        const focusdifer = {
            specialPopulation: popu,
            disability: disal,
            disabilityType: disatipe,
            ethnicGroup: etnico,
            zone: zon,
        }


               if(!user){
                    res.status(400).json({message: 'Usuario no existe'})
                }else{
                    if(user.toJSON().password ==  req.body.password){

                const ppp = {
                        patients : pat,
                        documentType : doc,
                        genders : gen,
                        ordersType : order,
                        diagnosis: diagnosis, 
                        diagnosisType: diagnosistypes,
                        queryPurpose: queryP,
                        externalCauses: external,
                        differentialFocus: focusdifer,
                    }

                    res.status(200).json({login: user,
                        patientData: ppp,})
                    }else{
                        res.status(400).json({message: 'Contraseña Incorrecta'})
                    } 
                }
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}

//Agregar un nuevo paciente
export const aggPatient = async (req, res) => {
    try {
        

        if(JSON.stringify(req.body) == '{}'){
            res.status(400).json({message: 'Datos vacios'})
        }else{

                const exist = await patient.findOne({
                    where: { document: req.body.document}
                })

                if(exist == null){
                    await patient.create(req.body)
                res.status(200).json({message: 'Paciente Registrado exitosamente'})
                console.log(exist)
                }else{
                    res.status(400).json({message: 'El paciente se encuentra registrado'})
                    console.log(exist)
                }
            
        }

    } catch (error) {
       res.status(400).json({message: 'Error al registrar el paciente'})
    }
}

//Lista de pacientes registrados
export const getAllPatient = async (req, res) => {
    try {
        const patients = await patient.findAll()
        res.status(200).json(patients)
    } catch (error) {
        res.status(400).json({message: 'Error listando los pacientes'})
    }
}

//Editar datos de un paciente
export const updatePatient = async (req, res) => {
    try {
        await patient.update(req.body,{
            where: {patientId: req.params.patientId}
        })
        res.status(200).json({message: 'Paciente actualizado con exito'})
    } catch (error) {
        res.status(400).json({message: 'Error el actualizacion'})
    }
}

//Obtener 1 paciente
export const getPatient = async (req, res) => {
    try {
        const pat = await patient.findOne({
            where: { patientId: req.params.patientId}
        })
        res.status(200).json(pat)
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}

//Agregar historia - devuelve id de la historia
export const aggHistory = async (req, res) => {
    try {

        const history = await medicalHistory.create(req.body)
        res.status(200).json({message: 'Historia guardada con exito',
        id: history.id})
    } catch (error) {
        res.status(400).json({message: 'Error al guardar la historia'})
    }
}

//Agregar una orden
export const aggOrder = async (req, res) => {
    try {
        const idOrder = await medicalOrder.create(req.body)
        res.status(200).json({message: 'Orden creada correctamente',
        id: idOrder })

    } catch (error) {
        res.status(400).json({message: error.message})
    }
}

//Obtener las historias y ordenes activas por paciente (recibe documento de paciente)
export const getOrderAndHistory = async (req, res) => {
    try {

        const history = await medicalHistory.findAll({
            where: {document: req.params.document}
        })

        const order = await medicalOrder.findAll({
            where: {document: req.params.document}
        })
        
        
            const orderAndHistory = {
                medicalHistory: history,
                medicalOrder : order,
            }
            res.status(200).json(orderAndHistory)
            console.log(history)
      
   
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}

//Editar una Historias
export const updateHistory = async (req, res) => {
    try {

        const pp = req.params.id

        if(pp == 'undefined'){
            res.status(400).json({message: 'Sin parametro de identificacion'})
        }else{

            await medicalHistory.update(req.body, { 
                where: {id: req.params.id }
            })
            res.json({
                message: 'Historia actualizada con exito'
            })
    
            console.log(pp)

        }   
        
    } catch (error) {
        res.status(400).json({message: error.message})
        
    }
}

//Anular una orden
export const cancelOrder = async (req, res) => {
    try {
        await medicalOrder.update({
            state: 0
        }, {
            where: { id: req.params.id}
        })

        res.status(200).json({message: 'La orden a sido anulada con exito'})
        
    } catch (error) {
        res.status(400).json({message: error.message})
        
    }
}
