import { validateEmail, validateName } from '@utils/index'

describe('utils', () => {
  describe('validateEmail', () => {
    it('should return true for valid email', () => {
      expect(validateEmail('salvador@srealmoreno.com')).toBe(true)
    })

    it('should return false for invalid email', () => {
      expect(validateEmail('salvador')).toBe(false)
    })

    it('should return false for empty email', () => {
      expect(validateEmail('')).toBe(false)
    })

    it('should return false for partial email on the left', () => {
      expect(validateEmail('salvador@')).toBe(false)
    })

    it('should return false for partial email on the right', () => {
      expect(validateEmail('@srealmoreno.com')).toBe(false)
    })
  })

  describe('validateName', () => {
    it('should return true for valid name', () => {
      expect(validateName('Salvador Real Moreno')).toBe(true)
    })

    it('should return false for invalid name', () => {
      expect(validateName('salvador')).toBe(false)
    })

    it('should return false for empty name', () => {
      expect(validateName('')).toBe(false)
    })

    it('should return true for spanish letters', () => {
      expect(validateName('ÁÉÍÓÚÑ áéíóúñ')).toBe(true)
    })

    it('should return false for special characters', () => {
      expect(validateName('Salvador Real Moreno!')).toBe(false)
    })

    it('should return false for numbers', () => {
      expect(validateName('Salvador Real Moreno 123')).toBe(false)
    })

    it('should return false for special characters and numbers', () => {
      expect(validateName('Salvador Real Moreno! 123')).toBe(false)
    })

    it('should return false for trailing spaces', () => {
      expect(validateName(' Salvador Real Moreno ')).toBe(false)
    })
  })
})
