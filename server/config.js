
var env = process.env.NODE_ENV;
if(env==="production"){
    process.env.MONGO_URL ="mongodb+srv://tawanda:0776395524@mlab-inicd.mongodb.net/messages?retryWrites=true"
    process.env.AUTH_EMAIL="tawandamavolts@gmail.com"
    process.env.AUTH_PASS="0776395524"
    process.env.TO_EMAIL="tawandagdmavondo@gmail.com"
    process.env.FROM_EMAIL="tawandamavolts@gmail.com"
}else {
    process.env.MONGO_URL ='mongodb://localhost:27017/Messages'
    process.env.AUTH_EMAIL="tawandamavolts@gmail.com"
    process.env.AUTH_PASS="0776395524"
    process.env.TO_EMAIL="tawandagdmavondo@gmail.com"
    process.env.FROM_EMAIL="tawandamavolts@gmail.com"
}



