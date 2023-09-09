require('dotenv').config();
const moment = require("moment");

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