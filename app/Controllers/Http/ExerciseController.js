'use strict'

const Exercise = use("App/Models/Exercise")

class ExerciseController {
    async index({request}){
        
        return await Exercise.all()
    }
    async show({params}){
        const exercise = await exercise.findOrFail(params.id)
        return exercise
    }
    async store({request}){
        const data = request.only([
            "name",
            "observation",
            "series",
            "waiting_time",
            ""
        ])

        const exercise = await exercise.create(data)
        return exercise
    }
    async update({params, request}){
        const data = request.only([
            "name",
            "observation",
            "series",
            "waiting_time"
        ])
        const exercise = await exercise.findOrFail(params.id)
        exercise.merge(data)
        await exercise.save()
        return exercise
    }
    async destroy({params}){
        const exercise = await exercise.findOrFail(params.id)
        return exercise.delete()
    }
}

module.exports = ExerciseController
