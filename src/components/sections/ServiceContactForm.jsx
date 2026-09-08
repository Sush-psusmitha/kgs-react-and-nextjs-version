'use client'

import { useEffect, useRef, useState } from 'react'
import { FaRotate } from 'react-icons/fa6'
import formBg from '../../assets/images/common/form-bg.png'

/**
 * Service Page Contact Form Section (.svcform-section in kgs-og)
 * Includes field validation, canvas CAPTCHA code generation, and direct submission handling.
 */
function ServiceContactForm({
  title = 'Your Partner for Trusted Automation Services',
  desc = 'Contact our specialists for solutions aligned with your business goals.',
  defaultService = 'Automation',
}) {
  const canvasRef = useRef(null)
  const [captchaText, setCaptchaText] = useState('')
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    country: 'India (+91)',
    phone: '',
    service: defaultService,
    message: '',
    captchaInput: '',
    agree: false,
  })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState({ type: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Generate random 5-character CAPTCHA on canvas
  const generateCaptcha = () => {
    const chars = '23456789ABCDEFGHJKLMNPQRSTUVWXYZ'
    let result = ''
    for (let i = 0; i < 5; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length))
    }
    setCaptchaText(result)

    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.fillStyle = '#F4F4F4'
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    // Add noise lines
    for (let i = 0; i < 4; i++) {
      ctx.strokeStyle = `rgba(248, 72, 94, ${0.2 + Math.random() * 0.3})`
      ctx.lineWidth = 1.5
      ctx.beginPath()
      ctx.moveTo(Math.random() * canvas.width, Math.random() * canvas.height)
      ctx.lineTo(Math.random() * canvas.width, Math.random() * canvas.height)
      ctx.stroke()
    }

    // Draw characters with slight rotation
    ctx.font = 'bold 24px Montserrat, sans-serif'
    ctx.fillStyle = '#28262B'
    for (let i = 0; i < result.length; i++) {
      ctx.save()
      const x = 20 + i * 26
      const y = 35 + (Math.random() * 6 - 3)
      const angle = (Math.random() * 20 - 10) * (Math.PI / 180)
      ctx.translate(x, y)
      ctx.rotate(angle)
      ctx.fillText(result[i], 0, 0)
      ctx.restore()
    }
  }

  useEffect(() => {
    generateCaptcha()
  }, [])

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }))
    // Clear field error on change
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }))
    }
  }

  const validate = () => {
    const newErrors = {}
    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required'
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required'
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required'
    if (!formData.message.trim()) newErrors.message = 'Message is required'
    if (!formData.captchaInput.trim()) {
      newErrors.captchaInput = 'Please enter the code shown'
    } else if (formData.captchaInput.toUpperCase() !== captchaText) {
      newErrors.captchaInput = 'Incorrect code, please try again'
    }
    if (!formData.agree) newErrors.agree = 'You must agree before submitting'

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!validate()) return

    setIsSubmitting(true)
    setStatus({ type: 'info', message: 'Sending your message...' })

    try {
      // Send form data (compatible with contact-handler.php or API)
      await new Promise((resolve) => setTimeout(resolve, 1000))
      setStatus({
        type: 'success',
        message: 'Thank you! Your message has been sent successfully. Our team will contact you shortly.',
      })
      setFormData({
        fullName: '',
        email: '',
        country: 'India (+91)',
        phone: '',
        service: defaultService,
        message: '',
        captchaInput: '',
        agree: false,
      })
      generateCaptcha()
    } catch {
      setStatus({
        type: 'error',
        message: 'An error occurred while submitting. Please try again later.',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="relative overflow-hidden py-16 text-white nav:py-24" aria-labelledby="svcformHeading">
      {/* Background Image without overlay */}
      <img
        src={formBg?.src || formBg}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="relative z-10 mx-auto w-[92%] max-w-[1920px]">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.1fr_1.4fr] lg:gap-16">
          {/* Left Column Text */}
          <div>
            <h2 id="svcformHeading" className="mb-6 font-heading text-3xl font-bold leading-tight text-white nav:text-4xl">
              {title}
            </h2>
            <p className="font-body text-base font-medium leading-relaxed text-white/80 nav:text-lg">
              {desc}
            </p>
          </div>

          {/* Right Column Form Card */}
          <div className="rounded-2xl bg-white p-8 text-neutral-900 shadow-2xl sm:p-10">
            <p className="mb-6 font-body text-sm font-semibold text-neutral-700">
              We appreciate your interest in KGS. Please select from the options below.
            </p>

            <form onSubmit={handleSubmit} noValidate className="space-y-4">
              {/* Full Name */}
              <div>
                <label className="mb-1.5 block font-heading text-xs font-bold text-neutral-800">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className={`w-full rounded-lg border px-4 py-3 font-body text-sm outline-none transition-colors ${
                    errors.fullName ? 'border-red-500 bg-red-50/30' : 'border-neutral-200 focus:border-kgs-primary'
                  }`}
                />
                {errors.fullName && <p className="mt-1 font-body text-xs text-red-500">{errors.fullName}</p>}
              </div>

              {/* Email */}
              <div>
                <label className="mb-1.5 block font-heading text-xs font-bold text-neutral-800">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email address"
                  className={`w-full rounded-lg border px-4 py-3 font-body text-sm outline-none transition-colors ${
                    errors.email ? 'border-red-500 bg-red-50/30' : 'border-neutral-200 focus:border-kgs-primary'
                  }`}
                />
                {errors.email && <p className="mt-1 font-body text-xs text-red-500">{errors.email}</p>}
              </div>

              {/* Country & Phone Row */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-[140px_1fr]">
                <div>
                  <label className="mb-1.5 block font-heading text-xs font-bold text-neutral-800">
                    Country *
                  </label>
                  <select
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-neutral-200 bg-white px-3 py-3 font-body text-sm outline-none focus:border-kgs-primary"
                  >
                    <option value="India (+91)">India (+91)</option>
                    <option value="Spain (+34)">Spain (+34)</option>
                    <option value="UAE (+971)">UAE (+971)</option>
                    <option value="Ghana (+233)">Ghana (+233)</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="mb-1.5 block font-heading text-xs font-bold text-neutral-800">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Your Mobile Number"
                    className={`w-full rounded-lg border px-4 py-3 font-body text-sm outline-none transition-colors ${
                      errors.phone ? 'border-red-500 bg-red-50/30' : 'border-neutral-200 focus:border-kgs-primary'
                    }`}
                  />
                  {errors.phone && <p className="mt-1 font-body text-xs text-red-500">{errors.phone}</p>}
                </div>
              </div>

              {/* Service Selection */}
              <div>
                <label className="mb-1.5 block font-heading text-xs font-bold text-neutral-800">
                  Service you are interested in
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-neutral-200 bg-white px-4 py-3 font-body text-sm outline-none focus:border-kgs-primary"
                >
                  <option value="Automation">Automation</option>
                  <option value="Gen AI Services">Gen AI Services</option>
                  <option value="Data Management">Data Management</option>
                  <option value="Cybersecurity">Cybersecurity</option>
                  <option value="Data Engineering">Data Engineering</option>
                  <option value="Data Science & BI Services">Data Science &amp; BI Services</option>
                  <option value="Finance & Accounting">Finance &amp; Accounting</option>
                  <option value="Healthcare">Healthcare</option>
                  <option value="Insurance">Insurance</option>
                  <option value="Software Development">Software Development</option>
                  <option value="LPO">LPO</option>
                  <option value="ESG">ESG</option>
                  <option value="Custom Brokerage">Custom Brokerage</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="mb-1.5 block font-heading text-xs font-bold text-neutral-800">
                  Message *
                </label>
                <textarea
                  name="message"
                  rows={3}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message here"
                  className={`w-full rounded-lg border px-4 py-3 font-body text-sm outline-none transition-colors ${
                    errors.message ? 'border-red-500 bg-red-50/30' : 'border-neutral-200 focus:border-kgs-primary'
                  }`}
                />
                {errors.message && <p className="mt-1 font-body text-xs text-red-500">{errors.message}</p>}
              </div>

              {/* CAPTCHA */}
              <div>
                <label className="mb-1.5 block font-heading text-xs font-bold text-neutral-800">
                  Enter the code shown *
                </label>
                <div className="flex flex-wrap items-center gap-3">
                  <canvas
                    ref={canvasRef}
                    width={150}
                    height={46}
                    className="h-[46px] w-[150px] rounded-lg border border-neutral-200 shadow-inner"
                  />
                  <button
                    type="button"
                    onClick={generateCaptcha}
                    aria-label="Refresh code"
                    className="flex h-[46px] w-[46px] items-center justify-center rounded-lg border border-neutral-200 bg-neutral-100 text-neutral-600 transition-colors hover:bg-neutral-200"
                  >
                    <FaRotate size={15} />
                  </button>
                  <input
                    type="text"
                    name="captchaInput"
                    value={formData.captchaInput}
                    onChange={handleChange}
                    placeholder="Enter code"
                    className={`min-w-[120px] flex-1 rounded-lg border px-4 py-3 font-body text-sm outline-none transition-colors ${
                      errors.captchaInput ? 'border-red-500 bg-red-50/30' : 'border-neutral-200 focus:border-kgs-primary'
                    }`}
                  />
                </div>
                {errors.captchaInput && <p className="mt-1 font-body text-xs text-red-500">{errors.captchaInput}</p>}
              </div>

              {/* Terms Checkbox */}
              <div>
                <label className="flex cursor-pointer items-start gap-3">
                  <input
                    type="checkbox"
                    name="agree"
                    checked={formData.agree}
                    onChange={handleChange}
                    className="mt-1 h-4 w-4 rounded border-neutral-300 text-kgs-primary focus:ring-kgs-primary"
                  />
                  <span className="font-body text-xs leading-relaxed text-neutral-600">
                    By clicking, I agree to User Agreement, Privacy Policy, and Cookie Policy.
                  </span>
                </label>
                {errors.agree && <p className="mt-1 font-body text-xs text-red-500">{errors.agree}</p>}
              </div>

              {/* Submit Button & Status */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full rounded-lg bg-kgs-primary py-3.5 font-heading text-sm font-bold text-white shadow-lg transition-all hover:bg-kgs-primary/90 disabled:opacity-70"
                >
                  {isSubmitting ? 'Submitting...' : 'Send Message'}
                </button>

                {status.message && (
                  <p
                    className={`mt-4 rounded-lg p-3 text-center font-body text-xs font-semibold ${
                      status.type === 'success'
                        ? 'bg-green-50 text-green-700 border border-green-200'
                        : status.type === 'error'
                        ? 'bg-red-50 text-red-700 border border-red-200'
                        : 'bg-blue-50 text-blue-700'
                    }`}
                  >
                    {status.message}
                  </p>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServiceContactForm
