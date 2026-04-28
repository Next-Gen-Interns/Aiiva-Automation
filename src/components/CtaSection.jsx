export default function CtaSection() {
    return (
      <section className="w-full bg-white py-12">
        <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch">
  
            {/* Left Image */}
            {/* h-[300px] md:h-[400px] lg:h-[450px] xl:h-[500px] */}
            <div className="relative h-[500px] p-2 border overflow-hidden lg:h-auto">
            <div className="w-full h-full overflow-hidden">
              <img
                src="/hero-bg.jpg" 
                alt="Smart home interior"
                className="w-full h-full object-cover border scale-100 hover:scale-102 hover:brightness-80 transition-all duration-800 ease-in-out"
              />
            </div>
            </div>
  
            {/* Right Content */}
            <div className="bg-[#12141a] text-white flex items-center">
              <div className="p-10 lg:p-14 space-y-6">
  
                <h2 className="text-3xl lg:text-4xl font-semibold font-arimo leading-snug">
                  Experience Premium Smart Home Integration
                </h2>
  
                <p className="text-gray-300 text-sm lg:text-base font-arimo leading-relaxed">
                  We provide seamless automation systems with reliable connectivity
                  and expert installation. Control every device effortlessly and
                  enjoy peace of mind with enhanced home security. We provide
                  seamless automation systems with reliable connectivity and expert
                  installation.
                </p>
  
                <button className="bg-white text-black font-arimo px-6 py-3 rounded-md font-medium hover:bg-gray-200 transition">
                  Contact Us
                </button>
              </div>
            </div>
  
          </div>
        </div>
      </section>
    );
  }