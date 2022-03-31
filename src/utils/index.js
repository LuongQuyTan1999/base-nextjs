import _ from "lodash";

export const removeValueEmpty = (obj) => {
  const result = _.pickBy(obj, function (value, key) {
    return !(
      value === undefined ||
      value === "" ||
      value === null ||
      value === []
    );
  });

  return result;
};
