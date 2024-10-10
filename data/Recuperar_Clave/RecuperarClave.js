const { connect } = require("../../config");
const nodemailer = require('nodemailer');

const ValidacionCorreo = async (req, res) => {
    const { Email } = req.body;
  
    try {
        const pool = await connect();
        const result = await pool.request()
            .input('Email', Email)
            .execute('ValidacionCorreo');

        // Verificar si recordset tiene un valor
        if (result.recordset.length > 0) {
            const token = result.recordset[0].Token;
            const message = result.recordset[0].Message;

            // Si el mensaje indica éxito, enviar 200, de lo contrario, 400
            if (token) {
                res.status(200).send({ message, status: 200 });
                await sendEmail(Email, token);
            } else {
                res.status(400).send({ message, status: 400 });
            }
        } else {
            res.status(400).send({ message: 'No se obtuvo un resultado válido.', status: 400 });
        }
    } catch (err) {
        console.error('Error al ejecutar el procedimiento almacenado:', err);
        res.status(500).send({ message: 'Error en el servidor' });
    }
};

async function sendEmail(Email, token) {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'ezef8137@gmail.com',
            pass: 'eeqo ebvx hxaz gcwr',
        },
    });

    const mailOptions = {
        from: 'tu_correo@gmail.com',
        to: Email,
        subject: 'Recuperación de Contraseña',
        text: `Utiliza el siguiente token para recuperar tu contraseña: ${token}`,
    };

    await transporter.sendMail(mailOptions);
}

module.exports = { ValidacionCorreo };
