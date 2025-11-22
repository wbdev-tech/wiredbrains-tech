import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { ArrowRight, Mail, Phone, Building, Loader2 } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import SectionAnimator from '@/components/SectionAnimator';

const pageVariants = {
  initial: { opacity: 0 },
  in: { opacity: 1 },
  out: { opacity: 0 },
};

const pageTransition = {
  type: 'tween',
  ease: 'anticipate',
  duration: 0.8,
};

// EmailJS credentials
const EMAILJS_SERVICE_ID = 'service_d773i0s';
const EMAILJS_TEMPLATE_ID = 'template_7rr2q4i';
const EMAILJS_PUBLIC_KEY = 'XjsQFnsPldjitlLOU';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    let tempErrors = {};
    if (!formData.name) tempErrors.name = 'Name is required.';
    if (!formData.email) {
      tempErrors.email = 'Email is required.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = 'Email is not valid.';
    }
    if (!formData.message) tempErrors.message = 'Message is required.';
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) {
      return;
    }

    setIsSubmitting(true);
    
    // Ensure template parameter keys match your EmailJS template
    const templateParams = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone || 'Not Provided',
        company: formData.company || 'Not Provided',
        message: formData.message,
        to_email: 'nippundhiman@gmail.com',
        to_name: 'Wired Brains Team',
    };

    try {
      await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams, EMAILJS_PUBLIC_KEY);

      toast({
        title: 'Message Sent!',
        description: "Thanks for reaching out. We'll get back to you shortly.",
        variant: 'default',
      });

      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: '',
      });
      setErrors({});

    } catch (error) {
      console.error('Error sending email with EmailJS:', error);
      toast({
        title: 'Submission Failed',
        description: 'There was a problem sending your message. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      className="bg-[#0C0D0D] text-white"
    >
      <Helmet>
        <title>Contact Us - WIRED BRAINS</title>
        <meta
          name="description"
          content="Get in touch with WIRED BRAINS. Let's discuss your next project and how we can help you achieve your goals with our expert IT solutions."
        />
      </Helmet>
      
      <main className="container mx-auto px-6 py-24 sm:py-32">
        <SectionAnimator>
          <header className="text-center max-w-4xl mx-auto mb-20">
            <h1 className="text-4xl md:text-6xl font-bold uppercase mb-4">
              Get in Touch
            </h1>
            <p className="text-lg md:text-xl text-gray-400">
              We're here to answer your questions and help you get started. Fill out the form below, and we'll be in touch shortly.
            </p>
          </header>
        </SectionAnimator>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <SectionAnimator>
            <div className="flex flex-col gap-8 lg:pt-10">
              <h2 className="text-3xl font-bold text-white">Let's build the future together.</h2>
              <p className="text-gray-400 text-lg">
                Whether you have a question about our services, need a consultation, or want to discuss a potential project, our team is ready to assist you.
              </p>
              <div className="space-y-6">
                <a href="mailto:contact@wiredbrains.io" className="flex items-center gap-4 group text-lg">
                  <Mail className="h-6 w-6 text-[#F54B15]" />
                  <span className="text-gray-300 group-hover:text-white transition-colors">contact@wiredbrains.io</span>
                </a>
                <a href="tel:+1234567890" className="flex items-center gap-4 group text-lg">
                  <Phone className="h-6 w-6 text-[#F54B15]" />
                  <span className="text-gray-300 group-hover:text-white transition-colors">+1 (234) 567-890</span>
                </a>
                <div className="flex items-center gap-4 text-lg">
                  <Building className="h-6 w-6 text-[#F54B15]" />
                  <span className="text-gray-300">123 Innovation Drive, Tech City, USA</span>
                </div>
              </div>
            </div>
          </SectionAnimator>
          
          <SectionAnimator>
            <form onSubmit={handleSubmit} className="space-y-6 p-8 md:p-10 bg-[#121313] border border-white/10 rounded-2xl shadow-2xl shadow-[#F54B15]/5">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Name</label>
                  <Input id="name" name="name" type="text" placeholder="John Doe" onChange={handleChange} value={formData.name} className={errors.name ? 'border-red-500' : ''} disabled={isSubmitting} />
                  {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                  <Input id="email" name="email" type="email" placeholder="john.doe@example.com" onChange={handleChange} value={formData.email} className={errors.email ? 'border-red-500' : ''} disabled={isSubmitting} />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-400 mb-2">Phone (Optional)</label>
                  <Input id="phone" name="phone" type="tel" placeholder="+1 (234) 567-890" onChange={handleChange} value={formData.phone} disabled={isSubmitting} />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-400 mb-2">Company (Optional)</label>
                  <Input id="company" name="company" type="text" placeholder="Your Company" onChange={handleChange} value={formData.company} disabled={isSubmitting} />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                <Textarea id="message" name="message" placeholder="How can we help you?" rows={5} onChange={handleChange} value={formData.message} className={errors.message ? 'border-red-500' : ''} disabled={isSubmitting} />
                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
              </div>
              <div>
                <Button type="submit" size="lg" className="w-full bg-[#F54B15] text-white hover:bg-[#D63F11] group rounded-full text-lg py-7 px-10 mt-4" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  ) : (
                    'Send Message'
                  )}
                  {!isSubmitting && <ArrowRight className="ml-2 h-5 w-5 transform transition-transform duration-300 group-hover:translate-x-1" />}
                </Button>
              </div>
            </form>
          </SectionAnimator>
        </div>
      </main>
    </motion.div>
  );
};

export default Contact;