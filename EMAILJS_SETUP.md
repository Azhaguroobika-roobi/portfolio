# EmailJS Setup Guide

To enable email functionality in your contact form, you need to set up EmailJS. Follow these steps:

## Step 1: Create an EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account (allows 200 emails/month)

## Step 2: Add Email Service
1. In your EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions to connect your email
5. Copy the **Service ID** (you'll need this)

## Step 3: Create Email Template
1. Go to **Email Templates** in your dashboard
2. Click **Create New Template**
3. Use the following template variables:
   - `{{from_name}}` - Sender's name
   - `{{from_email}}` - Sender's email
   - `{{message}}` - Message content
   - `{{to_email}}` - Your email address

4. Example template:
   ```
   Subject: New Contact Form Message from {{from_name}}
   
   You have received a new message from your portfolio contact form.
   
   From: {{from_name}}
   Email: {{from_email}}
   
   Message:
   {{message}}
   ```

5. Copy the **Template ID** (you'll need this)

## Step 4: Get Your Public Key
1. Go to **Account** → **General**
2. Copy your **Public Key**

## Step 5: Update Your Code
1. Open `portfolio/src/components/contact.js`
2. Find these lines (around line 25-27):
   ```javascript
   const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID';
   const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
   const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY';
   ```
3. Replace the placeholder values with your actual IDs:
   ```javascript
   const EMAILJS_SERVICE_ID = 'service_xxxxxxxxx';
   const EMAILJS_TEMPLATE_ID = 'template_xxxxxxxxx';
   const EMAILJS_PUBLIC_KEY = 'xxxxxxxxxxxxxxxx';
   ```

## Step 6: Test
1. Start your development server: `npm start`
2. Navigate to the contact page
3. Fill out and submit the form
4. Check your email inbox for the message

## Troubleshooting
- Make sure all three IDs are correctly entered
- Check that your email service is connected in EmailJS dashboard
- Verify the template variables match exactly (case-sensitive)
- Check browser console for any error messages

