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
        function getCurrentUTCWithinWindow() {
        const minutesToAdd = Math.floor(Math.random() * 5) - 2; // Random value between -2 and 2
        now.setMinutes(now.getMinutes() + minutesToAdd);
        
        // Get the adjusted UTC time
        const utcYear = now.getUTCFullYear();
        const utcMonth = now.getUTCMonth() + 1;
        const utcDay = now.getUTCDate();
        const utcHours = now.getUTCHours();
        const utcMinutes = now.getUTCMinutes();
        const utcSeconds = now.getUTCSeconds();
        
        // Format the time as a string
        const utcTimeString = `${utcYear}-${String(utcMonth).padStart(2, '0')}-${String(utcDay).padStart(2, '0')}T${String(utcHours).padStart(2, '0')}:${String(utcMinutes).padStart(2, '0')}:${String(utcSeconds).padStart(2, '0')}Z`;
        
        return utcTimeString;
        }
        
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