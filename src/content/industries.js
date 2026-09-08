import {
  FaBuildingColumns, FaShip, FaBolt, FaTruck, FaHouseChimney,
  FaIndustry, FaCartShopping, FaCity, FaShieldHeart, FaStore,
} from 'react-icons/fa6'

// Single source of truth for the 10 industries — same duplication problem
// as services.js: this list previously lived only inside Header.jsx.
const industries = [
  { icon: FaBuildingColumns, label: 'Banking & Finance', slug: 'banking-finance', to: '/industries/banking-finance' },
  { icon: FaShip, label: 'Custom Brokerage', slug: 'customs-brokerage', to: '/industries/customs-brokerage' },
  { icon: FaBolt, label: 'Energy & Utilities', slug: 'energy-utilities', to: '/industries/energy-utilities' },
  { icon: FaTruck, label: 'Logistics', slug: 'logistics', to: '/industries/logistics' },
  { icon: FaHouseChimney, label: 'Mortgage', slug: 'mortgage', to: '/industries/mortgage' },
  { icon: FaIndustry, label: 'Manufacturing', slug: 'manufacturing', to: '/industries/manufacturing' },
  { icon: FaCartShopping, label: 'E-commerce', slug: 'ecommerce', to: '/industries/ecommerce' },
  { icon: FaCity, label: 'Real Estate', slug: 'real-estate', to: '/industries/real-estate' },
  { icon: FaShieldHeart, label: 'Insurance', slug: 'insurance', to: '/industries/insurance' },
  { icon: FaStore, label: 'Retail', slug: 'retail', to: '/industries/retail' },
]

export default industries
