import Visit from '../models/visit.js'

const VisitController = {
    async index(req, res) {
        try {
            await VisitController.tryIndex(req, res)
        }catch(error) {
            res.status(500)
            res.json({
                success: false,
                message: 'Error! The query is failed!',
                error: error.message
            })
        }
    },
    async tryIndex(req, res) {
        const visits = await Visit.findAll()
        res.status(200)
        res.json({
            success: true,
            data: visits
        })
    },
    async show(req, res) {
        try {
            await VisitController.tryShow(req, res)
        }catch(error) {
            res.status(500)
            res.json({
                success: false,
                message: 'Error! The query is failed!',
                error: error.message
            })
        }
    },
    async tryShow(req, res) {
        const visit = await Visit.findByPk(req.params.id)
        res.status(200)
        res.json({
            success: true,
            data: visit
        })
    },
    async store(req, res) {
        try {
            await VisitController.tryStore(req, res)
        }catch(error) {
            res.status(500)
            res.json({
                success: false,
                message: 'Error! The query is failed!',
                error: error.message
            })
        }
    },
    async tryStore(req, res) {
        const visit = await Visit.create(req.body)
        res.status(201)
        res.json({
            success: true,
            data: visit
        })
    },
    async update(req, res) {
        try {
            await VisitController.tryUpdate(req, res)
        }catch(error) {
            let actualMessage = '';
            if(error.message == 'Fail! Record not found!') {
                actualMessage = error.message
                res.status(404)
            }else {
                res.status(500)
                actualMessage = 'Fail! The query is failed!'
            }
            
            res.json({
                success: false,
                message: actualMessage
            })
        }
    },
    async tryUpdate(req, res) {
        const recordNumber = await Visit.update(req.body, {
            where: { id: req.params.id }
        })
        if(recordNumber == 0) {
            throw new Error('Fail! Record not found!')
        }
        const visit = await Visit.findByPk(req.params.id)
        res.status(200)
        res.json({
            success: true,
            data: visit
        })
    },
    async destroy(req, res) {
        try {
            await VisitController.tryDestroy(req, res)
        }catch(error) {
            res.status(500)
            res.json({
                success: false,
                message: 'Error! The query is failed!',
                error: error.message
            })
        }
    },
    async tryDestroy(req, res) {
        const visit = await Visit.destroy({
            where: { id: req.params.id }
        })
        res.status(200)
        res.json({
            success: true,
            data: visit
        })
    }
}

export default VisitController
