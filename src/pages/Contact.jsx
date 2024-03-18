import './Contact.css'


function Contact() {
  return (
    <>
    <section id="contactSection">
    <div>
        <h1>Illuminate the Path to Creavara</h1>
        <p>Every journey into creativity begins with a single spark—a question, a suggestion, an insight. Here, in the sanctum of Creavara, your thoughts kindle the flames that illuminate our collective path. Whether a fleeting curiosity, a profound inquiry, or a spark of inspiration, your voice is the beacon that guides us forward. Together, let us sculpt a sanctuary where creativity knows no bounds.</p>
        
        <div class="contact-form">
            <form action="submitForm" method="POST">
                <div class="form-group">
                    <label for="name">Your Name:</label>
                    <input type="text" id="name" name="name" placeholder="Enter your name" required />
                </div>
                <div class="form-group">
                    <label for="email">Your Email:</label>
                    <input type="email" id="email" name="email" placeholder="Enter your email" required />
                </div>
                <div class="form-group">
                    <label for="message">Your Message:</label>
                    <textarea id="message" name="message" rows="6" placeholder="Share your thoughts..." required></textarea>
                </div>
                <button type="submit" class="submit-button">Send Your Light</button>
            </form>
        </div>

        <p class="closing-thoughts">In the tapestry of creation, every thread holds the potential to weave new worlds, to paint the skies with the hues of imagination. Your insights and inquiries are the loom upon which the future of Creavara is woven. We await your message, a herald of the creativity that lies within, eager to unfold in the sanctuary we build together.</p>
    </div>
  </section>
  </>
  )
}

export default Contact