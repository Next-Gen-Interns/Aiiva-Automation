

export default function ContactPage() {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");
  
    const handleWhatsApp = (e) => {
      e.preventDefault();
  
      const whatsappNumber = "919000060000";
  
      const text = `Hi, I am ${name}%0APhone: ${phone}%0AMessage: ${message}`;
  
      const url = `https://wa.me/${whatsappNumber}?text=${text}`;
  
      window.open(url, "_blank");
    };
  return (
    <div className="relative min-h-screen bg-[#f6f7fb] px-6 py-20 flex items-center justify-center overflow-hidden">

      {/* Background Blobs */}
      <div className="absolute top-[-120px] left-[-120px] w-[400px] h-[400px] bg-blue-200/40 rounded-full blur-3xl"></div>
      <div className="absolute bottom-[-120px] right-[-120px] w-[400px] h-[400px] bg-purple-200/40 rounded-full blur-3xl"></div>

      <div className="relative max-w-6xl w-full space-y-16">

        {/* GRID: LEFT + RIGHT */}
        <div className="grid md:grid-cols-2 gap-16 items-start">

          {/* LEFT SIDE */}
          <div>
            <h1 className="text-5xl font-semibold tracking-tight text-gray-900">
              Let’s build something great
            </h1>

            <p className="mt-5 text-gray-500 text-lg leading-relaxed max-w-md">
              Have an idea or need help with automation? We usually respond within a few hours.
            </p>

            <div className="mt-10 space-y-6 text-gray-700">

              <div>
                <p className="text-sm text-gray-400">Phone</p>
                <a href="tel:+919000006000" className="text-lg font-medium hover:text-black transition">
                  +91 90000 60000
                </a>
              </div>

              <div>
                <p className="text-sm text-gray-400">Email</p>
                <a href="mailto:aiivaautomation@gmail.com" className="text-lg font-medium hover:text-black transition">
                  aiivaautomation@gmail.com
                </a>
              </div>

              <div>
                <p className="text-sm text-gray-400">Office</p>
                <p className="text-lg leading-relaxed text-gray-700">
                  Himayathnagar<br />
                  Hyderabad, Telangana<br />
                  India - 500063
                </p>
              </div>

            </div>
          </div>

          {/* RIGHT SIDE - WHATSAPP CTA */}
          <form onSubmit={handleWhatsApp} className="space-y-5">

<input
  type="text"
  placeholder="Your name"
  value={name}
  onChange={(e) => setName(e.target.value)}
  className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-black/10 transition"
  required
/>

<input
  type="tel"
  placeholder="Phone number"
  value={phone}
  onChange={(e) => setPhone(e.target.value)}
  className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-black/10 transition"
  required
/>

<textarea
  placeholder="Your message..."
  rows={5}
  value={message}
  onChange={(e) => setMessage(e.target.value)}
  className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-black/10 transition resize-none"
  required
/>

<button
  type="submit"
  className="w-full bg-green-500 text-white py-3 rounded-xl font-medium hover:bg-green-600 active:scale-[0.98] transition"
>
  Send on WhatsApp
</button>

</form>

        </div>

        {/* MAP (FULL WIDTH BELOW GRID) */}
        <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps?q=Himayathnagar,Hyderabad&output=embed"
            className="w-full h-[380px] border-0 grayscale hover:grayscale-0 transition duration-500"
            loading="lazy"
          />
        </div>

      </div>
    </div>
  );
}
