# Swastik Electrotech Automation website (React)

Pages: Home (/), About Us (/about), Contact (/contact). Light and Dark mode toggle in the navbar (saved in the browser).

## Run
    npm install
    npm run dev        # http://localhost:5173
    npm run build      # production files in /dist
    npm run preview

## Edit
- Phone, email, address, GSTIN: src/site.js
- Pages: src/pages/Home.jsx, About.jsx, Contact.jsx
- Colors (light + dark): top of src/styles.css
- Images: src/assets (replace with your original high-quality files, same names)

## Contact form
By default the form opens a ready-made WhatsApp / email message.
To receive messages directly, copy .env.example to .env and set VITE_FORM_ENDPOINT
(for example a Formspree URL). Then the form sends the data itself.

## Deploy
Upload /dist to Netlify, Vercel or any host. _redirects and vercel.json are included for page routing.
