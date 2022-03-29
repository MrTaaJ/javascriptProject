class ContactUs {
    static callContactUs() {
        const contactSection = document.createElement('div');
        contactSection.className = 'contact-us';
        contactSection.innerHTML = `
        <h1 id="contact-header">Contact Information</h1>
        <p>Do have any questions or you just want to say "Hello"?<br>
        You can reach out to us!
        </p>
        <ul class="contact-info">
          <l1>Our e-mail: mail@mail.com</l1>
          <l1>Our phone number: 07030004321</l1>
          <l1>Our address: Everywhere and Nowhere</l1>
        </ul>
        `;

        return contactSection;
    }
}

export default ContactUs;