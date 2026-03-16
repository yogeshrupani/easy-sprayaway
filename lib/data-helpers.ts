import { companyInfo } from "@/data/company-info"
import { servicesData } from "@/data/services-data"

// Helper functions to ensure data consistency across the site

export function getCompanyAge() {
  const currentYear = new Date().getFullYear()
  return currentYear - companyInfo.foundedYear
}

export function formatPhoneNumber(phone: string) {
  // Ensure consistent phone number formatting
  return phone
}

export function getServiceData(serviceId: string) {
  const service = servicesData.find((s) => s.id === serviceId)
  if (!service) {
    throw new Error(`Service with ID ${serviceId} not found`)
  }
  return service
}

export function getCompanyStat(statName: keyof typeof companyInfo.stats) {
  return companyInfo.stats[statName]
}

export function getFormattedAddress(includeCountry = true) {
  const { street, city, postcode, country } = companyInfo.address
  return `${street}, ${city}, ${postcode}${includeCountry ? `, ${country}` : ""}`
}

export function getCompanyFoundedText() {
  return `Since ${companyInfo.foundedYear}`
}
