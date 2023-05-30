import  mongoose  from "mongoose";
import app from "./app";
import config from "./config";
const port = 5000
async function boostrap() {
   
  
    try {
        await mongoose.connect(config.database_url as string);
        console.log(`Database Connected Sucessfully`)
        app.listen(config.port, () => {
            console.log(`Application listening on port ${config.port}`)
          })
        
    } catch (error) {


        console.log(`Error ${error}`)
        
    }
  }

  boostrap();