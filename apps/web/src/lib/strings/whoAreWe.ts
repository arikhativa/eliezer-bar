import type { TeamProps } from "@/routes/(public)/whoAreWe/-TeamSection"

export const WHO_ARE_WE_STRINGS = {
  title: "הכירו אותנו",
  subtitle: "אנחנו תושבים מהשכונה שהתחברו יחד כדי להקים מקום מפגש בשבילנו",
  details:
    "התחלקנו לארבע צוותים במטרה להקים קואופרטיב (אגודה שיתופית) בתמיכה של עיריית חיפה",
} as const

export const TEAM_MANAGEMENT: TeamProps = {
  teamName: "וועד מנהל זמני",
  list: [
    {
      isMale: true,
      fullName: "אריאל מניקוב",
    },
    {
      fullName: "יהודית מניקוב",
    },
    {
      isMale: true,
      fullName: "בן",
    },
    {
      isMale: true,
      fullName: "ליאור",
    },
    {
      isMale: true,
      fullName: "איתמר",
    },
    {
      isMale: true,
      fullName: "אלי שולמן",
    },
    {
      fullName: "יואב רבי",
      isMale: true,
      age: 32,
    },
  ],
}

export const TEAM_REAL_ESTATE: TeamProps = {
  teamName: 'צוות נדל"ן',
  list: [
    {
      fullName: "חמוטל",
    },
    {
      fullName: "יעל",
    },
    {
      fullName: "מאיה",
    },
    {
      fullName: "אסתי",
    },
    {
      fullName: "אופיר",
    },
    {
      fullName: "סתיו פרידברג",
      age: 37,
    },
  ],
}

export const TEAM_SOCIAL: TeamProps = {
  teamName: "צוות סושיאל",
  list: [
    {
      isMale: true,
      fullName: "תומר",
    },
    {
      isMale: true,
      fullName: "זיו",
    },
    {
      isMale: true,
      fullName: "שחר",
    },
  ],
}

export const TEAM_BIZ_DEV: TeamProps = {
  teamName: "צוות פיתוח עסקי",
  list: [
    {
      isMale: true,
      fullName: "אייל",
    },
  ],
}

export const SUPPORTS_FROM_CITY: TeamProps = {
  teamName: "עזרה מטעם העירייה",
  list: [
    {
      isMale: true,
      fullName: "עומרי",
    },
    {
      fullName: "טל",
    },
  ],
}
