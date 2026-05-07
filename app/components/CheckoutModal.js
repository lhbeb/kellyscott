'use client';

import { useState } from 'react';

function StepIndicator({ step }) {
    return (
        <div className="flex items-center justify-center gap-2 mb-8">
            {[1, 2, 3].map((s) => (
                <div key={s} className="flex items-center gap-2">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 ${step > s ? 'bg-primary text-white' :
                        step === s ? 'bg-primary text-white' :
                            'bg-gray-200 text-gray-500'
                        }`}>
                        {step > s ? (
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                        ) : s}
                    </div>
                    {s < 3 && (
                        <div className={`w-12 h-0.5 transition-all duration-300 ${step > s ? 'bg-primary' : 'bg-gray-200'}`} />
                    )}
                </div>
            ))}
        </div>
    );
}

export default function CheckoutModal({ product, license, price, onClose }) {
    const [step, setStep] = useState(1); // 1 = Info, 2 = Payment, 3 = Success
    const [processing, setProcessing] = useState(false);

    const [info, setInfo] = useState({ name: '', email: '' });
    const [payment, setPayment] = useState({
        cardNumber: '',
        expiry: '',
        cvv: '',
        nameOnCard: ''
    });
    const [errors, setErrors] = useState({});
    const [orderId, setOrderId] = useState('');

    // ── Formatters ──────────────────────────────────────────────────────────
    const formatCard = (val) => {
        const digits = val.replace(/\D/g, '').slice(0, 16);
        return digits.replace(/(.{4})/g, '$1 ').trim();
    };

    const formatExpiry = (val) => {
        const digits = val.replace(/\D/g, '').slice(0, 4);
        if (digits.length >= 3) return digits.slice(0, 2) + '/' + digits.slice(2);
        return digits;
    };

    // ── Validation ───────────────────────────────────────────────────────────
    const validateStep1 = () => {
        const e = {};
        if (!info.name.trim()) e.name = 'Full name is required';
        if (!info.email.trim() || !/\S+@\S+\.\S+/.test(info.email)) e.email = 'Valid email is required';
        setErrors(e);
        return Object.keys(e).length === 0;
    };

    const validateStep2 = () => {
        const e = {};
        const raw = payment.cardNumber.replace(/\s/g, '');
        if (raw.length !== 16) e.cardNumber = 'Enter a valid 16-digit card number';
        if (!payment.expiry || payment.expiry.length < 5) e.expiry = 'Enter a valid expiry (MM/YY)';
        if (!payment.cvv || payment.cvv.length < 3) e.cvv = 'Enter a valid CVV';
        if (!payment.nameOnCard.trim()) e.nameOnCard = 'Name on card is required';
        setErrors(e);
        return Object.keys(e).length === 0;
    };

    // ── Handlers ─────────────────────────────────────────────────────────────
    const handleStep1Submit = (e) => {
        e.preventDefault();
        if (validateStep1()) { setErrors({}); setStep(2); }
    };

    const handleStep2Submit = (e) => {
        e.preventDefault();
        if (!validateStep2()) return;
        setErrors({});
        setProcessing(true);
        // Simulate processing delay
        setTimeout(() => {
            setOrderId(`BKS-${Math.random().toString(36).substring(2, 8).toUpperCase()}`);
            setProcessing(false);
            setStep(3);
        }, 2200);
    };

    // ── Backdrop click ────────────────────────────────────────────────────────
    const handleBackdrop = (e) => {
        if (e.target === e.currentTarget && step !== 3) onClose();
    };

    const inputClass = (field) =>
        `w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all ${errors[field] ? 'border-red-400 bg-red-50' : 'border-gray-300'
        }`;

    return (
        <div
            className="fixed inset-0 z-[100] flex items-center justify-center p-4"
            style={{ background: 'rgba(0,0,0,0.55)', backdropFilter: 'blur(4px)' }}
            onClick={handleBackdrop}
        >
            <div className="bg-white rounded-3xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto relative">

                {/* Close button */}
                {step !== 3 && (
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors z-10"
                    >
                        <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                )}

                <div className="p-8">

                    {/* ── STEP 1: Order Info ─────────────────────────────── */}
                    {step === 1 && (
                        <>
                            <StepIndicator step={step} />
                            <h2 className="text-2xl font-bold mb-1">Your Details</h2>
                            <p className="text-gray-500 mb-6 text-sm">We&apos;ll send your download link to your email.</p>

                            {/* Order Summary */}
                            <div className="bg-slate-50 rounded-2xl p-4 mb-6 border border-slate-200">
                                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">Order Summary</p>
                                <div className="flex justify-between items-start mb-2">
                                    <div>
                                        <p className="font-semibold text-gray-900 text-sm leading-tight">{product.title}</p>
                                        <p className="text-xs text-gray-500 mt-0.5 capitalize">{license} License</p>
                                    </div>
                                    <span className="font-bold text-primary text-lg">${price}</span>
                                </div>
                                <div className="border-t border-slate-200 mt-3 pt-3 flex justify-between">
                                    <span className="text-sm text-gray-600">Total</span>
                                    <span className="font-bold text-gray-900">${price}.00 USD</span>
                                </div>
                            </div>

                            <form onSubmit={handleStep1Submit} className="space-y-4">
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">Full Name *</label>
                                    <input
                                        type="text"
                                        value={info.name}
                                        onChange={(e) => setInfo({ ...info, name: e.target.value })}
                                        className={inputClass('name')}
                                        placeholder="John Doe"
                                    />
                                    {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">Email Address *</label>
                                    <input
                                        type="email"
                                        value={info.email}
                                        onChange={(e) => setInfo({ ...info, email: e.target.value })}
                                        className={inputClass('email')}
                                        placeholder="john@example.com"
                                    />
                                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                                </div>
                                <button
                                    type="submit"
                                    className="w-full py-3.5 bg-primary text-white rounded-xl font-bold text-base hover:bg-primary-dark transition-all duration-200 hover:shadow-lg mt-2"
                                >
                                    Continue to Payment →
                                </button>
                            </form>
                        </>
                    )}

                    {/* ── STEP 2: Payment ────────────────────────────────── */}
                    {step === 2 && (
                        <>
                            <StepIndicator step={step} />
                            <h2 className="text-2xl font-bold mb-1">Payment Details</h2>
                            <p className="text-gray-500 mb-6 text-sm">Your payment is secured with 256-bit SSL encryption.</p>

                            {/* SSL badge */}
                            <div className="flex items-center gap-2 mb-6 bg-blue-50 border border-blue-200 rounded-xl px-4 py-2.5">
                                <svg className="w-5 h-5 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                </svg>
                                <span className="text-primary-dark text-sm font-medium">Secure & Encrypted Payment</span>
                            </div>

                            {/* Card visual */}
                            <div className="bg-gradient-to-br from-primary to-primary-dark rounded-2xl p-5 mb-6 text-white shadow-lg">
                                <div className="flex justify-between items-start mb-6">
                                    <div className="text-xs opacity-70 font-medium uppercase tracking-widest">Credit Card</div>
                                    <div className="flex gap-1">
                                        <div className="w-7 h-5 rounded-full bg-yellow-400 opacity-90" />
                                        <div className="w-7 h-5 rounded-full bg-red-500 opacity-70 -ml-3" />
                                    </div>
                                </div>
                                <div className="text-xl font-mono tracking-widest mb-4">
                                    {payment.cardNumber || '•••• •••• •••• ••••'}
                                </div>
                                <div className="flex justify-between text-sm">
                                    <div>
                                        <div className="text-xs opacity-60 mb-0.5">Card Holder</div>
                                        <div className="font-semibold">{payment.nameOnCard || 'YOUR NAME'}</div>
                                    </div>
                                    <div>
                                        <div className="text-xs opacity-60 mb-0.5">Expires</div>
                                        <div className="font-semibold">{payment.expiry || 'MM/YY'}</div>
                                    </div>
                                </div>
                            </div>

                            <form onSubmit={handleStep2Submit} className="space-y-4">
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">Card Number *</label>
                                    <input
                                        type="text"
                                        value={payment.cardNumber}
                                        onChange={(e) => setPayment({ ...payment, cardNumber: formatCard(e.target.value) })}
                                        className={inputClass('cardNumber')}
                                        placeholder="1234 5678 9012 3456"
                                        maxLength={19}
                                    />
                                    {errors.cardNumber && <p className="text-red-500 text-xs mt-1">{errors.cardNumber}</p>}
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">Name on Card *</label>
                                    <input
                                        type="text"
                                        value={payment.nameOnCard}
                                        onChange={(e) => setPayment({ ...payment, nameOnCard: e.target.value })}
                                        className={inputClass('nameOnCard')}
                                        placeholder="John Doe"
                                    />
                                    {errors.nameOnCard && <p className="text-red-500 text-xs mt-1">{errors.nameOnCard}</p>}
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-1.5">Expiry Date *</label>
                                        <input
                                            type="text"
                                            value={payment.expiry}
                                            onChange={(e) => setPayment({ ...payment, expiry: formatExpiry(e.target.value) })}
                                            className={inputClass('expiry')}
                                            placeholder="MM/YY"
                                            maxLength={5}
                                        />
                                        {errors.expiry && <p className="text-red-500 text-xs mt-1">{errors.expiry}</p>}
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-1.5">CVV *</label>
                                        <input
                                            type="text"
                                            value={payment.cvv}
                                            onChange={(e) => setPayment({ ...payment, cvv: e.target.value.replace(/\D/g, '').slice(0, 4) })}
                                            className={inputClass('cvv')}
                                            placeholder="123"
                                            maxLength={4}
                                        />
                                        {errors.cvv && <p className="text-red-500 text-xs mt-1">{errors.cvv}</p>}
                                    </div>
                                </div>

                                <div className="flex gap-3 pt-2">
                                    <button
                                        type="button"
                                        onClick={() => { setErrors({}); setStep(1); }}
                                        className="flex-1 py-3.5 border-2 border-gray-200 text-gray-700 rounded-xl font-semibold hover:bg-gray-50 transition-all"
                                    >
                                        ← Back
                                    </button>
                                    <button
                                        type="submit"
                                        disabled={processing}
                                        className="flex-[2] py-3.5 bg-primary text-white rounded-xl font-bold hover:bg-primary-dark transition-all duration-200 hover:shadow-lg disabled:opacity-80 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                                    >
                                        {processing ? (
                                            <>
                                                <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                                                </svg>
                                                Processing…
                                            </>
                                        ) : (
                                            `Pay $${price}.00`
                                        )}
                                    </button>
                                </div>
                            </form>
                        </>
                    )}

                    {/* ── STEP 3: Success ────────────────────────────────── */}
                    {step === 3 && (
                        <div className="text-center py-4">
                            {/* Animated checkmark */}
                            <div className="w-24 h-24 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-6">
                                <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                                </svg>
                            </div>

                            <h2 className="text-3xl font-bold text-gray-900 mb-2">Payment Successful!</h2>
                            <p className="text-gray-500 mb-8">Thank you for your purchase, <span className="font-semibold text-gray-700">{info.name}</span>.</p>

                            {/* Receipt card */}
                            <div className="bg-slate-50 rounded-2xl p-5 text-left border border-slate-200 mb-6">
                                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">Order Receipt</p>
                                <div className="space-y-2.5 text-sm">
                                    <div className="flex justify-between">
                                        <span className="text-gray-500">Order ID</span>
                                        <span className="font-mono font-semibold text-gray-800">{orderId}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-500">Product</span>
                                        <span className="font-semibold text-gray-800 text-right max-w-[60%]">{product.title}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-500">License</span>
                                        <span className="font-semibold text-gray-800 capitalize">{license}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-500">Amount Paid</span>
                                        <span className="font-bold text-primary">${price}.00 USD</span>
                                    </div>
                                    <div className="border-t border-slate-200 pt-2.5 flex justify-between">
                                        <span className="text-gray-500">Sent to</span>
                                        <span className="font-semibold text-gray-800">{info.email}</span>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-6 text-sm text-primary-dark">
                                <p>📧 A download link has been sent to <strong>{info.email}</strong>. Please check your inbox (and spam folder).</p>
                            </div>

                            <button
                                onClick={onClose}
                                className="w-full py-3.5 bg-primary text-white rounded-xl font-bold hover:bg-primary-dark transition-all duration-200 hover:shadow-lg"
                            >
                                Done
                            </button>
                        </div>
                    )}

                </div>
            </div>
        </div>
    );
}
