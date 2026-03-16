interface ErrorDetails {
  error: Error
  componentName?: string
  additionalInfo?: Record<string, any>
  userId?: string
}

/**
 * Logs an error to the console and could send it to an error tracking service
 */
export function trackError({ error, componentName, additionalInfo, userId }: ErrorDetails): void {
  // Log to console in all environments
  console.error(`Error in ${componentName || "unknown component"}:`, error)

  // In a production environment, you would send this to your error tracking service
  if (process.env.NODE_ENV === "production") {
    // Example of how you might send to an error tracking service:
    // sendToErrorTrackingService({
    //   error,
    //   componentName,
    //   additionalInfo,
    //   userId,
    //   url: typeof window !== 'undefined' ? window.location.href : '',
    //   timestamp: new Date().toISOString()
    // });
  }
}

/**
 * Creates a wrapped version of a function that catches and tracks errors
 */
export function withErrorTracking<T extends (...args: any[]) => any>(
  fn: T,
  componentName?: string,
): (...args: Parameters<T>) => ReturnType<T> {
  return (...args: Parameters<T>): ReturnType<T> => {
    try {
      return fn(...args)
    } catch (error) {
      trackError({
        error: error instanceof Error ? error : new Error(String(error)),
        componentName,
        additionalInfo: { args },
      })
      throw error // Re-throw the error after tracking
    }
  }
}

/**
 * Wraps an async function to catch, track, and handle errors
 */
export async function tryCatchAsync<T>(fn: () => Promise<T>, componentName?: string, fallbackValue?: T): Promise<T> {
  try {
    return await fn()
  } catch (error) {
    trackError({
      error: error instanceof Error ? error : new Error(String(error)),
      componentName,
    })

    if (fallbackValue !== undefined) {
      return fallbackValue
    }
    throw error // Re-throw if no fallback provided
  }
}
