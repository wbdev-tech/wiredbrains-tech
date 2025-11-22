import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import Stats from '@/components/Stats';
import SectionAnimator from '@/components/SectionAnimator';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

// Mock data for projects
const projectData = {
  'enterprise-network-security': {
    title: 'Enterprise Network Security',
    category: 'Cybersecurity Implementation',
    description: 'A comprehensive cybersecurity infrastructure implementation for a Fortune 500 company, featuring multi-layered threat protection, advanced monitoring systems, and zero-trust architecture.',
    challenge: 'The organization faced increasing sophisticated cyber threats while managing legacy systems across multiple global locations. They needed enterprise-grade security without disrupting daily operations or requiring complete infrastructure overhaul. Compliance with multiple regulatory frameworks (GDPR, HIPAA, SOC 2) added complexity.',
    solution: 'We implemented a zero-trust security architecture with next-generation firewalls, intrusion detection systems, and 24/7 security operations center (SOC) monitoring. Advanced threat intelligence feeds were integrated with automated response protocols. Employee security training programs reduced phishing susceptibility by 85%, while endpoint detection and response (EDR) solutions protected all devices.',
    images: {
      hero: {
        alt: 'Network security operations center with multiple monitoring screens',
        key: 'security operations center monitoring'
      },
      gallery: [{
        alt: 'Cybersecurity dashboard showing real-time threat detection',
        key: 'threat detection dashboard'
      }, {
        alt: 'Network infrastructure with security protocols',
        key: 'secure network infrastructure'
      }, {
        alt: 'Security analyst monitoring threat intelligence feeds',
        key: 'security analyst monitoring systems'
      }],
      gallery2: [{
        alt: 'Firewall configuration and network segmentation',
        key: 'firewall configuration setup'
      }, {
        alt: 'Security compliance reporting dashboard',
        key: 'compliance reporting dashboard'
      }]
    },
    stats: [{
      value: 95,
      suffix: '%',
      label: 'Threat Reduction',
      description: 'Decrease in successful security incidents.'
    }, {
      value: 24,
      suffix: '/7',
      label: 'SOC Monitoring',
      description: 'Round-the-clock security operations coverage.'
    }, {
      value: 99.99,
      suffix: '%',
      label: 'System Uptime',
      description: 'Maintained during security implementation.'
    }, {
      value: 100,
      suffix: '%',
      label: 'Compliance',
      description: 'Full regulatory compliance achieved.'
    }]
  },
  'cloud-migration-project': {
    title: 'Cloud Migration & Optimization',
    category: 'Cloud Infrastructure',
    description: 'Complete Microsoft 365 migration and cloud infrastructure setup for a healthcare provider, enabling remote collaboration while maintaining HIPAA compliance and enhancing data security.',
    challenge: 'The healthcare provider operated on outdated on-premise servers with limited remote access capabilities. Staff productivity suffered during the pandemic, and data backup processes were unreliable. They needed seamless cloud migration without compromising patient data security or violating HIPAA regulations.',
    solution: 'We architected a phased Microsoft 365 migration strategy, starting with non-critical departments to minimize risk. Azure Active Directory was configured with conditional access policies and multi-factor authentication. SharePoint and Teams were deployed with encrypted collaboration spaces. Automated backup solutions and disaster recovery protocols ensured zero data loss during the transition.',
    images: {
      hero: {
        alt: 'Cloud infrastructure deployment with server racks',
        key: 'cloud infrastructure setup'
      },
      gallery: [{
        alt: 'Microsoft 365 dashboard for healthcare operations',
        key: 'microsoft 365 healthcare dashboard'
      }, {
        alt: 'Cloud migration progress monitoring interface',
        key: 'cloud migration monitoring'
      }, {
        alt: 'Azure Active Directory configuration screen',
        key: 'azure active directory setup'
      }],
      gallery2: [{
        alt: 'Teams collaboration platform for healthcare staff',
        key: 'teams healthcare collaboration'
      }, {
        alt: 'Cloud backup and disaster recovery console',
        key: 'cloud backup console'
      }]
    },
    stats: [{
      value: 40,
      suffix: '%',
      label: 'Productivity Increase',
      description: 'Enhanced collaboration and remote access.'
    }, {
      value: 100,
      suffix: '%',
      label: 'HIPAA Compliant',
      description: 'Full regulatory compliance maintained.'
    }, {
      value: 60,
      suffix: '%',
      label: 'Cost Reduction',
      description: 'Savings on infrastructure and maintenance.'
    }, {
      value: 0,
      suffix: '',
      label: 'Data Loss',
      description: 'Zero data loss during entire migration.'
    }]
  },
  'managed-it-services': {
    title: 'Managed IT Infrastructure',
    category: 'Managed IT Services',
    description: 'Full-scale managed IT services deployment with 24/7 monitoring and support for a growing manufacturing company, eliminating downtime and optimizing system performance across all facilities.',
    challenge: 'The manufacturing company experienced frequent system outages causing production delays and revenue loss. Their small internal IT team was overwhelmed with reactive troubleshooting rather than strategic initiatives. Inconsistent network performance across multiple facilities created operational inefficiencies.',
    solution: 'We deployed comprehensive managed IT services including proactive monitoring, preventive maintenance, and helpdesk support. Remote monitoring and management (RMM) tools were implemented across all endpoints. Network infrastructure was upgraded with redundant systems and failover capabilities. Regular vulnerability assessments and patch management eliminated security gaps while automated backup solutions protected critical data.',
    images: {
      hero: {
        alt: 'IT technician maintaining server infrastructure',
        key: 'server infrastructure maintenance'
      },
      gallery: [{
        alt: 'Network monitoring dashboard showing system health',
        key: 'network monitoring dashboard'
      }, {
        alt: 'IT support team responding to helpdesk tickets',
        key: 'it support helpdesk'
      }, {
        alt: 'Server room with organized cable management',
        key: 'organized server room'
      }],
      gallery2: [{
        alt: 'Remote monitoring and management console',
        key: 'rmm console interface'
      }, {
        alt: 'IT infrastructure health report and analytics',
        key: 'infrastructure health analytics'
      }]
    },
    stats: [{
      value: 99.9,
      suffix: '%',
      label: 'Uptime Achieved',
      description: 'Virtually eliminated unplanned downtime.'
    }, {
      value: 85,
      suffix: '%',
      label: 'Faster Resolution',
      description: 'Reduced mean time to resolution for issues.'
    }, {
      value: 24,
      suffix: '/7',
      label: 'Support Coverage',
      description: 'Continuous monitoring and helpdesk access.'
    }, {
      value: 50,
      suffix: '%',
      label: 'Cost Savings',
      description: 'Reduced IT operational expenses.'
    }]
  }
};

const pageVariants = {
  initial: {
    opacity: 0
  },
  in: {
    opacity: 1
  },
  out: {
    opacity: 0
  }
};

const pageTransition = {
  type: 'tween',
  ease: 'anticipate',
  duration: 0.8
};

const Project = () => {
  const { projectId } = useParams();
  const project = projectData[projectId] || projectData['enterprise-network-security']; // Fallback

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [projectId]);

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
        <title>{project.title} - Project Showcase</title>
        <meta name="description" content={`Details of the ${project.title} project, showcasing our IT solutions and measurable results.`} />
      </Helmet>

      <main>
        {/* Top Section */}
        <SectionAnimator>
          <header className="pt-48 pb-16">
            <div className="container mx-auto px-6 text-center max-w-4xl">
              <h1 className="text-4xl md:text-6xl font-bold uppercase mb-4">{project.title}</h1>
              <p className="text-lg md:text-xl text-gray-400">{project.description}</p>
            </div>
          </header>
        </SectionAnimator>
        
        {/* Hero Image */}
        <SectionAnimator>
          <div className="container mx-auto px-6 mb-16">
            <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl shadow-[#F54B15]/10">
              <img
                className="w-full h-full object-cover"
                alt={project.images.hero.alt}
                src="https://horizons-cdn.hostinger.com/07ae0fba-7b7b-4b1c-bf83-430a8305a2b2/gemini_generated_image_n6u5epn6u5epn6u5-5ABrF.png"
              />
            </div>
          </div>
        </SectionAnimator>

        {/* Gallery - now starts with two images */}
        <SectionAnimator>
          <div className="container mx-auto px-6 mb-16">
            <div className="grid grid-cols-1 gap-8">
              {/* Two images */}
              <div className="grid md:grid-cols-2 gap-8">
                <div className="aspect-square rounded-2xl overflow-hidden">
                  <img
                    className="w-full h-full object-cover"
                    alt={project.images.gallery[1].alt}
                    src="https://horizons-cdn.hostinger.com/07ae0fba-7b7b-4b1c-bf83-430a8305a2b2/gemini_generated_image_mxgp1bmxgp1bmxgp-IDwMQ.png"
                  />
                </div>
                <div className="aspect-square rounded-2xl overflow-hidden">
                  <img
                    className="w-full h-full object-cover"
                    alt={project.images.gallery[2].alt}
                    src="https://horizons-cdn.hostinger.com/07ae0fba-7b7b-4b1c-bf83-430a8305a2b2/gemini_generated_image_mxgp1bmxgp1bmxgp-1-RqwfI.png"
                  />
                </div>
              </div>
            </div>
          </div>
        </SectionAnimator>
        
        {/* Text Section */}
        <SectionAnimator>
          <section className="py-16">
            <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-start">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">The Challenge</h2>
                <p className="text-lg text-gray-400">{project.challenge}</p>
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">The Solution</h2>
                <p className="text-lg text-gray-400">{project.solution}</p>
              </div>
            </div>
          </section>
        </SectionAnimator>
        
        {/* Second Gallery - changed to single image */}
        <SectionAnimator>
          <div className="container mx-auto px-6 mb-16">
            <div className="aspect-video rounded-2xl overflow-hidden">
              <img
                className="w-full h-full object-cover"
                alt={project.images.gallery2[0].alt}
                src="https://horizons-cdn.hostinger.com/07ae0fba-7b7b-4b1c-bf83-430a8305a2b2/professional-exchange-BmQpX.png"
              />
            </div>
          </div>
        </SectionAnimator>

        {/* Stats Section */}
        <Stats customStats={project.stats} />

        {/* Work Together CTA */}
        <SectionAnimator>
          <section className="py-24 text-center">
            <div className="container mx-auto px-6">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Secure Your Infrastructure?</h2>
              <p className="text-lg text-gray-400 mb-8">Let's discuss your IT challenges and how we can deliver comprehensive solutions.</p>
              <Button asChild size="lg" className="bg-[#F54B15] text-white hover:bg-[#D63F11] group rounded-full text-lg py-7 px-10">
                <Link to="/contact">
                  Get Started <ArrowRight className="ml-2 h-5 w-5 transform transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </section>
        </SectionAnimator>
      </main>
    </motion.div>
  );
};

export default Project;