import mongoose from "mongoose";

const connection={};

async function connect(){
  if(connection.isConnected){
    return;
  }
  // const db = await mongoose.connect(process.env.MONGODB_URI)
  const db = await mongoose.connect("mongodb+srv://kushmevada:sigmasquare@cluster0.sffios3.mongodb.net/?retryWrites=true&w=majority")

  connection.isConnected= db.connections[0].readyState;
}

export default connect;