


// API for adding pandit
const addPandit = async (req, res) => {

    try{
        const { name, email, password, categories, experience, about, fees, address } = req.body
        const imageFile = req.File

        //checking for all data to add pandit
        if(!name || !email || !password || !categories || !experience || !about || !fees || !address ) {
            return res.json({success:false,message:"Missing Details"})

        }

        //validating email format
        

    } catch(error) {

    }
}

export {addPandit}