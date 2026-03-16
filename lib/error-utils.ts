/**
 * Safely access nested properties without throwing errors
 * @param obj The object to access properties from
 * @param path The path to the property, e.g. 'user.profile.name'
 * @param defaultValue The default value to return if the property doesn't exist
 */
export function safelyAccessProperty<T>(obj: any, path: string, defaultValue: T): T {
  try {
    const keys = path.split(".")
    let current = obj

    for (const key of keys) {
      if (current === null || current === undefined) {
        return defaultValue
      }
      current = current[key]
    }

    return current === undefined || current === null ? defaultValue : current
  } catch (error) {
    console.error(`Error accessing property ${path}:`, error)
    return defaultValue
  }
}

/**
 * Safely parse JSON without throwing errors
 * @param jsonString The JSON string to parse
 * @param defaultValue The default value to return if parsing fails
 */
export function safelyParseJSON<T>(jsonString: string, defaultValue: T): T {
  try {
    return JSON.parse(jsonString) as T
  } catch (error) {
    console.error("Error parsing JSON:", error)
    return defaultValue
  }
}

/**
 * Safely execute a function without throwing errors
 * @param fn The function to execute
 * @param defaultValue The default value to return if the function throws an error
 * @param args The arguments to pass to the function
 */
export function safelyExecute<T, Args extends any[]>(fn: (...args: Args) => T, defaultValue: T, ...args: Args): T {
  try {
    return fn(...args)
  } catch (error) {
    console.error("Error executing function:", error)
    return defaultValue
  }
}
