import type { TeamProps } from "@/routes/(public)/whoAreWe/-TeamSection";

export const WHO_ARE_WE_STRINGS = {
  title: "הכירו אותנו",
  subtitle: "אנחנו תושבים מהשכונה שהתחברו יחד כדי להקים מקום מפגש בשבילנו",
  details:
    "התחלקנו לארבע צוותים במטרה להקים קואופרטיב (אגודה שיתופית) בתמיכה של עיריית חיפה",
} as const;

export const TEAM_MANAGEMENT: TeamProps = {
  teamName: "וועד מנהל זמני",
  list: [
    {
      fullName: "אריאל מניקוב",
    },
    {
      fullName: "יהודית מניקוב",
    },
    {
      fullName: "בן",
    },
    {
      fullName: "ליאור",
    },
    {
      fullName: "איתמר",
    },
    {
      fullName: "אלי שולמן",
    },
    {
      fullName: "יואב רבי",
      age: 32,
    },
  ],
};

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
};

export const TEAM_SOCIAL: TeamProps = {
  teamName: "צוות סושיאל",
  list: [
    {
      fullName: "תומר",
    },
    {
      fullName: "זיו",
    },
    {
      fullName: "שחר",
    },
  ],
};

export const TEAM_BIZ_DEV: TeamProps = {
  teamName: "צוות פיתוח עסקי",
  list: [
    {
      fullName: "אייל",
    },
  ],
};
