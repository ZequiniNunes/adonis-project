'use strict'


const Training = use("App/Models/Training")
class TrainingController {
    async index(){
        return await Training.all()
    }
    async show({params}){
        const training = await Training.findOrFail(params.id)
        return training
    }
    async store({request}){
        const { exercises, ...data} = request.only([
            "client_id",
            "name",
            "observation",
            "exercises"
        ])

        const training = await Training.save(data)

        if(exercises){
            await training.exercises().attack(exercises)
        }

        await training.load('exercises')
        return training
    }
    async update({params, request}){
        const { exercises, ...data} = request.only([
            "client_id",
            "name",
            "observation",
            "exercises"
        ])
        const training = await Training.findOrFail(params.id)
        training.merge(data)
        await training.save()

        if(exercises){
            await training.exercises().sync(exercises)
        }

        await training.load('exercises')
        return training
    }
    async destroy({params}){
        const training = await Training.findOrFail(params.id)
        return training.delete()
    }
}

module.exports = TrainingController
