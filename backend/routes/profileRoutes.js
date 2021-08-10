const express = require('express');
const router = express.Router()
const Profile = require('../../backend/models/profiles')

const log = console

// Endpoint to get all profiles
router.get('/',async (req, res)=>{
    log.info("Get request recieved for all!")
    try {
        const subs = await Profile.find()
        res.json(subs)
    } catch (error) {
        res.status(500).json({message:error.message})
    }
})

// Endpoint to get all profiles
router.post('/create',async (req, res)=>{
    log.info("Post request recieved to create profile")
    try {
        const profile = new Profile(req.body)
        try {
            const newProfile = await profile.save()
            res.status(200).json(newProfile)
            log.info("New profile created successfully.")
        } catch (error) {
            res.status(400).json({message: error.message})
        }
    } catch (error) {
        res.status(500).json({message:error.message})
    }
})


// Endpoint to update a profile
router.patch('/update/:id', getProfile, async(req, res)=>{
    log.info(`Patch request recieved for id : ${req.params.id}`)

    let equalToBefore = true  // A bool to keep track if the state is updated or not
    try {
        Object.keys(req.body).map(key => {
            // Edit only those field which are provided in req and are 
            // different from previous values
            if (res.profile[key] != req.body[key]) {
                res.profile[key] = req.body[key]
                equalToBefore = false
                log.debug(`${key} updated in patch!`)
            }
        })

        // Object containing updated profile object, to be used to generate new JWT token
        let updated = {
            profile: await res.profile.save(), 
            updatePerformed: !equalToBefore
        }
        res.json(updated)

    } catch (error) {
        res.status(400).json({message: error.message})
    }
})


// Middleware to get user and set it in response object
async function getProfile(req, res, next) {
    let profile
    try {

        profile = await Profile.findById(req.params.id)
        if (profile == null){
            return res.status(404).json({message: "Cannot find Profile"})
        }
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
    res.profile = profile
    next()
}

module.exports = router
