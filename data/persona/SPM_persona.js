const { connection } = require("../../config");

const SPM_Persona= (req,res) => {
    console.log(req.body)
    const{
        IdPersona,
        Nombre,
        Apellido,
        FechaNacimiento,
        Dni,
        Telefono
    }= req.body;

    const SPM_Persona= "CALL SPM_Persona(?,?,?,?,?,?)"
    connection.query(
        SPM_Persona,[
            IdPersona,
            Nombre,
            Apellido,
            FechaNacimiento,
            Dni,
            Telefono

        ],
        (err, response) => {
            if(err) return console.log(err)
             res.status(200).send(response[0][0]);
           }
    );
};
module.exports= {SPM_Persona}