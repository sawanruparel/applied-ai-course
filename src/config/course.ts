export const COURSE = {
  title: "Applied AI Course",
  institution: "UConn",
  term: "Spring 2026",
} as const;

export const COURSE_EYEBROW = `${COURSE.title} • ${COURSE.term} • ${COURSE.institution}`;
