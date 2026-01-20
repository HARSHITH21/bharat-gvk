'use client';

import { useState } from 'react';
import { MapPin, Phone, Mail, ArrowRight, CheckCircle, Loader2 } from 'lucide-react';
import { supabase, isSupabaseConfigured, ContactSubmission } from '@/lib/supabase';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');
        setErrorMessage('');

        try {
            // Check if Supabase is configured
            if (!isSupabaseConfigured() || !supabase) {
                // Fallback: just show success for demo purposes
                console.log('Form data (Supabase not configured):', formData);
                setStatus('success');
                setFormData({ name: '', email: '', phone: '', message: '' });
                setTimeout(() => setStatus('idle'), 5000);
                return;
            }

            const submission: ContactSubmission = {
                name: formData.name,
                email: formData.email,
                phone: formData.phone,
                message: formData.message
            };

            const { error } = await supabase
                .from('contact_submissions')
                .insert([submission]);

            if (error) throw error;

            setStatus('success');
            setFormData({ name: '', email: '', phone: '', message: '' });

            // Reset success message after 5 seconds
            setTimeout(() => setStatus('idle'), 5000);
        } catch (err) {
            console.error('Error submitting form:', err);
            setStatus('error');
            setErrorMessage('Failed to submit. Please try again or contact us directly.');
        }
    };

    return (
        <section id="contact" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">Get In Touch</h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto mb-6 rounded-full"></div>
                        <p className="text-lg text-slate-600">Contact us today for customized solutions</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12">
                        <div className="space-y-6">
                            <div className="flex items-start space-x-4 p-6 bg-white rounded-2xl shadow-lg card-hover">
                                <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-4 rounded-xl shadow-lg">
                                    <MapPin className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-slate-800 text-lg mb-1">Visit Our Factory</h3>
                                    <p className="text-slate-600">Shed No 7/B, Third Floor, EC Complex<br />Kushaiguda, Hyderabad-062, Telangana</p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4 p-6 bg-white rounded-2xl shadow-lg card-hover">
                                <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-4 rounded-xl shadow-lg">
                                    <Phone className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-slate-800 text-lg mb-1">Call Us</h3>
                                    <a href="tel:+919246558934" className="text-xl font-semibold text-blue-600 hover:text-blue-700 transition">
                                        +91 92465 58934
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4 p-6 bg-white rounded-2xl shadow-lg card-hover">
                                <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-4 rounded-xl shadow-lg">
                                    <Mail className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-slate-800 text-lg mb-1">Email Us</h3>
                                    <a href="mailto:bharatgvktechnologies@gmail.com" className="text-blue-600 hover:text-blue-700 font-medium transition">
                                        bharatgvktechnologies@gmail.com
                                    </a>
                                    <br />
                                    <a href="mailto:venkat.gade123@gmail.com" className="text-blue-600 hover:text-blue-700 font-medium transition text-sm">
                                        venkat.gade123@gmail.com
                                    </a>
                                </div>
                            </div>

                            <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-6 rounded-2xl shadow-xl text-white">
                                <h3 className="font-bold text-lg mb-2">GST Registered</h3>
                                <p className="font-mono text-blue-100">GSTIN: 36AKBPG1991P2ZQ</p>
                            </div>
                        </div>

                        <div className="bg-white p-8 rounded-2xl shadow-xl">
                            <h3 className="text-2xl font-bold text-slate-800 mb-6">Request a Quote</h3>

                            {status === 'success' && (
                                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl flex items-center space-x-3">
                                    <CheckCircle className="w-6 h-6 text-green-600" />
                                    <span className="text-green-700 font-medium">Thank you! We&apos;ll get back to you soon.</span>
                                </div>
                            )}

                            {status === 'error' && (
                                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl">
                                    <span className="text-red-700">{errorMessage}</span>
                                </div>
                            )}

                            <form onSubmit={handleSubmit} className="space-y-5">
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full px-5 py-4 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition bg-slate-50 focus:bg-white"
                                    placeholder="Your name"
                                    required
                                />
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full px-5 py-4 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition bg-slate-50 focus:bg-white"
                                    placeholder="your@email.com"
                                    required
                                />
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="w-full px-5 py-4 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition bg-slate-50 focus:bg-white"
                                    placeholder="+91 XXXXX XXXXX"
                                    required
                                />
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows={4}
                                    className="w-full px-5 py-4 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition resize-none bg-slate-50 focus:bg-white"
                                    placeholder="Your requirements..."
                                    required
                                ></textarea>
                                <button
                                    type="submit"
                                    disabled={status === 'loading'}
                                    className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 py-4 rounded-xl font-semibold text-lg transition-all flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl disabled:opacity-70 disabled:cursor-not-allowed btn-shine"
                                >
                                    {status === 'loading' ? (
                                        <>
                                            <Loader2 className="w-5 h-5 animate-spin" />
                                            <span>Submitting...</span>
                                        </>
                                    ) : (
                                        <>
                                            <span>Submit Inquiry</span>
                                            <ArrowRight className="w-5 h-5" />
                                        </>
                                    )}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
