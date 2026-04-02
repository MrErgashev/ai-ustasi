"use client"

import { useState, useEffect, useCallback } from "react"

export function useLocalStorage<T>(key: string, initialValue: T) {
  const [storedValue, setStoredValue] = useState<T>(initialValue)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    try {
      const item = localStorage.getItem(key)
      if (item) setStoredValue(JSON.parse(item))
    } catch {
      // localStorage unavailable
    }
    setIsLoaded(true)
  }, [key])

  const setValue = useCallback(
    (value: T | ((val: T) => T)) => {
      setStoredValue((prev) => {
        const valueToStore = value instanceof Function ? value(prev) : value
        try {
          localStorage.setItem(key, JSON.stringify(valueToStore))
        } catch {
          // localStorage full
        }
        return valueToStore
      })
    },
    [key]
  )

  return [storedValue, setValue, isLoaded] as const
}
