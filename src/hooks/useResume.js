import { useState } from "react";
import { EXAMPLE_RESUME } from "../utils";

export function useResume() {
  const [resume, setResume] = useState(EXAMPLE_RESUME);

  const handlers = {
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
            return { ...s, name: editedSkill };
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

      delete: (id) => {
        const filteredEducation = resume.education.filter((e) => e.id !== id);
        setResume({ ...resume, education: filteredEducation });
      },
    },
  };

  return [resume, handlers];
}
