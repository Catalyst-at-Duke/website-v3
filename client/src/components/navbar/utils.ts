import { colors } from "styles/theme";

/**
 * @todo: maybe rewrite using redux to not hardcode retrieve routes
 * @param url
 */
export const getColor = (url: string) => {
  switch (url) {
    case "/faq":
      return colors.yellow;
    case "/recruitment":
      return colors.pink;
    case "/members":
      return colors.purple;
    default:
      return colors.black;
  }
};
