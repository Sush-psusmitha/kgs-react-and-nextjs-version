import businessProcessAutomation from './business-process-automation'
import customsBrokerage from './customs-brokerage'
import generativeAi from './generative-ai'
import dataManagement from './data-management'
import logistics from './logistics'

// Slug → detail data lookup
const serviceDetails = {
  [businessProcessAutomation.slug]: businessProcessAutomation,
  [customsBrokerage.slug]: customsBrokerage,
  [generativeAi.slug]: generativeAi,
  [dataManagement.slug]: dataManagement,
  [logistics.slug]: logistics,
}

export default serviceDetails

