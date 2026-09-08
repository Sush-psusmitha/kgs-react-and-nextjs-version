import bankingFinance from './banking-finance'
import mortgage from './mortgage'
import energyUtilities from './energy-utilities'
import ecommerce from './ecommerce'
import insurance from './insurance'

// Slug → detail data lookup
const industryDetails = {
  [bankingFinance.slug]: bankingFinance,
  [mortgage.slug]: mortgage,
  [energyUtilities.slug]: energyUtilities,
  [ecommerce.slug]: ecommerce,
  [insurance.slug]: insurance,
}

export default industryDetails
