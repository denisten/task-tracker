class LocalStorage {
  private data: Record<string, string> = {}

  private localStorageAvailable = true

  constructor() {
    try {
      window.localStorage.setItem('testKey', '1')
      window.localStorage.removeItem('testKey')
    } catch (e) {
      this.localStorageAvailable = false
    }
  }

  setItem(key: string, value: string): void {
    if (this.localStorageAvailable) {
      try {
        window.localStorage.setItem(key, value)
      } catch (e) {}
    } else {
      this.data[key] = String(value)
    }
  }

  getItem(key: string): string | null | undefined {
    if (this.localStorageAvailable) {
      try {
        return window.localStorage.getItem(key)
      } catch (e) {
        return undefined
      }
    } else {
      return this.data[key]
    }
  }

  removeItem(key: string): void {
    if (this.localStorageAvailable) {
      try {
        window.localStorage.removeItem(key)
      } catch (e) {}
    } else {
      delete this.data[key]
    }
  }

  clear(): void {
    if (this.localStorageAvailable) {
      try {
        window.localStorage.clear()
      } catch (e) {}
    } else {
      this.data = {}
    }
  }
}

export const localStorage = new LocalStorage()
