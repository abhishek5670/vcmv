"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import PageHero from "@/components/PageHero";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const services = [
  "Direct Tax",
  "International Tax",
  "Transfer Pricing",
  "GST & Indirect Tax",
  "Taxation of Expatriates",
  "Assurance & Audit",
  "Tax Litigation",
  "Business Valuation",
  "Mergers & Acquisitions",
  "India Entry Strategies",
  "Business Advisory",
  "Other",
];

export default function ContactPageClient() {
  const formRef = useRef(null);
  const detailsRef = useRef(null);
  const formInView = useInView(formRef, { once: true, margin: "-80px" });
  const detailsInView = useInView(detailsRef, { once: true, margin: "-80px" });

  const [formState, setFormState] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, this would send to an API endpoint
    setSubmitted(true);
  };

  const inputStyle: React.CSSProperties = {
    fontFamily: "var(--font-inter)",
    fontSize: "0.9rem",
    fontWeight: 300,
    color: "var(--vcmv-charcoal)",
    backgroundColor: "transparent",
    border: "1px solid color-mix(in srgb, var(--vcmv-gold) 28%, transparent)",
    padding: "0.875rem 1rem",
    width: "100%",
    outline: "none",
    transition: "border-color 0.2s ease",
  };

  const labelStyle: React.CSSProperties = {
    fontFamily: "var(--font-inter)",
    fontSize: "0.72rem",
    fontWeight: 500,
    letterSpacing: "0.16em",
    textTransform: "uppercase",
    color: "var(--vcmv-taupe)",
    display: "block",
    marginBottom: "0.5rem",
  };

  return (
    <>
      <PageHero
        eyebrow="GET IN TOUCH"
        heading="Let's Talk About\nYour Business"
        description="Whether you need tax advice, assurance support, transaction assistance or help navigating a regulatory challenge, our team is ready to understand your requirements."
      />

      {/* Main content */}
      <section
        className="relative overflow-hidden"
        style={{ backgroundColor: "var(--vcmv-ivory)" }}
      >
        <div
          className="absolute top-0 left-0 right-0 h-px"
          style={{
            backgroundColor:
              "color-mix(in srgb, var(--vcmv-gold) 20%, transparent)",
          }}
        />
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-12 md:py-10 md:py-12 lg:py-16 lg:py-24 lg:py-10 md:py-12 lg:py-16 md:py-12 md:py-10 md:py-12 lg:py-16 lg:py-24 lg:py-36">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_440px] gap-8 md:gap-6 md:gap-8 lg:gap-12 lg:gap-16 lg:gap-10 md:gap-8 md:gap-6 md:gap-8 lg:gap-12 lg:gap-16 lg:gap-24">

            {/* Contact Form */}
            <motion.div
              ref={formRef}
              initial={{ opacity: 0, x: -32 }}
              animate={formInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-3 mb-8">
                <span
                  className="inline-block h-px w-8"
                  style={{ backgroundColor: "var(--vcmv-gold)" }}
                />
                <span
                  className="text-xs tracking-[0.22em] uppercase"
                  style={{
                    color: "var(--vcmv-gold)",
                    fontFamily: "var(--font-inter)",
                    fontWeight: 500,
                  }}
                >
                  Send a Message
                </span>
              </div>
              <h2
                className="mb-8"
                style={{
                  fontFamily: "var(--font-cormorant)",
                  fontSize: "clamp(1.8rem, 3vw, 2.6rem)",
                  fontWeight: 600,
                  color: "var(--vcmv-charcoal)",
                  lineHeight: 1.18,
                  letterSpacing: "-0.01em",
                }}
              >
                Tell us how we can help.
              </h2>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="py-10 md:py-12 lg:py-16 text-center"
                  style={{
                    border:
                      "1px solid color-mix(in srgb, var(--vcmv-gold) 30%, transparent)",
                  }}
                >
                  <p
                    className="mb-3"
                    style={{
                      fontFamily: "var(--font-cormorant)",
                      fontSize: "1.8rem",
                      fontWeight: 600,
                      color: "var(--vcmv-charcoal)",
                    }}
                  >
                    Thank you.
                  </p>
                  <p
                    style={{
                      fontFamily: "var(--font-inter)",
                      fontSize: "0.9rem",
                      color: "var(--vcmv-taupe)",
                      fontWeight: 300,
                    }}
                  >
                    We'll be in touch within one business day.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Full Name */}
                    <div>
                      <label htmlFor="contact-name" style={labelStyle}>
                        Full Name *
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        placeholder="Your full name"
                        value={formState.name}
                        onChange={(e) =>
                          setFormState({ ...formState, name: e.target.value })
                        }
                        style={inputStyle}
                        onFocus={(e) =>
                          ((e.currentTarget as HTMLElement).style.borderColor =
                            "var(--vcmv-gold)")
                        }
                        onBlur={(e) =>
                          ((e.currentTarget as HTMLElement).style.borderColor =
                            "color-mix(in srgb, var(--vcmv-gold) 28%, transparent)")
                        }
                      />
                    </div>

                    {/* Company */}
                    <div>
                      <label htmlFor="contact-company" style={labelStyle}>
                        Company Name
                      </label>
                      <input
                        id="contact-company"
                        type="text"
                        placeholder="Your company"
                        value={formState.company}
                        onChange={(e) =>
                          setFormState({
                            ...formState,
                            company: e.target.value,
                          })
                        }
                        style={inputStyle}
                        onFocus={(e) =>
                          ((e.currentTarget as HTMLElement).style.borderColor =
                            "var(--vcmv-gold)")
                        }
                        onBlur={(e) =>
                          ((e.currentTarget as HTMLElement).style.borderColor =
                            "color-mix(in srgb, var(--vcmv-gold) 28%, transparent)")
                        }
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Email */}
                    <div>
                      <label htmlFor="contact-email" style={labelStyle}>
                        Email Address *
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        required
                        placeholder="your@email.com"
                        value={formState.email}
                        onChange={(e) =>
                          setFormState({ ...formState, email: e.target.value })
                        }
                        style={inputStyle}
                        onFocus={(e) =>
                          ((e.currentTarget as HTMLElement).style.borderColor =
                            "var(--vcmv-gold)")
                        }
                        onBlur={(e) =>
                          ((e.currentTarget as HTMLElement).style.borderColor =
                            "color-mix(in srgb, var(--vcmv-gold) 28%, transparent)")
                        }
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <label htmlFor="contact-phone" style={labelStyle}>
                        Phone Number
                      </label>
                      <input
                        id="contact-phone"
                        type="tel"
                        placeholder="+91 XXXXX XXXXX"
                        value={formState.phone}
                        onChange={(e) =>
                          setFormState({ ...formState, phone: e.target.value })
                        }
                        style={inputStyle}
                        onFocus={(e) =>
                          ((e.currentTarget as HTMLElement).style.borderColor =
                            "var(--vcmv-gold)")
                        }
                        onBlur={(e) =>
                          ((e.currentTarget as HTMLElement).style.borderColor =
                            "color-mix(in srgb, var(--vcmv-gold) 28%, transparent)")
                        }
                      />
                    </div>
                  </div>

                  {/* Service */}
                  <div>
                    <label htmlFor="contact-service" style={labelStyle}>
                      Service Required
                    </label>
                    <select
                      id="contact-service"
                      value={formState.service}
                      onChange={(e) =>
                        setFormState({ ...formState, service: e.target.value })
                      }
                      style={{
                        ...inputStyle,
                        cursor: "pointer",
                        appearance: "none",
                        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%23c9a86a' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`,
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "right 1rem center",
                        paddingRight: "2.5rem",
                      }}
                    >
                      <option value="">Select a service</option>
                      {services.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="contact-message" style={labelStyle}>
                      Message *
                    </label>
                    <textarea
                      id="contact-message"
                      required
                      rows={6}
                      placeholder="Briefly describe your requirement..."
                      value={formState.message}
                      onChange={(e) =>
                        setFormState({ ...formState, message: e.target.value })
                      }
                      style={{
                        ...inputStyle,
                        resize: "vertical",
                      }}
                      onFocus={(e) =>
                        ((e.currentTarget as HTMLElement).style.borderColor =
                          "var(--vcmv-gold)")
                      }
                      onBlur={(e) =>
                        ((e.currentTarget as HTMLElement).style.borderColor =
                          "color-mix(in srgb, var(--vcmv-gold) 28%, transparent)")
                      }
                    />
                  </div>

                  {/* Submit */}
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full sm:w-auto px-10 py-4 text-xs tracking-widest uppercase transition-all duration-200"
                    style={{
                      fontFamily: "var(--font-inter)",
                      fontWeight: 500,
                      color: "var(--vcmv-charcoal)",
                      backgroundColor: "var(--vcmv-gold)",
                      border: "none",
                      cursor: "pointer",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.backgroundColor =
                        "var(--vcmv-charcoal)";
                      (e.currentTarget as HTMLElement).style.color =
                        "var(--vcmv-gold)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.backgroundColor =
                        "var(--vcmv-gold)";
                      (e.currentTarget as HTMLElement).style.color =
                        "var(--vcmv-charcoal)";
                    }}
                  >
                    Send Enquiry →
                  </motion.button>
                </form>
              )}
            </motion.div>

            {/* Contact Details */}
            <motion.div
              ref={detailsRef}
              initial={{ opacity: 0, x: 32 }}
              animate={detailsInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="space-y-10"
            >
              {/* Office */}
              <div
                className="p-8"
                style={{
                  backgroundColor: "var(--vcmv-charcoal)",
                }}
              >
                <div className="flex items-start gap-4 mb-6">
                  <MapPin
                    className="w-4 h-4 mt-0.5 flex-shrink-0"
                    style={{ color: "var(--vcmv-gold)" }}
                  />
                  <div>
                    <p
                      className="mb-1"
                      style={{
                        fontFamily: "var(--font-cormorant)",
                        fontSize: "1.25rem",
                        fontWeight: 600,
                        color: "var(--vcmv-ivory)",
                      }}
                    >
                      Our Office
                    </p>
                    <div
                      className="h-px w-8 mb-4"
                      style={{ backgroundColor: "var(--vcmv-gold)", opacity: 0.5 }}
                    />
                    <p
                      style={{
                        fontFamily: "var(--font-inter)",
                        fontSize: "0.875rem",
                        color:
                          "color-mix(in srgb, var(--vcmv-cream) 65%, transparent)",
                        lineHeight: 1.8,
                        fontWeight: 300,
                      }}
                    >
                      VCMV & Associates LLP
                      <br />
                      Willingdon Crescent, 4th Floor,
                      <br />
                      No. 6/2, Dr. S.S. Badrinath Road,
                      <br />
                      Thousand Lights West, Nungambakkam,
                      <br />
                      Chennai, Tamil Nadu – 600 006
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 mb-5">
                  <Phone
                    className="w-4 h-4 flex-shrink-0"
                    style={{ color: "var(--vcmv-gold)" }}
                  />
                  <a
                    href="tel:+919962869428"
                    className="transition-colors duration-200"
                    style={{
                      fontFamily: "var(--font-inter)",
                      fontSize: "0.875rem",
                      color:
                        "color-mix(in srgb, var(--vcmv-cream) 65%, transparent)",
                      fontWeight: 300,
                      textDecoration: "none",
                    }}
                    onMouseEnter={(e) =>
                      ((e.currentTarget as HTMLElement).style.color =
                        "var(--vcmv-gold)")
                    }
                    onMouseLeave={(e) =>
                      ((e.currentTarget as HTMLElement).style.color =
                        "color-mix(in srgb, var(--vcmv-cream) 65%, transparent)")
                    }
                  >
                    +91 99628 69428
                  </a>
                </div>

                <div className="flex items-center gap-4">
                  <Mail
                    className="w-4 h-4 flex-shrink-0"
                    style={{ color: "var(--vcmv-gold)" }}
                  />
                  <a
                    href="mailto:monish@vcmv.in"
                    className="transition-colors duration-200"
                    style={{
                      fontFamily: "var(--font-inter)",
                      fontSize: "0.875rem",
                      color:
                        "color-mix(in srgb, var(--vcmv-cream) 65%, transparent)",
                      fontWeight: 300,
                      textDecoration: "none",
                    }}
                    onMouseEnter={(e) =>
                      ((e.currentTarget as HTMLElement).style.color =
                        "var(--vcmv-gold)")
                    }
                    onMouseLeave={(e) =>
                      ((e.currentTarget as HTMLElement).style.color =
                        "color-mix(in srgb, var(--vcmv-cream) 65%, transparent)")
                    }
                  >
                    monish@vcmv.in
                  </a>
                </div>
              </div>

              {/* Office hours */}
              <div
                className="p-6"
                style={{
                  border:
                    "1px solid color-mix(in srgb, var(--vcmv-gold) 22%, transparent)",
                }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <Clock
                    className="w-4 h-4"
                    style={{ color: "var(--vcmv-gold)" }}
                  />
                  <p
                    style={{
                      fontFamily: "var(--font-cormorant)",
                      fontSize: "1.1rem",
                      fontWeight: 600,
                      color: "var(--vcmv-charcoal)",
                    }}
                  >
                    Office Hours
                  </p>
                </div>
                <div className="space-y-2">
                  {[
                    { day: "Monday – Friday", time: "9:00 AM – 6:00 PM IST" },
                    { day: "Saturday", time: "By appointment" },
                    { day: "Sunday", time: "Closed" },
                  ].map(({ day, time }) => (
                    <div key={day} className="flex justify-between items-center">
                      <span
                        style={{
                          fontFamily: "var(--font-inter)",
                          fontSize: "0.82rem",
                          color: "var(--vcmv-taupe)",
                          fontWeight: 400,
                        }}
                      >
                        {day}
                      </span>
                      <span
                        style={{
                          fontFamily: "var(--font-inter)",
                          fontSize: "0.82rem",
                          color: "var(--vcmv-charcoal)",
                          fontWeight: 400,
                        }}
                      >
                        {time}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* WhatsApp CTA */}
              <a
                href="https://wa.me/919962869428"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-5 transition-all duration-200"
                style={{
                  backgroundColor:
                    "color-mix(in srgb, #25D366 12%, transparent)",
                  border:
                    "1px solid color-mix(in srgb, #25D366 25%, transparent)",
                  textDecoration: "none",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.backgroundColor =
                    "color-mix(in srgb, #25D366 18%, transparent)";
                  (e.currentTarget as HTMLElement).style.borderColor =
                    "color-mix(in srgb, #25D366 45%, transparent)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.backgroundColor =
                    "color-mix(in srgb, #25D366 12%, transparent)";
                  (e.currentTarget as HTMLElement).style.borderColor =
                    "color-mix(in srgb, #25D366 25%, transparent)";
                }}
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5 flex-shrink-0"
                  style={{ color: "#25D366" }}
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                <div>
                  <p
                    style={{
                      fontFamily: "var(--font-inter)",
                      fontSize: "0.82rem",
                      fontWeight: 500,
                      color: "var(--vcmv-charcoal)",
                      lineHeight: 1.3,
                    }}
                  >
                    Chat on WhatsApp
                  </p>
                  <p
                    style={{
                      fontFamily: "var(--font-inter)",
                      fontSize: "0.75rem",
                      fontWeight: 300,
                      color: "var(--vcmv-taupe)",
                    }}
                  >
                    +91 99628 69428
                  </p>
                </div>
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Google Maps embed */}
      <section
        className="relative"
        style={{ backgroundColor: "var(--vcmv-charcoal)" }}
      >
        <div
          className="absolute top-0 left-0 right-0 h-px"
          style={{
            backgroundColor:
              "color-mix(in srgb, var(--vcmv-gold) 20%, transparent)",
          }}
        />
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-12">
          <p
            className="mb-6 text-xs tracking-[0.18em] uppercase"
            style={{
              fontFamily: "var(--font-inter)",
              color: "var(--vcmv-gold)",
              fontWeight: 500,
            }}
          >
            Find Us
          </p>
          <div
            className="relative overflow-hidden"
            style={{ paddingTop: "40%", minHeight: "300px" }}
          >
            <iframe
              title="VCMV & Associates LLP Office Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.5721580068797!2d80.24541731482295!3d13.063965990791063!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5266e4d8f7f7f7%3A0x0!2sNungambakkam%2C%20Chennai%2C%20Tamil%20Nadu%20600034!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              className="absolute inset-0 w-full h-full"
              style={{
                border: "none",
                filter: "grayscale(30%) contrast(1.05)",
              }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <p
            className="mt-4 text-xs"
            style={{
              fontFamily: "var(--font-inter)",
              color:
                "color-mix(in srgb, var(--vcmv-cream) 35%, transparent)",
              fontWeight: 300,
            }}
          >
            Willingdon Crescent, 4th Floor, No. 6/2, Dr. S.S. Badrinath Road,
            Thousand Lights West, Nungambakkam, Chennai, Tamil Nadu – 600 006
          </p>
        </div>
      </section>
    </>
  );
}
