import app from './app'
import {connectDb} from './dataBase'

async function main () {
    try {
        await connectDb()
        app.listen(3000);
        console.log("3000 and connected to Database")
    } catch (error) {
        console.log(error)
    }
}

main ();