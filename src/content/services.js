import {
  FaBrain, FaDatabase, FaTruckFast, FaChartPie, FaScaleBalanced, FaShieldHalved, FaCode,
  FaLeaf, FaRobot, FaFileInvoiceDollar, FaServer, FaHeartPulse, FaUmbrella, FaBoxesPacking,
} from 'react-icons/fa6'

// The single source of truth for the 14 services — Header's mega menu and
// Home's services grid both need this list; before this file existed it was
// duplicated privately inside Header.jsx.
const services = [
  { icon: FaBrain, label: 'Gen AI Services', slug: 'generative-ai', to: '/services/generative-ai' },
  { icon: FaDatabase, label: 'Data Management', slug: 'data-management', to: '/services/data-management' },
  { icon: FaTruckFast, label: 'Logistics', slug: 'logistics', to: '/services/logistics' },
  { icon: FaChartPie, label: 'Data Science & BI', slug: 'data-science-business-intelligence', to: '/services/data-science-business-intelligence' },
  { icon: FaScaleBalanced, label: 'LPO', slug: 'legal-process-outsourcing', to: '/services/legal-process-outsourcing' },
  { icon: FaShieldHalved, label: 'Cybersecurity', slug: 'cybersecurity', to: '/services/cybersecurity' },
  { icon: FaCode, label: 'Software Development', slug: 'software-development', to: '/services/software-development' },
  { icon: FaLeaf, label: 'ESG', slug: 'esg-consulting', to: '/services/esg-consulting' },
  { icon: FaRobot, label: 'Automation', slug: 'business-process-automation', to: '/services/business-process-automation' },
  { icon: FaFileInvoiceDollar, label: 'Finance & Accounting', slug: 'finance-accounting', to: '/services/finance-accounting' },
  { icon: FaServer, label: 'Data Engineering', slug: 'data-engineering', to: '/services/data-engineering' },
  { icon: FaHeartPulse, label: 'Healthcare', slug: 'healthcare', to: '/services/healthcare' },
  { icon: FaUmbrella, label: 'Insurance', slug: 'insurance', to: '/services/insurance' },
  { icon: FaBoxesPacking, label: 'Custom Brokerage', slug: 'customs-brokerage', to: '/services/customs-brokerage' },
]

export default services
