import { NextResponse } from 'next/server';
// import { EmailTemplate } from '../../components/EmailTemplate';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = new Resend(process.env.FROM_EMAIL);

export  async function POST() {
    try {
        const data = await resend.emails.send({
            from: fromEmail,
              to: ['taniashafiee78@gmail.com'],
              subject: 'Hello world',
              react: 
              <>
              <p>email Body</p>
              </>,
        })
        return NextResponse.json(data);
    } catch(error) {
        return NextResponse.json({error});
    }
}