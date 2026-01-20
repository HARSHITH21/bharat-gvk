export default function Achievements() {
    return (
        <section id="achievements" className="py-20 bg-gradient-to-br from-blue-50 to-slate-100">
            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">OUR ACHIEVEMENTS</h2>
                        <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
                        <p className="text-lg text-slate-600 max-w-3xl mx-auto">Over 32 years of excellence in electromechanical manufacturing</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                        <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2">
                            <div className="text-6xl font-bold text-blue-600 mb-4">32+</div>
                            <h3 className="text-xl font-bold text-slate-800 mb-2">Years of Experience</h3>
                            <p className="text-slate-600">Established expertise in electromechanical manufacturing</p>
                        </div>
                        <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2">
                            <div className="text-6xl font-bold text-blue-600 mb-4">1000+</div>
                            <h3 className="text-xl font-bold text-slate-800 mb-2">Happy Clients</h3>
                            <p className="text-slate-600">Satisfied customers across various industries</p>
                        </div>
                        <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2">
                            <div className="text-6xl font-bold text-blue-600 mb-4">50+</div>
                            <h3 className="text-xl font-bold text-slate-800 mb-2">Products Range</h3>
                            <p className="text-slate-600">Comprehensive product portfolio</p>
                        </div>
                    </div>

                    <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 text-white text-center">
                        <h3 className="text-2xl font-bold mb-4">Quality Excellence</h3>
                        <p className="text-lg">ISO 9001:2008 certified manufacturing processes</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
