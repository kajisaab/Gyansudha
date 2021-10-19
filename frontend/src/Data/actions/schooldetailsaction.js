// update school details;
export const updateSchoolName = (details) => {
  return {
    type: "UPDATE_SCHOOLNAME",
    payload: details,
  };
};

export const updateAdminWords = (description) => {
  return {
    type: "UPDATE_DESCRIPTION",
    payload: description,
  };
};
