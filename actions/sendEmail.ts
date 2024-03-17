"use server";

import { getErrorMessage, validateString } from "@/lib/utils";
import { Resend } from "resend";
import ContactFormEmail from "@/email/contact-form-email";
import React from "react";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {

  const senderEmail = formData.get("senderEmail");
  const message = formData.get("message");

  // Server side validation
  if (!validateString(senderEmail, 500) || !validateString(message, 5000)) {
    return {
      error: "Invalid email or message"
    };
  }

  console.log("Running on server");
  console.log(formData.get("senderEmail"));
  console.log(formData.get("message"));
  let data;
  try {
    await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: "prateek.upadhyay31@gmail.com",
      subject: "Message from Contact form",
      reply_to: senderEmail as string,
      // text: message as string
      react: React.createElement(ContactFormEmail, {
        message: message as string,
        senderEmail: senderEmail as string
      }),
    });

  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    }
  }

  return {
    data
  }
}