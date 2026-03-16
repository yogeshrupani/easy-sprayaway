export const getEnvVariable = (key: string): string => {
  const value = process.env[key]
  if (!value) {
    // In production, throw an error if the variable is missing
    if (process.env.NODE_ENV === "production") {
      throw new Error(`Environment variable ${key} is not set`)
    }
    // In development, return a placeholder
    console.warn(`Environment variable ${key} is not set`)
    return "[ENV_VARIABLE_NOT_SET]"
  }
  return value
}

// Helper function to check if an environment variable exists
export const hasEnvVariable = (key: string): boolean => {
  return !!process.env[key]
}
