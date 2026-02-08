"use server";
import { Resend } from "resend";
import { z } from "zod";
import { ContactEmailTemplate } from "@/components/emails/ContactEmailTemplate";

const resend = new Resend(process.env.RESEND_API_KEY);

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  service: z.string(),
  message: z.string().min(5),
});

export async function sendEmail(formData: FormData) {
  console.log("API KEY CHECK:", process.env.RESEND_API_KEY ? "FOUND" : "NOT FOUND");
  const rawData = {
    name: formData.get("name"),
    email: formData.get("email"),
    service: formData.get("service"),
    message: formData.get("message"),
  };

  const validatedData = contactSchema.safeParse(rawData);

  if (!validatedData.success) {
    return { success: false, error: "Please fill in all fields correctly." };
  }

  try {
    const { name, email, service, message } = validatedData.data;

await resend.emails.send({
  from: "MFS Inquiry <portal@maifadifs.co.za>", 
  to: ["info@maifadifs.co.za"], 
  replyTo: email,
  subject: `New Inquiry: ${service} - ${name}`,
  react: <ContactEmailTemplate name={name} email={email} service={service} message={message} />,
});

    return { success: true };
  } catch (error) {
    console.error(error);
    return { success: false, error: "Internal server error." };
  }
}