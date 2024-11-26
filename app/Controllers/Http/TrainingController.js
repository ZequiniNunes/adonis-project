'use strict'


const Training = use("App/Models/Training")
class TrainingController {
    async index(){
        return await Training.all()
    }
    async show({params}){
        const training = await training.findOrFail(params.id)
        return training
    }
    async store({request}){
        const { exercises, ...data} = request.only([
            "client_id",
            "name",
            "observation",
            "exercises"
        ])

        const training = await training.save(data)

        if(exercises){
            await training.exercises().attack(exercises)
        }

        await training.load('exercises')
        return training
    }
    async update({params, request}){
        
    }
    async destroy({params}){
        
    }
}

module.exports = TrainingController
