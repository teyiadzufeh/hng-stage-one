require('dotenv').config();
require("../db")
const moment = require("moment");
const {nanoid} = require("nanoid");
const Person = require("../db/models/person");

/**
 * GET /
 * Entrance
 */
exports.submit = async (req, res, next) => {
    try {
        const params = req.query;
        const now = new Date();
        const current_day = now.toLocaleString(
            'default', {weekday: 'long'}
          );
        
        const utc_time = moment.utc().format();
          
        res.json({
            "slack_name": params.slack_name,
            "current_day": current_day,
            "utc_time": utc_time,
            "track": params.track,
            "github_file_url": "https://github.com/teyiadzufeh/hng-stage-one/controllers/appControllers.js",
            "github_repo_url": "https://github.com/teyiadzufeh/hng-stage-one",
            "status_code": 200
        })
    } catch (error) {
        console.log(error);
        next(error);
    }
}

/**
 * POST /
 * CREATE: Adding a new person.
*/
exports.createUser = async (req, res, next) => {
    try {
        const {name} = req.body;
        let idFirstPart = name.slice(0,10).trim().replace(' ','');
        const user_id = `${idFirstPart}_${nanoid(14-idFirstPart.length)}`;

        if (!name || !req.body) return res.status(400).json({
            message: "'name' field is required"
        })

        if (typeof(name) != 'string') return res.json({
            message: "'name' must be of type string",
            status: 400
        })

        const newPerson = await Person.insertMany({
            name,
            user_id
        })

        return res.status(201).json({
            "message": "Person created successfully",
            "data": newPerson[0]
        })
    } catch (error) {
        console.log(error);
        next(error);
    }
}

/**
 * GET /user_id
 * READ: Fetching details of a person.
 */
exports.fetchUser = async (req, res, next) => {
    try {
        const person = await Person.findOne({"user_id": req.params.user_id});
        if (!person) return res.status(404).json({
            "message": "Person not found"
        })

        return res.status(200).json({
            "message": "Person fetched successfully",
            "data": person
        })
    } catch (error) {
        console.log(error);
        next(error);
    }
}

/**
 * PUT /user_id
 * UPDATE: Modifying details of an existing person
 */
exports.updateUser = async (req, res, next) => {
    try {
        const person = await Person.findOne({"user_id": req.params.user_id});
        if (!person) return res.status(404).json({
            "message": "Person not found"
        })
        const {name} = req.body;
        if (!name || !req.body) return res.status(400).json({
            message: "'name' field is required"
        })

        await Person.findOneAndUpdate({"user_id": req.params.user_id},{
            "name": name
        })

        const updatedPerson = await Person.findOne({"user_id": req.params.user_id});

        return res.status(200).json({
            "message": "Person updated successfully",
            "data": updatedPerson
        })
    } catch (error) {
        console.log(error);
        next(error);
    }
}

/**
 * DELETE /user_id
 * DELETE: Removing a person
 */
exports.deleteUser = async (req, res, next) => {
    try {
        const person = await Person.findOne({"user_id": req.params.user_id});
        if (!person) return res.status(404).json({
            "message": "Person not found"
        })

        const deletedPerson = await Person.findOneAndDelete({"user_id": req.params.user_id});
        if (deletedPerson) {
            return res.status(200).json({
                "message": "Person deleted successfully"
            })
        }else {
            return res.status(400).json({
                "message": "Error while deleting person, pls try again later"
            })
        }
    } catch (error) {
        console.log(error);
        next(error);
    }
}
