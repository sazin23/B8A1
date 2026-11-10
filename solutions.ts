const multiplyValue = (value: number, multiplier?: number): number => {
  if (multiplier !== undefined) {
    return value * multiplier
  } else {
    return value * 2
  }
}

const processInput = (value: string | number | boolean): string | number => {
  if (typeof value === 'string') {
    return value.trim().toLowerCase()
  } else if (typeof value === 'number') {
    return value * 10
  } else {
    if (value) {
      return 'Active'
    } else {
      return 'Inactive'
    }
  }
}

const formatCoordinate = (
  tuple: readonly [latitude: number, longitude: number, locationName: string]
): string => {
  return `Location: ${tuple[2]} (${tuple[0]}, ${tuple[1]})`
}

const concatenateArrays = <T>(...arrays: T[][]): T[] => {
  return [...arrays].flat()
}

interface Course {
  title: string
  students: number
  isPublished: boolean
}

const getPopularCourses = (
  courses: Course[],
  minStudents: number
): Course[] => {
  return courses.filter(
    (course) => course.isPublished === true && course.students >= minStudents
  )
}

const pluckValues = <T, K extends keyof T>(items: T[], key: K): T[K][] => {
  return items.map((item) => item[key])
}

class Employee {
  protected name: string
  private baseSalary: number

  constructor(name: string, baseSalary: number) {
    this.name = name
    this.baseSalary = baseSalary
  }

  getDetails(): string {
    return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`
  }
}

class Manager extends Employee {
  private department: string

  constructor(name: string, baseSalary: number, department: string) {
    super(name, baseSalary)
    this.department = department
  }

  getRoleInfo(): string {
    return `Manager of ${this.department}: ${this.name}`
  }
}

const validateAgeAsync = (age: number): Promise<string> => {
  return new Promise<string>((res, rej) => {
    if (age >= 18) {
      setTimeout(() => res('Access Granted'), 1000)
    } else {
      rej(new Error('Access Denied: Must be 18 or older'))
    }
  })
}
