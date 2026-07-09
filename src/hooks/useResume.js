import { useState } from "react";
import { EMPTY_RESUME, EXAMPLE_RESUME } from "../utils";

export function useResume() {
  const [resume, setResume] = useState(EXAMPLE_RESUME);

  const handlers = {
    resetResume: () => {
      setResume(EMPTY_RESUME);
    },

    useResumeTemplate: () => {
      setResume(EXAMPLE_RESUME);
    },

    personalInfo: (e) => {
      setResume({
        ...resume,
        personalInformation: {
          ...resume.personalInformation,
          [e.target.name]: e.target.value,
        },
      });
    },

    contact: (e) => {
      setResume({
        ...resume,
        contact: {
          ...resume.contact,
          [e.target.name]: e.target.value,
        },
      });
    },

    professionalSummary: (e) => {
      setResume({
        ...resume,
        professionalSummary: e.target.value,
      });
    },

    skill: {
      add: (newSkill) => {
        setResume({ ...resume, skill: [...resume.skill, newSkill] });
      },

      edit: (id, editedSkill) => {
        const updatedSkill = resume.skill.map((s) => {
          if (s.id === id) {
            return editedSkill;
          }
          return s;
        });

        setResume({
          ...resume,
          skill: updatedSkill,
        });
      },

      delete: (id) => {
        const filteredSkill = resume.skill.filter((s) => s.id !== id);
        setResume({
          ...resume,
          skill: filteredSkill,
        });
      },
    },

    education: {
      add: (newEducation) => {
        setResume({
          ...resume,
          education: [...resume.education, newEducation],
        });
      },

      edit: (id, editedEducation) => {
        const updatedEducation = resume.education.map((ed) => {
          if (ed.id === id) {
            return editedEducation;
          }
          return ed;
        });

        setResume({ ...resume, education: updatedEducation });
      },

      delete: (id) => {
        const filteredEducation = resume.education.filter((e) => e.id !== id);
        setResume({ ...resume, education: filteredEducation });
      },
    },

    employment: {
      add: (newEmployment) => {
        setResume({
          ...resume,
          employment: [...resume.employment, newEmployment],
        });
      },

      edit: (id, editedEmployment) => {
        const updatedEmployment = resume.employment.map((ed) => {
          if (ed.id === id) {
            return editedEmployment;
          }
          return ed;
        });

        setResume({ ...resume, employment: updatedEmployment });
      },

      delete: (id) => {
        const filteredEmployment = resume.employment.filter((e) => e.id !== id);
        setResume({ ...resume, employment: filteredEmployment });
      },
    },
  };

  return { resume, handlers };
}
