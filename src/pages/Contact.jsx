import './Contact.css'


function Contact() {
  return (
    <>
    <section id="contactSection">
    <div>
        <h1>Illuminate the Path to Creavara</h1>
        <p>Every journey into creativity begins with a single spark—a question, a suggestion, an insight. Here, in the sanctum of Creavara, your thoughts kindle the flames that illuminate our collective path. Whether a fleeting curiosity, a profound inquiry, or a spark of inspiration, your voice is the beacon that guides us forward. Together, let us sculpt a sanctuary where creativity knows no bounds.</p>
        
        <div className="contact-form">
            <form action="">
                <div className="formGroup">
                    <label htmlFor="name">Your Name:</label><br />
                    <input type="text" id="name" name="name" placeholder="Enter your name" required />
                </div>
                <div className="formGroup">
                    <label htmlFor="email">Your Email:</label><br />
                    <input type="email" id="email" name="email" placeholder="Enter your email" required />
                </div>
                <div>
                    <label htmlFor="message">Your Message:</label><br />
                    <textarea id="messageBox" name="message" rows="8" cols="50" placeholder="Share your thoughts..." required></textarea><br />
                
                <button type="submit" className="formSubmitButton">Send Your Light</button>
                </div>
            </form>
        </div>

        <p className="closing-thoughts">In the tapestry of creation, every thread holds the potential to weave new worlds, to paint the skies with the hues of imagination. Your insights and inquiries are the loom upon which the future of Creavara is woven. We await your message, a herald of the creativity that lies within, eager to unfold in the sanctuary we build together.</p>
    </div>
  </section>
  </>
  )
}

export default Contact