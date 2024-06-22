"use client";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { useTranslation } from "react-i18next";

import i18nConfig from "/src/i18nConfig";

function LanguageChanger() {
  const { i18n } = useTranslation();
  const currentLocale = i18n.language;
  const router = useRouter();
  const currentPathname = usePathname();

  const handleChange = (e) => {
    const newLocale = e.target.value;

    // set cookie for next-i18n-router
    const days = 30;
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    const expires = date.toUTCString();
    document.cookie = `NEXT_LOCALE=${newLocale};expires=${expires};path=/`;

    // redirect to the new locale path
    if (
      currentLocale === i18nConfig.defaultLocale &&
      !i18nConfig.prefixDefault
    ) {
      router.push("/" + newLocale + currentPathname);
    } else {
      router.push(
        currentPathname.replace(`/${currentLocale}`, `/${newLocale}`)
      );
    }

    router.refresh();
  };

  return (
    <FormControl
      fullWidth
      className="mx-auto max-w-[100px] lg:mx-0 mt-10 lg:mt-0 "
      size="small"
    >
      <InputLabel id="demo-simple-select-label" color="primary">
        lang
      </InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={currentLocale}
        label="lang"
        onChange={handleChange}
      >
        <MenuItem value={"en"}>english</MenuItem>
        <MenuItem value={"ar"}>عربي</MenuItem>
      </Select>
    </FormControl>
  );
}

export default LanguageChanger;
// <select
//   title="name"
//   onChange={handleChange}
//   className=" max-w-[100px] mx-auto"
//   value={currentLocale}
// >
//   <option value="en">english</option>
//   <option value="ar">عربي</option>
// </select>
