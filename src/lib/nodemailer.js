import nodemailer from 'nodemailer';

const email = process.env.EMAIL_ACCOUNT;
const pass = process.env.EMAIL_PASSWORD;

export const transporter = nodemailer.createTransport({
	service: 'gmail',
	host: 'smtp.forwardemail.net',
  port: 465,
  secure: true,
	auth: {
		user: email,
		pass,
	},
});

export const mailOptions = {
	from: email,
	to: email,
};
